import React, { useState, Component } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GQLSIMILARTAGS } from "./graphclient";

const Greeting = () => <h1>Secstat</h1>;

/* ##### Single tag ##### */

const Tag = ({ id, info, handleFavourite }) => (
  <li className={info.count} onClick={() => handleFavourite(id)}>
    {info.label} ({info.tag_related_counts_aggregate.aggregate.count})
  </li>
);

/*map results and slice only 5 items*/

const SimilarTags = ({ data, tag }) => (
  <div>
    <b>Tags related to {data[0].tag_related_counts[0].search_label}</b>
    <ul>
      {data[0].tag_related_counts.slice(0, 5).map(function (d) {
        return <li key={d.other_label}>{d.other_label}</li>;
      })}
    </ul>
    <hr />
  </div>
);

/* ##### Shortlist ##### */

const ShortList = ({ favourites, data, addstrFavourite }) => {
  const hasFavourites = favourites.length > 0;
  const favList = favourites.map((fav, i) => {
    return (
      <Tag
        id={i}
        key={i}
        info={data.find((tag) => tag.id === fav)}
        handleFavourite={(id) =>
          addstrFavourite(data.find((tag) => tag.id === fav))
        }
      />
    );
  });
  return (
    <div className="favourites">
      <h4>
        {hasFavourites
          ? "Shortlist. Click to find similar tags.."
          : "Click on a tag to shortlist it.."}
      </h4>
      <ul>{favList}</ul>
      {hasFavourites && <hr />}
    </div>
  );
};

/* ##### Tag list ##### */

const TagsList = ({ data, filter, favourites, addFavourite }) => {
  const input = filter;
  // Gather list of tags
  const tags = data
    // filtering out the tags that...
    .filter((tag, i) => {
      return (
        // ...are already favourited
        favourites.indexOf(tag.id) === -1 &&
        // ...are not matching the current search value
        !tag.label.indexOf(input)
      );
    })
    // ...output a <Name /> component for each name

    .map((tag, i) => {
      return (
        <Tag
          id={tag.id}
          key={i}
          info={tag}
          handleFavourite={(id) => addFavourite(id)}
        />
      );
    });

  /* ##### the component's output ##### */
  return <ul>{tags}</ul>;
};

/* ###################### */
/* ##### Search bar ##### */
/* ###################### */

// need a component class here
// since we are using `refs`
class Search extends Component {
  render() {
    const { filterVal, filterUpdate } = this.props;
    return (
      <form>
        <input
          type="text"
          ref="filterInput"
          placeholder="Type to filter.."
          // binding the input value to state
          value={filterVal}
          onChange={() => {
            filterUpdate(this.refs.filterInput.value);
          }}
        />
      </form>
    );
  }
}

/* ##### Main app component ##### */

function WrappedApp(props) {
  const [filterText, setfilterText] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [strfavourites, setstrFavourites] = useState([]);

  // update filterText in state when user types
  const filterUpdate = (value) => {
    setfilterText(value);
  };

  function GQLFuncSecond(props) {
    const { loading, error, data } = useQuery(GQLSIMILARTAGS, {
      variables: { search_label: props.searchLabel },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    if (data) return <SimilarTags data={data.tag} />;
  }

  // add clicked name ID to the favourites array
  const addFavourite = (id) => {
    const newSet = favourites.concat([id]);
    setFavourites(newSet);
  };

  // add clicked name  to the favourites array
  const addstrFavourite = (id) => {
    const newSet = strfavourites.concat([id]);

    setstrFavourites(newSet);
  };

  // remove ID from the favourites array
  const deleteFavourite = (id) => {
    const newList = [...favourites.slice(0, id), ...favourites.slice(id + 1)];
    setFavourites(newList);
  };

  const hasstrFavourites = strfavourites.length > 0;
  const hasSearch = filterText.length > 0;

  return (
    <div>
      <main>
        <Greeting />
        <Search filterVal={filterText} filterUpdate={filterUpdate} />
        {hasstrFavourites &&
          strfavourites.map(function (d) {
            return <GQLFuncSecond key={d.label} searchLabel={d.label} />;
          })}
        <ShortList
          data={props.data}
          favourites={favourites}
          addstrFavourite={addstrFavourite}
        />

        <TagsList
          data={props.data}
          favourites={favourites}
          filter={filterText}
          addFavourite={addFavourite}
        />

        {/* 		
            Show only if user has typed in search.		
            To reset the input field, we pass an 		
            empty value to the filterUpdate method		
          */}
        {hasSearch && (
          <button onClick={() => filterUpdate("")}> Clear Search</button>
        )}
      </main>
    </div>
  );
}

export default WrappedApp;

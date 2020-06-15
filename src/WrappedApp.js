import React, { useState, Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GQLSIMILARTAGS } from "./graphclient";

/* ##### Single tag ##### */

const Tag = ({ id, info, handleFavourite }) => (
  <li className={info.count} onClick={() => handleFavourite(id)}>
    {info.label} ({info.tag_related_counts_aggregate.aggregate.count})
  </li>
);

const SimilarTag = ({ id, info, addstrFavourite }) => (
  <div>{console.log(info.label)}</div>
);

/*map results and slice only 5 items*/

const SimpleData = ({ data, tag }) => (
  <div>
    {console.log(
      "Tags related to " + data[0].tag_related_counts[0].search_label
    )}
    {data[0].tag_related_counts.slice(0, 5).map(function (d) {
      return console.log(d.other_label);
    })}
    } )
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
          ? "Shortlist. Click to remove.."
          : "Click on a tag to shortlist it.."}
      </h4>
      <ul>{favList}</ul>
      {hasFavourites && <hr />}
    </div>
  );
};

/* ##### Tag list ##### */

const TagsList = ({ data, addFavourite }) => {
  // Gather list of tags
  const tags = data
    // filtering out the tags that...

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

/* ##### Main app component ##### */

function WrappedApp(props) {
  const [favourites, setFavourites] = useState([]);
  const [strfavourites, setstrFavourites] = useState([]);

  function GQLFuncSecond(props) {
    const { loading, error, data } = useQuery(GQLSIMILARTAGS, {
      variables: { search_label: props.searchLabel },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    if (data) return <SimpleData data={data.tag} />;
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

  return (
    <div>
      <main>
        <ShortList
          data={props.data}
          favourites={favourites}
          addstrFavourite={addstrFavourite}
        />

        <TagsList
          data={props.data}
          favourites={favourites}
          addFavourite={addFavourite}
        />

        {hasstrFavourites &&
          strfavourites.map(function (d) {
            return <GQLFuncSecond key={d.label} searchLabel={d.label} />;
          })}
      </main>
    </div>
  );
}

export default WrappedApp;

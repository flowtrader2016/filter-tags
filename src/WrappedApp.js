import React, { useState, Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GQLSIMILARTAGS } from "./graphclient";

/* ##### Single tag ##### */

const Tag = ({ id, info, handleFavourite }) => (
  <li className={info.count} onClick={() => handleFavourite(id)}>
    {info.label} ({info.tag_related_counts_aggregate.aggregate.count})
  </li>
);

const SimilarTag = ({ id, info }) => <div>{console.log(info.label)}</div>;

const SimpleData = ({ data, tag }) => <div>{console.log(data)}</div>;

/* ##### Shortlist ##### */

const ShortList = ({ favourites, data, deleteFavourite }) => {
  const hasFavourites = favourites.length > 0;
  const favList = favourites.map((fav, i) => {
    return (
      <Fragment>
        <Tag
          id={i}
          key={i}
          info={data.find((tag) => tag.id === fav)}
          handleFavourite={(id) => deleteFavourite(id)}
        />
        <SimilarTag id={i} key={i} info={data.find((tag) => tag.id === fav)} />
      </Fragment>
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

  function GQLFuncSecond() {
    const { loading, error, data } = useQuery(GQLSIMILARTAGS, {
      variables: { search_label: "security" },
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

  // remove ID from the favourites array
  const deleteFavourite = (id) => {
    const newList = [...favourites.slice(0, id), ...favourites.slice(id + 1)];
    setFavourites(newList);
  };

  return (
    <div>
      <main>
        <ShortList
          data={props.data}
          favourites={favourites}
          deleteFavourite={deleteFavourite}
        />

        <TagsList
          data={props.data}
          favourites={favourites}
          addFavourite={addFavourite}
        />

        <GQLFuncSecond />
      </main>
    </div>
  );
}

export default WrappedApp;

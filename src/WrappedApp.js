import React, { Component, useState } from "react";

/* ##### Single tag ##### */

const Tag = ({ id, info, handleFavourite }) => (
  <li className={info.count} onClick={() => handleFavourite(id)}>
    {info.label} ({info.tag_related_counts_aggregate.aggregate.count})
  </li>
);

/* ##### Shortlist ##### */

const ShortList = ({ favourites, data, deleteFavourite }) => {
  const hasFavourites = favourites.length > 0;
  const favList = favourites.map((fav, i) => {
    return (
      <Tag
        id={i}
        key={i}
        info={data.find((tag) => tag.id === fav)}
        handleFavourite={(id) => deleteFavourite(id)}
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
  console.log(favourites);
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
      </main>
    </div>
  );
}

export default WrappedApp;

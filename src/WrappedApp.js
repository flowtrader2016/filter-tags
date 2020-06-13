import React, { Component, useState } from "react";

/* ############################ */
/* ##### Single tag ##### */
/* ############################ */

const Tag = ({ id, info, handleFavourite }) => (
  <li className={info.count} onClick={() => handleFavourite(id)}>
    {info.label} ({info.tag_related_counts_aggregate.aggregate.count})
  </li>
);

const Greeting = () => <h1>Secstat</h1>;

/* ##################### */
/* ##### Shortlist ##### */
/* ##################### */

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

/* ########################### */
/* ##### Tag list ##### */
/* ########################### */

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
      // only display tags that match current input string
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

/* ############################## */
/* ##### Main app component ##### */
/* ############################## */

function WrappedApp(props) {
  const [filterText, setfilterText] = useState("");
  const [favourites, setFavourites] = useState([]);

  // update filterText in state when user types
  const filterUpdate = (value) => {
    setfilterText(value);
  };

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
          filter={filterText}
          favourites={favourites}
          addFavourite={addFavourite}
        />
      </main>
    </div>
  );
}

export default WrappedApp;

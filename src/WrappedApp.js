import React, { Component } from "react";

/* ############################ */
/* ##### Single tag ##### */
/* ############################ */

const Tag = ({ id, info, handleFavourite }) => (
  <li className={info.count} onClick={() => handleFavourite(id)}>
    {info.label} ({info.article_tags_aggregate.aggregate.count})
  </li>
);

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

/* ############################## */
/* ##### Main app component ##### */
/* ############################## */

class WrappedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      favourites: [],
    };
  }

  // update filterText in state when user types
  filterUpdate(value) {
    this.setState({
      filterText: value,
    });
  }

  // add clicked name ID to the favourites array
  addFavourite(id) {
    const newSet = this.state.favourites.concat([id]);
    this.setState({
      favourites: newSet,
    });
  }

  // remove ID from the favourites array
  deleteFavourite(id) {
    const { favourites } = this.state;
    const newList = [...favourites.slice(0, id), ...favourites.slice(id + 1)];
    this.setState({
      favourites: newList,
    });
  }

  render() {
    const hasSearch = this.state.filterText.length > 0;
    return (
      <div>
        <header>
          <Search
            filterVal={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
          />
        </header>
        <main>
          <ShortList
            data={this.props.data}
            favourites={this.state.favourites}
            deleteFavourite={this.deleteFavourite.bind(this)}
          />

          <TagsList
            data={this.props.data}
            filter={this.state.filterText}
            favourites={this.state.favourites}
            addFavourite={this.addFavourite.bind(this)}
          />
          {/* 
            Show only if user has typed in search.
            To reset the input field, we pass an 
            empty value to the filterUpdate method
          */}
          {hasSearch && (
            <button onClick={this.filterUpdate.bind(this, "")}>
              Clear Search
            </button>
          )}
        </main>
      </div>
    );
  }
}

export default WrappedApp;

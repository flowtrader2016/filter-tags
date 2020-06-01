import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/react-hooks";
import { client, GQLTags, GQLFunc } from "./graphclient";

/* ############################ */
/* ##### Single tag ##### */
/* ############################ */

ReactDOM.render(
  <ApolloProvider client={client}>
    <GQLFunc />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

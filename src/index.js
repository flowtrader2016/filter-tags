import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://job-stats.herokuapp.com/v1/graphql",
});

const GQLTAGS = gql`
  query MyQuery {
    tag(
      distinct_on: label
      where: {
        label: { _nin: ["None", "null"] }
        article_tags: { article: {}, tag: { article_tags: { tag: {} } } }
      }
    ) {
      id
      label
      article_tags_aggregate(distinct_on: article_id) {
        aggregate {
          count
        }
      }
    }
  }
`;

function GQLTagFunc() {
  const { loading, error, data } = useQuery(GQLTAGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data) return <App data={data.tag} />;
}

/* ############################ */
/* ##### Single tag ##### */
/* ############################ */

ReactDOM.render(
  <ApolloProvider client={client}>
    <GQLTagFunc />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

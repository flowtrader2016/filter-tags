import React from "react";
import { gql } from "apollo-boost";
import WrappedApp from "./WrappedApp";
import ApolloClient from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

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

function GQLFunc() {
  const { loading, error, data } = useQuery(GQLTAGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data) return <WrappedApp data={data.tag} />;
}

export { client, GQLTAGS, GQLFunc };

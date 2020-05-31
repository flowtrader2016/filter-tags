import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://job-stats.herokuapp.com/v1/graphql",
});

const GQLTags = gql`
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

export default GQLTags;

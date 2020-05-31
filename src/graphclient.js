import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://job-stats.herokuapp.com/v1/graphql",
});

client
  .query({
    query: gql`
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
    `,
  })
  .then((result) => console.log(result));

export default client;

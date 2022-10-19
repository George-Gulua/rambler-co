import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

export const getFeedbacks = async () => {
  const { data } = await client.query({
    query: gql`
      query allProjects {
        allProjects {
          id
          title
          path
          link
          gradient
        }
      }
    `
  })
  return data
}

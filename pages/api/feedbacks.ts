import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

export default async function handler(req: any, res: any) {
  const { data } = await client.query({
    query: gql`
      query allFeedbacks {
        allFeedbacks {
          id
          name
          text
        }
      }
    `
  }).then(result => {res.status(200).json(result)})
}
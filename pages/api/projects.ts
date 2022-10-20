import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

export default async function handler(req: any, res: any) {
  const { allProjects } = await client.query({
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
  }).then(result => res.status(200).json(result))
}

import type { NextPage } from 'next'
import React from 'react'
import Projects from '../app/components/screens/projects/Projects'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

interface HomePageProps {
  data: {
    allProjects: IProject[]
  }
}

const HomePage: NextPage<HomePageProps> = props => {
  console.log(props.data.allProjects)
  return <Projects projects={props.data.allProjects} />
}

export const getStaticProps = async () => {
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
  return {
    props: {
      data
    }
  }
}

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

export default HomePage

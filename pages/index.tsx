import type { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Projects from '../app/components/screens/projects/Projects'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import axios from 'axios'

interface HomePageProps {
  data: {
    allProjects: IProject[]
  }
}

const HomePage: NextPage<HomePageProps> = ({data}) => {
  return <Projects projects={data.data.allProjects} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/projects')
  return {
    props: {
      data
    },
    revalidate: 10
  }
}

export default HomePage

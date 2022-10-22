import type { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Projects from '../app/components/screens/projects/Projects'
import axios from 'axios'
import { IProject } from '../app/types/IProject'

interface HomePageProps {
  data: {
    data: {
      allProjects: IProject[]
    }
  }
}

const HomePage: NextPage<HomePageProps> = ({ data }) => {
  return <Projects projects={data.data.allProjects} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data }: any = await axios.get('http://localhost:3000/api/projects')
  return {
    props: {
      data
    },
    revalidate: 1
  }
}

export default HomePage

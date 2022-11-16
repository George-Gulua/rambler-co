import type { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Projects from '../app/components/screens/projects/Projects'
import axios from 'axios'
import { IProject } from '../app/types/IProject'
import { LINK } from '../app/constants'

interface HomePageProps {
  data: {
    data: {
      data: {
        allProjects: IProject[]
      }
    }
  }
}

const HomePage: NextPage<HomePageProps> = props => {
  return <Projects projects={props.data.data.data.allProjects} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data }: any = await axios.get(`${LINK}projects`)
  return {
    props: {
      data: data
    },
    revalidate: 10
  }
}

export default HomePage

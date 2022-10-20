import Reviews from '../app/components/screens/reviews/Reviews'
import type { NextPage } from 'next'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { IFeedback } from '../app/types/IFeedback'
import { useState } from 'react'
import { GetStaticProps } from 'next'
import axios from 'axios'

interface ReviewsPageProps {
  data: {
    allFeedbacks: IFeedback[]
  }
}

const ReviewsPage: NextPage<ReviewsPageProps> = props => {
  return <Reviews feedbacks={props.data.data.allFeedbacks} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/feedbacks')
  return {
    props: {
      data
    },
    revalidate: 10
  }
}

export default ReviewsPage

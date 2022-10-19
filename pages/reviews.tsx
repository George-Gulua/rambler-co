import Reviews from '../app/components/screens/reviews/Reviews'
import type { NextPage } from 'next'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { IFeedback } from '../app/types/IFeedback'
import { useState } from 'react'

interface ReviewsPageProps {
  data: {
    allFeedbacks: IFeedback[]
  }
}

const ReviewsPage: NextPage<ReviewsPageProps> = props => {
  const [feedbacks, setFeedbacks] = useState()
  console.log(props.data.allFeedbacks)
  return <Reviews feedbacks={props.data.allFeedbacks} />
}

export const updateFeedbacks = async () => {
  const { data } = await client.query({
    query: gql`
      mutation updateFeedbacks {
        createFeedback(name: "oleg", text: "text") {
          name
        }
      }
    `
  })
}
export const getStaticProps = async () => {
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

export default ReviewsPage

import Reviews from '../app/components/screens/reviews/Reviews'
import type { GetServerSideProps, NextPage } from 'next'
import { IFeedback } from '../app/types/IFeedback'
import { useState } from 'react'
import axios from 'axios'
import { LINK } from '../app/constants'

interface ReviewsPageProps {
  feedbacks: {
    data: {
      data: {
        allFeedbacks: IFeedback[]
      }
    }
  }
}

const ReviewsPage: NextPage<ReviewsPageProps> = props => {
  const [feedbacks, setFeedbacks] = useState(
    props.feedbacks.data.data.allFeedbacks
  )
  const createFeedback = async (feedbackItem: IFeedback) => {
    try {
      const newPromise: any = axios.post(`${LINK}feedbacks`, feedbackItem)
      const { data }: any = await newPromise
      setFeedbacks(prev => [...prev, data.data.data.newFeedback])
    } catch (error) {
      console.log(error)
    }
  }

  return <Reviews feedbacks={feedbacks} createFeedback={createFeedback} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data }: any = await axios.get(`${LINK}feedbacks`)

  return {
    props: {
      feedbacks: data
    }
  }
}

export default ReviewsPage

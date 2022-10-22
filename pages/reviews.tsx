import Reviews from '../app/components/screens/reviews/Reviews'
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage
} from 'next'
import { IFeedback } from '../app/types/IFeedback'
import axios from 'axios'
import { useState } from 'react'
import { useFeedback } from '../app/hooks/useFeedback'

interface ReviewsPageProps {
  data: {
    data: {
      allFeedbacks: IFeedback[]
    }
  }
}

const ReviewsPage: NextPage<ReviewsPageProps> = ({ data }) => {
  const [feedbacks, setFeedbacks] = useState(data.data.allFeedbacks)
  const { createFeedback } = useFeedback(feedbacks, setFeedbacks)
  return <Reviews feedbacks={feedbacks} createFeedback={createFeedback} />
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { data }: any = await axios.get('http://localhost:3000/api/feedbacks')
  console.log(Date.now())
  return {
    props: {
      data: data
    }
  }
}

export default ReviewsPage

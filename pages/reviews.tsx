import Reviews from '../app/components/screens/reviews/Reviews'
import type { GetServerSideProps, NextPage } from 'next'
import { IFeedback } from '../app/types/IFeedback'
import axios from 'axios'

interface ReviewsPageProps {
  data: {
    data: {
      allFeedbacks: IFeedback[]
      newFeedback: IFeedback
    }
  }
}

const ReviewsPage: NextPage<ReviewsPageProps> = ({ data }) => {
  return <Reviews feedbacks={data.data.allFeedbacks} />
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { data }: any = await axios.get('http://localhost:3000/api/feedbacks')

  return {
    props: {
      data: data
    }
  }
}

export default ReviewsPage

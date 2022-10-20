import Reviews from '../app/components/screens/reviews/Reviews'
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage
} from 'next'
import { IFeedback } from '../app/types/IFeedback'
import axios from 'axios'

interface ReviewsPageProps {
  data: {
    allFeedbacks: IFeedback[]
  }
}

const ReviewsPage: NextPage<ReviewsPageProps> = props => {
  return <Reviews feedbacks={props.data.data.allFeedbacks} />
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { data } = await axios.get('http://localhost:3000/api/feedbacks')
  return {
    props: {
      data: data
    }
  }
}

export default ReviewsPage

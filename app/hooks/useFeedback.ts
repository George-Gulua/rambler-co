import { IFeedback } from '../types/IFeedback'
import { useMutation } from '@apollo/client'
import { ADD_FEEDBACK, ALL_FEEDBACKS } from '../requests'

export const useFeedback = (
  feedbacks: IFeedback[],
  setFeedbacks: (feedbacks: IFeedback[]) => void
) => {
  const [AddFeedback] = useMutation(ADD_FEEDBACK, {
    update(cache, { data }) {
      const { allFeedbacks }: any = cache.readQuery({ query: ALL_FEEDBACKS })
      cache.writeQuery({
        query: ALL_FEEDBACKS,
        data: {
          allFeedbacks: [data.newFeedback, ...allFeedbacks]
        }
      })
    }
  })
  const createFeedback = (feedbackItem: IFeedback) => {
    feedbackItem.id = +feedbacks[feedbacks.length - 1].id + 1
    setFeedbacks([...feedbacks, feedbackItem])
    AddFeedback({
      variables: { name: feedbackItem.name, text: feedbackItem.text }
    }).then(result => console.log(result))
  }

  return { createFeedback }
}

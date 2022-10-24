import client from '../../app/client'
import { ADD_FEEDBACK, ALL_FEEDBACKS } from '../../app/requests'

export default async function handler(req: any, res: any) {
  const { method } = req

  if (method === 'POST') {
    try {
      const newFeedback = await client.mutate({
        mutation: ADD_FEEDBACK,
        variables: req.body
      })
      res.status(201).json({ data: newFeedback, message: 'Feedback added' })
    } catch (error) {
      res.status(500).json({ message: 'Interval Server Error' })
      console.log(error)
    }
  }
  if (method === 'GET') {
    try {
      const feedbacks = await client.query({
        query: ALL_FEEDBACKS
      })
      res.status(200).json({ data: feedbacks })
    } catch (error) {
      res.status(500).json({ message: 'Interval Server Error' })
      console.log(error)
    }
  }
}

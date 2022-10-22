import { RequestHandler } from '@apollo/client'
import client from '../../app/client'
import { ALL_FEEDBACKS } from '../../app/requests'

export default function handler(req: RequestHandler, res: any) {
  const data = client
    .query({
      query: ALL_FEEDBACKS
    })
    .then(result => {
      res.status(200).json(result)
      res.end()
    })
    .catch(error => {
      res.json(error)
      res.status(405)
    })
}

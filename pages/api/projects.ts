import { RequestHandler } from '@apollo/client'
import client from '../../app/client'
import { ALL_PROJECTS } from '../../app/requests'

export default function handler(req: RequestHandler, res: any) {
  const allProjects = client
    .query({
      query: ALL_PROJECTS
    })
    .then(result => res.status(200).json(result))
}

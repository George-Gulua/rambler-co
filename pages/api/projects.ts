import client from '../../app/client'
import { ALL_PROJECTS } from '../../app/requests'

export default async function handler(req: any, res: any) {
  const { method } = req
  if (method === 'GET') {
    try {
      const projects = await client.query({
        query: ALL_PROJECTS
      })
      res.status(200).json({ data: projects })
    } catch (error) {
      res.status(500).json({ message: 'Interval Server Error' })
      console.log(error)
    }
  }
}

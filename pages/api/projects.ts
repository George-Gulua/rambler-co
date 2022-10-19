import { getFeedbacks } from './data/projects'

export default function handler(req: any, res: any) {
  console.log(getFeedbacks())
  res.status(200).json(123)
}

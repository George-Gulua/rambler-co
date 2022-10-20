import { gql } from '@apollo/client'

export const ALL_PROJECTS = gql`
  query allProjects {
    allProjects {
      id
      title
      path
      link
      gradient
    }
  }
`

export const ALL_FEEDBACKS = gql`
  query allFeedbacks {
    allFeedbacks {
      id
      name
      text
    }
  }
`

export const ADD_FEEDBACK = gql`
  mutation AddFeedback($name: String!, $text: String!) {
    newFeedback: createFeedback(name: $name, text: $text) {
      id
      name
      text
    }
  }
`

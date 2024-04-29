import { randomUUID } from 'node:crypto'

interface AnswerProps {
  content: string
  authorId: string
  questionId: string
  id?: string
}

export class Answer {
  public id: string
  public content: string
  public authorId: string
  public questionId: string

  constructor({ content, authorId, questionId, id }: AnswerProps) {
    this.content = content
    this.authorId = authorId
    this.questionId = questionId
    this.id = id ?? randomUUID()
  }
}

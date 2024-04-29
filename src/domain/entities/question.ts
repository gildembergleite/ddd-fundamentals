import { randomUUID } from 'node:crypto'

interface QuestionProps {
  title: string
  content: string
  authorId: string
  id?: string
}

export class Question {
  public id: string
  public title: string
  public content: string
  public authorId: string

  constructor({ title, content, authorId, id }: QuestionProps) {
    this.title = title
    this.content = content
    this.authorId = authorId
    this.id = id ?? randomUUID()
  }
}

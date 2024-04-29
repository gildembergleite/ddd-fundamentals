import { randomUUID } from 'node:crypto'

interface StudentProps {
  name: string
  id?: string
}

export class Student {
  public id: string
  public name: string

  constructor({ name, id }: StudentProps) {
    this.name = name
    this.id = id ?? randomUUID()
  }
}

interface SchemaType {
  title: string
  name: string
  type: string
  fields: Array<{
    title: string
    name: string
    type: string
    description: string
  }>
}

import about from './about'
export const schemaTypes: SchemaType[] = [about]

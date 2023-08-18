import {createSchema} from 'sanity'
import {schemaTypes} from '.'

import about from './about'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([about]),
})

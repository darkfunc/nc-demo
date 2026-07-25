import { type SchemaTypeDefinition } from 'sanity'

import news from './news'
import announcement from './announcement'
import admissionSection from './admissionSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, announcement, admissionSection],
}
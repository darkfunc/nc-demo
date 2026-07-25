import { type SchemaTypeDefinition } from 'sanity'

import news from './news'
import announcement from './announcement'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, announcement],
}
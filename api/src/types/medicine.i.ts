import {GenericDoc} from './genricDoc.i'

export interface Medicine extends GenericDoc {
  name: string,
  description: string
}
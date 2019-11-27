import * as Joi from '@hapi/joi';
export interface ValidationsInterface {
  body: Joi.SchemaMap;
  query: Joi.SchemaMap;
  params: Joi.SchemaMap;
}

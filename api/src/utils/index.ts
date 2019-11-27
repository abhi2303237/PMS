import { ValidationsInterface } from "validations.i";
import * as joi from "@hapi/joi";
import { Request, Response, NextFunction } from "express";


export const validate = (schema: ValidationsInterface) => (req: Request, res: Response, next: NextFunction) => {

  let result = getSchema(schema.body).validate(req.body);
  if (result.error) {
    sentValidationError(result, res);
    return;
  }
  result = getSchema(schema.query).validate(req.query);
  if (result.error) {
    sentValidationError(result, res);
    return;
  }
  result = getSchema(schema.params).validate(req.params);
  if (result.error) {
    sentValidationError(result, res);
    return;
  }
  next();
};


function getSchema(schema: joi.SchemaMap) {
  return joi.object(schema);
}

function sentValidationError(result:any, res:Response) {
  res.status(401).json(result)
}
import * as express from 'express';
import { validate } from '../utils'
import { insertUnit, searchUnit } from '../controller/dosageUnit'
import { unitInsert, unitSearch } from '../validator/dosageUnit'
export const unitRouter = express.Router();

unitRouter.put('/', validate(unitInsert), insertUnit);
unitRouter.get('/', validate(unitSearch), searchUnit);


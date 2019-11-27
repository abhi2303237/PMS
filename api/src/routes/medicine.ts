import * as express from 'express';
import { validate } from '../utils'
import { medicineInsert, medicineSearch } from '../validator/medicine'
import { insertMedicine, searchMedicine } from '../controller/medicine'
export const medRouter = express.Router();

medRouter.put('/', validate(medicineInsert), insertMedicine);
medRouter.get('/', validate(medicineSearch), searchMedicine);

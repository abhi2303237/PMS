import * as express from 'express';
import { validate } from '../utils'
import { prescriptionInsert, getAllPrescriptionSchema } from '../validator/prescription'
import { getAllPrescription, insertPrescription } from '../controller/prescription'
export const presRouter = express.Router();

presRouter.put('/', validate(prescriptionInsert), insertPrescription);
presRouter.get('/', validate(getAllPrescriptionSchema), getAllPrescription);
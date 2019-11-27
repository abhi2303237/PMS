import * as joi from "@hapi/joi";
import { ValidationsInterface } from "validations.i";

let medicine = joi.object().keys({
  name: joi.string().required(),
  description: joi.string().optional()
})

export const prescriptionInsert: ValidationsInterface = {
  body: {
    patientName: joi.string().required(),
    dob: joi.string().required(),
    medicine: joi.array().items(medicine),
    description: joi.string().optional()
  },
  params: {},
  query: {}
};

export const getAllPrescriptionSchema: ValidationsInterface = {
  body: {},
  params: {},
  query: {
    limit: joi.string().required(),
    startAfter: joi.string().optional()
  }
};
import { GenericDoc } from './genricDoc.i'
import { MedicineDetail } from './medicineDetail.i'

export interface Prescription extends GenericDoc {
  patientName: string,
  dob:Date,
  medicine: MedicineDetail[]
  description: string
}
import { Request, Response, NextFunction } from "express";
import { insertDoc, getAllDocs } from "../repository/baseRepo"
import { Medicine } from "../types/medicine.i"
import { COLLECTION } from "../types/constants";
import { DocumentReference, QuerySnapshot, QueryDocumentSnapshot } from "@google-cloud/firestore";


export let insertMedicine = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { body } = req;
    let medicine: Medicine = <Medicine>body;
    let result: DocumentReference = await insertDoc(COLLECTION.MEDICINE, medicine)
    res.status(200).json({ message: `Resources created with id ${result.id}` });
  } catch (err) {
    next(err)
  }
};

export let searchMedicine = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { query: { searchKey } } = req;
    let data: QuerySnapshot = await getAllDocs(COLLECTION.MEDICINE)
    let response: Medicine[]=[];
    data.docs.forEach((doc:QueryDocumentSnapshot)=>{
      response.push(<Medicine>doc.data())
    })
    res.status(200).json(response);
  } catch (err) {
    next(err)
  }
};
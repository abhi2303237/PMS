import { Request, Response, NextFunction } from "express";
import { insertDoc, getAllDocs } from "../repository/baseRepo"
import { DosageUnit } from "../types/dosageUnit.i"
import { COLLECTION } from "../types/constants";
import { DocumentReference, QuerySnapshot, QueryDocumentSnapshot } from "@google-cloud/firestore";


export let insertUnit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { body } = req;
    let unit: DosageUnit = <DosageUnit>body;
    let result: DocumentReference = await insertDoc(COLLECTION.UNIT, unit)
    res.status(200).json({ message: `Resources created with id ${result.id}` });
  } catch (err) {
    next(err)
  }
};

export let searchUnit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { query: { searchKey } } = req;
    let data: QuerySnapshot = await getAllDocs(COLLECTION.UNIT)
    let response: DosageUnit[] = [];
    data.docs.forEach((doc:QueryDocumentSnapshot)=>{
      response.push(<DosageUnit>doc.data())
    })
    res.status(200).json(response);
  } catch (err) {
    next(err)
  }
};
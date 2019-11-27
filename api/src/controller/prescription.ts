import { Request, Response, NextFunction } from "express";
import { insertDoc, getAllDocs } from "../repository/baseRepo"
import { COLLECTION } from "../types/constants";
import { DocumentReference, QuerySnapshot } from "@google-cloud/firestore";
import { Prescription } from "prescription.i";


export let insertPrescription = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { body } = req;
    let prescription: Prescription = <Prescription>body;
    let result: DocumentReference = await insertDoc(COLLECTION.PRESCRIPTION, prescription)
    res.status(200).json({ message: `Resources created with id ${result.id}` });
  } catch (err) {
    next(err)
  }
};

export let getAllPrescription = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { query: { limit, startAfter } } = req;
    let data: QuerySnapshot = await getAllDocs(COLLECTION.PRESCRIPTION, Number(limit), startAfter)
    let response: Prescription[]=[];
    data.docs.forEach((doc) => {
      response.push(<Prescription>doc.data())
    })
    res.status(200).json(response);
  } catch (err) {
    next(err)
  }
};
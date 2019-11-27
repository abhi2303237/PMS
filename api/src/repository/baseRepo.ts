import { db } from '../configs/firestore'
import { DocumentSnapshot, QuerySnapshot, DocumentReference, WriteResult } from '@google-cloud/firestore';
import { GenericDoc } from 'genricDoc.i';
import { Medicine } from 'medicine.i';
import { Prescription } from 'prescription.i';


export function getCollectionDocById(collection: string, docId: string): Promise<DocumentSnapshot> {
  return db.collection(collection).doc(docId).get();
}

export function insertDoc(collection: string, doc: GenericDoc): Promise<DocumentReference> {
  return db
    .collection(collection)
    .add(doc);
}

export function getAllDocs(collection: string, limit: number = null, startAfter: string = null): Promise<QuerySnapshot> {
  return db
    .collection(collection)
    // .orderBy('name')
    // .startAfter(startAfter)
    // .limit(limit)
    .get();
}

export function updateDoc(collection: string, docId: string, doc: GenericDoc): Promise<WriteResult> {
  return db
    .collection(collection)
    .doc(docId)
    .set(doc)
}

// (async function execute() {
//   const prescription: Prescription = {
//     medicine: [
//       {
//         name: 'med id',
//         dosage: 500,
//         timing: 'unit id',
//       }
//     ],
//     description: '1004 degree fever',
//     patientName: 'abhi s raj',
//     dob: new Date()
//   }
//   const medicine: Medicine = {
//     name: 'abomin',
//     description: 'medicine for fever'
//   }
//   // insertDoc('medicine', medicine)
//   // insertDoc('prescription', prescription)
//   let data: GenericDoc = await getAllDocs('medicine', 2) //6L4KqWtkwaiUW5i8i2Pq
//   let data2: GenericDoc = await getCollectionDocById('medicine', '6L4KqWtkwaiUW5i8i2Pq')
//   let data3: GenericDoc = await updateDoc('medicine', '6L4KqWtkwaiUW5i8i2Pq', medicine)
//   console.log(data2);
// })()
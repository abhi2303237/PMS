import { Firestore } from '@google-cloud/firestore';
export const db = new Firestore({
  projectId: 'pmsystem-94712',
  keyFilename: './src/configs/PMSystemDatabase.json'
});

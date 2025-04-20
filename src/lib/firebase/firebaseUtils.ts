import { db } from '@/lib/firebase/firebase';
import {
  collection,
  getDocs,
  QueryDocumentSnapshot
} from 'firebase/firestore';

export const getDocuments = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map((doc: QueryDocumentSnapshot) => ({
    id: doc.id,
    ...doc.data()
  }));
};

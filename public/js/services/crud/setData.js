import { db } from '../../config/firebase.js'
import {
  doc,
  setDoc
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'

export const setData = async (coleccion) => {
  await setDoc(doc(db, 'categorias', coleccion.nombre), coleccion)
}

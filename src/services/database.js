import {getFirestore} from "firebase/firestore";
import conexion from "./"

const db = getFirestore(conexion);

export default db;


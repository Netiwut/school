import * as  firebase from 'firebase/app';
import 'firebase/database';
import { config } from './keys' 

firebase.initializeApp(config)

const ref = firebase.database().ref()
export const refStudents = ref.child('students')
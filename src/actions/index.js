import { refStudents } from "../services/config/firebase"
// import { getStudents } from '../services/api'
import { GET_STUDENTS } from "./types"

export const fetchStudents = () => async dispath => {
    refStudents.on("value", snapshot => {
        dispath({
            type : GET_STUDENTS,
            data : snapshot.val()
        })
    })
}
export const addStudents = newStudent => async dispath => {
    refStudents.push().set(newStudent);
}
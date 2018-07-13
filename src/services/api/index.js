import { refStudents } from "../config/firebase"
export const getStudents = () => {
    console.log("api")
    refStudents.on("value", snapshot => {
        snapshot.val()
    })
}
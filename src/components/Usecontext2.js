import React, { useContext } from 'react'
import { studentContext } from "../components/UseContext1"

export default function Usecontext2() {
    const students = useContext(studentContext)
    return (
        <>

            <ul>
                {
                    students.map(e => <li key={e}>{e}</li>)
                } 

            </ul>

        </>
    )
}

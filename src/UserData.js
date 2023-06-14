import React from 'react'
import { useState } from "react";

function UserData() {

    const [allStudents, setallStudents] = useState([
        {
            name: "Mustyl",
            deparment: "Software Engineering",
            nationality: "Nigerian"
        },
        {
            name: "Ireola",
            deparment: "Python",
            nationality: "American"
        },
        {
            name: "Adewalw",
            deparment: "UI/UX",
            nationality: "Dutch"
        },
        {
            name: "Abiola",
            deparment: "Product Design",
            nationality: "Togolese"
        }
    ])




    return (

        <>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>NAME</th>
                        <th>DEPARTMENT</th>
                        <th>NATIONALITY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allStudents.map((items, i) => (
                            <tr>
                                <td>{i}</td>
                                <td>{items.name}</td>
                                <td>{items.deparment}</td>
                                <td>{items.nationality}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </>
    )
}

export default UserData
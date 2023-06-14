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

    let addStudent = (e) => {
        e.preventDefault();
        let updateList = {
            name: studentName,
            deparment: studentDepartment,
            nationality: studentNationality
        }
        console.log(updateList);
        setallStudents([...allStudents, updateList]);
    }

    const [studentName, setstudentName] = useState("")
    const [studentDepartment, setstudentDepartment] = useState("")
    const [studentNationality, setstudentNationality] = useState("")




    return (

        <>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>NAME</th>
                        <th>DEPARTMENT</th>
                        <th>NATIONALITY</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allStudents.map((items, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{items.name}</td>
                                <td>{items.deparment}</td>
                                <td>{items.nationality}</td>
                                <td>
                                    <button className='btn btn-success'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className='w-25 p-3'>
                <form>
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setstudentName(e.target.value)} className="form-control ps-3" placeholder='Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input onChange={(e) => setstudentDepartment(e.target.value)} type="text" className="form-control ps-3" placeholder='Department' id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <input onChange={(e) => setstudentNationality(e.target.value)} type="text" className="form-control ps-3" placeholder='Nationality' id="exampleInputPassword1" />
                    </div>
                    <button onClick={addStudent} type="submit" className="btn btn-primary">Add Student</button>
                </form>
            </div>

        </>
    )
}

export default UserData
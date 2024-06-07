import React, { useState } from 'react'
import NavBar from './NavBar'

const View = () => {
    const[data,SetData]=useState(
        [
            {"pid":1122,"pname":"Gayathri","dname":"Surya"},
            {"pid":456,"pname":"Shilpa","dname":"Arya"},
            {"pid":123,"pname":"Sona","dname":"Aleena"},
            {"pid":566,"pname":"Roshny","dname":"Arya"},
            {"pid":6666,"pname":"Vivek","dname":"Vishnu"},
            {"pid":4576,"pname":"Malavika","dname":"Arya"},
            {"pid":3432,"pname":"Ashik","dname":"Vishnu"},
            {"pid":345,"pname":"Vrindha","dname":"Sachu"},
            {"pid":123,"pname":"Deepthi","dname":"Reji"}
        ]
    )
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">PatientId</th>
      <th scope="col">PatientName</th>
      <th scope="col">DoctorName</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,index)=>
            {
            return <tr>
                <td>{value.pid}</td>
                <td>{value.pname}</td>
                <td>{value.dname}</td>
              </tr>
            }
    )

    }
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View
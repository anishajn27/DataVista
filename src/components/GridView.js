// import React from 'react';

// export default function GridView({ data }) {
//   return (
//     <div className="employee-grid">
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Work Dept</th>
//             <th>Phone No.</th>
//             <th>Hire Date</th>
//             <th>Job</th>
//             <th>Birthdate</th>
//             <th>Sex</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((employee) => (
//             <tr key={employee.id}>
//               <td>{employee.id}</td>
//               <td>{employee.firstName}</td>
//               <td>{employee.lastName}</td>
//               <td>{employee.email}</td>
//               <td>{employee.workDept}</td>
//               <td>{employee.phoneNo}</td>
//               <td>{employee.hireDate}</td>
//               <td>{employee.job}</td>
//               <td>{employee.birthDate}</td>
//               <td>{employee.sex}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }




import React from 'react';

export default function GridView({ data }) {
  return (
    <div className="employee-grid">
      <table className="grid-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Dept</th>
            <th>Phone No.</th>
            <th>Hire Date</th>
            <th>Job</th>
            <th>Birthdate</th>
            <th>Sex</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id} className="grid-row">
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.workDept}</td>
              <td>{employee.phoneNo}</td>
              <td>{employee.hireDate}</td>
              <td>{employee.job}</td>
              <td>{employee.birthDate}</td>
              <td>{employee.sex}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}




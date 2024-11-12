// components/TileView.js
// import React from 'react';

// export default function TileView({ data, onDetailView }) {
//   return (
//     <div className="employee-tiles">
//       {data.map((employee) => (
//         <div className="employee-tile" key={employee.id} onClick={() => onDetailView(employee)}>
//           <div className="tile-content">
//             <h3>{employee.firstName} {employee.lastName}</h3>
//             <p>{employee.email}</p>
//             <div className="actions">
//               <button>Edit</button>
//               <button>Flag</button>
//               <button>Delete</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import React, { useState } from 'react';

export default function TileView({ data, onDetailView }) {
  // Maintain local state for employees
  const [employees, setEmployees] = useState(data);

  const handleDelete = (id) => {
    // Delete employee from list
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleFlag = (id) => {
    // Toggle the 'flagged' property for the employee
    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? { ...employee, flagged: !employee.flagged } : employee
    );
    setEmployees(updatedEmployees);
  };

  return (
    <div className="employee-tiles">
      {employees.map((employee) => (
        <div className="employee-tile" key={employee.id} onClick={() => onDetailView(employee)}>
          <div className="tile-content">
            {/* Flag icon on top-right corner if flagged */}
            {employee.flagged && <div className="flag-icon">★</div>}
            <h3>{employee.firstName} {employee.lastName}</h3>
            <p>{employee.email}</p>
            <div className="actions">
              <button>Edit</button>
              <button onClick={(e) => { e.stopPropagation(); handleFlag(employee.id); }}>Flag</button>
              <button onClick={(e) => { e.stopPropagation(); handleDelete(employee.id); }}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}





// components/EmployeeDetailView.js
import React from 'react';

export default function EmployeeDetailView({ employee, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{employee.firstName} {employee.lastName}</h2>
        <p><strong>Id:</strong> {employee.id}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone No.:</strong> {employee.phoneNo}</p>
        <p><strong>Hire Date:</strong> {employee.hireDate}</p>
        <p><strong>Department:</strong> {employee.workDept}</p>
        <p><strong>Job:</strong> {employee.job}</p>
        <p><strong>Birthdate:</strong> {employee.birthDate}</p>
        <p><strong>Sex:</strong> {employee.sex}</p>
        <button onClick={onClose} className="toggle-view-btn">Back to Tile View</button>
      </div>
    </div>
  );
}


// App.js
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// // import Hamburger from './components/Hamburger';
// // import HorizontalMenu from './components/HorizontalMenu';
// // import GridView from './components/GridView';
// // import TileView from './components/TileView';
// // import EmployeeDetailModal from './components/EmployeeDetailModal';
// import Navbar from './components/Navbar';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home.js";
// import Employees from "./components/Employees";
// import Departments from "./components/Departments";
// import Settings from "./components/Settings";



// export default function App(){
//   // const [currentForm, setCurrentForm] = useState('login');


//   //   const toggleForm = (formName)=>{
//   //       setCurrentForm(formName);
//   //   }
//   //   {
//   //     currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
//   //   }
//   return (
  
//     <div className="app">
//         <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="home" element={<Home/>} />
//         </Routes>
//         <Routes>
//           <Route path="employees" element={<Employees/>} />
//         </Routes>
//         <Routes>
//           <Route path="departments" element={<Departments/>} />
//         </Routes>
//         <Routes>
//           <Route path="settings" element={<Settings/>} />
//         </Routes>
//         </BrowserRouter>
        

//     </div>
//   );
// };

// export default function App() {
//   const [employees, setEmployees] = useState([]);
//   const [tileView, setTileView] = useState(false);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);

//   useEffect(() => {
//     fetch('https://dummyjson.com/users')
//       .then(response => response.json())
//       .then(data => setEmployees(data.users));
//   }, []);

//   const toggleView = () => setTileView(!tileView);
//   const showEmployeeDetail = (employee) => setSelectedEmployee(employee);
//   const closeEmployeeDetail = () => setSelectedEmployee(null);

//   return (
//     <div>
//       <Hamburger />
//       <HorizontalMenu />
//       <main>
        // {tileView ? (
        //   <TileView data={employees} onDetailView={showEmployeeDetail} />
        // ) : (
        //   <GridView data={employees} onTileView={toggleView} />
        // )}
        // {selectedEmployee && (
        //   <EmployeeDetailModal employee={selectedEmployee} onClose={closeEmployeeDetail} />
        // )}
//       </main>
//     </div>
//   );
// }



// App.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TileView from './components/TileView';
// import EmployeeDetailView from './components/EmployeeDetailModal';
// import './App.css';

// export default function App() {
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [viewDetail, setViewDetail] = useState(false);

//   useEffect(() => {
//     // Fetch employee data (replace with real API call)
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         const formattedData = response.data.map((user, index) => ({
//           id: index + 1,
//           firstName: user.name.split(' ')[0],
//           lastName: user.name.split(' ')[1] || '',
//           email: user.email,
//           workDept: "IT", // Dummy data
//           phoneNo: user.phone,
//           hireDate: "2020-01-01", // Dummy date
//           job: "Software Engineer", // Dummy job
//           birthDate: "1990-01-01", // Dummy date
//           sex: index % 2 === 0 ? "Male" : "Female", // Dummy gender
//         }));
//         setEmployees(formattedData);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const handleDetailView = (employee) => {
//     setSelectedEmployee(employee);
//     setViewDetail(true);
//   };

//   const handleCloseDetailView = () => {
//     setSelectedEmployee(null);
//     setViewDetail(false);
//   };

//   return (
//     <div className="App">
//       <h1>Employee Directory</h1>
      
//       {viewDetail ? (
//         <EmployeeDetailView 
//           employee={selectedEmployee} 
//           onClose={handleCloseDetailView} 
//         />
//       ) : (
//         <TileView data={employees} onDetailView={handleDetailView} />
//       )}
//     </div>
//   );
// }





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TileView from './components/TileView';
import GridView from './components/GridView';
import EmployeeDetailView from './components/EmployeeDetailModal';
import './App.css';
import Navbar from './components/Navbar';

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [viewDetail, setViewDetail] = useState(false);
  const [isGridView, setIsGridView] = useState(true); // Track current view (grid or tile)

  useEffect(() => {
    // Fetch employee data (replace with real API call)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const formattedData = response.data.map((user, index) => ({
          id: index + 1,
          firstName: user.name.split(' ')[0],
          lastName: user.name.split(' ')[1] || '',
          email: user.email,
          workDept: "IT", // Dummy data
          phoneNo: user.phone,
          hireDate: "2020-01-01", // Dummy date
          job: "Software Engineer", // Dummy job
          birthDate: "1990-01-01", // Dummy date
          sex: index % 2 === 0 ? "Male" : "Female", // Dummy gender
        }));
        setEmployees(formattedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDetailView = (employee) => {
    setSelectedEmployee(employee);
    setViewDetail(true);
  };

  const handleCloseDetailView = () => {
    setSelectedEmployee(null);
    setViewDetail(false);
  };

  const toggleView = () => {
    setIsGridView(!isGridView); // Toggle between grid and tile view
  };

  return (
    <div className="App">
      <Navbar/>
      <h1>    </h1>
      
      {/* Button to toggle between grid and tile view */}
      <button onClick={toggleView} className="toggle-view-btn">
        {isGridView ? 'Tile View' : 'Grid View'}
      </button>

      {/* Render Modal or Grid/Tile View */}
      {viewDetail ? (
        <EmployeeDetailView 
          employee={selectedEmployee} 
          onClose={handleCloseDetailView} 
        />
      ) : (
        <>
          {/* Render Grid View or Tile View based on state */}
          {isGridView ? (
            <GridView data={employees} />
          ) : (
            <TileView data={employees} onDetailView={handleDetailView} />
          )}
        </>
      )}
    </div>
  );
}








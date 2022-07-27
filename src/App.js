import React, { useState } from "react";
import Chart from "./components/chart/index";
import EmployeeOffCanvas from "./components/employeeOffCanvas/index";
// import * as d3 from "d3";

const employees = [
  {
    id: "1",
    name: "Shagai",
    parentId: "",
    positionName: "PINECONE CEO",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
  {
    id: "2",
    name: "Unurbayasgalan",
    parentId: "1",
    positionName: "COO",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
  {
    id: "3",
    name: "Enkhbayar",
    parentId: "1",
    positionName: "CTO",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
  {
    id: "4",
    name: "Bat-Enkh",
    parentId: "1",
    positionName: "CGO",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
  {
    id: "5",
    name: "Bolor",
    parentId: "1",
    positionName: "CFO",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
  {
    id: "6",
    name: "Vacancy",
    parentId: "2",

    positionName: "HR Manager",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
  {
    id: "7",
    name: "Yesui",
    parentId: "2",

    positionName: "Program Manager",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
  {
    id: "8",
    name: "Udval",
    parentId: "2",

    positionName: "Office Manager",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
  {
    id: "9",
    name: "Khangaikhuu",
    parentId: "3",

    positionName: "Senior Bootcamp Manager",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
  {
    id: "10",
    name: "Sainzaya",
    parentId: "3",

    positionName: "Senior Project Manager",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
  {
    id: "11",
    name: "Sainzaya",
    parentId: "3",

    positionName: "Product Manager",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
  {
    id: "12",
    name: "Vacancy",
    parentId: "4",

    positionName: "Marketing Manager",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
  {
    id: "13",
    name: "Vacancy",
    parentId: "4",

    positionName: "Graphic Designer",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
  {
    id: "14",
    name: "Vacancy",
    parentId: "5",

    positionName: "Senior Accountant",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
  {
    id: "15",
    name: "Vacancy",
    parentId: "5",

    positionName: "Accountant",
    imageUrl:
      "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
  },
];

const App = () => {
  const [show, setShow] = useState(false);
  const [employeeId, setEmployeeId] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const onNodeClick = (nodeId) => {
    handleShow();
    setEmployeeId(nodeId);
  };

  return (
    <>
      <h1>Organization Chart</h1>
      <Chart onNodeClick={onNodeClick} data={employees} />
      {show && (
        <EmployeeOffCanvas
          employee={employees.find((employee) => employee.id === employeeId)}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default App;

import React from "react";
import { MdClose } from "react-icons/md";
import "../styles.css";

const EmployeeDetailsCard = (props) => {
  return (
    <div className="card">
      <button className="card-close-btn" onClick={props.handleClose}>
        <MdClose />
      </button>
      {props.employee.team === "" ? (
        <div>
          <div className="card-header">
            <img
              className="card-img"
              src={props.employee.imageUrl}
              alt="Profile"
            />
            <h2 className="card-name">{props.employee.name}</h2>
            <p className="card-role">{props.employee.positionName}</p>
          </div>
          <div className="card-body">
            <div className="card-item">
              <p className="card-item-label">Phone:</p>
              <p className="card-item-value">{props.employee.phone}</p>
            </div>
            <div className="card-item">
              <p className="card-item-label">Email:</p>
              <p className="card-item-value">{props.employee.email}</p>
            </div>
            <div className="card-item">
              <p className="card-item-label">Location:</p>
              <p className="card-item-value">{props.employee.location}</p>
            </div>
            {props.employee.department && (
              <div className="card-item">
                <p className="card-item-label">Department:</p>
                <p className="card-item-value">{props.employee.department}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="card-header">
            <h2 className="card-team-name">{props.employee.team} Team</h2>
          </div>
          <h4>Team Members:</h4>
          <div className="card-body">
            {props.employees
              .filter(
                (employee) => employee.parentId === props.employee.id.toString()
              )
              .map((employee) => (
                <div className="card-item-team" key={employee.id}>
                  <img
                    className="card-item-img"
                    src={employee.imageUrl}
                    alt="Profile"
                  />
                  <p className="card-item-name">{employee.name}</p>
                  <p className="card-item-role">{employee.positionName}</p>
                </div>
              ))}
          </div>
        </div>
      )}
      <div className="card-item">
        <p className="card-item-label">Description:</p>
        <p className="card-item-value">{props.employee.description}</p>
      </div>
    </div>
  );
};

export default EmployeeDetailsCard;

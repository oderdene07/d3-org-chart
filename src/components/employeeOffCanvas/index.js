import React from "react";
import "./style.css";

const EmployeeOffCanvas = (props) => {
  return (
    <div className="employee-off-canvas">
      <div className="employee-off-canvas__header">
        <div className="employee-off-canvas__header-title">
          <h3>Employee</h3>
        </div>
        <div onClick={props.handleClose}>
          <button className="close-button">X</button>
        </div>
      </div>
      <div className="employee-off-canvas__body">
        <div className="employee-off-canvas__body-content">
          <div className="employee-off-canvas__body-content-image">
            <img src={props.employee.imageUrl} alt="employee" />
          </div>
          <div className="employee-off-canvas__body-content-details">
            <div className="employee-off-canvas__body-content-details-name">
              <h4>Name: </h4>
              <h4>{props.employee.name}</h4>
            </div>
            <div className="employee-off-canvas__body-content-details-position">
              <p>Position: </p>
              <p>{props.employee.positionName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeOffCanvas;

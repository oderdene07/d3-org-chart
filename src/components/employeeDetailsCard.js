import React from "react";
import { MdClose } from "react-icons/md";

const styles = {
  card: {
    position: "absolute",
    top: "60px",
    left: "0",
    width: "25%",
    height: "75%",
    padding: "2rem",
    margin: "2rem",
    backgroundColor: "#fef9ef",
    borderRadius: "1rem",
    border: "1px solid #d3d3d3",
    overflowY: "scroll",
  },
  cardCloseBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "30px",
    height: "30px",
    color: "#227c9d",
    backgroundColor: "#fef9ef",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #227c9d",
    cursor: "pointer",
  },
  // card::-webkit-scrollbar: {
  //   display: none;
  // },
  cardHeader: {
    textAlign: "center",
    marginBottom: "1rem",
  },
  cardImg: {
    width: "120px",
    borderRadius: "1rem",
  },
  cardName: {
    marginTop: "1rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  cardRole: {
    margin: "1rem 0",
    fontSize: "1.2rem",
  },
  cardBody: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  cardBodyTeamMembers: {
    marginTop: "1rem",
    height: "26vh",
    overflowY: "scroll",
  },
  cardItem: {
    width: "100%",
    margin: "0.5rem 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.9rem",
  },
  cardItemLabel: {
    margin: "0.5rem 0",
    fontWeight: "bold",
  },
  cardItemValue: {
    textAlign: "justify",
  },
  cardItemTeam: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardItemImg: {
    width: "50px",
    height: "50px",
    margin: "0.2rem",
    borderRadius: "50%",
  },
  cardItemName: {
    marginLeft: "0.5rem",
    fontWeight: "bold",
  },
  cardItemRole: {
    fontSize: "0.8rem",
    marginLeft: "0.5rem",
  },
};

const EmployeeDetailsCard = (props) => {
  return (
    <div style={styles.card}>
      <button style={styles.cardCloseBtn} onClick={props.handleClose}>
        <MdClose />
      </button>
      {props.employee.team === "" ? (
        <div>
          <div style={styles.cardHeader}>
            <img
              style={styles.cardImg}
              src={props.employee.imageUrl}
              alt="Profile"
            />
            <h2 style={styles.cardName}>{props.employee.name}</h2>
            <p cstyle={styles.cardRole}>{props.employee.positionName}</p>
          </div>
          <div style={styles.cardBody}>
            <div style={styles.cardItem}>
              <p style={styles.cardItemLabel}>Phone:</p>
              <p style={styles.cardItemValue}>{props.employee.phone}</p>
            </div>
            <div style={styles.cardItem}>
              <p style={styles.cardItemLabel}>Email:</p>
              <p style={styles.cardItemValue}>{props.employee.email}</p>
            </div>
            <div style={styles.cardItem}>
              <p style={styles.cardItemLabel}>Location:</p>
              <p style={styles.cardItemValue}>{props.employee.location}</p>
            </div>
            {props.employee.department && (
              <div style={styles.cardItem}>
                <p style={styles.cardItemLabel}>Department:</p>
                <p style={styles.cardItemValue}>{props.employee.department}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div style={styles.cardHeader}>
            <h2>{props.employee.team} Team</h2>
          </div>
          <h4>Team Members:</h4>
          <div style={styles.cardBodyTeamMembers}>
            {props.employees
              .filter(
                (employee) => employee.parentId === props.employee.id.toString()
              )
              .map((employee) => (
                <div style={styles.cardItemTeam} key={employee.id}>
                  <img
                    style={styles.cardItemImg}
                    src={employee.imageUrl}
                    alt="Profile"
                  />
                  <p style={styles.cardItemName}>{employee.name}</p>
                  <p style={styles.cardItemRole}>{employee.positionName}</p>
                </div>
              ))}
          </div>
        </div>
      )}
      <div style={styles.cardItem}>
        <p style={styles.cardItemLabel}>Description:</p>
        <p style={styles.cardItemValue}>{props.employee.description}</p>
      </div>
    </div>
  );
};

export default EmployeeDetailsCard;

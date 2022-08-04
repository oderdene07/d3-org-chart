import React from "react";
import { FaBuilding } from "react-icons/fa";

const styles = {
  nodeContainer: {
    minHeight: "150px",
    backgroundColor: "#227c9d",
    color: "#227c9d",
    display: "flex",
    justifyContent: "center",
    borderRadius: "1rem",
  },
  nodeDetails: {
    width: "100%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nodeContent: {
    display: "flex",
    alignItems: "center",
  },
  nodeTeam: {
    width: "100%",
    textAlign: "center",
  },
  nodeTeamName: {
    marginBottom: "0.5rem",
    color: "#fef9ef",
    fontSize: "1.5rem",
  },
  nodeTeamMemberImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    margin: "0.2rem",
  },
  nodeImg: {
    width: "90px",
    height: "90px",
    borderRadius: "1rem",
  },
  nodeInfo: {
    marginLeft: "1.5rem",
    color: "#fef9ef",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  nodeName: {
    paddingBottom: "0.3rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  nodeRole: {
    paddingBottom: "0.5rem",
    fontSize: "1.2rem",
  },
  nodeDepartment: {
    padding: "0.5rem",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffcb77",
    borderRadius: "1rem",
    color: "#227c9d",
  },
  icon: {
    marginRight: "0.5rem",
  },
};

const CustomNodeContent = (props) => {
  return (
    <>
      <div style={styles.nodeContainer}>
        <div style={styles.nodeDetails}>
          {props.data.team === "" ? (
            <div style={styles.nodeContent}>
              <img
                style={styles.nodeImg}
                src={props.data.imageUrl}
                alt="Profile"
              />
              <div style={styles.nodeInfo}>
                <div style={styles.nodeName}>{props.data.name}</div>
                <div style={styles.nodeRole}>{props.data.positionName}</div>
                {props.data.department && (
                  <div style={styles.nodeDepartment}>
                    <FaBuilding style={styles.icon} />
                    <div>{props.data.department}</div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div style={styles.nodeTeam}>
              <div style={styles.nodeTeamName}>{props.data.team}</div>
              {props._children !== null &&
                props._children
                  .slice(0, 4)
                  .map((child) => (
                    <img
                      key={child.data.id}
                      style={styles.nodeTeamMemberImg}
                      src={child.data.imageUrl}
                      alt="team member"
                    />
                  ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomNodeContent;

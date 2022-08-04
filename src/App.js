import React from "react";
import OrganizationalChart from "./components/orgChart";
import employees from "./data";

const styles = {
  title: {
    backgroundColor: "#404e7c",
    color: "#fef9ef",
    textAlign: "center",
    padding: "1rem",
    fontSize: "1.5em",
    zIndex: "1",
  },
};

const App = () => {
  return (
    <>
      <h1 style={styles.title}>Organization Chart</h1>
      <OrganizationalChart data={employees} />
    </>
  );
};

export default App;

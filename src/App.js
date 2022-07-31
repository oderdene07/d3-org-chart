import React from "react";
import OrganizationalChart from "./components/orgChart";
import employees from "./data";

const App = () => {
  return (
    <>
      <h1 className="title">Organization Chart</h1>
      <OrganizationalChart data={employees} />
    </>
  );
};

export default App;

import React from "react";

// set the defaults
const RouterContext = React.createContext({
  activeId: "Home",
  setActiveId: (prevactiveId) => { }
});

export default RouterContext;
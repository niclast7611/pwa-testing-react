import React from "react";
import "./App.css";

function App() {
  return <div className="App">Hello World</div>;
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/service-worker.ts");
  });
}
export default App;

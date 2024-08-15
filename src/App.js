import { useEffect, useState } from "react";
import Admin from "./containers/Admin";
import Landing from "./containers/Landing";
import Invalid from "./containers/Invalid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [path, setPath] = useState("/");

  useEffect(() => {
    const url = window.location.pathname;
    setPath(url);
  }, []);

  const handlePath = (path) => {
    setPath(path);
  };

  return (
    <div>
      <Router>
        <Header path={path} handlePath={handlePath} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Invalid />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

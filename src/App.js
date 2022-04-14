import "./App.css";
import Nav from "./containers/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Home from "./containers/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="form" element={<Form />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

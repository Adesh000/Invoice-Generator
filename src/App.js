import React, { Children } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./pages/InvoiceForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/invoice" element={<InvoiceForm />} />
            <Route path="/invoice/:id" element={<InvoiceForm />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
};

export default App;

import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { removeInvoice } from "../features/invoiceSlice";
import InvoiceForm from "./InvoiceForm";

const Home = () => {
  const result = useSelector((state) => state.invoice.invoices);
  console.log("Result", result);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    navigate(`/invoice/${id}`);
  };

  return (
    <Container>
      <Card className="p-4 p-xl-5 my-3 my-xl-4">
        <div className="d-flex align-items-center justify-content-around">
          <div className="fw-bold">Create Invoice</div>
          <Button
            onClick={() => {
              navigate("/invoice");
            }}
          >
            Create
          </Button>
        </div>
        <Card className="mt-3">
          <Card.Header>
            <Row>
              <Col>Invoice Id</Col>
              <Col>Invoice Date</Col>
              <Col>Invoice Amount</Col>
              {/* <Col>Invoice Status</Col> */}
              <Col>Action Buttons</Col>
            </Row>
          </Card.Header>
          <Card.Body>
            {result.map((invoice) => {
              return (
                <Row key={invoice.id}>
                  <Col>{invoice.id}</Col>
                  <Col>{invoice.dateOfIssue}</Col>
                  <Col>{invoice.total}</Col>
                  {/* <Col>Unpaid</Col> */}
                  <Col>
                    <BiEdit
                      onClick={() => {
                        handleEdit(invoice.id);
                      }}
                      style={{
                        height: "33px",
                        width: "33px",
                        padding: "7.5px",
                      }}
                      className="text-white mt-1 btn btn-primary me-2"
                    />
                    <BiTrash
                      onClick={() => {
                        dispatch(removeInvoice(invoice.id));
                      }}
                      style={{
                        height: "33px",
                        width: "33px",
                        padding: "7.5px",
                      }}
                      className="text-white mt-1 btn btn-danger"
                    />
                  </Col>
                </Row>
              );
            })}
          </Card.Body>
        </Card>
      </Card>
    </Container>
  );
};

export default Home;

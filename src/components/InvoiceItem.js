import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BiTrash } from "react-icons/bi";
import EditableField from "./EditableField";
import { useDispatch, useSelector } from "react-redux";
import {
  addInvoiceItem,
  removeInvoiceItem,
} from "../features/invoiceItemSlice";

const InvoiceItem = ({ currency }) => {
  const dispatch = useDispatch();
  const invoiceItems = useSelector((state) => state.invoiceItem.invoiceItems);
  const itemTable = invoiceItems.map((item) => {
    return (
      <tr key={item.id}>
        <ItemRow item={item} currency={currency} />
      </tr>
    );
  });
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>{itemTable}</tbody>
      </Table>
      <Button className="fw-bold" onClick={() => dispatch(addInvoiceItem())}>
        Add Item
      </Button>
    </div>
  );
};
const ItemRow = ({ item, currency }) => {
  const dispatch = useDispatch();
  return (
    <>
      <td style={{ width: "100%" }}>
        <EditableField
          cellData={{
            type: "text",
            name: "name",
            placeholder: "Item name",
            value: item.name,
            id: item.id,
          }}
        />
        <EditableField
          cellData={{
            type: "text",
            name: "description",
            placeholder: "Item description",
            value: item.description,
            id: item.id,
          }}
        />
      </td>
      <td style={{ minWidth: "100px" }}>
        <EditableField
          cellData={{
            type: "number",
            name: "quantity",
            min: 1,
            step: "1",
            value: item.quantity,
            id: item.id,
          }}
        />
      </td>
      <td style={{ minWidth: "130px" }}>
        <EditableField
          cellData={{
            leading: currency,
            type: "number",
            name: "price",
            min: 1,
            step: "0.01",
            presicion: 2,
            textAlign: "text-end",
            value: item.price,
            id: item.id,
          }}
        />
      </td>
      <td className="text-center" style={{ minWidth: "50px" }}>
        <BiTrash
          onClick={() => dispatch(removeInvoiceItem(item.id))}
          style={{ height: "33px", width: "33px", padding: "7.5px" }}
          className="text-white mt-1 btn btn-danger"
        />
      </td>
    </>
  );
};

export default InvoiceItem;

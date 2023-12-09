import { createSlice, nanoid } from "@reduxjs/toolkit";

export const invoiceItem = createSlice({
  name: "invoiceItem",
  initialState: {
    invoiceItems: [
      {
        id: nanoid(),
        name: "",
        price: "1.00",
        description: "",
        quantity: 1,
      },
    ],
  },
  reducers: {
    addInvoiceItem: (state, action) => {
      const newItem = {
        id: nanoid(),
        name: "",
        price: "1.00",
        description: "",
        quantity: 1,
      };
      state.invoiceItems.push(newItem);
    },
    removeInvoiceItem: (state, action) => {
      state.invoiceItems = state.invoiceItems.filter(
        (item) => item.id !== action.payload
      );
    },
    onItemizedItemEdit: (state, action) => {
      const { id, name, value, itemId } = action.payload;
      const itemToEdit = state.invoiceItems.find((item) => item.id === itemId);
      if (itemToEdit) {
        for (const key in itemToEdit) {
          if (key === name && itemToEdit.id === id) {
            itemToEdit[key] = value;
          }
        }
        console.log(itemToEdit);
      }
    },
  },
});

export const { addInvoiceItem, removeInvoiceItem, onItemizedItemEdit } =
  invoiceItem.actions;
export default invoiceItem.reducer;

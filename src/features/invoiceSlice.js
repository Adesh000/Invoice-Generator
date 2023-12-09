import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  invoices: [],
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addInvoice: (state, action) => {
      // const { items, dateOfIssue, total } = action.payload;
      const invoice = {
        ...action.payload,
        id: nanoid(),
      };
      state.invoices.push(invoice);
    },

    removeInvoice: (state, action) => {
      state.invoices = state.invoices.filter(
        (invoice) => invoice.id !== action.payload
      );
    },

    editInvoice: (state, action) => {
      const { id, ...rest } = action.payload;
      const invoiceToEdit = state.invoices.find((invoice) => invoice.id === id);
      if (invoiceToEdit) {
        for (const key in invoiceToEdit) {
          if (key in rest) {
            invoiceToEdit[key] = rest[key];
          }
        }
      }
      console.log(invoiceToEdit); 
    },
  },
});

export const { addInvoice, removeInvoice, editInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;

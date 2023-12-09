import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "../features/invoiceSlice";
import invoiceItemReducer from "../features/invoiceItemSlice";
import totalPriceReducer from "../features/amountSlice";

export const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
    invoiceItem: invoiceItemReducer,
    total: totalPriceReducer,
  },
});

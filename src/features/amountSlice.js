import { createSlice } from "@reduxjs/toolkit";

export const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState: {
    totalPrice: {
      subTotal: 0,
      tax: 0,
      total: 0,
      discount: 0,
    },
  },
  reducers: {
    handleCalculateTotal: (state, action) => {
      const { invoiceItems, taxRate, discountRate } = action.payload;
      let newSubTotal = 0;
      invoiceItems.forEach((item) => {
        newSubTotal = parseFloat(
          newSubTotal + parseFloat(item.price) * parseInt(item.quantity)
        );
      });

      state.totalPrice.subTotal = parseFloat(newSubTotal).toFixed(2);
      state.totalPrice.tax = parseFloat(
        parseFloat(newSubTotal) * (taxRate / 100)
      ).toFixed(2);
      state.totalPrice.discount = parseFloat(
        parseFloat(newSubTotal) * (discountRate / 100)
      ).toFixed(2);

      state.totalPrice.total = parseFloat(
        parseFloat(newSubTotal) +
          parseFloat(state.totalPrice.tax) -
          parseFloat(state.totalPrice.discount)
      ).toFixed(2);
    },
  },
});
export const { handleCalculateTotal } = totalPriceSlice.actions;
export default totalPriceSlice.reducer;

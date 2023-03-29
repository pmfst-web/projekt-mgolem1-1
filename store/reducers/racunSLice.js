import { createSlice } from '@reduxjs/toolkit';
import { BillList } from '../../data/BillList';
const initialState = {
  racun: BillList,
  filterRacun: [],
};

const racunSlice = createSlice({
  name: 'racun',
  initialState,
  reducers: {
    addBill: (state, action) => {
      console.log(state);
      console.log(action.payload);
      const existingID = state.racun.find(
        (item) => item.id === action.payload.id
      );

      if (existingID) {
        console.log('error');
      } else {
        return {
          ...state,
          racun: state.racun.concat(action.payload),
        };
      }
    },
    deleteBill: (state, action) => {
      const deleteBill = state.racun.filter(
        (racun) => racun.id !== action.payload
      );
      return { ...state, racun: deleteBill, filterTypeBill: deleteBill };
    },
    updateRacun: (state, action) => {
      const {
        payload: { id, date, type, category, amount },
      } = action;
      return (state.racun = state.racun.map((racun) =>
        racun.id === id
          ? {
              ...racun,
              id,
              date,
              type,
              category,
              amount,
            }
          : racun
      ));
    },

    filterTypeBill: (state, action) => {
      if (action.payload.toUpperCase() == 'ALL') {
        return { ...state, filterRacun: state.racun };
      }
      const filterRacun = state.racun.filter(
        (r) => r.type.toUpperCase() === action.payload.toUpperCase()
      );
      console.log(filterRacun);
      return { ...state, filterRacun };
    },
  },
});

export const getRacunSelector = (state) => state.racun.racun;
export const getFilterRacunSelector = (state) => state.racun.filterRacun;
export const { addBill, deleteBill, updateRacun, totalAmount, filterTypeBill } =
  racunSlice.actions;

export default racunSlice.reducer;

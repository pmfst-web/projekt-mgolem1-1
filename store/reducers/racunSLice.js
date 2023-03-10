import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const BillList: Racun[] = [
  {
    id: 1,
    date: new Date(),
    type: 'Rashod',
    category: 'Namirnice',
    amount: 200,
  },
  {
    id: 2,
    date: new Date(),
    type: 'Rashod',
    category: 'Namirnice',
    amount: 200,
  },
  {
    id: 4,
    date: new Date(),
    type: 'Rashod',
    category: 'Namirnice',
    amount: 200,
  },
  {
    id: 5,
    date: new Date(),
    type: 'Rashod',
    category: 'Namirnice',
    amount: 200,
  },
];

const racunSlice = createSlice({
  name: 'racun',
  initialState: BillList,
  reducers: {
    totalAmount: (state) => {
      return (state) =>
        state.reduce((totals, current) => {
          return totals + current.amount;
        }, 0);
    },
    addBill: (state, action) => {
      const existingID = state.find((item) => item.id === action.payload.id);

      if (existingID) {
        console.log('error');
      } else {
        return [action.payload, ...state];
      }
    },
    deleteBill: (state, action) => {
      console.log('aa')
      return (state = state.filter((racun) => racun.id !== action.payload));
    },
    updateRacun: (state, action) => {
      const {
        payload: { id, date, type, category, amount },
      } = action;
      return (state = state.map((racun) =>
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
      return (state = state.filter((racun) => racun.type !== action.payload));
    },
  },
});

export const getRacunSelector = (state) => state.racun;
export const { addRacun, deleteBill, updateRacun, totalAmount} =
  racunSlice.actions;

export default racunSlice.reducer;

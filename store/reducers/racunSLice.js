import { createSlice } from '@reduxjs/toolkit';
import { BillList } from '../../data/BillList';
import {CategoryList} from '../../data/CategoryList'
const initialState = {
  racun: BillList,
  category: CategoryList,
  categoryByType:[],
  filterRacun: [],
};

const racunSlice = createSlice({
  name: 'racun',
  initialState,
  reducers: {
    addBill: (state, action) => {
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
      return { ...state, racun: deleteBill };
    },

    filterTypeBill: (state, action) => {
      if (action.payload.toUpperCase() == 'ALL') {
        return { ...state, filterRacun: state.racun };
      }
      const filterRacun = state.racun.filter(
        (r) => r.type.toUpperCase() === action.payload.toUpperCase()
      );

      return { ...state, filterRacun };
    },
    getCategory:(state,action)=>{
    console.log(action.payload)
    console.log(state.category)
    const categoryByType = state.category.filter(
        (c) => c.type.toUpperCase() === action.payload.toUpperCase()
      );
    return {...state,categoryByType}
  },
  getStatisticsOfCategory:(state,action)=>{
    let total=0;
    state.racun.map((c)=>{
      if(c.category===action.payload){
        total+=c.amount;
      }
    })
  }
  },
  
});

export const { addBill, deleteBill, filterTypeBill,getCategory } =
  racunSlice.actions;

export default racunSlice.reducer;

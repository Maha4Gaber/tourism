import {   createSlice } from '@reduxjs/toolkit';


const initialState = {
  places: localStorage.getItem('Fav_places') ?
    JSON.parse(localStorage.getItem('Fav_places')) :
    []
  ,
  cartTotalQuantity: 0,
  CartTotalAmount:0
};

export const Fav = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToFav(state,action) {
      const itemIndex = state.places.findIndex(
        (item)=> item.slug.current === action.payload.slug.current
      )
      if (itemIndex>=0)
      {
        // state.places[itemIndex].cartQuantity += 1;
        // toast.info('Incerased Product Quantity',{
        //   position:"bottom-left"
        // })
      }
      else
      {
        const tempProduct = { ...action.payload}
        state.places.push(tempProduct)
        // toast.success(` ${action.payload.title} Added To card`,{
        //   position:"bottom-left"
        // })
      }
      localStorage.setItem('Fav_places',JSON.stringify(state.places))
    },
    removeFromFav(state,action) {
      state.places=state.places.filter((place)=> place.slug.current !== action.payload.slug.current)
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchproduct.fulfilled,(state,action) => {
    //   return action.payload
    // })
  }
});

export const {addToFav,removeFromFav  } = Fav.actions;



export default Fav.reducer;

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,

}

const modalPostSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    handleClose: (state) =>{
        state.show=false
    },
    handleShow: (state) =>{
        state.show=true
    }
  }
});

export const {handleClose, handleShow } = modalPostSlice.actions

export default modalPostSlice.reducer
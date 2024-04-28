import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalData: [], 
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalData = action.payload;
    },
    closeModal: (state) => {
      state.modalData = [];
    },
    createModal: (state, action) => {
      state.modalData.push(action.payload);
    }
  },
});

export const { openModal, closeModal, createModal } = modalSlice.actions;

export const selectModalData = (state) => state.modal.modalData;

export default modalSlice.reducer;

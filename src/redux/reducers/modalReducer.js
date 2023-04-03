import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "modal",
    initialState: {
        modalVisible: false
    },
    reducers: {
        setModalVisible: (state, action) => {
            state.modalVisible = action.payload
        }
    }
})

export const { setModalVisible } = slice.actions
export default slice.reducer
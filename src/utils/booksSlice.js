import { createSlice } from "@reduxjs/toolkit";
import { popularBooks } from "./Books";



const booksSlice = createSlice({
    name: "books",
    initialState:{
        booksList: popularBooks,
        lastAddedBook: null,
    },
    reducers:{
        addBook:(state,action)=>{
            state.booksList.push(action.payload);
            state.lastAddedBook = action.payload;
        },
        
    }
})
export const { addBook, setBooks } = booksSlice.actions;
export default booksSlice.reducer;
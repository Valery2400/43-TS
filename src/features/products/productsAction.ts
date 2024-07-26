import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// описание асинхронного запроса
// такие функции называют actions
// на ка

export const getProducts = createAsyncThunk(

  'getProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

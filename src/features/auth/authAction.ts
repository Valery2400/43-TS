import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const thunkName = createAsyncThunk(
  'authAction',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('url}');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

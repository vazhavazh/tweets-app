import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
axios.defaults.baseURL = 'https://64234c1c77e7062b3e2f81ce.mockapi.io/';

export const fetchAllUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (error) {
      Notify.failure(`Oops something go wrong ...`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const follow = createAsyncThunk(
  'users/follow',
  async ({ userId, credentials }, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${userId}`, credentials);
      return response.data;
    } catch (error) {
      Notify.failure(`Oops something go wrong ...`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const unFollow = createAsyncThunk(
  'users/unfollow',
  async ({ userId, credentials }, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${userId}`, credentials);
      return response.data;
    } catch (error) {
      Notify.failure(`Oops something go wrong ...`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

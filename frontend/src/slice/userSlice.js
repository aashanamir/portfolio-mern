import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "../API/Baseurl";


const userSlice = createSlice({
  name: "user",
  initialState: {
    userStatus: "idle",
    userData: null,
  },

  reducers: {
    setStatus: (state, action) => {
      state.userStatus = action.payload;
    },
    setData: (state, action) => {
      state.userData = action.payload;
    }
  }
})

export const { setData, setStatus } = userSlice.actions;

export default userSlice.reducer;


// Actions

export function SignInUser(email, password) {
  return async function SignInUserThunk(dispatch) {
      dispatch(setStatus("loading"));
    try {
      const { data } = await axios.post(BASEURL + "user/login", {
        email, password
      }, {
        headers: {
          "Content-Type": "application/json"
        }, withCredentials: true,
      });

      dispatch(setData(data));
      dispatch(setStatus("idle"));

      console.log(data);
    } catch (error) {
      alert(error.response.data.message);
      dispatch(setStatus("error"));
    }
  }
};


export function fetchUserDetails(){
  return async function fetchUserDetailsThunk(dispatch){
    dispatch(setStatus("loading"));
    try {
      const {data} = await axios.get(BASEURL + "user/me" , {
        withCredentials : true,
      });
      dispatch(setData(data));
      dispatch(setStatus("idle"));
    } catch (error) {
      console.log(error);
      dispatch(setStatus("error"));
    }
  }
}
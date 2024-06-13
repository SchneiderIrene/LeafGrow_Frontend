import { Pot, PotsSliceState } from "./types"
import axios, { AxiosError } from "axios"
import { createAppSlice } from "store/createAppSlice"

const potsInitialState: PotsSliceState = {
  pots: [],
  status: "default",
  error: undefined
}

export const potsSlice = createAppSlice({
  name: "POTS",
  initialState: potsInitialState,
  reducers: create => ({
    activatePot: create.asyncThunk(
      async (id: string, thunkApi) => {
        try {
          console.log(id)
          const response = await axios.post(`/api/pots/${id}/activate`)
          console.log(response.data)

          return response.data
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response?.status === 500) {
              return thunkApi.rejectWithValue({
                message: "Server Error",
                type: "server errors",
              })
            }
            return thunkApi.rejectWithValue({
              message: error?.response?.data.message,
              type: "validation",
            })
          }
        }
      },
      {
        pending: (state: PotsSliceState) => {
          state.status = "loading"
          state.error = undefined
        
        },
        fulfilled: (state: PotsSliceState, action: any) => {
          state.status = "success"
          console.log("Payload received:", action.payload);
          if (action.payload && action.payload.id) {
          state.pots = state.pots.map((p)=>{
            if(p.id === action.payload.id){
              return action.payload
            }
            console.log(action.payload);
            
            return p;
          })
        } else {
          console.error("Unexpected payload format:", action.payload);
        }

        
        },
        rejected: (state: PotsSliceState, action: any) => {
          console.log(action.payload)
          state.status = "error"
          state.error = action.payload.message
        },
      },
    ),
    deActivatePot: create.asyncThunk(
      async (id: string, thunkApi) => {
        try {
          console.log(id)
          const response = await axios.post(`/api/pots/${id}/refresh`)
          console.log(response.data)

          return response.data
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response?.status === 500) {
              return thunkApi.rejectWithValue({
                message: "Server Error",
                type: "server errors",
              })
            }
            return thunkApi.rejectWithValue({
              message: error?.response?.data.message,
              type: "validation",
            })
          }
        }
      },
      {
        pending: (state: PotsSliceState) => {
          state.status = "loading"
          state.error = undefined
        
        },
        fulfilled: (state: PotsSliceState, action: any) => {
          state.status = "success"
          console.log("Payload received:", action.payload);
          if (action.payload && action.payload.id) {
          state.pots = state.pots.map((p)=>{
            if(p.id === action.payload.id){
              return action.payload
            }
            console.log(action.payload);
            
            return p;
          })
        } else {
          console.error("Unexpected payload format:", action.payload);
        }

        
        },
        rejected: (state: PotsSliceState, action: any) => {
          console.log(action.payload)
          state.status = "error"
          state.error = action.payload.message
        },
      },
    ),
    potProfile: create.asyncThunk(
      async (_, thunkApi) => {
        try {
          const response = await axios.get(`/api/pots/my`)
          console.log(response.data)
          return response.data
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response?.status === 500) {
              return thunkApi.rejectWithValue({
                message: "Server Error",
                type: "server errors",
              })
            }
            return thunkApi.rejectWithValue({
              message: error?.response?.data.message,
              type: "validation",
            })
          }
        }
      },
      {
        pending: (state: PotsSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: PotsSliceState, action: any) => {
          state.status = "success"
          state.pots = action.payload
          // localStorage.setItem("potProfile", JSON.stringify(true))
        },
        rejected: (state: PotsSliceState, action: any) => {
          console.log(action.payload)
          state.status = "error"
          state.error = action.payload.message
        },
      },
    ),
  }),
  selectors: {
    potData: state => state.pots,
    status: state => state.status,
    error: state => state.error,
  },
})

export const potsSliceActions = potsSlice.actions
export const potsSliceSelectors = potsSlice.selectors

import { createAppSlice } from "store/createAppSlice"
import { AuthSliceState, User } from "./types"
import axios, { AxiosError } from "axios"

const userInitialState: AuthSliceState = {
  userData: null,
  isLogin: JSON.parse(localStorage.getItem("isLogin") || "false"),
  status: "default",
  error: undefined,
  errorField: null,
}

export const authSlice = createAppSlice({
  name: "AUTH",
  initialState: userInitialState,
  reducers: create => ({
    registerUser: create.asyncThunk(
      async (userData: User, thunkApi) => {
        try {
          const response = await axios.post("api/register", userData)
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
        pending: (state: AuthSliceState) => {
          state.status = "loading"
          state.error = undefined
          state.errorField = null
        },
        fulfilled: (state: AuthSliceState, action: any) => {
          state.status = "success"
          state.userData = action.payload
        },
        rejected: (state: AuthSliceState, action: any) => {
          console.log(action.payload)
          state.status = "error"
          const { type, message } = action.payload
          if (type === "validation" && message) {

            state.errorField = {
              message: "Dieser Benutzername oder E-Mail werden bereits verwendet. Bitte, verwende einen anderen Benutzernamen oder E-Mail"
            };
            }
            else {
              state.error = action.payload.message
            }
          
        },
      },
    ),
    confirm: create.asyncThunk(
      async (code: string, thunkApi) => {
        try {
          const response = await axios.get(`/api/register/confirm?code=${code}`)
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response?.status === 500) {
              return thunkApi.rejectWithValue({
                message: "Server Error",
                type: "server errors",
              })
            }
            if (error.response?.status === 408) {
              return thunkApi.rejectWithValue({
                message: "Истек срок действия ссылки",
                type: "server errors",
              })
            }

            return thunkApi.rejectWithValue(error?.response?.data.message)
          }
        }
      },
      {
        pending: (state: AuthSliceState, action: any) => {
          state.status = "loading"
          state.userData = action.payload
          state.isLogin = false
          localStorage.setItem("isLogin", JSON.stringify(false))
        },
        fulfilled: (state: AuthSliceState, action: any) => {
          state.status = "success"
          state.userData = action.payload
          state.isLogin = true
          localStorage.setItem("isLogin", JSON.stringify(true))
        },
        rejected: (state: AuthSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload
        },
      },
    ),
    resetEmail: create.asyncThunk(
      async (_, thunkApi) => {
        try {
          const response = await axios.get("/api/register/resent")
          return response.data
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response?.status === 500) {
              return thunkApi.rejectWithValue("Server Error")
            }
            return thunkApi.rejectWithValue(error?.response?.data.message)
          }
        }
      },
      {
        pending: (state: AuthSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: AuthSliceState, action: any) => {
          state.status = "success"
          state.userData = action.payload
        },
        rejected: (state: AuthSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload
        },
      },
    ),
    logIn: create.asyncThunk(
      async (userData: User, thunkApi) => {
        try {
          const response = await axios.post("/api/auth/login", userData)
          return response.data
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response?.status === 500) {
              return thunkApi.rejectWithValue({
                message: "Server Error",
                type: "server errors",
              })
            }
            if (error.response?.status === 401) {
              return thunkApi.rejectWithValue({
                message: "Musst du deine Registrierung per E-Mail bestätigen",
                type: "confirm errors",
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
        pending: (state: AuthSliceState) => {
          state.status = "loading"
          state.error = null
          state.errorField = null
        },
        fulfilled: (state: AuthSliceState, action: any) => {
          state.status = "success"
          state.isLogin = true
          localStorage.setItem("isLogin", JSON.stringify(true))
        },
        rejected: (state: AuthSliceState, action: any) => {
          state.status = "error"
          state.isLogin = false
          localStorage.setItem("isLogin", JSON.stringify(false))

          console.log(action.payload)
          const { type, message } = action.payload
          if (type === "validation") {
            state.errorField = {
              email: "Deine E-Mail-Adresse oder dein Passwort sind falsch.",
              password: "Deine E-Mail-Adresse oder dein Passwort sind falsch.",
            }
          } else {
            state.error = action.payload.message
          }
        },
      },
    ),
    logOut: create.asyncThunk(
      async (_, thunkApi) => {
        try {
          const response = await axios.get("/logout")
          return response.data
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response?.status === 500) {
              return thunkApi.rejectWithValue("Server Error")
            }
            return thunkApi.rejectWithValue(error?.response?.data.message)
          }
        }
      },
      {
        pending: (state: AuthSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: AuthSliceState, action: any) => {
          state.status = "success"
          state.userData = null
          state.isLogin = false
          localStorage.setItem("isLogin", JSON.stringify(false))
          state.error = null
        },
        rejected: (state: AuthSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload.message
        },
      },
    ),
    userProfile: create.asyncThunk(
      async (_, thunkApi) => {
        try {
          const response = await axios.get("/api/auth/profile")
          return response.data
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response?.status === 500) {
              return thunkApi.rejectWithValue("Server Error")
            }
            return thunkApi.rejectWithValue(error?.response?.data.message)
          }
        }
      },
      {
        pending: (state: AuthSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: AuthSliceState, action: any) => {
          state.status = "success"
          state.userData = action.payload
        },
        rejected: (state: AuthSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload
          state.isLogin = false
          localStorage.setItem("isLogin", JSON.stringify(false))
        },
      },
    ),
    changePassword: create.asyncThunk(
      async (userData: User, thunkApi) => {
        try {
          const response = await axios.patch(
            "/api/auth/profile/change-password",
            {
              newPassword: userData.newPassword,
            },
          )
          return response.data
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response?.status === 500) {
              return thunkApi.rejectWithValue("Server Error")
            }
            return thunkApi.rejectWithValue(error?.response?.data.message)
          }
        }
      },
      {
        pending: (state: AuthSliceState) => {
          state.status = "loading"
          state.error = undefined
          state.isLogin = true
          localStorage.setItem("isLogin", JSON.stringify(true))
        },
        fulfilled: (state: AuthSliceState, action: any) => {
          state.status = "success"
          state.userData = action.payload
          state.isLogin = true
          localStorage.setItem("isLogin", JSON.stringify(true))
        },
        rejected: (state: AuthSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload
          console.log(action.payload)
        },
      },
    ),
    deleteAccount: create.asyncThunk(
      async (_, thunkApi) => {
        try {
          const response = await axios.delete("/api/auth/profile/delete-user")
          return response.data
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response?.status === 500) {
              return thunkApi.rejectWithValue("Server Error")
            }
            return thunkApi.rejectWithValue(error?.response?.data.message)
          }
        }
      },
      {
        pending: (state: AuthSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: AuthSliceState, action: any) => {
          state.status = "success"
          state.userData = null
          state.isLogin = false
          localStorage.setItem("isLogin", JSON.stringify(false))
        },
        rejected: (state: AuthSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload
        },
      },
    ),
  }),
  selectors: {
    isLogin: state => state.isLogin,
    userData: state => state.userData,
    status: state => state.status,
    errorField: state => state.errorField,
    error: state => state.error,
  },
})

export const authSliceActions = authSlice.actions
export const authSliceSelectors = authSlice.selectors

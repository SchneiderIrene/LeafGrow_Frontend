export interface User {
  username?: string
  email?: string
  password?: string
  newPassword?: string,
  akzeptCheckBox?: boolean
}

export interface ErrorField{
  username?: string | null,
  email: string | null
  password?: string | null
}

export interface AuthSliceState {
  userData: User | null;
  isLogin: boolean;
  status: "default" | "loading" | "success" | "error";
  error: any;
  errorField: ErrorField | null,
  
  
}
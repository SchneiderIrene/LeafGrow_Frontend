import { ChangeEvent, FocusEvent } from "react"
import { FormikErrors } from "formik"
import { ErrorField } from "store/redux/auth/types";

export interface InputProps {
  name: string
  type?: string
  placeholder: string
  label?: string
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
  error?: string | FormikErrors<any> | string[] | FormikErrors<any>[] | ErrorField | null
  onBlur?: (e: FocusEvent<any, Element>) => void
  onChange?: (e: React.FocusEvent<any, Element>)=> void
}
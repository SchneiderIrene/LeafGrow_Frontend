import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "pages/Layout/Layout"
import Home from "pages/Home/Home"
import Guide from "pages/Guide/Guide"
import MyPots from "pages/MyPots/MyPots"



import LoginForm from "pages/LoginForm/LoginForm"
import RegisterForm from "pages/RegisterForm/RegisterForm"
import Account from "pages/Account/Account"
import BetweenPage from "pages/BetweenPage/BetweenPage";
import QueryParamProvider from "use-query-params/dist/QueryParamProvider"
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  authSliceActions,
  authSliceSelectors,
} from "store/redux/auth/authSlice"
import LegalInfo from "pages/LegalInfo/LegalInfo";
import Pot from "pages/MyPots/Pot/Pot";


function App() {
  const isLogin = useAppSelector(authSliceSelectors.isLogin)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (isLogin) {
      dispatch(authSliceActions.userProfile())
    }
  }, [isLogin])

  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legalInfo" element={<LegalInfo />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/mypots" element={<MyPots />} />
            <Route path="/mypots/pot/:id" element={<Pot />} />

            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/account" element={<Account />} />
            <Route path="/betweenpage/register/confirm" element={<BetweenPage />}/>
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </Layout>
      </QueryParamProvider>
    </BrowserRouter>
  )
}

export default App

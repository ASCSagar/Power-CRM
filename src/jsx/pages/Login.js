import React, { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { setToLocalStorage } from "../../helpers/helperFunctions";
import { authAction } from "../../store/authStore";
import InputBox from "../components/UI/Form/InputBox";
import { uiAction } from "../../store/uiStore";

const InitialState = {
  userName: "",
  password: "",
  forgotEmail: "",
  submitBtn: "Login",
  resetBtn: "Click to get reset link",
};

const reducer = (state, action) => {
  return { ...state, [action.type]: action.value };
};

const Login = ({ history }) => {
  const [errorLogin, setErrorLogin] = useState("");

  const [
    sendReqData,
    setSendReqData,
    reqStatus,
    responseData,
    setResponseData,
  ] = useFetch();

  const dispatch = useDispatch();

  const [formData, dispatchInputChange] = useReducer(reducer, InitialState);

  const doLogin = async (e) => {
    e.preventDefault();
    if (!formData.userName?.length && !formData.password?.length) {
      setErrorLogin("Username and password can't be empty");
      return;
    }
    if (!formData.userName?.length) {
      setErrorLogin("Username can't be empty");
      return;
    }
    if (!formData.password?.length) {
      setErrorLogin("Password can't be empty");
      return;
    }
    dispatchInputChange({
      type: "submitBtn",
      value: "Logging In",
    });
    let body = {
      username: formData.userName,
      password: formData.password,
    };

    if (responseData) setResponseData(null);

    setSendReqData({
      ...sendReqData,
      url: "login/",
      fetchObj: {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
      expectStatusCode: [404, 400, 200],
    });
  };

  useEffect(() => {
    if (responseData) {
      dispatchInputChange({
        type: "submitBtn",
        value: "Login",
      });
      if (responseData.status === 404) {
        setErrorLogin("Username or Password is wrong, Please try again...");
      }
      if (responseData.status === 400) {
        setErrorLogin("Please check username and Password");
      }

      if (responseData.status === 200) {
        dispatch(
          uiAction.setNotification({
            show: true,
            heading: `${formData.userName}`,
            msg: `Welcome To PowerCRM`,
          })
        );
        const loginObj = {
          userName: formData.userName,
          loggedIn: true,
          accessToken: responseData.data.token.access,
          refreshToken: responseData.data.token.refresh,
          user_type: responseData.data.user_status,
          userId: responseData.data.userid,
          timeOfLogin: Date.now(),
          logInOperation: 1,
        };
        dispatch(authAction.setAuthStatus(loginObj));
        setToLocalStorage("loginInfo", loginObj, true);
        history.push("/");
      }
    }
  }, [responseData]);

  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <span className="h2 font-weight-bold">
                        POWER HOUSE - CRM
                      </span>
                    </div>
                    <h4 className="text-center mb-4 ">Sign in your account</h4>
                    <form onSubmit={doLogin}>
                      <div className="form-group">
                        <label className="mb-1 ">
                          <strong>UserName</strong>
                        </label>
                        <InputBox
                          type="text"
                          required={true}
                          value={formData.userName}
                          onChange={dispatchInputChange}
                          reducerName="userName"
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1 ">
                          <strong>Password</strong>
                        </label>
                        <InputBox
                          type="password"
                          required={true}
                          value={formData.password}
                          onChange={dispatchInputChange}
                          reducerName="password"
                        />
                      </div>
                      <div className="form-row d-flex justify-content-between mt-4 mb-2">
                        <div className="form-group">
                          <div className="custom-control custom-checkbox ml-1 ">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="basic_checkbox_1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="basic_checkbox_1"
                            >
                              Remember my preference
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <Link className="" to="page-forgot-password">
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                      {errorLogin.length ? (
                        <p style={{ color: "red" }}>{errorLogin}</p>
                      ) : (
                        ""
                      )}
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          onClick={doLogin}
                        >
                          Sign Me In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

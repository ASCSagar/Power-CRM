import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromLocalStorage,
  setToLocalStorage,
} from "../helpers/helperFunctions";
import { authAction } from "../store/authStore";
import { useHistory } from "react-router-dom";
import { uiAction } from "../store/uiStore";

const initialSendDataState = {
  url: "",
  fetchObj: "",
  notificationTime: 8,
  timeOut: 20,
  errorMsg: "",
  errTitle: "",
  expectStatusCode: [200, 201, 400],
  isAuthNeeded: false,
};

let shouldRefreshToken = 1;
function useFetch() {
  const [status, setStatus] = useState({ isLoading: false, isError: false });
  const [sendData, setSendData] = useState(initialSendDataState);
  const [response, setResponse] = useState(null);

  const dispatch = useDispatch();

  const history = useHistory();

  const authData = useSelector((state) => state.authStore);

  const fetchReq = async function (url, fetchObj) {
    const request = await fetch(
      `https://aumhealthresort.com/powercrmlatest/api/${url}`,
      fetchObj
    );
    let response = null;
    if (request.ok) {
      response = await request.json();
    }
    return { status: request.status, data: response, isError: !request.ok };
  };
  const refreshAuthToken = async function () {
    if (!authData.refreshToken) {
      return;
    }
    if (authData.logInOperation === 1) {
      return;
    }
    const response = await fetchReq("token/refresh/", {
      headers: {
        // "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        refresh: authData.refreshToken,
      }),
    });
    if (response.status === 200) {
      shouldRefreshToken = 1;
      const authDataObj = {
        ...authData,
        accessToken: response.data.access,
        timeOfLogin: Date.now(),
        logInOperation: 1,
        loggedIn: true,
      };
      dispatch(authAction.setAuthStatus(authDataObj));
      setToLocalStorage("loginInfo", authDataObj, true);
    } else {
      dispatch(
        uiAction.setNotification({
          show: true,
          heading: "",
          msg: `Can not authorise user, Please login again.`,
        })
      );
      dispatch(
        authAction.setAuthStatus({
          ...authData,
          accessToken: null,
          logInOperation: 1,
          loggedIn: false,
        })
      );
      deleteFromLocalStorage("loginInfo");
      history.push("/login");
    }
  };

  const ajaxRequest = async function () {
    try {
      setStatus({ isLoading: true, isError: false });
      const id = setTimeout(() => {
        dispatch(
          uiAction.setNotification({
            show: true,
            heading: "",
            msg: `Taking Longer Then Expected...`,
          })
        );
      }, sendData.notificationTime * 1000);

      const metaInfo = sendData.fetchObj;
      if (sendData.isAuthNeeded) {
        metaInfo.headers = {
          ...metaInfo.headers,
          Authorization: `Bearer ${authData.accessToken}`,
        };
      }
      const response = await fetchReq(sendData.url, metaInfo);
      clearTimeout(id);

      if (response.status === 401 && shouldRefreshToken === 1) {
        dispatch(
          uiAction.setNotification({
            show: true,
            heading: "",
            msg: `Identifying user, Please wait...`,
          })
        );
        shouldRefreshToken = -1;
        dispatch(
          authAction.setAuthStatus({
            ...authData,
            logInOperation: 0,
          })
        );
      }
      if (response.status === 401) {
        setResponse(null);
        return;
      }
      if (sendData.expectStatusCode.includes(response.status)) {
        setResponse({
          status: response.status,
          isError: !response.ok,
          isNetwork: false,
          data: response.data,
        });
        setStatus({ isLoading: false, isError: false });
        return;
      } else {
        setStatus({ isLoading: false, isError: true });
        setResponse({
          status: response.status,
          isError: true,
          isNetwork: false,
          data: response.data,
        });
        return;
      }
    } catch (e) {
      setStatus({ isLoading: false, isError: true });
      return {
        status: null,
        isError: true,
        isNetwork: true,
        data: null,
        error: e,
      };
    }
  };

  useEffect(() => {
    if (authData.logInOperation === 0 && shouldRefreshToken === -1) {
      shouldRefreshToken = 0;
      refreshAuthToken();
    }
  }, [authData.logInOperation, shouldRefreshToken]);

  useEffect(() => {
    if (
      !response &&
      !status.isError &&
      sendData.url?.length &&
      authData.logInOperation === 1 &&
      shouldRefreshToken
    ) {
      ajaxRequest();
    } else if (sendData.url === "login/") {
      ajaxRequest();
      shouldRefreshToken = true;
    }
  }, [
    sendData.url,
    authData.logInOperation,
    response,
    status.isError,
    shouldRefreshToken,
  ]);

  return [sendData, setSendData, status, response, setResponse, setStatus];
}

export default useFetch;

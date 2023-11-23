import { useEffect, useState } from "react";
import { authAction } from "../store/authStore";
import { useDispatch } from "react-redux";

function useAuthAction() {
  const [obj, SetObj] = useState({ type: "", data: {} });
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(obj.data)?.length) {
      doDispatch();
    }
  }, [obj]);

  const doDispatch = () => {
    if (obj.type === "setAuthStatus")
      dispatch(authAction.setAuthStatus(obj.data));
    SetObj({ type: "", data: {} });
  };

  return SetObj;
}

export default useAuthAction;

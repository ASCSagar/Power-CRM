import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { uiAction } from "../store/uiStore";

function useUiAction() {
  const [obj, SetObj] = useState({ type: "", data: {} });
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(obj.data).length) {
      doDispatch();
    }
  }, [obj]);

  const doDispatch = () => {
    if (obj.type === "setNotification") {
      dispatch(uiAction.setNotification(obj.data));
    }
  };
  return SetObj;
}

export default useUiAction;

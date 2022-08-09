import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { jwtUtils } from "../utils/jwtUtils";
import { useRefreshToken } from "../recoil/store";

const PrivateRoute = (props) => {
  // 넘어오는 props를 파악하는게 중요.
  // path, component ....
  const { tokenState } = useRefreshToken();
  const { component: RouteComponent, path } = props;

  // redirectUrl은 로그인이 성공후 돌아갈 화면이다.
  if (!jwtUtils.isValid(tokenState)) {
    alert("로그인이 필요한 페이지입니다");
    return <Navigate to={"/Signin"} />;
  }
  return <RouteComponent />;
};

export default PrivateRoute;

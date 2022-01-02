import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectIsLgoin } from "../redux/features/auth/authSlice";

//why? what should be the exact type of props here?
const ProtectedRoute = (props: any) => {
  const isLogin = useSelector(selectIsLgoin);

  if (isLogin) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;

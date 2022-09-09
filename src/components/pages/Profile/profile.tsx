import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../hook";

const Profile = () => {
  const {isAuth} = useAppSelector(state => state.auth)
  if (!isAuth) return <Navigate to={'/login'} />;

  return <div>Profile</div>;
};
export default Profile;

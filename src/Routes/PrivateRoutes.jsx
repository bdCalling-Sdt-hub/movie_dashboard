import { Navigate, useLocation } from "react-router-dom"
import { Skeleton } from "antd";
import { useGetUserQuery } from "../redux/api/usersApi";

 const PrivateRoutes = ({children}) =>{
    const location = useLocation()
    const { data: getUserInfo,isError, isLoading } = useGetUserQuery()
    if(isLoading){
        return <div className="flex items-center justify-center"><Skeleton active /></div>;
    }
    if (isError || !getUserInfo?.data?.email) {
        return <Navigate to="/auth/login" state={{ from: location }} />;
      }
    
      return children;

}
export default PrivateRoutes;
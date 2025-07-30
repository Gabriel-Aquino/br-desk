import { Navigate, Outlet } from "react-router-dom";
import Layout from "./Layout";

interface ProtectedRouteProps {
    isAuthenticated: boolean;
    onLogout: () => void;
}

const ProtectedRoute = ({ isAuthenticated, onLogout }: ProtectedRouteProps) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <Layout onLogout={onLogout}>
            <Outlet />
        </Layout>
    );
};

export default ProtectedRoute; 
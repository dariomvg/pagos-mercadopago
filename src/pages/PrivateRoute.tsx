import { JSX } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
  isDevelopment: boolean;
}

const PrivateRoute = ({ children, isDevelopment }: Props) => {
  return isDevelopment ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;

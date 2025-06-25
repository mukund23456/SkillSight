import React, { ReactNode } from "react"; // adjust the path to your actual CSS file
const AuthLayout = ({children}:{children:ReactNode}) => {
  return (
	<div className='auth-layout'>
	  {children}
	</div>
  );
};

export default AuthLayout;
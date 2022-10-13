import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const LoginPage = () => {
  const onSuccessLogin = (res) => {
    console.log("Login Successfull", res.profileObj);
  };

  const onFailureLogin = (res) => {
    console.log("Logout failed", res);
  };

  const onSuccessLogout = () => {
    console.log("Log Out Successfull");
  };

  return (
    <section className="vh-100">
      <div>
        <GoogleLogin
          clientId="8383221493-ekdghn5ufj7hghm92nkh2u6qh4op1ej1.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={onSuccessLogin}
          onFailure={onFailureLogin}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>

      <div>
        <GoogleLogout
          clientId="8383221493-ekdghn5ufj7hghm92nkh2u6qh4op1ej1.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={onSuccessLogout}
        />
      </div>
    </section>
  );
};

export default LoginPage;

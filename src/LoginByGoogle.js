import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";
 
 function LoginByGoogle()  {
  const history = useHistory();

  const responseGoogle = (response) => {
    console.log(JSON.stringify(response.nt))
    localStorage.setItem('myname', response.nt.Ad);
    localStorage.setItem('myemail', response.nt.Wt);
    console.log(localStorage.getItem('myname'))
    history.push("/home");
  }

    return(
      <div className="App">
        <div className="col-md-6 offset-md-3 text-center">
          <h1>Log in with Google</h1>
          <GoogleLogin
          clientId="617412750802-r4egras9orsp34g45hbo18gj7omcaqu5.apps.googleusercontent.com"
          buttonText="Login"
          redirectUri="postmessage"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
           />,

           
           
  
        </div>

      </div>
    );

  }
  export default LoginByGoogle

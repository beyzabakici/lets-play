import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
'552583161743-6l4q1dpefdlu8353f74db7b3vo32mff8.apps.googleusercontent.com';

function Logout(props) {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');

    props.isLogin();
    window.localStorage.setItem('isLogin', false);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export { Logout };

import React, { useState } from 'react';
import { Login } from './Login.jsx';
import { Logout } from './Logout.jsx';

function Modal(props) {
  const [isLogin, setLogin] = useState(false);

  const close = () => {
    props.close();
  };

  const renderComponents = () => {
    if (isLogin) {
      return <Logout isLogin={() => setLogin(false)} />
    }

    return <Login isLogin={() => setLogin(true)} />
  };

  const renderTitle = () => {
    return isLogin ? `Logged in successfully welcome 👋` : 'Sign in to create your event';
  }


  return (
    <div className="modal">
      <div className="modal-content">
        <a className="close-icon" onClick={close}>
          X
        </a>
        <h3>
          { renderTitle() }
        </h3>
        <p>
          Click “Sign in with Google” to create one or you can use any email address!
        </p>
        { renderComponents() }
      </div>
    </div>
  );
}

export { Modal };

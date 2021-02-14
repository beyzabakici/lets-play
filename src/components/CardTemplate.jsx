import React, { useState, useEffect } from 'react';
import { Modal } from './Modal.jsx';
import { useHistory } from 'react-router-dom';

function CardTemplate(props) {
  const [isModalVisible, setModal] = useState(false);
  const [isLogin, setLogin] = useState(false);
  let history = useHistory();

  const renderModal = () => {
    if (isModalVisible) {
      return <Modal close={() => setModal(false)} loginState={setLogin} />
    }
  };

  const handleonClick = () => {
    const loginState = window.localStorage.getItem('isLogin');
    if (!loginState) {
      setModal(true);

      return;
    }

    return history.push('/video/happy-hour');
  };

  return (
    <div>
      <div className="card-wrapper" onClick={handleonClick}>
        <div className="content">
          <p className="icon">
            { props.icon }
          </p>
          <h1 className="title">
            { props.title }
          </h1>
          <p className="description">
            { props.description }
          </p>
        </div>
      </div>
      { renderModal() }
    </div>
  )
}

export { CardTemplate };

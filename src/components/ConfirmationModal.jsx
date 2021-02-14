import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ConfirmationModal(props) {
	let history = useHistory();

	const leave = () => {
		return history.push('/');
	}

	const close = () => {
		props.close(false);
	};

    return (
        <div className="modal">
					<div className="modal-content">
							<a onClick={close} className="close-icon"> X </a>
							<h3> Are you sure want to leave this call? </h3>
							<button className="leave-button" onClick={leave}>Yes, leave</button>
							<button className="cancel-button" onClick={close}>Cancel</button>
					</div>
        </div>
    );
}

export { ConfirmationModal };

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook } from '../actions/auth';

const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => {
	return (
		<div className="box-layout">
			<div className="box-layout__box">
				<h1 className="box-layout__title">Expensefy</h1>
				<p>It's time to get your expenses under control.</p>
				<button onClick={startLoginGoogle} className="button">
					Login with Google
				</button>
				<button onClick={startLoginFacebook} className="button">
					Login with Facebook
				</button>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	startLoginGoogle: () => dispatch(startLoginGoogle()),
	startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

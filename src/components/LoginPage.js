import React from 'react';
import { connect } from 'react-redux';
import {
	FacebookLoginButton,
	GoogleLoginButton
} from 'react-social-login-buttons';
import { startLoginGoogle, startLoginFacebook } from '../actions/auth';

const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => {
	return (
		<div className="box-layout">
			<div className="box-layout__box">
				<h1 className="box-layout__title">Expensefy</h1>
				<p>It's time to get your expenses under control.</p>
				<GoogleLoginButton onClick={startLoginGoogle} className="button" />
				<FacebookLoginButton onClick={startLoginFacebook} className="button" />
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	startLoginGoogle: () => dispatch(startLoginGoogle()),
	startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(
	undefined,
	mapDispatchToProps
)(LoginPage);

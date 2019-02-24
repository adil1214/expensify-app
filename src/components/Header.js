import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createButton } from 'react-social-login-buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { startLogout } from '../actions/auth';

const MyLogoutButton = createButton({
	text: 'Logout',
	icon: () => <FontAwesomeIcon icon={faSignOutAlt} />,
	iconFormat: (name) => `fa fa-${name}`,
	style: {
		background: 'rgb(23, 130, 120)'
	},
	activeStyle: { background: '#293e69' }
});

const Header = ({ startLogout }) => (
	<header className="header">
		<div className="content-container">
			<div className="header__content">
				<Link className="header__title" to="/dashboard">
					<h1>Expensify</h1>
				</Link>
				<MyLogoutButton onClick={startLogout} />
			</div>
		</div>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(
	undefined,
	mapDispatchToProps
)(Header);

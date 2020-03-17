import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyles.scss';

const Header = () => (
	<div className='header'>
		<Link className='web-name-logo' to="/">MUSIC SEARCH</Link>
		<div className='options'>
			<Link className='option' to="/">ABOUT</Link>
			<Link className='option' to="/">HOW TO SEARCH</Link>
			<Link className='option option-d' to="/">DATABASE</Link> 
		</div>
	</div>
)

export default Header;
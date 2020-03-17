import React from 'react';
import {withRouter} from 'react-router-dom';
import './MenuItemStyles.scss';

const MenuItem = ({ id, title, imagePath, linkUrl, history, match}) => (
	<div 
		className='menu-item'
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<div className='background-image' style={{backgroundImage: `url(${imagePath})`}} />
		<div className='content'>
			<h6 className='title'>{title}</h6>
			<span className='subtitle'>GO NOW!</span>
		</div>
	</div>
)

export default withRouter(MenuItem);

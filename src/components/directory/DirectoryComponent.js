import React, { Component } from 'react';
import './DirectoryStyles.scss';
import MenuItem from '../menu-item/MenuItemComponent'

import classic from './classic.jpg'
import pop from './pop.jpg'

class Directory extends Component {
	constructor() {
		super();
		this.state = {
			sections: [{
				id: 1,
				title: 'Classical Music Search',
				imagePath: classic, 
				linkUrl: 'classic_search'
			},
			{
				id: 2,
				title: 'Pop Music Search',
				imagePath: pop,
				linkUrl: 'pop_search'
			}]
		}
	}

	render() {
		return(
			<div className='directory-menu'>
				{this.state.sections.map(({id, ...otherItemProps}) => (
					<MenuItem key={id} {...otherItemProps} />
					))}
			</div>
		)
	}
}

export default Directory;
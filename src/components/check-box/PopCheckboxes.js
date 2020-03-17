import React, { Component } from 'react';
import './PopCheckboxesStyles.scss';

import { connect } from 'react-redux';
import { p_checkboxes_changed } from '../../redux/pcheckboxes-action';


const mapDispatchToProps = dispatch => {
	return {
		p_checkboxes_changed: (status) => dispatch(p_checkboxes_changed(status))
	}
}

class PopCkeckBoxes extends Component {
	constructor() {
		super();
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
	}

	handleCheckboxChange() {
		const pstatus = {
			same_album: this.refs.album_check.checked,
			this_artiste: this.refs.artiste_check.checked,
			genre: this.refs.genre_check.checked,
			era: this.refs.era_check.checked,
			associate_artisie: this.refs.associate_check.checked
		};
		this.props.p_checkboxes_changed(pstatus);
	}

	render() {
		return(
			<div className="pop_checkbox_container">
		  	<input id="album_checkbox" ref="album_check" type="checkbox" className='pop_checkboxes' onChange={this.handleCheckboxChange} />
		  	<label htmlFor="album_checkbox">Same Album</label>

		  	<input id="artiste_checkbox" ref="artiste_check" type="checkbox" className='pop_checkboxes' onChange={this.handleCheckboxChange} />
		  	<label htmlFor="artiste_checkbox">This Artiste</label>

			  <input id="genre_checkbox" ref="genre_check" type="checkbox" className='pop_checkboxes' onChange={this.handleCheckboxChange} />
			  <label htmlFor="genre_checkbox">Genre</label>

			  <input id="era_checkbox" ref="era_check" type="checkbox" className='pop_checkboxes' onChange={this.handleCheckboxChange} />
			  <label htmlFor="era_checkbox">Year/Era</label>

			  <input id="associate_checkbox" ref="associate_check" type="checkbox" className='pop_checkboxes' onChange={this.handleCheckboxChange} />
			  <label htmlFor="associate_checkbox">Associate Artiste</label>
			</div>
		);
	}
}


export default connect(null, mapDispatchToProps)(PopCkeckBoxes);



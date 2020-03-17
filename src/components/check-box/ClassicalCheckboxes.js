import React, { Component } from 'react';
import './ClassicalCheckboxesStyles.scss';

import { connect } from 'react-redux';
import { c_checkboxes_changed } from '../../redux/ccheckboxes-action';


const mapDispatchToProps = dispatch => {
	return {
		c_checkboxes_changed: (status) => dispatch(c_checkboxes_changed(status))
	}
}

class ClassicalCkeckBoxes extends Component {
	constructor() {
		super();
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
	}

	handleCheckboxChange() {
		const cstatus = {
			this_composer: this.refs.composer_check.checked,
			work_type: this.refs.worktype_check.checked,
			genre: this.refs.c_genre_check.checked,
		};
		this.props.c_checkboxes_changed(cstatus);
	}

	render() {
		return(
			<div className="classical_checkbox_container">
			  <input id="composer_checkbox" ref="composer_check" type="checkbox" className='classical_checkboxes' onChange={this.handleCheckboxChange} />
			  <label htmlFor="composer_checkbox">This Composer</label>

			  <input id="worktype_checkbox" ref="worktype_check" type="checkbox" className='classical_checkboxes' onChange={this.handleCheckboxChange} />
			  <label htmlFor="worktype_checkbox">Work Type</label>

			  <input id="c_genre_checkbox" ref="c_genre_check" type="checkbox" className='classical_checkboxes' onChange={this.handleCheckboxChange} />
			  <label htmlFor="c_genre_checkbox">Genre</label>
			</div>
		);
	}
}


export default connect(null, mapDispatchToProps)(ClassicalCkeckBoxes);


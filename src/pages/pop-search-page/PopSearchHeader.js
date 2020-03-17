import React, { Component } from 'react';
import './PopSearchHeaderStyles.scss'

import { connect } from 'react-redux';
import { change_pop_keyword } from '../../redux/pkeyword-action';

import PopCardList from '../../components/collection-card/PopCardList';


const mapDispatchToProps = (dispatch) => {
	return {
		change_pkeyword: (event) => dispatch(change_pop_keyword(event))
	}
}

class PopSearchHeader extends Component {
	constructor() {
		super();
		this.state = {
			p_search: "",
		};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
    this.setState({p_search: event.target.value});
  }

	handleSubmit(event) {
  	this.props.change_pkeyword(this.state.p_search);
    event.preventDefault();
  }


	render() {
		return(
			<div>
				<h1 className='pagetitle'>Pop Music Search</h1>
				<div className="search__container">
					<form 
						method="get" 
						action="" 
						onSubmit={this.handleSubmit}
					>
				    <input 
				    	className="search__input" 
				    	type="text" 
				    	placeholder="Search"
				    	onChange={this.handleChange}  
				    	required 
				    />
				    <input
				    	className="image-submit" 
				    	type="image" 
				    	img="true"
				    	src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E" 
				    	alt=""
				    	onClick={this.handleSubmit}
				    />
				  </form>
				</div>
				<PopCardList />
			</div>
		);
	}
}


export default connect(null, mapDispatchToProps)(PopSearchHeader);


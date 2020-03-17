import React from 'react';
import './ClassicalCardStyles.css';
import {withRouter} from 'react-router-dom';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { change_classical_keyword } from '../../redux/ckeyword-action';
import { change_ccardinfo } from '../../redux/ccardInfo-action';
import { c_checkboxes_changed } from '../../redux/ccheckboxes-action';


const mapDispatchToProps = dispatch => {
	return {
		change_ckeyword: (event) => dispatch(change_classical_keyword(event)),
		change_ccardinfo: (info) => dispatch(change_ccardinfo(info)),
		c_checkboxes_changed: (status) => dispatch(c_checkboxes_changed(status)),
	};
}

const ClassicalCard = ({id, composer, name, work, genre, date, yt_url, history, match, change_ckeyword, change_ccardinfo, c_checkboxes_changed}) => {
  const handleClick = (composer, name, work, date, genre, yt_url) => {
  	const c_reset = 'flbexonfpcsdvbrs';
  	const thisCard = {
		  composer: composer,
		  name: name,
		  work: work,
		  date: date,
		  genre: genre,
		  youtube: yt_url
		};
		const reset_cstatus = {
			this_composer: false,
			work_type: false,
			genre: false
		};
		change_ckeyword(c_reset);
    change_ccardinfo(thisCard);
    c_checkboxes_changed(reset_cstatus);
    console.log(thisCard);
    history.push("/classical_search_yt");
  };

	return(
		<div className='dib br4 pa3 ma2 grow bw2 shadow-5 c-card-display'>
			<h2 className='composition-font'>{name}</h2>
			<h4 className='worktype-font'>Work type: {work}</h4>
			<h4 className='genre-font'>Genre: {genre}</h4>
	    <button 
				className="c-btn c-btn-one c-box-container"
				onClick={() => 
					handleClick(composer, name, work, date, genre, yt_url)}
			>
				HIT THIS COMPOSITION
			</button>
		</div>
	);
}


export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(ClassicalCard);


import React from 'react';
import './PopCardStyles.scss';
import {withRouter} from 'react-router-dom';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { change_pop_keyword } from '../../redux/pkeyword-action';
import { change_pcardinfo } from '../../redux/pcardInfo-action';
import { p_checkboxes_changed } from '../../redux/pcheckboxes-action';


const mapDispatchToProps = dispatch => {
	return {
		change_pkeyword: (event) => dispatch(change_pop_keyword(event)),
		change_pcardinfo: (info) => dispatch(change_pcardinfo(info)),
		p_checkboxes_changed: (status) => dispatch(p_checkboxes_changed(status)),
	};
}

const PopCard = ({id, artist, name, album, date, genre, yt_url, history, match, change_pkeyword, change_pcardinfo, p_checkboxes_changed}) => {
  const handleClick = (artist, name, album, date, genre, yt_url) => {
  	const p_reset = 'flbexonfpc';
  	const thisCard = {
		  artist: artist,
		  name: name,
		  album: album,
		  date: date,
		  genre: genre,
		  youtube: yt_url
		};
		const reset_pstatus = {
			same_album: false,
			this_artiste: false,
			genre: false,
			era: false,
			associate_artisie: false
		};
		change_pkeyword(p_reset);
    change_pcardinfo(thisCard);
    p_checkboxes_changed(reset_pstatus);
    history.push("/pop_search_yt");
  };

	return(
		<div className='dib br4 pa3 ma2 grow bw2 shadow-5 card-display'>
			<h2 className='song-font'>{name}</h2>
			<h3 className='singer-font'>by {artist}</h3>
			<h4 className='album-font'>Album/Single: {album}</h4>
			<p className='realease-date'>Realease date: {date}</p>
			<button 
				className="p-btn p-btn-one p-box-container"
				onClick={() =>
					handleClick(artist, name, album, date, genre, yt_url)}
			>
				HIT THIS SONG
			</button>
		</div>
	);
}


export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(PopCard);


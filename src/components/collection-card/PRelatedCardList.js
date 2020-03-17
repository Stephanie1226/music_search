import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import PopCard from './PopCard';
import './PopCardListStyles.scss';

const mapStateToProps = (state) => {
	return {
		pCheckStatus: state.pcheckboxes.pCheckStatus,
		songInfo: state.pcardInfo.pcard_info
	}
}

function PRelatedCardList (props) {
	const [albumRelated, setAlbumR] = useState([]);
	const [artisteRelated, setArtisteR] = useState([]);
	const [genreRelated, setGenreR] = useState([]);
	const [eraRelated, setEraR] = useState([]);
	const [associateRelated, setAssociateR] = useState([]);

  useEffect(() => {
	  if (props.pCheckStatus.same_album) {
			fetch(`/samealbum/${props.songInfo.album}`)
	    	.then(response => response.json())
	    	.then(data => {setAlbumR(data)});
		} else {
			setAlbumR([]);
		};

		if (props.pCheckStatus.this_artiste) {
			fetch(`/sameartist/${props.songInfo.artist}`)
	    	.then(response => response.json())
	    	.then(data => {setArtisteR(data)});
		} else {
			setArtisteR([]);
		};

		if (props.pCheckStatus.genre) {
			fetch(`/samegenre/${props.songInfo.genre}`)
	    	.then(response => response.json())
	    	.then(data => {setGenreR(data)});
		} else {
			setGenreR([]);
		};

		if (props.pCheckStatus.era) {
			fetch(`/sameera/${props.songInfo.date}`)
	    	.then(response => response.json())
	    	.then(data => {setEraR(data)});
		} else {
			setEraR([]);
		};

		if (props.pCheckStatus.associate_artisie) {
			fetch(`/associates/${props.songInfo.artist}/${props.songInfo.genre}`)
	    	.then(response => response.json())
	    	.then(data => {setAssociateR(data)});
		} else {
			setAssociateR([]);
		};
  }, [props.pCheckStatus, props.songInfo]);

  let count = 0;
  for(let key in props.pCheckStatus){
    if (props.pCheckStatus[key] === true) {
    	count = count + 1;
    };
	}

	let r_popinfo = [];
	let combined = [];
	let result = {};
	if (count === 1){
		r_popinfo = albumRelated.concat(artisteRelated, genreRelated, eraRelated, associateRelated);
	} else {
		combined = albumRelated.concat(artisteRelated, genreRelated, eraRelated, associateRelated);
		combined.forEach(function(item) {
		  result[JSON.stringify(item)] = result[JSON.stringify(item)] ? result[JSON.stringify(item)] + 1 : 1;
		});
		for (let [key, value] of Object.entries(result)) {
	    if (value === count) {
	    	r_popinfo.push(JSON.parse(key));
	    };
		};
	};

	return(
		<div className='info-preview'>
			{console.log(r_popinfo)}
			{console.log("this is return")}
			{
				r_popinfo.map((artist, i) => {
					return (
						<PopCard 
							key={i} 
							id={r_popinfo[i].id} 
							artist={r_popinfo[i].artist} 
							name={r_popinfo[i].name}
							album={r_popinfo[i].album}
							date={r_popinfo[i].date} 
							genre={r_popinfo[i].genre}
							yt_url={r_popinfo[i].youtube}
						/>
					);
				})
			}
	  </div> 
	);
}


export default connect(mapStateToProps)(PRelatedCardList);

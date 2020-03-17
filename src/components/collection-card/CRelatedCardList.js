import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ClassicalCard from './ClassicalCard';
import './ClassicalCardListStyles.scss';

const mapStateToProps = (state) => {
	return {
		cCheckStatus: state.ccheckboxes.cCheckStatus,
		compositionInfo: state.ccardInfo.ccard_info
	}
}

function CRelatedCardList (props) {
	const [composerRelated, setComposerR] = useState([]);
	const [workRelated, setWorkR] = useState([]);
	const [genreRelated, setGenreR] = useState([]);

  useEffect(() => {
	  if (props.cCheckStatus.this_composer) {
			fetch(`/samecomposer/${props.compositionInfo.composer}`)
	    	.then(response => response.json())
	    	.then(data => {setComposerR(data)});
		} else {
			setComposerR([]);
		};

		if (props.cCheckStatus.work_type) {
			fetch(`/sameworktype/${props.compositionInfo.work}`)
	    	.then(response => response.json())
	    	.then(data => {setWorkR(data)});
		} else {
			setWorkR([]);
		};

		if (props.cCheckStatus.genre) {
			fetch(`/sameclassicalgenre/${props.compositionInfo.genre}`)
	    	.then(response => response.json())
	    	.then(data => {setGenreR(data)});
		} else {
			setGenreR([]);
		};
  }, [props.cCheckStatus, props.compositionInfo]);

  let count = 0;
  for(let key in props.cCheckStatus){
    if (props.cCheckStatus[key] === true) {
    	count = count + 1;
    };
	}

	let r_classicalinfo = [];
	let combined = [];
	let result = {};
	if (count === 1){
		r_classicalinfo = composerRelated.concat(workRelated, genreRelated);
	} else {
		combined = composerRelated.concat(workRelated, genreRelated);
		combined.forEach(function(item) {
		  result[JSON.stringify(item)] = result[JSON.stringify(item)] ? result[JSON.stringify(item)] + 1 : 1;
		});
		for (let [key, value] of Object.entries(result)) {
	    if (value === count) {
	    	r_classicalinfo.push(JSON.parse(key));
	    };
		};
	};

	return(
		<div className='c-info-preview'>
			{
				r_classicalinfo.map((composer, i) => {
					return (
						<ClassicalCard 
							key={i} 
							id={r_classicalinfo[i].id} 
							composer={r_classicalinfo[i].composer} 
							name={r_classicalinfo[i].name}
							work={r_classicalinfo[i].work}
							genre={r_classicalinfo[i].genre}
							date={r_classicalinfo[i].date} 
							yt_url={r_classicalinfo[i].youtube}
						/>
					);
				})
			}
	   </div> 
	);
}


export default connect(mapStateToProps)(CRelatedCardList);

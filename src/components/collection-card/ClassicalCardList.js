import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ClassicalCard from './ClassicalCard';
import './ClassicalCardListStyles.scss';


const mapStateToProps = (state) => {
	return {
		c_keyword: state.ckeyword.c_keyword
	}
}

function ClassicalCardList (props) {
	const [classicalinfo, setClassicalinfo] = useState([]);

	useEffect(() => {
		var ckw = (JSON.stringify(props.c_keyword));
		ckw = ckw.substring(1, ckw.length-1);

		fetch(`/classical-search?q=${ckw}`)
    	.then(response => response.json())
    	.then(data => {setClassicalinfo(data);});
	}, [props.c_keyword]);

	return(
		<div className='c-info-preview'>
			{
				classicalinfo && classicalinfo.map((composer, i) => {
					return (
						<ClassicalCard 
							key={i} 
							id={classicalinfo[i].id} 
							composer={classicalinfo[i].composer} 
							name={classicalinfo[i].name}
							work={classicalinfo[i].work}
							genre={classicalinfo[i].genre}
							date={classicalinfo[i].date} 
							yt_url={classicalinfo[i].youtube}
						/>
					);
				})
			}
	   </div> 
	);
}


export default connect(mapStateToProps, null)(ClassicalCardList);


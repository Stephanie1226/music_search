import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import PopCard from './PopCard';
import './PopCardListStyles.scss';

const mapStateToProps = (state) => {
	return {
		p_keyword: state.pkeyword.p_keyword
	}
}

function PopCardList (props) {
	const [popinfo, setPopinfo] = useState([]);

  useEffect(() => {
  	var pkw = (JSON.stringify(props.p_keyword));
		pkw = pkw.substring(1, pkw.length-1);

		fetch(`/contemporary-search?q=${pkw}`)
    	.then(response => response.json())
    	.then(data => {setPopinfo(data);});
  }, [props.p_keyword]);

	return(
		<div className='info-preview'>
			{
				popinfo && popinfo.map((artist, i) => {
					return (
						<PopCard 
						key={i} 
						id={popinfo[i].id} 
						artist={popinfo[i].artist} 
						name={popinfo[i].name}
						album={popinfo[i].album}
						date={popinfo[i].date} 
						genre={popinfo[i].genre}
						yt_url={popinfo[i].youtube}
						/>
					);
				})
			}
			{console.log(props.p_keyword)}
			{console.log("this is pop info")}
	  </div> 
	);
}


export default connect(mapStateToProps, null)(PopCardList);
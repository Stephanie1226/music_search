import React, { useState } from 'react';
import './SearchBoxStyles.css';

import { connect } from 'react-redux';
import { change_pop_keyword } from '../../redux/pkeyword-action';

const mapDispatchToProps = dispatch => {
	return {
		change_pkeyword: (event) => dispatch(change_pop_keyword(event))
	}
}

const PopSearchBox = ({ change_pkeyword }) => {
	const [Pkeywords, setPkeywords] = useState("");

	return(
		<div className="search__container">
			<form 
				method="get" 
				action="" 
				onSubmit={() => change_pkeyword(Pkeywords)}
			>
		    <input 
		    	className="search__input" 
		    	type="text" 
		    	placeholder="Search"
		    	onChange={e => setPkeywords(e.target.value)}  
		    	required 
		    />
		    <input
		    	className="image-submit" 
		    	type="image" 
		    	img="true"
		    	src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E" 
		    	alt=""
		    	onClick={() => change_pkeyword(Pkeywords)}
		    />
		  </form>
		</div>
	);
}



export default connect(null, mapDispatchToProps)(PopSearchBox);






// // Version 4 Success
// import React, { useState } from 'react';
// import './SearchBoxStyles.css';

// import { connect } from 'react-redux';
// import { change_pop_keyword } from '../../redux/pkeyword-action';

// const mapDispatchToProps = dispatch => {
// 	return {
// 		change_pkeyword: (event) => dispatch(change_pop_keyword(event))
// 	}
// }

// const PopSearchBox = ({ change_pkeyword }) => {
// 	const [Pkeywords, setPkeywords] = useState("");

// 	return(
// 		<div className="search__container">
// 			<form 
// 				method="get" 
// 				action="" 
// 				onSubmit={() => change_pkeyword(Pkeywords)}
// 			>
// 		    <input 
// 		    	className="search__input" 
// 		    	type="text" 
// 		    	placeholder="Search"
// 		    	onChange={e => setPkeywords(e.target.value)}  
// 		    	required 
// 		    />
// 		    <input
// 		    	className="image-submit" 
// 		    	type="image" 
// 		    	img="true"
// 		    	src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E" 
// 		    	alt=""
// 		    	onClick={() => change_pkeyword(Pkeywords)}
// 		    />
// 		  </form>
// 		</div>
// 	);
// }









// 	return(
// 		<div id="cover">
// 		  <form 
// 		  	method="get"
// 		  	id="p-search-form"
// 		  	action="" 
// 		  	onSubmit={(event) => this.psearchChange.bind(event.target.value)}
// 		  >
// 		    <div className="tb">
// 		      <div className="td">
// 		      	<input 
// 		      		type="text" 
// 		      		placeholder="Search for Music" 
// 		      		// id="p-search-form"
// 		      		// onChange={psearchChange}
// 		      		required />

// 		      </div>
// 		      <div className="td" id="s-cover">
// 		        <button 
// 		        	type="submit"
// 		        	form="p-search-form"
// 		        	onClick={psearchChange}
// 		        >
// 		          <div id="s-circle"></div>
// 		          <span></span>
// 		        </button>
// 		      </div>
// 		    </div>
// 		  </form>
// 		</div>
// 	);







// // version 2
// const mapDispatchToProps = dispatch => {
// 	return {
// 		change_pop_keyword: (p_kw) => dispatch(change_pop_keyword(p_kw))
// 	}
// }

// const PopSearchBox = (change_pop_keywork) => {
// 	const [PopKeyWords, setPopKeyWords] = useState("");

// 	const printValues = e => {
//     e.preventDefault();
//     change_pop_keyword(PopKeyWords)
//     console.log(PopKeyWords);
//   };

// 	return(
// 		<div id="cover">
// 		  <form 
// 		  	method="get" 
// 		  	action="" 
// 		  	onSubmit={printValues}
// 		  >
// 		    <div className="tb">
// 		      <div className="td">
// 		      	<input 
// 		      		type="text" 
// 		      		placeholder="Search for Music" 
// 		      		onChange={event => setPopKeyWords(event.target.value)}
// 		      		required />
// 		      </div>
// 		      <div className="td" id="s-cover">
// 		        <button 
// 		        	type="submit"
// 		        	onClick={() => change_pop_keyword(PopKeyWords)}
// 		        >
// 		          <div id="s-circle"></div>
// 		          <span></span>
// 		        </button>
// 		      </div>
// 		    </div>
// 		  </form>
// 		</div>
// 	);
// }

// export default connect(null, mapDispatchToProps)(PopSearchBox);

// // version 1
// import React from 'react';
// import './SearchBoxStyles.css';

// const PopSearchBox = () => (
// 	<div id="cover">
// 	  <form method="get" action="">
// 	    <div className="tb">
// 	      <div className="td">
// 	      	<input type="text" placeholder="Search for Music" required />
// 	      </div>
// 	      <div className="td" id="s-cover">
// 	        <button type="submit">
// 	          <div id="s-circle"></div>
// 	          <span></span>
// 	        </button>
// 	      </div>
// 	    </div>
// 	  </form>
// 	</div>
// )


// export default PopSearchBox;





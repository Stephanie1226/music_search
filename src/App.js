import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/HomepageComponent';
import Header from './components/header/HeaderComponent';
import ClassicalSearchHeader from './pages/classical-search-page/ClassicalSearchHeader';
// import ClassicalSearchPage from './pages/classical-search-page/ClassicalSearchPage';
import PopSearchHeader from './pages/pop-search-page/PopSearchHeader';

import ClassicalYTpage from './pages/classical-search-page/ClassicalYoutubePage';
import PopYTpage from './pages/pop-search-page/PopYoutubePage';

function App() {
  return (
    <div>
    	<Header />
  		<Switch>
    		<Route exact path='/' component={HomePage} />
    		<Route exact path='/classic_search' component={ClassicalSearchHeader} />
    		<Route exact path='/pop_search' component={PopSearchHeader} />
        <Route exact path='/pop_search_yt' component={PopYTpage} />
        <Route exact path='/classical_search_yt' component={ClassicalYTpage} />
    	</Switch>
    </div>
  );
}

export default App;

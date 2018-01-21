import React from 'react';
import ReactDOM from 'react-dom';	// import library, no path reference needed

import SearchBar from './components/search_bar';	// to import a file create by us we need path reference

const API_KEY = 'AIzaSyDqT0JiCYHpAKplDk2rRGyW6CtsDlGuPm0';

// Create new component.
// This component should produce some HTML
const App = () => {	// 'function()' equals to '() =>'
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this component's generated HTML and
// put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
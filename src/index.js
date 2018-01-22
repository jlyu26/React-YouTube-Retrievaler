import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';	// import library, no path reference needed
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';	// to import a file create by us we need path reference
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDBgFlaP9aTFK6p4UDcGGBLVdZHEB1oVPo';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 
		};

		this.videoSearch('surfboards')
	}

	videoSearch(term) {
		// Similar to jQuery Ajax function, passed some configuration options and then a callback function.
		YTSearch({key: API_KEY, term: term}, (videos) => {
			// console.log(data);
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});	// ES5: this.setState({ videos: videos });
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />	
				{/* need to pass data from parent component App to child component VideoList */}
				{/* We are passing prop 'videos' to VideoList */}
				{/* Anytime that App rerenders, VideoList will get the new list of videos as well. */}
			</div>
		);
	}
}

// Take this component's generated HTML and
// put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
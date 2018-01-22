import React from 'react';
import VideoListItem from './video_list_item';

// in a function-based component, the props object is an argument
// in a class-based component, props are available anywhere in any method we define as 'this.props'
// so it's important whenever we refactor our component from function-based to class-based,
// we will need to go through and update all our reference from just 'props' to 'this.props'
const VideoList = (props) => {	
	// Whenever we render an array of same type, React assumes that we're building a list.
	// React has a bunch of logic built into it to potimize the process of rendering a list.
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video} />
		);
	});

	return(
		<ul className="col-md-4 list-group">
			{/* props.videos.length */}
			{videoItems}

		</ul>
	);
};

export default VideoList;
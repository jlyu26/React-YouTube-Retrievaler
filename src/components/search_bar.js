import React, { Component } from 'react';	
// '{ Component }' equals to 'const Component = React.Component;'

// a function-based component:
// const SearchBar = () => {
// 	return <input />;
// };

// State (When to use function-based component and class-based component):
// State is a plain JavaScript object that is used to record and react to user events.
// Each class-based component that we defined has its own state object. 
// Function-based components don't have state. But it can contain a class-based component.
// Whenever component state is changed, the conponent immediately rerenders, 
// and also forces its children to rerender as well. 

class SearchBar extends Component {
	// All JavaScript classes have a special function called constructor.
	// The constructor function is the first and only function called automatically 
	// whenever a new instance of the class is created.
	// The constructor function is reserved for doing some set-up inside our class,
	// like initializing variables, and initializing state, etc.
	constructor(props) {
		super(props);

		// Whenever we use state, we initialize it by creating a new object and assigning it to this start state.
		// The object we pass will also contain properties that we want to record on the state.
		// In this case, we want to record property 'term (short for 'search term')'.
		// So whenever user updates the search input, 'term' is the property we want to record that change on.
		
		// Only inside constructor, we use 'this.state = {}'
		// Everywhere else inside of all components we instead using 'this.setState()'
		this.state = { term:'' };
	}

	// every class-based react component we created must have a defined 'render()' method
	render() {
		// return <input onChange={this.onInputChange} />;	// render() must return some JSX, here 'onChange' is a prop
		
		// in ES6 style: arrow function
		// Whenever reference a JavaScript variable inside JSX, we wrapped it with {}.
		// JSX comment: {/* ... */}
		return (
			<div className="search-bar">
				<input // the value of a 'controlled component' only changes when state changes.
					value={this.state.term}	// initial value is an empty string (line 32).
					// When user enter text, onChange handler runs, the value of the input has NOT changed.
					// The event handler runs, updating this.state.term to new value
					// Whenever setState() called, the conponent immediately rerenders,
					// so when the render function is called again, 
					// the value of the input is updated to receive the new value of this.state.term
					// Finally the component finished rendering, and the new value of the input is then visible on the screen.
					// KEY POINT: When user typing text, they didn't acturally change the input, but only trigger an event.
					// And because we updated the state with that event, that causes the value input to change.
					// onChange={event => this.setState({ term: event.target.value })} />

					onChange={event => this.onInputChange(event.target.value)} />
				{/* Value of the input: {this.state.term} */}
			</div>
		)
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	// in ES5 style:
	// onInputChange(event) {	// name: on/handle + Element + Event
	// 	console.log(event.target.value);	// more about event object, read document
	// }
}

// A controlled field is a form element (like an input) whose value is set by state rather than the other way around. 



export default SearchBar;
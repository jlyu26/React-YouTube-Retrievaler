# React YouTube Retrievaler

Implemented by React, this is a single page application that can search and play YouTube videos, in a instantaneous and concentrated user experience.

**Screenshot:**

<img width="683" alt="youtube" src="https://user-images.githubusercontent.com/20265633/35237391-8fba4546-ff78-11e7-93be-b63c218080cf.PNG">


## Terminologies

**1. Downwards Data Flow:**

Downwards data flow means that only the most parent component in the application should be responsible for fetching data, from an API or Flux framework, or Redux itself. In this case, `index` is the most parent component we have.

**2. The difference between class-based component and function-based component**

Class is used whenever we want to have the concept of **state** in our component. We can use functional components like video_list and video_list_item whenever we have a simple component that just takes some number of properties and return some static JSX. 

**3. State**

Earlier in React, to create class, we use `React.createClass` to create new class, which did a little bit more clear job initializing state, because there was a dedicated method for it called `getInitialState`. In a class-based component however, we set our state inside the constructor, using `this.state=`, and in everywhere else `this.setState()`. Whenever we change our state, the component instantly rerenders along with any children that this component contains as well.

In React component, we got **component-level state**. E.g: In component App and SearchBar they both have their own state and it solely belongs to them. We can pass callbacks that change the state and pass data from the state to other components. But whenever we change like SearchBar state using `setState`, it only triggers a change on SearchBar, which is different than in Redux. In Redux, we got **application-level state**.

**4. Import/Export Statements**

In `index.js` there are several import statements and then we required files in from the component's directory. Whenever we have a file that we're trying to inport in that WE wrote, we give a relative path reference, whereas wherever we use a library we just get the name of the library.

**5. Callbacks**

Callbacks is a great way to do parent-child communication. However, in Redux based components we use much less callbacks than in React.

## Related Libraries/APIs

**1. Lodash**

`_.debounce` function in search bar.

**2. YTSearch**
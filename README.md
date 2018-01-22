# React YouTube Retrievaler

Implemented by React, this is a single page application that can search and play YouTube videos.

## Terminologies

1. Downwards Data Flow:

Downwards data flow means that only the most parent component in the application should be responsible for fetching data, from an API or Flux framework, or Redux itself. In this case, `index` is the most parent component we have.

2. The difference between class-based component and function-based component

Class is used whenever we want to have the concept of **state** in our component. We can use functional components like video_list and video_list_item whenever we have a simple component that just takes some number of properties and return some static JSX. 

3. State



## Related Libraries

1. Lodash

`_.debounce` function in search bar.

2. 
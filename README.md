Deployed @ https://food-villa-app.netlify.app/

Everything is a component in React!

Types of components -

1. Functional components (New way)
2. Class Based components

- For any component, name starts with uppercase
- Component Composition - using 1 one component inside other, haha!

React Fragment

- JSX can only have one parent
- So instead of using \<div> for having 3 parents, react gives us access to "React.Fragment"
- Fragment is a component, like a empty tag
- Instead of \<React.Fragment> we can also write <>

What is Virtual DOM?

- A representation of DOM

What is Reconciliation in React?

- A diff algorithm which finds difference between tree
- Once diff is found, react will re-render only the element/child which is added

What is React Fibre?

- New reconciliation engine in React 16

Why not to use index as key?

- https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

Project Structure Patterns in React

- Grouping by feature or routes
  - profile, cart, payment, etc.
- Grouping by file type
  - components, utils, redux, etc.

What are Hooks?

- Hooks are normal javascript functions which provide some functionality in React
- Ex. useState hook, which is used to create local state variables in React
- Everytime we need to sync our variables with the UI, we need to use state variables
- There is one-way data binding in React unlike other frameworks. This is helpful in identifying which element is modifying the state variable
- Difference between hook and functional component is that functional component needs to return JSX. No such restriction for hook
- We can also create custom hooks. It lets us create state variables, use other hooks, etc. which is not possible by normal helper functions

useEffect Hook

- Two ways to load page
  1. Call API -> render page (Not good for UX)
  2. Render initial data -> Call API -> Update UI with new data (Good approach)
- React provides useEffect hook to implement approach #2
- Components re-render either when state changes or props change
- useEffect + no dependency array = called after every re-render
- useEffect + [] = called only after 1st render
- useEffect + [searchText] = called after 1st render + called only when searchText changes after re-render
- we can return a function from useEffect. This function is called when we are unmounting the component

What is Shimmer UI Design?

- Showing UI elements with no data until API call is complete and data is fetched
- Better UX as there is less drift between LOADING and DONE state
- Use conditional rendering

React Router

- react-router-dom is used for routing
- createBrowserRouter is the recommended type of router by react
- It provides 'RouterProvider' component used to house various route components. It takes in createBrowserRouter value.
- useRouteError is a hook provided by react-router-dom
- Link component is used to implement client side routing. Client side routing does not require network calls to fetch new pages and avoids reload
- Outlet component is used to create nested. It will render according to config, all the children will go into the outlet according to the route

Class Based Components

- not used anymore but we should know for legacy purposes
- should extend React.Component
- we cannot create class based components without render method
- we get access to props/state using this.props/this.state
- we initialize state in constructor
- update state using this.setState() [Note: Do not mutate state directly XX]
- componentDidMount() is called after component is rendered (1st render)
- Sequence = constructor -> render() -> componentDidMount()
- Lifecycle diagram for more details - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  - There are 2 phases - render and commit phase
  - In case of parent with multiple children, to avoid delays in rendering, react will batch render phase for all children
- componentDidUpdate() is called after every re-render
- componentWillUnmount() is called just before component is about to destroy/unmount

Why do we write super(props) in contructor of class component?

- Homework

Why can we make componentDidMount() as async and not useEffect() as async?

- Homework

Chunking/Code Splitting/Lazy Loading/Dynamic Bundling/On Demand Loading/Dynamic Import

- used to make logical bundles of app in case of large applications
- build different bundles depending on use cases. Ex. makemytrip - only build train bundle for some users, and not flights, bus, hotels, etc
- we wrap other bundles under React.Suspense component to avoid error as react tries to render component even before bundle file is loaded
  - react will wait for Promise (returned by lazy import) to resolve and then render new component
  - fallback prop is callback used to show UI until bundle is fetched

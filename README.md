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

useEffect Hook

- Two ways to load page
  1. Call API -> render page (Not good for UX)
  2. Render initial data -> Call API -> Update UI with new data (Good approach)
- React provides useEffect hook to implement approach #2
- Components re-render either when state changes or props change
- useEffect + no dependency array = called after every re-render
- useEffect + [] = called only after 1st render
- useEffect + [searchText] = called after 1st render + called only when searchText changes after re-render

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

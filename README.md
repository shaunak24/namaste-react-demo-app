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

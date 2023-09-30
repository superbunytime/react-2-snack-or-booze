### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  react router is a framework that handles client and server-side routing

- What is a single page application?
  a website or web app that can dynamically rewrite itself with new data from a web server

- What are some differences between client side and server side routing?
  client-side routing requires javascript handles the routing internally. requests are prevented when the user clicks a link, hence no page refresh when the url changes

- What are two ways of handling redirects with React Router? When would you use each?
  History api and redirect component

- What are two different ways to handle page-not-found user experiences using React Router? 
  404 page implementation, or a wildcard path with an asterisk added to the last path of the routes with <PageNotFound/> as the element.

- How do you grab URL parameters from within a component using React Router?
  Using the react router, when you want to create a route that uses a url parameter, include a : in the front of the value you pass to the route's path prop. Next access the value of the url parameter from inside of the component that's rendered using the useParams hook.

- What is context in React? When would you use it?
  Context provides data to components anywhere in the component tree.

- Describe some differences between class-based components and function
  components in React.
  Functional components are pure javascript functions and class-based components must extend from react.

- What are some of the problems that hooks were designed to solve?
  Huge components, confusing classes, and wrapper hell.
# React Router v6 Undefined Route Handling

This repository demonstrates an uncommon bug in React Router v6 related to navigating to undefined routes.  In React Router v5, navigating to a route that wasn't explicitly defined often resulted in a match on a wildcard route (if defined), or at worst, a clear error.  Version 6, however, silently fails; the UI doesn't reflect the navigation at all.

The `App.js` file shows the buggy behavior. The solution (`AppSolution.js`) showcases how to handle undefined routes gracefully using the `useLocation` hook and a fallback component. 
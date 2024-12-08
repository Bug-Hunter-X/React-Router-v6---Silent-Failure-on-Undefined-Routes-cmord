```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch location={location} />} />
      </Routes>
    </BrowserRouter>
  );
}

function NoMatch({ location }) {
  let message = `There is no match for ${location.pathname}`;
  return <div>{message}</div>;
}

export default App;
```
This solution utilizes a wildcard route (`path="*"`) to catch any undefined paths and renders a custom `NoMatch` component, providing informative feedback to the user. The useLocation hook provides information about the current location. 
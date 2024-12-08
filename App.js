```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses the new `Routes` and `Route` components from `react-router-dom` v6.  However, if you try to navigate to a path that doesn't match any of the defined routes, it will result in unexpected behavior: the UI will simply not update.  This is different from v5, where it would render a match on a wildcard path, or perhaps even break silently.
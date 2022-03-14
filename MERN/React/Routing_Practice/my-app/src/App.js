import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home.js";
import MultiRoute from "./components/MultiRoute.js";

/**
 * BrowserRouter
 * BrowserRouter exists to wrap around all of the components we want to be aware of our current route.
 * It enables us to switch between different routes very quickly and easily.
 * It's usually the root component of our application.
 */

/**
 * Routes
 * The Routes component essentially is a container of nested elements and every component within it
 * needs a route associated with it
 */

/**
 * Route
 * The Route component declares an "element" that should be displayed at a particular url/path
 * The element could be another component, an element, or any other part of the DOM that can be rendered
 */

/**
 * Link
 * The Link component is a specially designed feature that functions like anchor tags but it
 * works in our SPA without doing a refresh like an anchor tag might do.
 * Uses the attribute "to" just like an "href" attribute on an anchor tag
 */

// Test component that represents a "Home page"
// function Home(props) {
//   return(
//     <div>
//       <h1 style={{color: "red"}}>Home Component</h1>
//       <Link to={"/about"}>Go to about</Link>
//     </div>
//   );
// }

// Test component that represents an "About page"
// function About(props) {
//   return(
//     <div>
//       <h1 style={{color: "blue"}}>About Component</h1>
//       <Link to={"/"}>Go to home</Link>
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:text" element={<MultiRoute />} />
          <Route path="/:text/:color/:background" element={<MultiRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

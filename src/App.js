import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route
            exact
            path="/"
            element={<News key="general" country="in" category="general" />}
          ></Route>
          <Route
            exact
            path="/home"
            element={<News key="general" country="in" category="general" />}
          ></Route>
          <Route
            exact
            path="/business"
            element={<News key="business" country="in" category="business" />}
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News key="entertainment" country="in" category="entertainment" />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={<News key="health" country="in" category="health" />}
          ></Route>
          <Route
            exact
            path="/science"
            element={<News key="science" country="in" category="science" />}
          ></Route>
          <Route
            exact
            path="/sports"
            element={<News key="sports" country="in" category="sports" />}
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News key="technology" country="in" category="technology" />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

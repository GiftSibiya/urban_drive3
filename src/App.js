/// DEPENDENCY IMPORTS ///

import { BrowserRouter, Routes, Route } from "react-router-dom";

///--///

/// FILE IMPORT ///

import HomeScreen from "./screens/HomeScreen";

///--///

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

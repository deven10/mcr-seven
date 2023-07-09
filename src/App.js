import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { CountriesPage } from "./pages/CountriesPage";
import { DestinationsList } from "./pages/DestinationsList";
import { DetailedDestination } from "./pages/DetailedDestination";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/countries/:continentSelected"
          element={<CountriesPage />}
        />
        <Route
          path="/destinations/:countrySelected"
          element={<DestinationsList />}
        />
        <Route
          path="/destination/:destinationName"
          element={<DetailedDestination />}
        />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Layout } from './components/layout/navbar';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import routesTest from './constants/routes';
function App() {
  return (
    <BrowserRouter>
    <Layout />
      <Routes>
        {routesTest.map((route, i) => (
          <Route
            key={route.name ? route.name + i : i}
            path={route.path}
            element={route.component()}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

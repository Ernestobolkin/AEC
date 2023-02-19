import React from 'react';
import { HomePage } from './components/homePage/Home';
import { Layout } from './components/layout/navbar';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { TableCrud } from './components/table/table';

function App() {
  return (
    <BrowserRouter>
    <Layout />
      <Routes>
        <Route path="/a" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/data" element={<TableCrud />} />
      </Routes>
      {/* <Test /> */}
    </BrowserRouter>
  );
}

// idea is to create a component that will be used in the App.tsx
// const Test = () => {
//   return(
//     <>
//       <Layout />
//       <Routes>
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/data" element={<TableCrud />} />
//       </Routes>
//     </>
//   )
// }

export default App;

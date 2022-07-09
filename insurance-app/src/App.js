
import React from "react";
import logo from './logo.svg';
import './App.css';
import InsuranceList from './components/InsuranceList';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
// function App() {
//   return (
//     <BrowserRouter>
//       <div className="container mt-2" style={{ marginTop: 40 }}>
//         <Routes>
//           <Route exact path="/"  element={<Home/>} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

const App = ()=> {
  return (
    <BrowserRouter>
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Routes>
          <Route exact path="/"  element={<InsuranceList/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

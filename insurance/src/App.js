import logo from './logo.svg';
import './App.css';
import { Insurance } from './Components/insurance';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = ()=> {
  return (
    <BrowserRouter>
      <div style={{'marginTop': '10px', padding: '20px'}}>
        <Routes>
          <Route exact path="/"  element={<Insurance/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

import logo from './logo.svg';
import './App.css';
import { Insurance } from './components/insurance';
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
          <Route path="/"  element={<Insurance/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

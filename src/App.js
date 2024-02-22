import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Modal from "./components/Modal";
import Row from "./components/Row";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Modal/>}/>
          <Route path="/row" element={<Row/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

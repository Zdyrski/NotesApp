import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from './components/Main';
import NotePage from './components/NotePage';
import './App.css'

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/note/:id" element={<NotePage/>}/>
            <Route path="/*" element={
            <div>
              <h1>404</h1>
              <h3>WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</h3>
            </div>}/>
        </Routes>
    </Router>
  );
}

export default App;

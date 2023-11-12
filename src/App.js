import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Admin from "./components/Admin/Admin";
import Movies from "./components/Movies/Movies";
import Auth from "./components/Auth/Auth";


function App() {
  return (
  <div>
    <Header/>
    <section>
      <Routes>
         <Route path="/HomePage" element={<HomePage />} />
         <Route path="/Movies" element={<Movies />} />
         <Route path="/Admin" element={<Admin />} />
         <Route path="/Auth" element={<Auth />} />
      </Routes>
      </section>    
  </div>
  );
}

export default App;

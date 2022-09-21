import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import Options from "./screen/Option";
import WalletContainer from "./screen/WalletContainer";
import SendMoney from "./components/SendMoney";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/options" element={<Options />}></Route>
          <Route path="/walletContainer" element={<WalletContainer />}></Route>
          <Route path="/sendMoney" element={<SendMoney />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

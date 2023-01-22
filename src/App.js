import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import RightMenu from "./components/RightMenu/RightMenu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {/*<LeftMenu/>
      <RightMenu/>*/}
    </div>
  );
}

export default App;

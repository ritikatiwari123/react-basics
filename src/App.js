import "./App.css";
import NavBar from "./Component/NavBar";
import Image from "./Component/Image";
import Blog from "./Component/blog";

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <Image />
        <Blog />
      </header>
    </div>
  );
}

export default App;

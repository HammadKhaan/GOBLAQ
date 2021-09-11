import "./App.css";
import "antd/dist/antd.css";
import Collections from "./Components/Collections";
import Header from "./Components/Header";
import JoinToday from "./Components/JoinToday";
import Partner1 from "./Components/Partner";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Collections />
      <Partner1 />
      <JoinToday />
      <Footer />
    </div>
  );
}

export default App;

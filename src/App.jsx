import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./MyNav";
import Welcome from "./Welcome";
import MyFooter from "./MyFooter";
import Home from "./Home";

function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <header className="App-header">
        <MyNav />
      </header>
      <main className="mx-3">
        <Welcome />
        <Home />
      </main>
      <MyFooter />
    </div>
  );
}

export default App;

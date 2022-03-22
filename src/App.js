import "App.css";
import Administrador from "pages/Administrador";
import Cliente from "pages/Cliente";

function App() {
  const admin = false;

  return <div className="App">{admin ? <Administrador /> : <Cliente />}</div>;
}

export default App;

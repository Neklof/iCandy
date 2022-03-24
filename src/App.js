import "App.css";
import Administrador from "pages/Administrador";
import Cliente from "pages/Cliente";

function App() {
	const admin = false;

	return (
		<div className={`${admin ? "App_Admin" : "App_Cliente"}`}>
			{admin ? <Administrador /> : <Cliente />}
		</div>
	);
}

export default App;

import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import { Cart } from "./component/Cart";

function App() {
	return (
		<>
			<Provider store={store}>
				{/* <div className="App">
					<header className="App-header">
						<h4>React-Redux</h4>
					</header>
					<Cart />
				</div> */}
				<Cart />
			</Provider>
		</>
	);
}

export default App;

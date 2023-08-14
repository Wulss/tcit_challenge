import { Provider } from "react-redux";
import PostsList from "./components/PostsList";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <PostsList />
        </header>
      </div>
    </Provider>
  );
}

export default App;

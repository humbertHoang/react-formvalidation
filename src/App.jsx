import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import SinhVien from "./pages/SinhVien.jsx";
function App() {
  return (
    <>
      <Provider store={store}>
        <SinhVien />
      </Provider>
    </>
  );
}

export default App;

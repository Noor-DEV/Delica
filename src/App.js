import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
};
export default App;

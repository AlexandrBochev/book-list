import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home";
import { AddBook } from "./pages/AddBook";
import { ROUTES } from "./lib/constants";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ADD_BOOK} element={<AddBook />} />
          <Route path={ROUTES.EDIT_BOOK} element={<AddBook />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

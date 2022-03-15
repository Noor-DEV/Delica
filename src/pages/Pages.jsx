import Home from "./Home";
import Cuisine from "../components/Cuisine";
import Category from "../components/Category";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";
import Recipe from "../components/Recipe";
import Nav from "../components/Nav";
import { AnimatePresence } from "framer-motion";
const Pages = () => {
  const location = useLocation();
  return (
    <div>
      <Nav />
      <Search />
      <Category />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cuisine/:origin" element={<Cuisine />} />
          <Route path="/searched/:searchTerm" element={<SearchResults />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
export default Pages;

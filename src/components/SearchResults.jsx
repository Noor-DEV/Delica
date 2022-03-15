import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Card, Gradient, NormalLink } from "./StyledComps";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  const getSearchResults = (x) => {
    if (!localStorage.getItem(x)) {
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY_1000000}&query=${x}`
      )
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem(searchTerm, JSON.stringify(data.results));
          setSearchResults(data.results);
        })
        .catch((error) => console.log("......Error in search.......", error));
    } else {
      setSearchResults(JSON.parse(localStorage.getItem(searchTerm)));
    }
  };
  useEffect(() => {
    getSearchResults(searchTerm);
  }, [searchTerm]);
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {searchResults.map((x) => (
        <NormalLink to={`/recipes/${x.id}`} key={x.id}>
          <Card>
            <p>{x.title}</p>
            <img src={x.image} alt={x.title} />
            <Gradient />
          </Card>
        </NormalLink>
      ))}
    </Grid>
  );
};

export default SearchResults;

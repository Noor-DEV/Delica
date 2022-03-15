import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Grid, Card, Gradient, NormalLink } from "./StyledComps";
const Cuisine = () => {
  const { origin } = useParams();
  const [cuisine, setCuisine] = useState([]);
  const getCuisine = (x) => {
    if (!localStorage.getItem(x)) {
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${x}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCuisine(data.results);
          localStorage.setItem(x, JSON.stringify(data.results));
        })
        .catch((err) => console.log("Error in fetching Cuisin", err));
    } else {
      setCuisine(JSON.parse(localStorage.getItem(x)));
    }
  };
  useEffect(() => {
    getCuisine(origin);
  }, [origin]);
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((x) => (
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

export default Cuisine;

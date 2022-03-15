// API KEY noordi1000000 _________ 523ecb8dcfc8428daf1af4160dee0427
// API KEY epik __________   523ecb8dcfc8428daf1af4160dee0427

import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Card, Wrapper, Gradient, NormalLink } from "./StyledComps";

const endPoint = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY_NOOR}&tags=vegetarian&number=15`;
const Vegies = () => {
  const [vegies, setVegies] = useState([]);
  const getVegies = async (url) => {
    if (!localStorage.getItem("vegies")) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setVegies(data.recipes);
        localStorage.setItem("vegies", JSON.stringify(data.recipes));
        console.log(data.recipes);
      } catch (error) {
        console.log("Error......", error);
        return { error_message: "NOT SUCCESSFUL vegies", error };
      }
    } else {
      setVegies(JSON.parse(localStorage.getItem("vegies")));
    }
  };
  useEffect(() => {
    getVegies(endPoint);
  }, []);

  return (
    <Wrapper>
      <h2 className="category">Our Vegetarian Picks</h2>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2.5rem",
        }}
      >
        {vegies.map((x) => (
          <SplideSlide key={x.id}>
            <NormalLink to={`/recipes/${x.id}`}>
              <Card>
                <p>{x.title}</p>
                <img src={x.image} alt={x.title} />
                <Gradient />
              </Card>
            </NormalLink>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

export default Vegies;

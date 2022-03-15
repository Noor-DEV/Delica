import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Card, Wrapper, Gradient, NormalLink } from "./StyledComps";

const Popular = () => {
  const [populars, setPopulars] = useState([]);
  const getPopulars = async () => {
    if (!localStorage.getItem("populars")) {
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY_NOOR}&number=15`
        );
        const data = await res.json();
        setPopulars(data.recipes);
        localStorage.setItem("populars", JSON.stringify(data.recipes));
        console.log(data.recipes);
      } catch (error) {
        console.log("Error......", error);
        return { error_message: "NOT SUCCESSFUL", error };
      }
    } else {
      setPopulars(JSON.parse(localStorage.getItem("populars")));
    }
  };
  useEffect(() => {
    getPopulars();
  }, []);

  return (
    <Wrapper className="populars">
      <h2>Popular Picks</h2>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2.5rem",
        }}
      >
        {populars.map((x) => (
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

export default Popular;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailWrapper, Info, Button } from "./StyledComps";
const Recipe = () => {
  const [info, setInfo] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const { id } = useParams();
  const getInfo = (x) => {
    if (!localStorage.getItem(x)) {
      fetch(
        `https://api.spoonacular.com/recipes/${x}/information?apiKey=${process.env.REACT_APP_API_KEY_1000000}`
      )
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem(x, JSON.stringify(data));
          setInfo(data);
          console.log("INFO DATA..............", data);
        })
        .catch((error) => console.log("Error in getting INFO......", error));
    } else {
      const recipe = JSON.parse(localStorage.getItem(x));
      console.log(recipe);
      setInfo(recipe);
    }
  };
  useEffect(() => {
    getInfo(id);
  }, [id]);
  return (
    <DetailWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2>{info.title}</h2>
        <img src={info.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          ingredients
        </Button>
        {activeTab === "ingredients" && (
          <ul className="info-details">
            {info.extendedIngredients.map((ingredient, index) =>
              ingredient.aisle ? <li key={index}>{ingredient.original}</li> : ""
            )}
          </ul>
        )}
        {activeTab === "instructions" && (
          <div className="info-details">
            <p dangerouslySetInnerHTML={{ __html: info.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: info.instructions }}></p>
          </div>
        )}
      </Info>
    </DetailWrapper>
  );
};

export default Recipe;

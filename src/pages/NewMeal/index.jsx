import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Container, Content, Back, Section, Select, List } from "./style"

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IngredientItem } from "../../components/IngredientItem";

import caretLeft from "../../assets/CaretLeft.svg";
import upload from "../../assets/Upload.svg";

export function NewMeal() {
  const [name, setName] = useState('');
  const [type, setType] = useState('meal');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [img, setImg] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [loadingCreate, setLoadingCreate] = useState(false);

  const navigate = useNavigate();
  const { newMeal } = useAuth();

  const validateForm = () => {
    setIsFormValid(name && type && ingredients.length > 0 && desc && price && img && true);
  };

  function handleAddIngredient(e) {
    e.preventDefault();

    if(newIngredient === "") {
      return;
    }

    if(ingredients.includes(newIngredient)) {
      return;
    }
    
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(event, deleted) {
    event.preventDefault();

    setIngredients(prevState => 
      prevState.filter(ingredient => ingredient != deleted)
    );
  }  

  const handleImg = (e) => {
    const file = e.target.files[0];

    setImg(file);
  }

  const handleCreate = async () => {
    setLoadingCreate(true);
    newMeal({ name, desc, price, type, ingredients, img });
    setLoadingCreate(false);
  };

  useEffect(() => {
    validateForm();
  }, [name, desc, price, type, ingredients, img]);
  
  return(
    <Container>
      <Header />

      <Content>
        <Back onClick={() => navigate("/")} >
          <img src={caretLeft} />

          <span className="poppins-300-bold" >back</span>
        </Back>

        <h1 className="poppins-400-medium">Add new meal</h1>

        <Section>
          <div className="line">
            <div className="upload">
              <span className="roboto-300-regular">Meal image</span>

              <label htmlFor="image" className={!img ? "invalid" : ""}>
                { !img ? <div id="textUp">
                    <img src={upload} alt="" />

                    <span className="poppins-100-medium">Select image</span>
                  </div> :

                  <div id="textUp">
                    <span className="poppins-100-medium">{img.name}</span>
                  </div>
                }

                <input 
                  id='image' 
                  accept="image/*" 
                  type="file" 
                  onChange={handleImg}
                />
              </label>
            </div>

            <div className="wrapper">
              <label htmlFor="name" className="roboto-300-regular">
                Name
              </label>

              <input 
                onChange={e => setName(e.target.value)} 
                placeholder="e.g.: Ceasar Salad" 
                id="name" 
                type="text" 
                required
              />
            </div>

            <div className="selection">
              <label htmlFor="meal-opt" className="roboto-300-regular" >
                Category
              </label>

              <Select 
                id="meal-opt" 
                className="roboto-200-regular"
                value={type}
                onChange={e => setType(e.target.value)}
              >
                <option value="meal" className="roboto-200-regular">Meal</option>

                <option value="dessert" className="roboto-200-regular">Dessert</option>
                
                <option value="drink" className="roboto-200-regular">Drink</option>
              </Select>
            </div>
          </div>

          <div className="line">
            <div className="ingredients">
              <span className="poppins-100-medium">Ingredients</span>

              <List className={ingredients.length <= 0 ? "invalid" : null}>
                {
                  ingredients.map((ingredient, index) => (
                    <IngredientItem 
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(event, ingredient)}
                    />
                  ))
                }
                <IngredientItem 
                  $isnew="true"
                  placeholder="New Item"
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </List>
            </div>

            <div id="price">
              <Input 
                label="Price" 
                type="number" 
                step="0.01" 
                placeholder="$ 00.00"
                onChange={(e => setPrice(e.target.value))}
                required
              />
            </div>
          </div>

          <div className="line">
            <div className="textarea-wrapper">
              <label 
                htmlFor="desc" 
                className="roboto-300-regular">
                  Description
              </label>

              <textarea 
                placeholder="Briefly talk about the meal, its ingredients, and composition." 
                name="desc" 
                id="desc" 
                className=""
                onChange={e => setDesc(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="line">
            <div className="buttons">
              <Button 
                text={loadingCreate ? "Loading..." : "Create meal"}
                onClick={handleCreate}
                disabled={!isFormValid}
                className={loadingCreate && "loading"}
              />
            </div>
          </div>
        </Section>
      </Content>
      
      <Footer />
    </Container>
  );
}
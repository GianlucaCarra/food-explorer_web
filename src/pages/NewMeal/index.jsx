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
  const navigate = useNavigate();
  
  return(
    <Container>
      <Header />

      <Content>
        <Back onClick={() => navigate(-1)} >
          <img src={caretLeft} />

          <span className="poppins-300-bold" >back</span>
        </Back>

        <h1 className="poppins-400-medium">Add new meal</h1>

        <Section>
          <div className="line">
            <div className="upload">
              <span className="roboto-300-regular">Meal image</span>

              <label htmlFor="image">
                <div id="textUp">
                  <img src={upload} alt="" />

                  <span className="poppins-100-medium">Select image</span>
                </div>

                <input 
                  id='image' 
                  accept="image/*" 
                  type="file" 
                  onChange={() => console}
                />
              </label>
            </div>

            <div className="wrapper">
              <label htmlFor="name" className="roboto-300-regular">
                Name
              </label>

              <input placeholder="e.g.: Ceasar Salad" id="name" type="text" />
            </div>

            <div className="selection">
              <label htmlFor="meal-opt" className="roboto-300-regular" >
                Category
              </label>

              <Select id="meal-opt" className="roboto-200-regular">
                <option value="meal" className="roboto-200-regular">Meal</option>

                <option value="dessert" className="roboto-200-regular">Dessert</option>
                
                <option value="drink" className="roboto-200-regular">Drink</option>
              </Select>
            </div>
          </div>

          <div className="line">
            <div className="ingredients">
              <span className="poppins-100-medium">Ingredients</span>

              <List>
                <IngredientItem value="banana" />
                <IngredientItem value="banana" />
                <IngredientItem value="banana" />
                <IngredientItem value="banana" />
                <IngredientItem value="banana" />
                <IngredientItem value="banana" />
                <IngredientItem value="banana" />
                <IngredientItem isnew placeholder="New Item" />
              </List>
            </div>

            <div id="price">
              <Input label="Price" type="number" step="0.01" placeholder="$ 00.00"/>
            </div>
          </div>

          <div className="line">
            <div className="textarea-wrapper">
              <label htmlFor="desc" className="roboto-300-regular">Description</label>

              <textarea 
                placeholder="Briefly talk about the meal, its ingredients, and composition." 
                name="desc" 
                id="desc" 
                className=""
              />
            </div>
          </div>

          <div className="line">
            <div className="buttons">
              <Button type="submit" text="Create meal" />
            </div>
          </div>
        </Section>
      </Content>
      
      <Footer />
    </Container>
  );
}
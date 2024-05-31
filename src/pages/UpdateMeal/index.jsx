import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container, Content, Back, Section, Select, List } from "./style"

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IngredientItem } from "../../components/IngredientItem";

import caretLeft from "../../assets/CaretLeft.svg";
import upload from "../../assets/Upload.svg";

export function UpdateMeal() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [img, setImg] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { updateMeal } = useAuth();

  const handlePatch = () => {
    updateMeal({ name, desc, price, type, ingredients, img, id })
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/meals/${id}`, {
        withCredentials: true
      });

      setName(response.data.name);
      setType(response.data.type);
      setDesc(response.data.desc);
      setPrice(response.data.price);
      setIngredients(response.data.ingredients);
    }

    fetchData();
  }, []);
  

  async function handleDelete() {
    await api.delete(`/meals/delete/${id}`, {
      withCredentials: true
    })
  }
  
  return(
    <Container>
      <Header />

      <Content>
        <Back onClick={() => navigate(-1)} >
          <img src={caretLeft} />

          <span className="poppins-300-bold">back</span>
        </Back>

        <h1 className="poppins-400-medium">Update meal</h1>

        <Section>
          <div className="line">
            <div className="upload">
              <span className="roboto-300-regular">Meal image</span>

              <label htmlFor="image" className={!img ? "invalid" : undefined}>
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
                  onChange={e => setImg(e.target.value)}
                />
              </label>
            </div>

            <div className="wrapper">
              <label htmlFor="name" className="roboto-300-regular">
                Name
              </label>

              <input placeholder={name} id="name" type="text" />
            </div>

            <div className="selection">
              <label htmlFor="meal-opt" className="roboto-300-regular" >
                Category
              </label>

              <Select 
                value={type} 
                onChange={e => setType(e.target.value)} 
                id="meal-opt" 
                className="roboto-200-regular"
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

              <List>
                <IngredientItem value="banana" />
                <IngredientItem $isnew="true" placeholder="New Item" />
              </List>
            </div>

            <div id="price">
              <Input label="Price" type="number" step="0.01" placeholder={`$ ${price} `}/>
            </div>
          </div>

          <div className="line">
            <div className="textarea-wrapper">
              <label htmlFor="desc" className="roboto-300-regular">Description</label>

              <textarea 
                placeholder={desc}
                name="desc" 
                id="desc" 
                className=""
              />
            </div>
          </div>

          <div className="line">
            <div className="buttons">
              <button onClick={handleDelete} className="poppins-100-medium delete-meal">Delete meal</button>

              <Button onClick={handlePatch} type="submit" text="Update meal" />
            </div>
          </div>
        </Section>
      </Content>
      
      <Footer />
    </Container>
  );
}
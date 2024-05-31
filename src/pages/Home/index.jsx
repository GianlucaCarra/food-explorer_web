import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container, Content, Banner } from "./style"

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";

import foodsBanner from "../../assets/FoodsBanner.png";

export function Home() {
  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const indexMeal = await api.get("/meals/indexmeal", {
        withCredentials: true
      });
      const indexDessert = await api.get("/meals/indexdessert", {
        withCredentials: true
      });
      const indexDrink = await api.get("/meals/indexdrink", {
        withCredentials: true
      });

      setMeals(indexMeal.data);
      setDesserts(indexDessert.data);
      setDrinks(indexDrink.data);
    }

    fetchData();
  }, []);

  return(
    <Container>
      <Header />

      <Content>
        <Banner>
          <img src={foodsBanner} alt="" />

          <div className="text">
            <h1 className="poppins-500-medium" >Unmatched tastes</h1>

            <span className="roboto-300-regular" >
              Feel the care of preparation with selected ingredients
            </span>
          </div>
        </Banner>

        <section className="sliders">
          <Slider title="meals" data={meals} />

          <Slider title="desserts" data={desserts} />

          <Slider title="drinks" data={drinks} />
        </section>
      </Content>
      
      <Footer />
    </Container>
  );
}
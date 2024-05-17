import { Container, Content, Banner } from "./style"

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import foodsBanner from "../../assets/FoodsBanner.png";
import { Slider } from "../../components/Slider";

export function Home() {
  const infos = [
    {
      img: "https://github.com/gianlucacarra.png",
      name: "title asfmakdka",
      desc: "lore ipmpisim dolor",
      price: 23
    },
    {
      img: "https://github.com/gianlucacarra.png",
      name: "title asfmakdka",
      desc: "lore ipmpisim dolor",
      price: 23
    },{
      img: "https://github.com/gianlucacarra.png",
      name: "title asfmakdka",
      desc: "lore ipmpisim dolor",
      price: 23
    },{
      img: "https://github.com/gianlucacarra.png",
      name: "title asfmakdka",
      desc: "lore ipmpisim dolor",
      price: 23
    },{
      img: "https://github.com/gianlucacarra.png",
      name: "title asfmakdka",
      desc: "lore ipmpisim dolor",
      price: 23
    },{
      img: "https://github.com/gianlucacarra.png",
      name: "title asfmakdka",
      desc: "lore ipmpisim dolor",
      price: 23
    },{
      img: "https://github.com/gianlucacarra.png",
      name: "title asfmakdka",
      desc: "lore ipmpisim dolor",
      price: 23
    },{
      img: "https://github.com/gianlucacarra.png",
      name: "title asfmakdka",
      desc: "lore ipmpisim dolor",
      price: 23
    },
  ];

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
          <Slider title="test" data={infos} />

          <Slider title="test" data={infos} />

          <Slider title="test" data={infos} />
        </section>
      </Content>
      
      <Footer />
    </Container>
  );
}
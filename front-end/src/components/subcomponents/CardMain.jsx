/* import { Carousel } from "react-bootstrap";
import Card from "../ui/Card";

const CardMain = () => {
  const cardBanners = [
    {
      id: "1",
      title: "Busqueda y Selección",
      description:
        "Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.",
      image: "https://i.ibb.co/mS1ZpjF/banner.jpg",
      nameImage: "Banner",
    },
    {
      id: "2",
      title: "Encuentra tu próximo trabajo con nosotros",
      description:
        "Explora una variedad de industrias y roles para encontrar el trabajo perfecto para ti.",
      image: "https://i.ibb.co/31PpKGb/banner1.jpg",
      nameImage: "Banner",
    },
    {
      id: "3",
      title: "Diseña tu futuro: Encuentra oportunidades laborales inspiradoras",
      description:
        "Encuentra empleos que se alineen con tus intereses, habilidades y aspiraciones de carrera a largo plazo.",
      image: "https://i.ibb.co/JpSHvSH/banner2.jpg",
      nameImage: "Banner",
    },
    {
      id: "4",
      title: "Explora miles de empleos: Tu carrera comienza aquí",
      description:
        "Con herramientas de búsqueda avanzadas y filtros personalizables, encontrar el trabajo ideal nunca ha sido tan fácil.",
      image: "https://i.ibb.co/WkDcvnB/banner6.webp",
      nameImage: "Banner",
    },
  ];


  return (
    <div>
    <Carousel data-bs-theme="white">
      {cardBanners.map((card) => (
        <Carousel.Item key={card.id}>
          <Card
          id={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            nameImage={card.nameImage}
          />
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};

export default CardMain; */

/* import { Carousel } from "react-bootstrap";
import Card from "../ui/Card";

const CardMain = () => {
  const cardBanners = [
    {
      id: "1",
      title: "Busqueda y Selección",
      description:
        "Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.",
      image: "https://i.ibb.co/mS1ZpjF/banner.jpg",
      nameImage: "Banner",
    },
    {
      id: "2",
      title: "Encuentra tu próximo trabajo con nosotros",
      description:
        "Explora una variedad de industrias y roles para encontrar el trabajo perfecto para ti.",
      image: "https://i.ibb.co/31PpKGb/banner1.jpg",
      nameImage: "Banner",
    },
    {
      id: "3",
      title: "Diseña tu futuro: Encuentra oportunidades laborales inspiradoras",
      description:
        "Encuentra empleos que se alineen con tus intereses, habilidades y aspiraciones de carrera a largo plazo.",
      image: "https://i.ibb.co/JpSHvSH/banner2.jpg",
      nameImage: "Banner",
    },
    {
      id: "4",
      title: "Explora miles de empleos: Tu carrera comienza aquí",
      description:
        "Con herramientas de búsqueda avanzadas y filtros personalizables, encontrar el trabajo ideal nunca ha sido tan fácil.",
      image: "https://i.ibb.co/WkDcvnB/banner6.webp",
      nameImage: "Banner",
    },
  ];


  return (
    <div>
    <Carousel data-bs-theme="white">
      {cardBanners.map((card) => (
        <Carousel.Item key={card.id}>
          <Card
          id={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            nameImage={card.nameImage}
          />
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};

export default CardMain; */

import { Carousel } from "react-bootstrap";

const CardMain = () => {
  const cardBanners = [
    {
      id: "1",
      title: "Busqueda y Selección",
      description:
        "Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.",
      image: "https://i.ibb.co/mS1ZpjF/banner.jpg",
      nameImage: "Banner",
    },
    {
      id: "2",
      title: "Encuentra tu próximo trabajo con nosotros",
      description:
        "Explora una variedad de industrias y roles para encontrar el trabajo perfecto para ti.",
      image: "https://i.ibb.co/31PpKGb/banner1.jpg",
      nameImage: "Banner",
    },
    {
      id: "3",
      title: "Diseña tu futuro: Encuentra oportunidades laborales inspiradoras",
      description:
        "Encuentra empleos que se alineen con tus intereses, habilidades y aspiraciones de carrera a largo plazo.",
      image: "https://i.ibb.co/JpSHvSH/banner2.jpg",
      nameImage: "Banner",
    },
    {
      id: "4",
      title: "Explora miles de empleos: Tu carrera comienza aquí",
      description:
        "Con herramientas de búsqueda avanzadas y filtros personalizables, encontrar el trabajo ideal nunca ha sido tan fácil.",
      image: "https://i.ibb.co/WkDcvnB/banner6.webp",
      nameImage: "Banner",
    },
  ];

  return (
    <section style={{width:"80%", marginTop: "120px", display: "flex"}}>
      <Carousel style={{width:"100%"}} >
        {cardBanners.map((card) => (
          <Carousel.Item key={card.id}>
            <img src={card.image} alt={card.nameImage} style={{}}/>
            <Carousel.Caption>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default CardMain;
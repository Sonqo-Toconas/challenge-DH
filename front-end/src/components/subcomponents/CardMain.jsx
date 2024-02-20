import Card from "../ui/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardMain = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3000,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  const cardBanners = [
    {
      id:"1",
      title: "Busqueda y Selección",
      description:
        "Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.",
      image: "https://i.ibb.co/mS1ZpjF/banner.jpg",
      nameImage: "Banner",
    },
    {
      id:"2",
      title: "Encuentra tu próximo trabajo con nosotros",
      description:
        "Explora una variedad de industrias y roles para encontrar el trabajo perfecto para ti.",
      image: "https://i.ibb.co/31PpKGb/banner1.jpg",
      nameImage: "Banner",
    },
    {
      id:"3",
      title: "Diseña tu futuro: Encuentra oportunidades laborales inspiradoras",
      description:
        "Encuentra empleos que se alineen con tus intereses, habilidades y aspiraciones de carrera a largo plazo.",
      image: "https://i.ibb.co/JpSHvSH/banner2.jpg",
      nameImage: "Banner",
    },
    {
      id:"4",
      title: "Explora miles de empleos: Tu carrera comienza aquí",
      description:
        "Con herramientas de búsqueda avanzadas y filtros personalizables, encontrar el trabajo ideal nunca ha sido tan fácil.",
      image: "https://i.ibb.co/WkDcvnB/banner6.webp",
      nameImage: "Banner",
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {cardBanners.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            nameImage={card.nameImage}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CardMain;

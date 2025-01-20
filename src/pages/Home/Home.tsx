import React, { useEffect, useState } from "react";
import { Endpoint } from "../../data";
import { apiGetRequest } from "../../services/api_service";
import CardHighlight from "../../components/CardHighlight/CardHighlight";
import ItemRow from "../../components/ItemRow/ItemRow";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
  const [popular, setPopular] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [sciFiMovies, setSciFiMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPopular(await apiGetRequest(Endpoint.Popular));
        setAdventureMovies(await apiGetRequest(Endpoint.ActionMovies));
        setActionMovies(await apiGetRequest(Endpoint.AdventureMovies));
        setComedyMovies(await apiGetRequest(Endpoint.ComedyMovies));
        setDramaMovies(await apiGetRequest(Endpoint.DramaMovies));
        setHorrorMovies(await apiGetRequest(Endpoint.HorrorMovies));
        setSciFiMovies(await apiGetRequest(Endpoint.SciFiMovies));
      } catch (error) {
        console.error("Error fetching Lists:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <CardHighlight />
      <ItemRow title="Em alta" list={popular} />
      <ItemRow title="Aventura" list={adventureMovies} />
      <ItemRow title="Ação" list={actionMovies} />
      <ItemRow title="Comédia" list={comedyMovies} />
      <ItemRow title="Drama" list={dramaMovies} />
      <ItemRow title="Terror" list={horrorMovies} />
      <ItemRow title="Ficção Científica" list={sciFiMovies} />
      <Footer />
    </div>
  );
};

export default Home;

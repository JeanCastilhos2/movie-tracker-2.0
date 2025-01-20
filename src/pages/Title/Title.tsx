import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import axios from "axios";

const api = process.env.REACT_APP_API as string;
const apiKey = process.env.REACT_APP_API_KEY as string;

type RouteParams = {
  type?: "movie" | "tv";
  id?: string;
};

const TitlePage: React.FC = () => {
  const { type, id } = useParams<RouteParams>();
  const [titleData, setTitleData] = useState(null);
  const [creditsData, setCreditsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const titleUrl = `${api}/${type}/${id}?language=pt-BR&${apiKey}`;
        console.log(titleUrl)
        const creditsUrl = `${api}/${type}/${id}/credits?language=pt-BR&${apiKey}`;
        console.log(creditsUrl)

        const title = await axios.get(titleUrl);
        const credits = await axios.get(creditsUrl);

        setTitleData(title.data);
        setCreditsData(credits.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [type, id]);

  return (
    <div style={{ padding: "20px" }}>
      {titleData && creditsData && (
        <Title title={titleData} credits={creditsData} />
      )}
    </div>
  );
};

export default TitlePage;


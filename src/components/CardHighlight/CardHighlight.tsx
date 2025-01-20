import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CardHighlight.module.css";
import { apiGetRequest } from "../../services/api_service";
import { Endpoint } from "../../data";

const imgHighlight = process.env.REACT_APP_IMG_HIGHLIGHT;

interface Highlight {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string;
  overview: string;
}

const CardHighlight: React.FC = () => {
  const [highlight, setHighlight] = useState<Highlight | null>(null);

  useEffect(() => {
    const fetchHighlight = async () => {
      try {
        const popularItems = await apiGetRequest(Endpoint.Popular);
        const randomIndex = Math.floor(Math.random() * popularItems.length);
        setHighlight(popularItems[randomIndex]);
      } catch (error) {
        console.error("Error fetching highlight:", error);
      }
    };
    fetchHighlight();
  }, []);

  if (!highlight) {
    return <div>Loading...</div>;
  }

  return (
    <Link
      className={styles.link}
      to={`/title/${highlight.name ? "series" : "movie"}/${highlight.id}`}
    >
      <section
        className={styles.card_highlight}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${imgHighlight}${highlight.backdrop_path})`,
        }}
      >
        <div className={styles.card_vertical}>
          <div className={styles.card_horizontal}>
            <div className={styles.title}>
              {highlight.title || highlight.name}
            </div>
            <div className={styles.description}>{highlight.overview}</div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default CardHighlight;

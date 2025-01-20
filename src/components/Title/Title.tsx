import React from "react";
import styles from "./Title.module.css";

interface TitleProps {
  title: {
    id: number;
    title?: string;
    name?: string;
    overview: string;
    poster_path: string;
    genres: { id: number; name: string }[];
    release_date?: string;
    first_air_date?: string;
    vote_average: number;
    runtime?: number;
    episode_run_time?: number[];
  };
  credits: {
    cast: {
      id: number;
      name: string;
      character: string;
      profile_path: string;
    }[];
    crew: {
      id: number;
      name: string;
      job: string;
    }[];
  };
}

const posterImage = process.env.REACT_APP_IMG;

const Title: React.FC<TitleProps> = ({ title, credits }) => {
  const director = credits.crew.find((crew) => crew.job === "Director");
  const topCast = credits.cast.slice(0, 5);

  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img
          src={`${posterImage}${title.poster_path}`}
          alt={title.title || title.name}
        />
      </div>
      <div className={styles.details}>
        <h1>{title.title || title.name}</h1>
        <p className={styles.overview}>{title.overview}</p>
        <p>
          <strong>Genero:</strong>{" "}
          {title.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Lançamento:</strong>{" "}
          {title.release_date || title.first_air_date}
        </p>
        <p>
          <strong>Duração:</strong>{" "}
          {title.runtime || title.episode_run_time?.[0]} min
        </p>
        <p>
          <strong>Nota:</strong> {title.vote_average}
        </p>
        {director && (
          <p>
            <strong>Diretor:</strong> {director.name}
          </p>
        )}
        <h2>Elenco</h2>
        <ul className={styles.castList}>
          {topCast.map((actor) => (
            <li key={actor.id} className={styles.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
                className={styles.castImage}
              />
              <span>
                <strong>{actor.name}</strong> as {actor.character}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Title;

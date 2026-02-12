import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MovieRow from "../components/MovieRow";
import "./styles/CastPage.css";

import poster1 from "../assets/posters/Roane_And_The_Beast_2.png";
import poster2 from "../assets/posters/A_Moment_To_Maria.png";
import poster3 from "../assets/posters/The_Fault_In_Roane's_Stars.png";
import poster4 from "../assets/posters/It_Ends_With_Roane.png";

export default function CastPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const actor = {
    name: "Roane Sayre",
    profession: "Actress",
    born: "April 18, 1998",
    nationality: "Filipino",
    yearsActive: "2016–Present",
    tagline: "Grace in presence. Power in performance.",
    biography:
      "A celebrated actress known for emotional depth and captivating screen presence. She has starred in multiple critically acclaimed dramas and blockbuster films, steadily becoming one of the most recognizable faces of her generation.",
  };

  // Filmography for MovieRow
  const filmography = [
    { id: "f1", title: "Roane and the Beast 2", poster: poster1 },
    { id: "f2", title: "A Moment to Maria", poster: poster2 },
    { id: "f3", title: "The Fault in Roane's Stars", poster: poster3 },
    { id: "f4", title: "It Ends With Roane", poster: poster4 },
  ];

  const stagger = (i) => ({
    delay: i * 0.1,
    type: "spring",
    stiffness: 200,
    damping: 20,
  });

  return (
    <div className="cast-page">
      {/* Back Button */}
      <motion.button
        className="back-btn"
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <ArrowBackIcon style={{ fontSize: 28 }} />
      </motion.button>

      {/* Actor Image */}
      <motion.div
        className="actor-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={stagger(0)}
      >
        <AccountCircleIcon style={{ fontSize: 200 }} />
      </motion.div>

      {/* Name */}
      <motion.h1
        className="actor-name"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={stagger(1)}
      >
        {actor.name}
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="actor-tagline"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={stagger(2)}
      >
        {actor.tagline}
      </motion.p>

      {/* Profession */}
      <motion.p
        className="actor-profession"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={stagger(3)}
      >
        {actor.profession}
      </motion.p>

      {/* Details */}
      <motion.div
        className="actor-details"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={stagger(4)}
      >
        <div className="detail-row">
          <span className="label">Born</span>
          <span>{actor.born}</span>
        </div>
        <div className="detail-row">
          <span className="label">Nationality</span>
          <span>{actor.nationality}</span>
        </div>
        <div className="detail-row">
          <span className="label">Years Active</span>
          <span>{actor.yearsActive}</span>
        </div>
      </motion.div>

      {/* Biography */}
      <motion.div
        className="actor-biography"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={stagger(5)}
      >
        <h2>Biography</h2>
        <p>{actor.biography}</p>
      </motion.div>

      {/* Filmography (Horizontal MovieRow like More Like This) */}
      <motion.div
        className="actor-filmography"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={stagger(6)}
      >
        <MovieRow title="Filmography" movies={filmography} showProgress={false} />
      </motion.div>
    </div>
  );
}
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./styles/CastPage.css";

export default function CastPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div className="cast-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowBackIcon style={{ fontSize: 28 }} />
      </button>

      <div className="cast-hero">
        <AccountCircleIcon style={{ fontSize: 180 }} />
        <h1>{decodeURIComponent(name)}</h1>
        <p className="cast-role">Actor</p>
      </div>

      <div className="cast-bio">
        <h2>Biography</h2>
        <p>
          {decodeURIComponent(name)} is known for their performance in the
          Roane Universe. A talented performer with a strong screen presence,
          they brought depth and emotion to their role.
        </p>
      </div>

      <div className="cast-filmography">
        <h2>Known For</h2>
        <ul>
          <li>Roane and the Beast</li>
          <li>Roane and the Beast 2</li>
          <li>The Enchanted Rose</li>
        </ul>
      </div>
    </div>
  );
}
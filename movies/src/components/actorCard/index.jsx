import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router";
import Button from "@mui/material/Button";

export default function ActorCard({ actor }) {
  return (
    <Card sx={{ backgroundColor: "#e4e4e4ff" }}>
      <CardHeader
        title={
          <Typography variant="h6" component="p">
            {actor.name}
          </Typography>
        }
        subheader={`as ${actor.character}`}
      />

      <CardMedia
        sx={{ height: 200}}
        image={
          actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : img
        }
        alt={actor.name}
      />
      {/* Here for future use, not functional yet */}  
      <Link to={`/actors/${actor.id}`}>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          sx={{ color: "#ffffff", backgroundColor: "#038C73", width: "100%" }}
        >
          More Info
        </Button>
      </Link>
    </Card>
  );
}
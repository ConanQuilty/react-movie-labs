import React, {useState, useEffect}  from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../spinner';

const formControl = 
  {
    margin: 1,
    minWidth: "90%",
    backgroundColor: "rgb(255, 255, 255)"
  };

  export default function FilterActorsCard(props) {
  
    
    if (isPending) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
  
    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value); 
    };
  
    const handleTextChange = (e, props) => {
      handleChange(e, "name", e.target.value);
    };

  
    return (
      <Card 
        sx={{
          backgroundColor: "#F26B6B"
        }} 
        variant="outlined">
        <CardContent sx={{display: "flex", allignItems: "center", 
          justifyContent: "space-between", flexWrap: "wrap", gap: 2}}>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Filter the actors.
          </Typography>
          <TextField
           sx={{...formControl}}
           id="filled-search"
           label="Search field"
           type="search"
           variant="filled"
           value={props.titleFilter}
           onChange={handleTextChange}
           />
        </CardContent>
      </Card>
    );
  }
  
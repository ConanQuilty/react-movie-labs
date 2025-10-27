import React from "react";
import Actor from "../actorCard";
import Grid from "@mui/material/Grid";

// const ActorList = (props) => {
//   let actorCards = props.actors.map((a) => (
//     //god help me i can't make this display as a horizontal at all
//   <Grid key={a.id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} sx={{ padding: "5px" }} container spacing ={2}>
//     <Actor key={a.id} actor={a} />
//   </Grid>
//   ));
//     return actorCards;
// };


const ActorList = ({actors}) => {
    return (
    <Grid container spacing={2}>
        {actors.map( (a) => (
            <Grid item key={a.id} xs={12} sm={6} md={4} lg={3} xl={2} sx={{ padding: "5px" }}>
                <Actor actor={a} />
            </Grid >
        ))}
    </Grid>
    );
};

export default ActorList;
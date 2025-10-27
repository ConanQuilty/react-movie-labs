import React from "react";
import Actor from "../actorCard";
import Grid from "@mui/material/Grid";

const ActorList = ({actors}) => {
    return (
    <Grid container spacing={2}>
        {actors.map( (a) => (
            <Grid item key={a.id} sx={{ padding: "5px" }}>
                <Actor actor={a} />
            </Grid >
        ))}
    </Grid>
    );
};

export default ActorList;
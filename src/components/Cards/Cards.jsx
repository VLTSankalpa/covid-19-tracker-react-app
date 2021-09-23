import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";
import styles from "./Cards.module.css";

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <h1>COVID-19 Tracker React App</h1>
      <p>
        This App can be used to visualize the global spread of covid-19 with
        live updating information on number of new cases, number of deaths in
        different countries in the world.
      </p>
      <p>
        Main objective of video to demonstrate real world appropriate CI/CD
        pipeline using following develops technologies like docker, github,
        travis CI, AWS, React and REST APIs.
      </p>
      <Typography gutterBottom variant="h4" component="h2">
        Global Status
      </Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;

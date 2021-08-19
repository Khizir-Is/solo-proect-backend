import { Grid, Typography } from "@material-ui/core";

function Recipe({ name, calories, img, description, compound }) {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1" style={{ color: "white", display: 'flex' }}>
          <img src={img} alt="" style={{ height: 300 }} />
          {name}
        </Typography>
        <Typography variant="h4" style={{ color: "white" }}>
          {description}
        </Typography>
        <Typography variant="h4" style={{ color: "white" }}>
          {calories}
        </Typography>
        <Typography variant="h4" style={{ color: "white"   }}>
          {compound}
        </Typography>
      </Grid>
    </>
  );
}

export default Recipe;

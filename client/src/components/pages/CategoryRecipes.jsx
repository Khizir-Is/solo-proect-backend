import { useDispatch, useSelector } from "react-redux";
import { fetchRecipesByCategoryId } from "../../redux/fiatures/recipes";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Paper } from '@material-ui/core';
import Recipe from '../Recipes/Recipe';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme) => ({
  bag: {
    marginTop: 100,
    backgroundColor: "rgba(0, 0, 0, .6)",
    backdropFilter: "blur(10px)",
  },
}));


function CategoryRecipes() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
     const recipes = useSelector((state) => state.recipes.items);

  useEffect(() => {
    dispatch(fetchRecipesByCategoryId(id));
  }, [dispatch, id]);

  const hAD = () => {
    dispatch(fetchRecipesByCategoryId(id));
  };

    return (
      <>
      <Container style={{display: 'flex'}}>
        <Paper className={classes.bag}>
          {recipes.map((item) => {
            return (
              <Recipe
                name={item.name}
                img={item.img}
                calories={item.calories}
                description={item.description}
                compound={item.compound}
              />
            );
          })}
        </Paper>
        <Button variant="outlined"  style={{height: 80, marginTop: 390, background: '#000000d9', color: 'white'}} onClick={hAD}><RefreshIcon/></Button>
      </Container>
      </>

);
}


export default CategoryRecipes;

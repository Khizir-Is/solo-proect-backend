import React, { useEffect } from 'react';
import {
  Box, Button, CardMedia,
  Container,
  Paper,
  Table, TableBody,
  TableCell,
  TableContainer,
  TableRow, Typography
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecipes, loadAllRecipes } from '../../redux/fiatures/recipes';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import AdminAdd from './AdminAdd';

const useStyles = makeStyles((theme) => ({
  bag: {
    marginTop: 100,
    backgroundColor: "rgba(0, 0, 0, .8)",
    backdropFilter: "blur(10px)",
  },
}));


function Admin() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const recipes = useSelector((state) => state.recipes.items);
  const deleting = useSelector((state) => state.recipes.deleting)

  useEffect(() => {
    dispatch(loadAllRecipes());
  }, [dispatch]);

  const handleDeleteRecipes = (id) => {
    dispatch(deleteRecipes(id))
  }

  return (
    <TableContainer className={classes.bag}>
      <AdminAdd />
      <Table>
        <TableBody>
        {recipes.map((item) => {
          return (
            <TableRow>
              <TableCell>
                <CardMedia component="img" image={item.img}
                           style={{ width: 250, borderRadius: 20 }}/>
              </TableCell>
              <TableCell>
                <Typography variant="h4" style={{ color: 'white' }}>{item.name}</Typography>
                <Box style={{ color: 'white' }}>{item.description}</Box>
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" style={{marginBottom: 10, width: 83, border: '1px solid rgba(63 81 181)'}}>ADD</Button>
                <Button  variant="outlined" color="secondary" onClick={() => handleDeleteRecipes(item._id)}>delete</Button>
                <Button variant="outlined" color="primary" style={{marginTop: 10, width: 83, color: 'green', border: '1px solid rgba(0 255 20 / 42%)'}}><CreateIcon /></Button>
              </TableCell>
            </TableRow>
          )
        })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Admin;



// <Paper className={classes.bag}>
//   {recipes.map((item) => {
//     return (
//       <Recipe
//         name={item.name}
//         img={item.img}
//         description={item.description}
//       />
//     )
//   })}
// </Paper>
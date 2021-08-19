import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipes } from '../../redux/fiatures/recipes';
import { Button, Menu, MenuItem, TableCell, TableRow, TextField } from '@material-ui/core';

function AdminAdd(props) {

  const [name, setName] = useState('');
  const [calories, setCalories] = useState('')
  const [img, setImg] = useState('')
  const [description, setDescription] = useState('')
  const [compound, setCompound] = useState('')
  const [categoryId, setCategory] = useState('');
  const categories = useSelector((state) => state.categories.items)
  const dispatch = useDispatch();

  const handleAddName = (e) => {
    setName(e.target.value)
  }
  const handleAddCalories = (e) => {
    setCalories(e.target.value)
  }
  const handleAddImg = (e) => {
    setImg(e.target.value)
  }
  const handleAddDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleAddCompound = (e) => {
    setCompound(e.target.value)
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRecipesCategory = (id) => {
    setCategory(id);

    handleClose();
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleAddButton = () => {
    dispatch(addRecipes({ name, calories, img, description, compound, categoryId }))
    console.log(categoryId)
    setName('')
    setCalories('')
    setImg('')
    setDescription('')
    setCategory('')
    setCompound('')
  }


  return (
    <>
      <TableRow>
        <TableCell> </TableCell>
        <TableCell>
          <TextField
            type="text"
            value={name}
            placeholder="Ввести название еды"
            label="Ввести название еды"
            onChange={handleAddName}  style={{backgroundColor: 'white'}}
          />
        </TableCell>
        <TableCell>
          <TextField
            type="text"
            value={calories}
            placeholder="Ввести калорий"
            label="Ввести калорий"
            onChange={handleAddCalories}  style={{backgroundColor: 'white'}}
          />
        </TableCell>
        <TableCell>
          <TextField
            type="text"
            value={img}
            placeholder="Вставить изображение"
            label="Вставить изображение"
            onChange={handleAddImg}  style={{backgroundColor: 'white'}}
          />
        </TableCell>
        <TableCell>
          <TextField
            type="text"
            value={description}
            placeholder="Ввести описание"
            label="Ввести описание"
            onChange={handleAddDescription}  style={{backgroundColor: 'white'}}
          />
        </TableCell>
        <TableCell>
          <TextField
            type="text"
            value={compound}
            placeholder="Ввести рецепт еды"
            label="Ввести рецепт еды"
            onChange={handleAddCompound}  style={{backgroundColor: 'white'}}
          />
        </TableCell>
        <TableCell>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{backgroundColor: 'white'}}
          >
            Выбрать
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {categories.map((category) => {
              return (
                <MenuItem onClick={() => handleRecipesCategory(category._id)}>
                  {category.name}
                </MenuItem>
              );
            })}
          </Menu>
        </TableCell>
        <TableCell>
          <Button onClick={handleAddButton} variant="contained">
            Добавить
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default AdminAdd;
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import MenuIcon from '@material-ui/icons/Menu'
import { Button, Popover, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../redux/fiatures/categories';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    display: 'flex',
    margin: 'auto'
  },
}))

function HeaderMenu() {

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const classes = useStyles()
  return (
    <>
      <div>
        <CardMedia>
          <a  aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
            <MenuIcon style={{fontSize: 40, cursor: 'pointer'}} />
          </a>
        </CardMedia>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography>
            {categories.map((item) => {
              return (
                <p>
                  <Button className={classes.typography}>
                    <Link to={`/category/${item._id}/recipe`} style={{textDecoration: 'none', color: 'black', fontSize: 15}}>
                      <p>{item.name}</p>
                    </Link>
                  </Button>
                </p>
              );
            })}
          </Typography>
        </Popover>
      </div>
    </>
  );
}

export default HeaderMenu;
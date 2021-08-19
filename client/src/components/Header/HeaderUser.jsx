import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Popover } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    display: 'flex',
    margin: 'auto'
  },
}))

function HeaderUser() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <div>
        <CardMedia>
          <a  aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
            <PersonIcon style={{fontSize: 40, cursor: 'pointer'}} />
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
          <Button className={classes.typography}>
            <Link to="/recipes" style={{textDecoration: 'none', color: 'black', fontSize: 15}}s>Админ</Link>
          </Button>
          <Button className={classes.typography}>Войти</Button>
          <Button className={classes.typography}>Регистрация</Button>
        </Popover>
      </div>
    </>
  );
}

export default HeaderUser;
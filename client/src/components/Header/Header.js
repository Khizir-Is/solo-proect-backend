import React from 'react';
import { AppBar, Container, Toolbar } from '@material-ui/core';
import HeaderLogo from './HeaderLogo';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import HeaderUser from './HeaderUser';
import HeaderMenu from './HeaderMenu';

const useStyles = makeStyles((theme) => ({
  menuLogo: {
    marginLeft: theme.spacing(53),
  },
  menuUser: {
    marginLeft: theme.spacing(52),
  },
  mi: {
  top: 0,
  left: 'auto',
  right: 0,
  position: 'relative',
}
}))

function Header() {
  const classes = useStyles()
  return (
    <>
      <AppBar style={{background: '#000000d4', boxShadow: 'none'}} className={classes.mi}>
        <Container>
          <Toolbar>
            <CardMedia>
              <HeaderMenu />
            </CardMedia>
            <CardMedia className={classes.menuLogo}>
              <HeaderLogo />
            </CardMedia>
            <CardMedia className={classes.menuUser}>
              <HeaderUser />
            </CardMedia>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
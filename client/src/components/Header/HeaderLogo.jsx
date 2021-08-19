import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';

function HeaderLogo() {
  return (
    <>
    <CardMedia>
      <a href={'/'}>
          <img src="https://templates.joomla-monster.com/joomla30/jm-best-food-bar/images/logo.png" style={{height: 65, marginTop: 20}}  alt=""/>
      </a>
    </CardMedia>
    </>
  );
}

export default HeaderLogo;
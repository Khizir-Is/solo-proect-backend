import { Container } from '@material-ui/core';


function RecipeIndex() {

  return (
    <Container style={{position: 'relative', marginTop: '20%', transform: 'translateY(-50%)', paddingBottom: 90, backgroundColor: "rgba(0, 0, 0, .6)", backdropFilter: "blur(10px)"}}>
      <div style={{textAlign: 'center'}}>
        <div style={{margin: '0 0 85', fontSize: 80, fontWeight: 300, textTransform: 'uppercase'}}>
          <h3 style={{color: 'white'}}>
            <span style={{content: '', position: 'absolute', width: 150, height: 2, bottom: '-20px', background: '#c59d5f', marginLeft: '-75px', left: '50%', marginBottom: '220px'}}> </span>
            <span style={{content: '', position: 'absolute', width: 150,   height: 2, bottom: '-20px', background: '#c59d5f', marginLeft: '-75px', left: '50%', marginBottom: '210px'}}> </span>
            <span style={{margin: '0 0 85', fontSize: 80, fontWeight: 300, textTransform: 'uppercase'}}>We </span>
            <span style={{fontWeight: 700}}>love </span>
            <span style={{margin: '0 0 85', fontSize: 80, fontWeight: 300, textTransform: 'uppercase'}}>to </span>
            <span style={{fontWeight: 700}}>cook</span>
          </h3>
        </div>

        <div style={{color: 'white'}}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            <br />
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default RecipeIndex;



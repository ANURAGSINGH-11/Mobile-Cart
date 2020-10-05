import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './styles/GridList.css';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        width:250,
        height:420,
        marginTop:'40px',
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      float:'left'
    }
  }));
  

  const productData=[
      {
          id:1,
          img:'https://m.media-amazon.com/images/I/71uZrDPrsRL._AC_UY218_.jpg',
          title:'Xiomi Redmi 9C',
          price:8999,
          desc:''
      },
      {
        id:2,
        img:'https://m.media-amazon.com/images/I/71yXShgxvpL._AC_UY218_.jpg',
        title:'Redmi 8A Dual',
        price:8999,
        desc:''
      },
      {
        id:3,        
          img:'https://m.media-amazon.com/images/I/71GqB5VJFgL._AC_UY218_.jpg',
          title:'Redmi 9',
          price:7499,
          desc:''
      },
      {
        id:4,
        img:'https://m.media-amazon.com/images/I/81onqHVeECL._AC_UY218_.jpg',
        title:'Samsung Galaxy M01',
        price:9999,
        desc:''
      },
      {
        id:5,
        img:'https://m.media-amazon.com/images/I/71AYb2AGHXL._AC_UY218_.jpg',
        title:'Xiomi Redmi 9A',
        price:7999,
        desc:''
      },
      {
        id:6,
        img:'https://m.media-amazon.com/images/I/712Ex7xDndL._AC_UY218_.jpg',
        title:'Redmi 9 Prime',
        price:6999,
        desc:''
      },
      {
        id:7,
        img:'https://m.media-amazon.com/images/I/711+lAQXogL._AC_UY218_.jpg',
        title:'Redmi 8A Dual Blue',
        price:7499,
        desc:''
      },
      {
        id:8,
        img:'https://m.media-amazon.com/images/I/71h+C9wJCjL._AC_UY218_.jpg',
        title:'Redmi 9A',
        price:7499,
        desc:''
     },
     {
      id:9,
        img:'https://m.media-amazon.com/images/I/710p2f-zAdL._AC_UY218_.jpg',
        title:'Redmi 8A',
        price:6999,
        desc:''
     },
     {
        id:10,
        img:'https://m.media-amazon.com/images/I/719lhUzicYL._AC_UY218_.jpg',
        title:'Xiomi Redmi 9',
        price:9999,
        desc:''
     },
     {
        id:11,
        img:'https://m.media-amazon.com/images/I/81o1rDu5FZL._AC_UY218_.jpg',
        title:'Samsung Galaxy M01',
        price:7499,
        desc:''
    },
    {
        id:12,      
        img:'https://m.media-amazon.com/images/I/71GqB5VJFgL._AC_UY218_.jpg',
        title:'Realmi 9',
        price:7999,
        desc:''
    },
    
  ];
  
const GridList =(props)=> {
  
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handlemessage = () => {
      setOpen(true);
    };

    const handleClosemessage = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    const changeCounter =(data)=>{
        handlemessage();
        props.changeCount(data);
    };


 
   
            return (
                <div>
                   
                        {productData.map((tile)=>(
                            <Grid item xs={3} className="product" key={tile.id}>
                                <Paper className={classes.paper}>
                                  <img src={tile.img} alt="" />
                                  <h3>{tile.title}</h3>
                                  <h4>Price: &#x20B9; {tile.price}</h4>
                                  <Button variant="outlined" size="small" color="primary" style={{float:'left'}}>
                                    Buy Now
                                  </Button>
                                  <Button variant="outlined" size="small" onClick={()=>changeCounter(tile)} color="secondary" style={{float:'right'}}>
                                    Add to Cart
                                  </Button>
                                </Paper>
                            </Grid>
                        ))}

                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClosemessage}>
                          <Alert onClose={handleClosemessage} severity="success">
                              This product added to cart
                          </Alert>
                  </Snackbar>
                   
                </div>
            );
}

export default GridList




import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Events.css'

function EventsCard() {
  return (
    <div className='Card-div py-4'>
         <Card className='Card' >
      <CardMedia
        component="img"
        alt="green iguana"
        className='card-media'
        image="/images/events1.jpg"
      />
      <CardContent className='Card-content'>
        <Typography gutterBottom variant="h6" component="div"  >
    <p className='text-sm md:text-lg'> Better You Is Coming To Uganda</p>
        </Typography>
        <Typography variant="body2" color="text.secondary" >
       <p className='text-xs md:text-base'> Lizards are a widespread group of squamate reptiles, with over ...</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='text-sm'>Share</Button>
        <Button className='text-sm'>Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default EventsCard
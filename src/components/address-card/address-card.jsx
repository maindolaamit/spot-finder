import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import "./address-card.css";

export default function LocationAreaCard(props) {
  const {image_url, name, description} = props
  return (
    <Card sx={{maxWidth: 345, maxHeight:300}} className={"address-card"}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image_url}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
  );
}

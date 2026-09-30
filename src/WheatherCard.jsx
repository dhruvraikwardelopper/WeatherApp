import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./WheatherCard.css"


export default function WheatherCard({ data }) {



  return (<div className='WheatherCard'>
    <Card sx={{ minWidth:400  }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHl8ZW58MHx8MHx8fDA%3D"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                       {data.city}

          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
            <p>Feel like = {data.feels_like}&deg;C</p>
            <p>Temprature = {data.temp}&deg;C</p>
            <p>Humidity = {data.humidity}</p>
            <p>Temprature max  = {data.temp_max}&deg;C</p>
            <p>Temprature min = {data.temp_min}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
  );
}

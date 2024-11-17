import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

interface MuseumCardProps {
    name: string;
    description: string;
    image: string;
    location: string;
}

const MuseumCard: React.FC<MuseumCardProps> = ({ name, description, image, location }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia component="img" height="140" image={image} alt={name} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="subtitle2" color="text.primary">
                    {location}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    View Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default MuseumCard;

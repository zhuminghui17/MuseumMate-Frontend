import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

interface CollectionHighlightsProps {
    images: string[];
}

const CollectionHighlights: React.FC<CollectionHighlightsProps> = ({ images }) => {
    return (
        <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                Collection Highlights
            </Typography>
            <Grid container spacing={2}>
                {images.map((image, index) => (
                    <Grid item xs={3} key={index}>
                        <Paper
                            sx={{
                                height: "80px",
                                borderRadius: "8px",
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CollectionHighlights;

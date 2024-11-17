import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

interface SimilarMuseumsProps {
    images: string[];
}

const SimilarMuseums: React.FC<SimilarMuseumsProps> = ({ images }) => {
    return (
        <Box sx={{ marginTop: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                Similar Themed Museums
            </Typography>
            <Grid container spacing={2}>
                {images.map((image, index) => (
                    <Grid item xs={3} key={index}>
                        <Paper
                            sx={{
                                height: "100px",
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

export default SimilarMuseums;

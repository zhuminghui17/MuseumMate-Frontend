import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Exhibition from "../../models/Exhibiton";

interface ExhibitionSectionProps {
    title: string;
    items: Exhibition[];
}

const ExhibitionSection: React.FC<ExhibitionSectionProps> = ({ title, items }) => {
    return (
        <Box sx={{ marginTop: 4 }}>
            {/* Section Title */}
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                {title}
            </Typography>

            {/* Exhibition Grid */}
            <Grid container spacing={2}>
                {items.map((item) => (
                    <Grid item xs={6} sm={3} key={item.exhibitionId}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-between",
                                height: "100%", // Ensure all cards are the same height
                                textAlign: "center",
                                padding: 2,
                            }}
                        >
                            {/* Image */}
                            <Box
                                sx={{
                                    width: "100%",
                                    aspectRatio: "4 / 3", // Maintain consistent aspect ratio
                                    overflow: "hidden",
                                    borderRadius: "8px",
                                    marginBottom: 1,
                                }}
                            >
                                <img
                                    src={item.featuredImage}
                                    alt={item.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>

                            {/* Name */}
                            <Typography
                                sx={{
                                    fontSize: "0.9rem",
                                    fontWeight: "bold",
                                    marginTop: 1,
                                    lineHeight: "1.2",
                                }}
                            >
                                {item.name}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ExhibitionSection;

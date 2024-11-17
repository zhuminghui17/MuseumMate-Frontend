import React from "react";
import { Box, Typography, Button, Grid, Divider, Link } from "@mui/material";

const mockVisits = [
    {
        museumName: "Rosenbach Museum and Library",
        numberOfVisits: 2,
        exhibitionAttended: "Treasures Gallery, 2024 Bloomsday",
        reviewLink: "Your Review",
        lastVisited: "8 Days Ago",
    },
    {
        museumName: "Philadelphia Museum of Art",
        numberOfVisits: 3,
        exhibitionAttended: "",
        reviewLink: "+ Add a Review",
        lastVisited: "1 Month Ago",
    },
    {
        museumName: "Penn Museum",
        numberOfVisits: 1,
        exhibitionAttended: "Ancient Food and Flavor",
        reviewLink: "Your Review",
        lastVisited: "4 Months Ago",
    },
];

const VisitsPage: React.FC = () => {
    return (
        <Box sx={{ padding: "20px" }}>
            <Box
                sx={{
                    paddingX: 2, // Left and right padding (equivalent to 32px)
                    marginX: "auto", // Center the content horizontally if needed
                    maxWidth: "95%", // Optional: Restrict the max width for better layout
                }}
            >
            
            {/* Page Title */}
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 3 }}>
                My Visits
            </Typography>

            {/* Visits List */}
            {mockVisits.map((visit, index) => (
                <Box key={index} sx={{ marginBottom: 4 }}>
                    <Grid container spacing={2} alignItems="center">
                        {/* Museum Image Placeholder */}
                        <Grid item xs={3} sm={2}>
                            <Box
                                sx={{
                                    width: "100%",
                                    aspectRatio: "1",
                                    backgroundColor: "#e0e0e0",
                                    borderRadius: "8px",
                                }}
                            />
                        </Grid>

                        {/* Visit Details */}
                        <Grid item xs={7} sm={8}>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: "bold", marginBottom: "4px" }}
                            >
                                {visit.museumName}
                            </Typography>
                            <Typography variant="body2">
                                Number of Visits: {visit.numberOfVisits}
                            </Typography>
                            <Typography variant="body2" sx={{ marginTop: "4px" }}>
                                Exhibition/Event Attended:{" "}
                                {visit.exhibitionAttended || (
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        color="primary"
                                    >
                                        {visit.reviewLink}
                                    </Typography>
                                )}
                            </Typography>
                            {visit.exhibitionAttended && (
                                <Link
                                    href="#"
                                    underline="hover"
                                    sx={{
                                        color: "primary.main",
                                        display: "block",
                                        marginTop: "4px",
                                    }}
                                >
                                    {visit.reviewLink}
                                </Link>
                            )}
                        </Grid>

                        {/* Last Visited */}
                        <Grid item xs={2} sm={2} sx={{ textAlign: "right" }}>
                            <Typography variant="body2" color="text.secondary">
                                {visit.lastVisited}
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* Divider */}
                    {index < mockVisits.length - 1 && (
                        <Divider sx={{ marginY: 2 }} />
                    )}
                </Box>
            ))}

            {/* Add to Collection Button */}
            <Box sx={{ textAlign: "center", marginTop: 4 }}>
                <Button
                    variant="outlined"
                    sx={{
                        fontSize: "0.9rem",
                        padding: "8px 16px",
                        borderRadius: "8px",
                    }}
                >
                    Add to Collection
                </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default VisitsPage;

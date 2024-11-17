import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Museum from "../models/Museum";
import MuseumDetails from "../components/museum/MuseumDetails";
import CollectionHighlights from "../components/museum/CollectionHighlights";
import ReviewsSection from "../components/museum/ReviewsSection";
import SimilarMuseums from "../components/museum/SimilarMuseums";
import { useNavigate } from "react-router-dom";

interface MuseumPageProps {
    museum: Museum;
}

const MuseumPage: React.FC<MuseumPageProps> = ({ museum }) => {
    const navigate = useNavigate(); // Initialize the navigate hook

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };
    return (
        <Box sx={{ padding: "20px 40px" }}>
            {/* Back Button and Header */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
            <IconButton onClick={handleBackClick}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h4" sx={{ marginLeft: 2, fontWeight: "bold" }}>
                    {museum.name}
                </Typography>
            </Box>

            <Box
                sx={{
                    paddingX: 2, // Left and right padding (equivalent to 32px)
                    marginX: "auto", // Center the content horizontally if needed
                    maxWidth: "95%", // Optional: Restrict the max width for better layout
                }}
            >

            {/* Main Content */}
            <Grid container spacing={6}>
                {/* Left Column: Image and Highlights */}
                <Grid item xs={12} md={6} sx={{ padding: "10px" }}>
                    {/* Featured Image */}
                    <img
                        src={museum.featuredImage}
                        alt="Museum"
                        style={{
                            width: "100%",
                            borderRadius: "8px",
                            marginBottom: "20px",
                        }}
                    />
                    {/* Collection Highlights */}
                    <CollectionHighlights images={museum.images} />
                    {/* Reviews Section */}
                    <Box sx={{ marginTop: 4 }}>
                        <ReviewsSection />
                    </Box>
                </Grid>

                {/* Right Column: Museum Details */}
                <Grid item xs={12} md={6} sx={{ padding: "10px" }}>
                    <MuseumDetails
                        description={museum.description}
                        hours={museum.hours}
                        tickets={museum.tickets}
                        location={museum.location}
                    />
                </Grid>
            </Grid>

            {/* Similar Themed Museums */}
            <Box sx={{ marginTop: 6 }}>
                <SimilarMuseums images={museum.images} />
            </Box>

            </Box>
        </Box>
    );
};

export default MuseumPage;

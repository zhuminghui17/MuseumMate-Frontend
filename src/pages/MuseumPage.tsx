import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Museum from "../models/Museum";
import MuseumDetails from "../components/Museum/MuseumDetails";
import CollectionHighlights from "../components/Museum/CollectionHighlights";
import ReviewsSection from "../components/Museum/ReviewsSection";
import SimilarMuseums from "../components/Museum/SimilarMuseums";

interface MuseumPageProps {
    museum: Museum;
}

const MuseumPage: React.FC<MuseumPageProps> = ({ museum }) => {
    return (
        <Box sx={{ padding: "20px 40px" }}>
            {/* Back Button and Header */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
                <IconButton>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h4" sx={{ marginLeft: 2, fontWeight: "bold" }}>
                    {museum.name}
                </Typography>
            </Box>

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
    );
};

export default MuseumPage;

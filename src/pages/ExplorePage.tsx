import React from "react";
import { Box, Typography, MenuItem, Select } from "@mui/material";
import ExhibitionCarousel from "../components/Explore/ExhibitionCarousel";
import ExhibitionSection from "../components/Explore/ExhibitionSection";
import mockExhibitions from "../data/MockExhibition";

const ExplorePage: React.FC = () => {
    const { featured, popular, endingSoon } = mockExhibitions;

    return (
        <Box sx={{ padding: "20px" }}>
            {/* Header */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Select defaultValue="Philadelphia" variant="outlined" size="small">
                        <MenuItem value="Philadelphia">Philadelphia</MenuItem>
                        <MenuItem value="New York">New York</MenuItem>
                    </Select>
                    <Select defaultValue="Current" variant="outlined" size="small">
                        <MenuItem value="Current">Current</MenuItem>
                        <MenuItem value="Upcoming">Upcoming</MenuItem>
                    </Select>
                    <Select defaultValue="Free" variant="outlined" size="small">
                        <MenuItem value="Free">Free</MenuItem>
                        <MenuItem value="$0-$10">$0-$10</MenuItem>
                    </Select>
                </Box>
            </Box>

            {/* Featured Carousel */}
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2, textAlign: "left" }}>
                Picks for You!
            </Typography>

            {/* Centered Carousel */}
            <Box
                sx={{
                    marginBottom: 4,
                    width: "50%", // Set width to 50% of the parent container
                    marginX: "auto", // Horizontally center the box
                }}
            >
                <ExhibitionCarousel exhibitions={featured} />
            </Box>

            {/* Popular Exhibitions */}
            <ExhibitionSection title="Popular Exhibitions" items={popular} />

            {/* Ending Soon */}
            <ExhibitionSection title="Ending Soon" items={popular} />
        </Box>
    );
};

export default ExplorePage;

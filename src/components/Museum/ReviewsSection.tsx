import React from "react";
import { Box, Typography, Avatar, Button, Stack, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";

const mockReviews = [
    {
        name: "Annette",
        avatar: "https://via.placeholder.com/50",
        date: "8 Days Ago",
        rating: 5,
        comment:
            "Beautiful! I recommend booking a historical house tour to be able to access and learn about the entire museum.",
    },
    {
        name: "Matt",
        avatar: "https://via.placeholder.com/50",
        date: "5 Days Ago",
        rating: 4,
        comment: "Great experience! Loved the guided tour and the exhibits.",
    },
];

const ReviewsSection: React.FC = () => {
    return (
        <Box sx={{ marginTop: 4 }}>
            {/* Header with "Reviews" Title and Button */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Reviews
                </Typography>
                <Button variant="outlined" startIcon={<AddIcon />}>
                    Add your own
                </Button>
            </Stack>

            {/* Reviews List */}
            {mockReviews.map((review, index) => (
                <Box key={index}>
                    <Stack spacing={2} alignItems="flex-start" sx={{ marginBottom: 3 }}>
                        {/* Avatar, Name, and Date */}
                        <Box>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                {/* Avatar and Name */}
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Avatar src={review.avatar} alt={review.name} />
                                    <Typography sx={{ fontWeight: "bold" }}>{review.name}</Typography>
                                </Stack>
                                {/* Date (Rightmost) */}
                                <Typography variant="body2" color="text.secondary" sx={{ marginLeft: "auto" }}>
                                    {review.date}
                                </Typography>
                            </Stack>

                            {/* Star Rating */}
                            <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
                                {Array(review.rating)
                                    .fill(0)
                                    .map((_, i) => (
                                        <StarIcon key={i} sx={{ color: "#ffc107", fontSize: 25 }} />
                                    ))}
                            </Box>
                        </Box>

                        {/* Review Content */}
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="body2" color="text.primary">
                                {review.comment}
                            </Typography>
                        </Box>
                    </Stack>

                    {/* Divider between reviews */}
                    {index < mockReviews.length - 1 && <Divider sx={{ marginY: 2 }} />}
                </Box>
            ))}
        </Box>
    );
};

export default ReviewsSection;

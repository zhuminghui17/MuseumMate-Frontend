import React, { useState } from "react";
import { Box, Typography, Avatar, Button, Stack, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import AddReviewModal from "../review/addReviewModal";

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
        rating: 6,
        comment: "Great experience! Loved the guided tour and the exhibits.",
    },
];

const ReviewsSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Box sx={{ marginTop: 4 }}>
            {/* Header with "Reviews" Title and Button */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Reviews
                </Typography>
                <Button variant="outlined" startIcon={<AddIcon />} onClick={handleOpenModal}>
                    Add your own
                </Button>
                <AddReviewModal open={isModalOpen} onClose={handleCloseModal} />
            </Stack>

            {/* Reviews List */}
            {mockReviews.map((review, index) => (
                <Box key={index}>
                    <Stack spacing={1} alignItems="flex-start" sx={{ marginBottom: 2 }}>
                        {/* Avatar, Name, and Date */}
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ width: "100%" }}
                        >
                            {/* Avatar and Name */}
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Avatar src={review.avatar} alt={review.name} />
                                <Typography sx={{ fontWeight: "bold" }}>{review.name}</Typography>
                            </Stack>
                            {/* Date (Rightmost) */}
                            <Typography variant="body2" color="text.secondary">
                                {review.date}
                            </Typography>
                        </Stack>

                        {/* Star Rating */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            {Array(review.rating)
                                .fill(0)
                                .map((_, i) => (
                                    <StarIcon key={i} sx={{ color: "#ffc107", fontSize: 24 }} />
                                ))}
                        </Box>

                        {/* Review Content */}
                        <Typography variant="body2" color="text.primary">
                            {review.comment}
                        </Typography>
                    </Stack>

                    {/* Divider between reviews */}
                    {index < mockReviews.length - 1 && <Divider sx={{ marginY: 2 }} />}
                </Box>
            ))}
        </Box>
    );
};

export default ReviewsSection;

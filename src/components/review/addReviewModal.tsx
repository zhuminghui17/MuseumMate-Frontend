import React, { useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
    Checkbox,
    FormControlLabel,
    Rating,
    Chip,
    Stack,
} from "@mui/material";

interface AddReviewModalProps {
    open: boolean;
    onClose: () => void;
}

const AddReviewModal: React.FC<AddReviewModalProps> = ({ open, onClose }) => {
    const [rating, setRating] = useState<number | null>(null);
    const [tags, setTags] = useState<string[]>([
        "Recommend Pre-Registration",
        "Exhibition",
        "Accessibility",
    ]);
    const [newTag, setNewTag] = useState("");

    const handleAddTag = () => {
        if (newTag && !tags.includes(newTag)) {
            setTags((prevTags) => [...prevTags, newTag]);
            setNewTag("");
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
                Rosenbach Museum and Library Review
            </DialogTitle>
            <DialogContent>
                <Box sx={{ marginBottom: 2 }}>
                    <Typography variant="body1">Exhibition/Event:</Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        sx={{ marginTop: 1 }}
                    />
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                    <Typography variant="body1">Rating:</Typography>
                    <Rating
                        value={rating}
                        onChange={(event, newValue) => setRating(newValue)}
                        size="large"
                    />
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                    <Typography variant="body1">Tags:</Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ marginTop: 1 }}>
                        {tags.map((tag, index) => (
                            <Chip key={index} label={tag} />
                        ))}
                        <TextField
                            size="small"
                            placeholder="+ Add Your Own Tag"
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
                            sx={{ width: "150px" }}
                        />
                    </Stack>
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                    <Typography variant="body1">Number of Visits:</Typography>
                    <TextField
                        fullWidth
                        type="number"
                        variant="outlined"
                        size="small"
                        sx={{ marginTop: 1 }}
                    />
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Willing to Revisit"
                    />
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                    <Typography variant="body1">Add Photos:</Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        placeholder="Paste image URLs or upload"
                        sx={{ marginTop: 1 }}
                    />
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                    <Typography variant="body1">Review:</Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{ marginTop: 1 }}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 3,
                    }}
                >
                    <Button
                        variant="outlined"
                        onClick={onClose}
                        sx={{ width: "30%" }}
                    >
                        Cancel
                    </Button>
                    <Button variant="outlined" sx={{ width: "30%" }}>
                        Save Draft
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            width: "30%",
                            backgroundColor: "black",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "#333",
                            },
                        }}
                    >
                        Upload
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AddReviewModal;

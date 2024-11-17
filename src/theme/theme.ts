import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "'Ibarra Real Nova', serif", // Default font family for body text
        h1: {
            fontFamily: "'Playfair Display', serif", // Override for h1
            fontSize: "2.5rem",
            fontWeight: 700, // Bold
        },
        h2: {
            fontFamily: "'Playfair Display', serif", // Override for h2
            fontSize: "2rem",
            fontWeight: 600, // Semi-Bold
        },
        h3: {
            fontFamily: "'Playfair Display', serif", // Override for h3
            fontSize: "1.75rem",
            fontWeight: 500, // Medium
        },
        h4: {
            fontFamily: "'Playfair Display', serif", // Override for h4
            fontSize: "1.5rem",
            fontWeight: 400, // Normal
        },
        h5: {
            fontFamily: "'Playfair Display', serif", // Override for h5
            fontSize: "1.25rem",
            fontWeight: 400, // Normal
        },
        h6: {
            fontFamily: "'Playfair Display', serif", // Override for h6
            fontSize: "1rem",
            fontWeight: 400, // Normal
        },
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.6,
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.5,
        },
        button: {
            fontSize: "0.875rem",
            fontWeight: 600,
            textTransform: "none", // Disable uppercase for buttons
            fontFamily: "'Playfair Display', serif",
        },
    },
});

export default theme;

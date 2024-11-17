import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { Hour, Ticket } from "../../models/Museum";

interface MuseumDetailsProps {
    description: string;
    hours: Hour[];
    tickets: Ticket[];
    location: string; // Full location address
}

const MuseumDetails: React.FC<MuseumDetailsProps> = ({ description, hours, tickets, location }) => {
    // Generate Google Maps link
    const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;

    return (
        <Box>
            <Typography sx={{ marginBottom: 2 }}>{description}</Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                Hours:
            </Typography>
            {hours.map((hour, index) => (
                <Typography key={index} sx={{ marginBottom: 1 }}>
                    • {hour.day}: {hour.open} – {hour.close}
                </Typography>
            ))}

            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                Admission:
            </Typography>
            {tickets.map((ticket, index) => (
                <Typography key={index} sx={{ marginBottom: 1 }}>
                    • {ticket.type}: ${ticket.price.toFixed(2)}
                </Typography>
            ))}

            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                Location:
            </Typography>
            <Link href={googleMapsLink} target="_blank" rel="noopener" underline="hover" sx={{ color: "inherit" }}>
                {location}
            </Link>
        </Box>
    );
};

export default MuseumDetails;

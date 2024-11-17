import Museum from "../models/Museum";

const mockMuseum = new Museum({
    museumId: "1",
    name: "Rosenbach Museum and Library",
    description:
        "The Rosenbach offers exhibits, programs, and tours showcasing rare books, manuscripts, and art.",
    hours: [
        { day: "Thursday", open: "10:30am", close: "6:00pm" },
        { day: "Friday", open: "10:30am", close: "6:00pm" },
        { day: "Saturday", open: "10:30am", close: "6:00pm" },
        { day: "Sunday", open: "10:30am", close: "4:30pm" },
    ],

 tickets: [
        { type: "Adults", price: 15.0 },
        { type: "Seniors (65+)", price: 10.0 },
        { type: "Students (valid ID)", price: 7.5 },
        { type: "Children under 12", price: 0.0 },
        { type: "Treasures Gallery & Garden Tour", price: 10.0 },
        { type: "ACCESS Cardholder", price: 2.0 },
        { type: "Rosenbach Members", price: 0.0 },
        { type: "Delancey Society Members", price: 0.0 },
        { type: "Members of AAM, ICOM, & the North American Reciprocal Museum (NARM) Program", price: 0.0 },
    ],
    location: "2008-2010 Delancey Place Philadelphia, PA 19103",
    website: "https://www.rosenbach.org",
    email: "info@rosenbach.org",
    phone: "215-732-1600",
    featuredImage: "/rosenbach.png",
    images: [
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
    ],
});

export default mockMuseum;

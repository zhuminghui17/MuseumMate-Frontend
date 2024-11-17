export interface Hour {
    day: string;
    open: string;
    close: string;
}

export interface Ticket {
    type: string;
    price: number;
}

export interface MuseumArgument {
    museumId: string;
    name: string;
    description: string;
    hours: Hour[];
    tickets: Ticket[];
    location: string;
    website: string;
    email: string;
    phone: string;
    featuredImage: string;
    images: string[];
}

export default class Museum {
    museumId: string;
    name: string;
    description: string;
    hours: Hour[];
    tickets: Ticket[];
    location: string;
    website: string;
    email: string;
    phone: string;
    featuredImage: string;
    images: string[];

    constructor(args: MuseumArgument) {
        this.museumId = args.museumId;
        this.name = args.name;
        this.description = args.description;
        this.hours = args.hours;
        this.tickets = args.tickets;
        this.location = args.location;
        this.website = args.website;
        this.email = args.email;
        this.phone = args.phone;
        this.featuredImage = args.featuredImage;
        this.images = args.images;
    }

    static create() {
        return new Museum({
            museumId: '',
            name: '',
            description: '',
            hours: [],
            tickets: [],
            location: '',
            website: '',
            email: '',
            phone: '',
            featuredImage: '',
            images: [],
        })
    }
}



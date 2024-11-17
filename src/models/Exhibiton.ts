export interface ExhibitionArgument {
    exhibitionId: string;
    name: string;
    description: string;
    museumId: string;
    featuredImage: string;
    images: string[];
}

export default class Exhibition {
    exhibitionId: string;
    name: string;
    description: string;
    museumId: string;
    featuredImage: string;
    images: string[];

    constructor(args: ExhibitionArgument) {
        this.exhibitionId = args.exhibitionId;
        this.name = args.name;
        this.description = args.description;
        this.museumId = args.museumId;
        this.featuredImage = args.featuredImage;
        this.images = args.images;
    }

    static create() {
        return new Exhibition({
            exhibitionId: '',
            name: '',
            description: '',
            museumId: '',
            featuredImage: '',
            images: [],
        })
    }
}
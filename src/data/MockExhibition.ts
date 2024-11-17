import Exhibition from "../models/Exhibiton";

const mockExhibitions: {
    featured: Exhibition[];
    popular: Exhibition[];
    endingSoon: Exhibition[];
} = {
    featured: [
        new Exhibition({
            exhibitionId: "1",
            name: "The Ladies of the House of Love",
            description: "A beautiful exhibition...",
            museumId: "M1",
            featuredImage: "https://s3-alpha-sig.figma.com/img/2b6e/fce3/96b425441b62aa44e6987256fd6ce318?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nA~xNTfubDtSLItm120h7auHcvnPsIBTbnxfpmj9oQosXsEv~AQHuyHemSmY37VC2ls0Bup3-BmCCOoOCSL0WxcxjLXdIb~7-8ARjGFUcQGTgZcanqm8XmN-l1GokctHhAcF-T8iLvLLAdDWraDFmTRF4bgf2hxUGunNk1RMUn6BTtB46l-WCrQEXzk5ya5saw5h88~UTQP8RglWIm9qvwihRXUpI2j9YF5h6OrV1X-N47BRuuHa7nrgGfqcmfC2mEtfLfXTyWHgrt-m37XtyJhkJ2a2nse9aZi4sATPue6Q8FNLaYLv~9nCplLb9lOoSh-j6ELYK5l2fRcRz4~omg__",
            images: ["https://via.placeholder.com/600x400", "https://via.placeholder.com/300x200"],
        }),
        new Exhibition({
            exhibitionId: "2",
            name: "Soft Ground",
            description: "Exploring textures in art...",
            museumId: "M1",
            featuredImage: "https://s3-alpha-sig.figma.com/img/1708/238e/b8f2c4988805038df4b3e3ac77ec751b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNZ7Gs3UntZj0a-nwXV65JtczgCs6C8SyXGpbFkK6IEH~EgwuVPtQ6E1RXH1P3BVAMlTWIZyEfC0Hpt1O2tkzcX01wZUMw0~wbALACPIDsCHs-2ETgwF8T69NlWfQuE6G3LFS8Vkp-DH4XenLMG1~l2xball72XJ9nZBzTyxgSu1U6XGDl6qMvkqkaSmZNMuQROEW8uYti8LtWcqLmlzGZ6yLkRed1xBk5yzpwGeXzJzV2Xib12dkRk5izbxrqvSGeNbvb2nvih49SqF23q8aW7RD2NJjw8IjC7ltEMlb0rVTRI-rmNgkLpAXRD4YLUXQIfyxzCoYLd2vA96v8Qnqg__",
            images: ["https://via.placeholder.com/600x400", "https://via.placeholder.com/300x200"],
        }),
        new Exhibition({
            exhibitionId: "2",
            name: "Soft Ground",
            description: "Exploring textures in art...",
            museumId: "M1",
            featuredImage: "https://s3-alpha-sig.figma.com/img/2a35/88f6/3895c44089c3340e77db7f966fc56030?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uv3Z-YT2A08sq2ryfrv3q1Q8K4Rj2oocpazjUk7DQbiDF0~xTOihGvFYjkC-ZlfTWgh6PzY2LznZY9cL8~pls0oBGWwSOWEVvmCAh63MNNqZWof7KRrqek2yoi~Xkc3IANgvK18qkzAXLE3DmzGVcZx3Nk9l9TetreefKULtj50epEvXWjTZh4wAyqQY~eReAlx8zrSjEaw0USqH4~YsKxo6x9WKs2SrwtJTmvAFUT8In7aDFVoSLpKbDqOgOAH92uT2TeKpUFLnivP5n3GezrIqAAFrA3v8klU-pYhbKTLx0Q1uP9PHqGV4p~f1-8NQlYpRewYdm9osfEmxsMTIBw__",
            images: ["https://via.placeholder.com/600x400", "https://via.placeholder.com/300x200"],
        }),
        new Exhibition({
            exhibitionId: "2",
            name: "Soft Ground",
            description: "Exploring textures in art...",
            museumId: "M1",
            featuredImage: "https://s3-alpha-sig.figma.com/img/d16a/0722/718429d5d207f6b63ea837de0bf84a3f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SnGchqp3fECI4iaa1~DiFh5iwqF9~BQIh5Yk4Ll-Uk332i~fcKX7rcR1XqrrXQ0oidUi0~pp8DEOstieYS8MuWQXpr8qXSjG~2ejar1YWYYW6ATfPhX4fJrgcVskeeTWTGsN~uirfclkHjnrdW9iR8KYmTXM9TGKqgheYNJ3dlSd6Q1sGF2Qay5i-HwZIa2MSMZtGq5-YFAEgTuGcXnBniJd3jQEOiX-MSUn8Kcl0TPP8SHnveoE~ELLkc~ZL4AGl2oVcbv7IR2ZyN3Nhc7B9vojGTlUzemKuwKW~NM-bXEWImYuzMNyfLekROVSRtvE~vnEdzdPYlC1ftQonLhB2A__",
            images: ["https://via.placeholder.com/600x400", "https://via.placeholder.com/300x200"],
        }),

     
    ],
    popular: [
        new Exhibition({
            exhibitionId: "3",
            name: "The Time Is Always Now: Artists Reframe the Black Figure",
            description: "",
            museumId: "M2",
            featuredImage: "https://s3-alpha-sig.figma.com/img/42fd/abb2/a87b036067f4e9d69304923c87497a89?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HppoeFUTBaoNh3V6pLKIIbr03cuZ0UbUHA2q3kzL~I4jj2tRcfo4gI08dLR-Nf1zBUI9laaFx73jD~eYAfr4pGNF8vrn~m~e7QLBjIsdTcuQ-rfkSx16uvMOY80hNhtS849xNQHjOxz~t~~chnU5D~z3c9rQsCGQ7Rw4AfAYkuLK84KkW8hd4aB1u71SwEBz4FXTw9ZhE6IJVBN7GC1HhGXYf98R4~aE5LAoWG5z-BLjwngXD9nMKsLnwA-Sl0O0lxXBDs-FnxJQRpFSsYhuO08q5UYW0JxM6m0LkyCai61BC-dULw-9hr9B0n2~JR~F94N1Dj~IZ9Gfnym0V~EBwg__",
            images: [],
        }),
        new Exhibition({
            exhibitionId: "4",
            name: "Where I Learned to Look: Art from the Yard",
            description: "",
            museumId: "M3",
            featuredImage: "https://s3-alpha-sig.figma.com/img/96bd/01ca/f002ecd773908833d7a314f40eab424c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6XZlPX03DswOplZJEIyPSvd---HJTCo0sRXpdQ8VQE4LzpqqMbUQCm7aLLI1falZM6nzLNPnypBeGvK75ZK9ACWNRuAR9YVbrVmmb~Zx0uaJb-XgNPp3FGyRqymJqGRRbqkaNnm7b6KaAp2Ha0VGPr0QT7rXWY~8G-koPn6Ix7pfCQ1t~uubix5bHdBD0GU36wTTSRmFgvwC-L-Dx61929wd3KAmgjUCaLO8u5IJyLk8zqQzZZiq2EaRpjVwqxCmZh9Q4KqNu8CWN-5gBe0WzRwAoItJWXzjtaGgqcGOkEVsLnhwpX~XfLmsyVARbg6n-SDueDVvXNsyeK2Stn9fg__",
            images: [],
        }),
        new Exhibition({
            exhibitionId: "5",
            name: "Visions of the Land in Edo Japan",
            description: "",
            museumId: "M3",
            featuredImage: "https://s3-alpha-sig.figma.com/img/a898/cd19/d2543079007bce4ce64a98ec7e558908?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0gSD5jUdpw-Vpvn3g7bpKJh3QGW9880~23TEJ~KgmXKYN4fNbK7E03LE6nt64weRFXQqyYRyLPAPtEL1ghaJYmV-OU7EF733l8RAFWpe1DdGL7PnAA7I561eVF37Ls8NfOM-54dqx6LPF8UpBewn7c2NOgOQnqtkm9LtAvZnxrUo8Ja0ueiTrzGBUHUAXNZOYedFFJ9qpz16M5KCTlGG45q9EBljBjOY3QSajzutIHGwDxUDFUqGPvIPlqoDjG8W-w69Y40d7DvGQx65TF2RDzyJglFGeuTmKHu9vGLLbTL7csLzTMi4CDNMO~w-amBWZFZaLdB-w5XSFcmOUWQww__",
            images: [],
        }),
        new Exhibition({
            exhibitionId: "",
            name: "Mark Sfirri: La Famiglia",
            description: "",
            museumId: "M3",
            featuredImage: "https://s3-alpha-sig.figma.com/img/6762/6d2f/db804505c1abac0f6ca66e24b6ec1531?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Od~ebjRwbjKFnugAxCqZCiBgRDorI3sc5DyMBvCXMVt8LCagbz-fq9JFVEF9znZITi6g~Fw4uwnvugjYVYFArw1AkSkvmh1PJni9Uh2FUIDPcNgUZ5EVdnJNt1dM8Ru0azSI4oNKW5JcqNNsq6zjlyAC5eujyRbWgg7BbjEjQmWx3F~U~hIxlITtWV8K1O4bOG4aISMlYuznTCTgQrffMTXSRjr1wRrSFuZg3lAkpTJgCsipQiWrpLT-AYH99uDhQ6B6qy06U3PAU0jkt1MSMDytkGUp1BsCCPY4pPYFAYvtpGm0fsjktIfg7a9oIoVUdKc9GIbp899nlfxLtajotA__",
            images: [],
        }),
    ],
    endingSoon: [
        new Exhibition({
            exhibitionId: "5",
            name: "Strange Narratives | Resilient Bodies",
            description: "An exploration of physicality...",
            museumId: "M4",
            featuredImage: "https://via.placeholder.com/150",
            images: [],
        }),
        new Exhibition({
            exhibitionId: "6",
            name: "Treasures from the Rosenbach Collection",
            description: "Rare artifacts from history...",
            museumId: "M5",
            featuredImage: "https://via.placeholder.com/150",
            images: [],
        }),
    ],
};

export default mockExhibitions;

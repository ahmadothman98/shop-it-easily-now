export type Product = {
    id: number;
    name: string;
    category: string;
    color: string;
    price: number;
    available_stock: number;
    images: string[];
    size?: string;
};

export const product_list: Product[] = [
    {
        id: 1,
        name: "Soho",
        category: "essentials",
        color: "Leopard",
        price: 19,
        available_stock: 2,
        images: [
            "lumine website edited (11 of 175).jpg"
        ],
    },
    {
        id: 1,
        name: "Soho",
        category: "essentials",
        color: "Black",
        price: 19,
        available_stock: 12,
        images: [
            "lumine website edited (5 of 175).jpg"
        ],
    },
    {
        id: 1,
        name: "Soho",
        category: "essentials",
        color: "soho-brown",
        price: 19,
        available_stock: 2,
        images: [
            "lumine website edited (11 of 175).jpg"
        ],
    },
    {
        id: 1,
        name: "Soho",
        category: "essentials",
        color: "White",
        price: 19,
        available_stock: 2,
        images: [
            "lumine website edited (9 of 175).jpg"
        ],
    },
    {
        id: 1,
        name: "Soho",
        category: "essentials",
        color: "soho-offwhite",
        price: 19,
        available_stock: 2,
        images: [
            "lumine website edited (7 of 175).jpg"
        ],
    },
    {
        id: 2,
        name: "Monaco",
        category: "metals",
        color: "monaco-pink",
        price: 24,
        available_stock: 1,
        images: [
            "lumine website edited (16 of 175).jpg"
        ],
    },
    {
        id: 2,
        name: "Monaco",
        category: "metals",
        color: "monaco-brown",
        price: 24,
        available_stock: 3,
        images: [
            "lumine website edited (22 of 175).jpg"
        ],
    },
    {
        id: 3,
        name: "Kyoto",
        category: "metals",
        color: "kyoto-fullblack",
        price: 21,
        available_stock: 1,
        images: [
            "lumine website edited (18 of 175).jpg"
        ],
    },
    {
        id: 3,
        name: "Kyoto",
        category: "metals",
        color: "kyoto-black",
        price: 21,
        available_stock: 1,
        images: [
            "lumine website edited (32 of 175).jpg"
        ],
    },
    {
        id: 3,
        name: "Kyoto",
        category: "metals",
        color: "kyoto-brown",
        price: 21,
        available_stock: 1,
        images: [
            "lumine website edited (33 of 175).jpg"
        ],
    },
    {
        id: 4,
        name: "Côte",
        category: "essentials",
        color: "cote-brown",
        price: 22,
        available_stock: 3,
        images: [
            "lumine website edited (23 of 175).jpg"
        ],
    },
    {
        id: 4,
        name: "Côte",
        category: "essentials",
        color: "cote-bord",
        price: 22,
        available_stock: 1,
        images: [
            "lumine website edited (29 of 175).jpg"
        ],
    },
    {
        id: 5,
        name: "Venice",
        category: "metals",
        color: "Yellow",
        price: 25,
        available_stock: 0,
        images: [
            "lumine website edited (37 of 175).jpg"
        ],
    },
    {
        id: 5,
        name: "Venice",
        category: "metals",
        color: "Black",
        price: 25,
        available_stock: 1,
        images: [
            "lumine website edited (35 of 175).jpg"
        ],
    },
    {
        id: 5,
        name: "Venice",
        category: "metals",
        color: "veince-blu",
        price: 25,
        available_stock: 0,
        images: [
            "lumine website edited (36 of 175).jpg"
        ],
    },
    {
        id: 6,
        name: "Cairo",
        category: "metals",
        color: "Brown",
        price: 24,
        available_stock: 1,
        images: [
            "lumine website edited (28 of 175).jpg"
        ],
    },
    {
        id: 6,
        name: "Cairo",
        category: "metals",
        color: "Black",
        price: 24,
        available_stock: 3,
        images: [
            "lumine website edited (26 of 175).jpg"
        ],
    },
    {
        id: 7,
        name: "Beirut",
        category: "essentials",
        color: "borange",
        price: 24,
        available_stock: 3,
        images: [
            "lumine website edited (17 of 175).jpg"
        ],
    },
    {
        id: 7,
        name: "Beirut",
        category: "essentials",
        color: "Leopard",
        price: 24,
        available_stock: 1,
        images: [
            "lumine website edited (30 of 175).jpg"
        ],
    },
    {
        id: 7,
        name: "Beirut",
        category: "essentials",
        color: "black",
        price: 24,
        available_stock: 1,
        images: [
            "lumine website edited (24 of 175).jpg"
        ],
    },
    {
        id: 7,
        name: "Beirut",
        category: "essentials",
        color: "bblue",
        price: 24,
        available_stock: 1,
        images: [
            "lumine website edited (25 of 175).jpg"
        ],
    },
    {
        id: 7,
        name: "Beirut",
        category: "essentials",
        color: "brown",
        price: 24,
        available_stock: 1,
        images: [
            "lumine website edited (13 of 175).jpg"
        ],
    },
    {
        id: 8,
        name: "Riviera",
        category: "metals",
        color: "rmove",
        price: 25,
        available_stock: 1,
        images: [
            "lumine website edited (8 of 175).jpg"
        ],
    },
    {
        id: 8,
        name: "Riviera",
        category: "metals",
        color: "black",
        price: 25,
        available_stock: 2,
        images: [
            "lumine website edited (21 of 175).jpg"
        ],
    },
    {
        id: 9,
        name: "Seoul",
        category: "essentials",
        color: "white",
        price: 22,
        available_stock: 1,
        images: [
            "lumine website edited (38 of 175).jpg"
        ],
    },
    {
        id: 9,
        name: "Seoul",
        category: "essentials",
        color: "sgreen",
        price: 22,
        available_stock: 3,
        images: [
            "lumine website edited (39 of 175).jpg"
        ],
    },
    {
        id: 10,
        name: "Porto",
        category: "metals",
        color: "porto-black",
        price: 24,
        available_stock: 0,
        images: [
            "lumine website edited (10 of 175).jpg"
        ],
    },
    {
        id: 10,
        name: "Porto",
        category: "metals",
        color: "porto-brown",
        price: 24,
        available_stock: 2,
        images: [
            "lumine website edited (19 of 175).jpg"
        ],
    },
    {
        id: 10,
        name: "Porto",
        category: "metals",
        color: "Black",
        price: 24,
        available_stock: 0,
        images: [
            "lumine website edited (3 of 175).jpg"
        ],
    },
    {
        id: 11,
        name: "Miami",
        category: "essentials",
        color: "mpink",
        price: 20,
        available_stock: 2,
        images: [
            "lumine-website-edited-(34-of-175).jpg"
        ],
    },
    {
        id: 11,
        name: "Miami",
        category: "essentials",
        color: "White",
        price: 20,
        available_stock: 1,
        images: [
            "lumine website edited (40 of 175).jpg"
        ],
    },
    {
        id: 11,
        name: "Miami",
        category: "essentials",
        color: "Black",
        price: 20,
        available_stock: 1,
        images: [
            "lumine website edited (44 of 175).jpg"
        ],
    },
    {
        id: 11,
        name: "Miami",
        category: "essentials",
        color: "Leopard",
        price: 20,
        available_stock: 0,
        images: [
            "lumine website edited (43 of 175).jpg"
        ],
    },
    {
        id: 12,
        name: "Havana",
        category: "essentials",
        color: "Leopard",
        price: 21,
        available_stock: 1,
        images: [
            "lumine website edited (41 of 175).jpg"
        ],
    },
    {
        id: 12,
        name: "Havana",
        category: "essentials",
        color: "Black",
        price: 21,
        available_stock: 2,
        images: [
            "lumine website edited (42 of 175).jpg"
        ],
    },
    {
        id: 13,
        name: "Cannes",
        category: "essentials",
        color: "cyellow",
        price: 22,
        available_stock: 1,
        images: [
            "lumine website edited (14 of 175).jpg"
        ],
    },
    {
        id: 13,
        name: "Cannes",
        category: "essentials",
        color: "coffwhite",
        price: 22,
        available_stock: 1,
        images: [
            "lumine website edited (20 of 175).jpg"
        ],
    },
    {
        id: 14,
        name: "Orbit",
        category: "special",
        size: "49mm",
        color: "Black-lens-silver-metal",
        price: 45,
        available_stock: 1,
        images: [
            "lumine website edited (2 of 175).jpg"
        ],
    },
    {
        id: 14,
        name: "Orbit",
        category: "special",
        size: "42.5mm",
        color: "Black-lens-gold-metal",
        price: 45,
        available_stock: 1,
        images: [
            "lumine website edited (1 of 175).jpg"
        ],
    },
]
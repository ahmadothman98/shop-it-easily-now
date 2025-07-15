export interface Product {
    id: number;
    name: string;
    category: string;
    size?: string;
    color: string;
    description?: string;
    price: number;
    available_stock: number;
    images: string[];
}

export const product_list: Product[] = [
    {
        id: 1,
        name: "SOHO",
        category: "essentials",
        color: "Leopard",
        price: 19,
        available_stock: 2,
        images: [
            "lumine website edited (15 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 1,
        name: "SOHO",
        category: "essentials",
        color: "Black",
        price: 19,
        available_stock: 12,
        images: [
            "lumine website edited (5 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 1,
        name: "SOHO",
        category: "essentials",
        color: "soho-brown",
        price: 19,
        available_stock: 2,
        images: [
            "lumine website edited (11 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 1,
        name: "SOHO",
        category: "essentials",
        color: "White",
        price: 19,
        available_stock: 2,
        images: [
            "lumine website edited (9 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 1,
        name: "SOHO",
        category: "essentials",
        color: "soho-offwhite",
        price: 19,
        available_stock: 2,
        images: [
            "lumine website edited (7 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 2,
        name: "MONACO",
        category: "metals",
        color: "monaco-pink",
        price: 24,
        available_stock: 1,
        images: [
            "lumine website edited (16 of 175).jpg"
        ],
        description: "Frame Material: Metal | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 2,
        name: "MONACO",
        category: "metals",
        color: "monaco-brown",
        price: 24,
        available_stock: 3,
        images: [
            "lumine website edited (22 of 175).jpg"
        ],
        description: "Frame Material: Metal | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 3,
        name: "KYOTO",
        category: "metals",
        color: "kyoto-fullblack",
        price: 21,
        available_stock: 0,
        images: [
            "lumine website edited (18 of 175).jpg"
        ],
        description: "Frame Material: Stainless Steel | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 3,
        name: "KYOTO",
        category: "metals",
        color: "kyoto-black",
        price: 21,
        available_stock: 2,
        images: [
            "lumine website edited (32 of 175).jpg"
        ],
        description: "Frame Material: Stainless Steel | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 3,
        name: "KYOTO",
        category: "metals",
        color: "kyoto-brown",
        price: 21,
        available_stock: 1,
        images: [
            "lumine website edited (33 of 175).jpg"
        ],
        description: "Frame Material: Stainless Steel | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 4,
        name: "CÔTE",
        category: "essentials",
        color: "cote-brown",
        price: 22,
        available_stock: 1,
        images: [
            "lumine website edited (23 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 4,
        name: "CÔTE",
        category: "essentials",
        color: "cote-bord",
        price: 22,
        available_stock: 1,
        images: [
            "lumine website edited (29 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 5,
        name: "VENICE",
        category: "metals",
        color: "Yellow",
        price: 25,
        available_stock: 0,
        images: [
            "lumine website edited (37 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 5,
        name: "VENICE",
        category: "metals",
        color: "Black",
        price: 25,
        available_stock: 0,
        images: [
            "lumine website edited (35 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 5,
        name: "VENICE",
        category: "metals",
        color: "veince-blu",
        price: 25,
        available_stock: 0,
        images: [
            "lumine website edited (36 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 6,
        name: "CAIRO",
        category: "metals",
        color: "Brown",
        price: 24,
        available_stock: 1,
        images: [
            "lumine website edited (28 of 175).jpg"
        ],
        description: "Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 6,
        name: "CAIRO",
        category: "metals",
        color: "Black",
        price: 24,
        available_stock: 3,
        images: [
            "lumine website edited (26 of 175).jpg"
        ],
        description: "Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 7,
        name: "BEIRUT",
        category: "essentials",
        color: "borange",
        price: 24,
        available_stock: 2,
        images: [
            "lumine website edited (17 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: AC | Lens Optical Attribute: UV400",
    },
    {
        id: 7,
        name: "BEIRUT",
        category: "essentials",
        color: "Leopard",
        price: 24,
        available_stock: 1,
        images: [
            "lumine website edited (30 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: AC | Lens Optical Attribute: UV400",
    },
    {
        id: 7,
        name: "BEIRUT",
        category: "essentials",
        color: "black",
        price: 24,
        available_stock: 1,
        images: [
            "lumine website edited (24 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: AC | Lens Optical Attribute: UV400",
    },
    {
        id: 7,
        name: "BEIRUT",
        category: "essentials",
        color: "bblue",
        price: 24,
        available_stock: 1,
        images: [
            "lumine website edited (25 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: AC | Lens Optical Attribute: UV400",
    },
    {
        id: 7,
        name: "BEIRUT",
        category: "essentials",
        color: "brown",
        price: 24,
        available_stock: 0,
        images: [
            "lumine website edited (13 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: AC | Lens Optical Attribute: UV400",
    },
    {
        id: 8,
        name: "RIVIERA",
        category: "metals",
        color: "rmove",
        price: 25,
        available_stock: 0,
        images: [
            "lumine website edited (8 of 175).jpg"
        ],
        description: "Frame Material: Metal | Lens Optical Attribute: UV400",
    },
    {
        id: 8,
        name: "RIVIERA",
        category: "metals",
        color: "black",
        price: 25,
        available_stock: 1,
        images: [
            "lumine website edited (21 of 175).jpg"
        ],
        description: "Frame Material: Metal | Lens Optical Attribute: UV400",
    },
    {
        id: 9,
        name: "SEOUL",
        category: "essentials",
        color: "white",
        price: 22,
        available_stock: 1,
        images: [
            "lumine website edited (38 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: AC | Lens Optical Attribute: UV400",
    },
    {
        id: 9,
        name: "SEOUL",
        category: "essentials",
        color: "sgreen",
        price: 22,
        available_stock: 3,
        images: [
            "lumine website edited (39 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: AC | Lens Optical Attribute: UV400",
    },
    {
        id: 10,
        name: "PORTO",
        category: "metals",
        color: "porto-black",
        price: 24,
        available_stock: 0,
        images: [
            "lumine website edited (10 of 175).jpg"
        ],
        description: "Frame Material: Stainless Steel | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 10,
        name: "PORTO",
        category: "metals",
        color: "porto-brown",
        price: 24,
        available_stock: 0,
        images: [
            "lumine website edited (19 of 175).jpg"
        ],
        description: "Frame Material: Stainless Steel | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 10,
        name: "PORTO",
        category: "metals",
        color: "Black",
        price: 24,
        available_stock: 0,
        images: [
            "lumine website edited (3 of 175).jpg"
        ],
        description: "Frame Material: Stainless Steel | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 11,
        name: "MIAMI",
        category: "essentials",
        color: "mpink",
        price: 20,
        available_stock: 2,
        images: [
            "lumine-website-edited-(34-of-175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 11,
        name: "MIAMI",
        category: "essentials",
        color: "White",
        price: 20,
        available_stock: 1,
        images: [
            "lumine website edited (40 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 11,
        name: "MIAMI",
        category: "essentials",
        color: "Black",
        price: 20,
        available_stock: 0,
        images: [
            "lumine website edited (44 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 11,
        name: "MIAMI",
        category: "essentials",
        color: "Leopard",
        price: 20,
        available_stock: 0,
        images: [
            "lumine website edited (43 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 12,
        name: "HAVANA",
        category: "essentials",
        color: "Leopard",
        price: 21,
        available_stock: 0,
        images: [
            "lumine website edited (41 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 12,
        name: "HAVANA",
        category: "essentials",
        color: "Black",
        price: 21,
        available_stock: 2,
        images: [
            "lumine website edited (42 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: PC | Lens Optical Attribute: UV400",
    },
    {
        id: 13,
        name: "CANNES",
        category: "essentials",
        color: "cyellow",
        price: 22,
        available_stock: 0,
        images: [
            "lumine website edited (14 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: AC | Lens Optical Attribute: UV400",
    },
    {
        id: 13,
        name: "CANNES",
        category: "essentials",
        color: "coffwhite",
        price: 22,
        available_stock: 1,
        images: [
            "lumine website edited (20 of 175).jpg"
        ],
        description: "Frame Material: PC | Lens Material: AC | Lens Optical Attribute: UV400",
    },
    {
        id: 14,
        name: "ORBIT",
        description: "Polarized, Adjustable-Tint ND Filter Sunglasses - 9 Levels of Clarity",
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
        name: "ORBIT",
        description: "Polarized, Adjustable-Tint ND Filter Sunglasses - 9 Levels of Clarity",
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

// getProducts.ts
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

// export const getProducts = async (): Promise<Product[]> => {
//     try {
//         const querySnapshot = await getDocs(collection(db, "products"));
//         const products: Product[] = [];

//         querySnapshot.forEach((docSnap) => {
//             const data = docSnap.data();
//             products.push(data as Product);
//         });

//         return products;
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         throw error;
//     }
// };

export interface OrderItem {
    available_stock: number
    color: string
    id: string
    image: string
    name: string
    preorder: boolean
    price: number
    quantity: number
}

export interface UserData {
    address: string
    city: string
    discount: string
    email: string
    firstName: string
    giftDetails: string
    lastName: string
    phone: string
    street_bldg: string
}
export interface Order {
    createdAt: Timestamp
    discountValid: boolean
    items: OrderItem[]
    formData: UserData
    packagingPreference: string
    paymentMethod: string
    total: number
}

// export const getOrder = async (): Promise<Product[]> => {
//     try {
//         const querySnapshot = await getDocs(collection(db, "orders"));
//         const products: Product[] = [];

//         querySnapshot.forEach((docSnap) => {
//             const data = docSnap.data();
//             products.push(data as Product);
//         });

//         return products;
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         throw error;
//     }
// };


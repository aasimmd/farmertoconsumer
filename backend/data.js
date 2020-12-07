import bcrypt from 'bcryptjs';

const data= {

    //brycpt option 8 is autosalting
    users :[
        {
            name:'Aasim',
            email:'admin@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'idk',
            email:'user@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],

    products:[
        {
            name : "Tomato",
            category : "Vegetables",
            image : "/images/tomato.jpg",
            price : 20,
            countInStock : 33,
            rating : 4.5,
            Seller : "Shamu",
            numReviews : 10,
            description : "fresh"
        },

        {
            name : "Potato",
            category : "Vegetables",
            image : "/images/potato.jpg",
            price : 30,
            countInStock : 0,
            rating : 4.3,
            Seller : "Shamu",
            numReviews : 11,
            description : "fresh"
        },

        {
            name : "Apple",
            category : "Fruits",
            image : "/images/apple.jpg",
            price : 120,
            countInStock : 46,
            rating : 4.8,
            Seller : "Shamu",
            numReviews : 13,
            description : "fresh"
        }
    ]
}

export default data;
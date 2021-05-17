import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name:'Leandro',
            email:'lecamilotti@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'Thais',
            email:'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'azinha',
            category:'Dock',
            image: '/image/dock.png',
            price: 1290,
            countInStock: 0,
            brand:'China',
            rating: 3.5,
            numReviews:9,
            description: 'high quality product',
        },
        {
            
            name:'Laptop',
            category:'Cables',
            image: '/image/cable.png',
            price: 190,
            countInStock: 18,
            brand:'China',
            rating:3.5,
            numReviews:10,
            description: 'high quality product',
        },
        {
            
            name:'Station',
            category:'Dock',
            image: '/image/cable.png',
            price: 390,
            countInStock: 102,
            brand:'China',
            rating:4,
            numReviews:190,
            description: 'high quality product',
        },
        {
            
            name:'Placa mãe',
            category:'Dock',
            image: '/image/dock.png',
            price: 390,
            countInStock: 20,
            brand:'Duda',
            rating:4.0,
            numReviews:10,
            description: 'high quality product',
        },
        {
            
            name:'Power Supply',
            category:'Acessories',
            image: '/image/cable.png',
            price: 690,
            countInStock: 1,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description: 'high quality product',
        },
        {
           
            name:'video card',
            category:'Dock',
            image: '/image/dock.png',
            price: 390,
            countInStock: 30,
            brand:'Asus',
            rating:4.5,
            numReviews:10,
            description: 'high quality product',
        },
    ],
};

export default data;
import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Leandro",
      email: "lecamilotti@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Thais",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "The Lean Startup: How Constant Innovation...",
      category: "Book",
      image: "/image/book.jpg",
      price: 699.99,
      countInStock: 2,
      brand: "China",
      rating: 3.5,
      numReviews: 9,
      description:
        "With the HyperX Alloy Origins Core thinkyless gaming keyboard you can game as you like. The mechanical switches and the design in aluminum alloy ensure a solid response for a long time. The keyboard is connected via USB-C cable.",
    },
    {
      name: "Stand Mixer for Baking",
      category: "Kitchen",
      image: "/image/batedeira.jpg",
      price: 1990,
      countInStock: 18,
      brand: "China",
      rating: 3.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "FitBit Smart Watch",
      category: "SmartWatch",
      image: "/image/smartwatch.jpg",
      price: 3900,
      countInStock: 102,
      brand: "FitBit",
      rating: 4,
      numReviews: 190,
      description: "high quality product",
    },
    {
      name: "Smart speaker with Alexa, Charcoal Fabric",
      category: "Speaker",
      image: "/image/speaker.jpg",
      price: 390,
      countInStock: 20,
      brand: "Google",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "New Apple iPad Pro",
      category: "Ipad",
      image: "/image/ipad.jpg",
      price: 690,
      countInStock: 1,
      brand: "Apple",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
      category: "Dock",
      image: "/image/tv.jpg",
      price: 390,
      countInStock: 30,
      brand: "Samsung",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};

export default data;

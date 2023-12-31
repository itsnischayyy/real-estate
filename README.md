# Real Estate Platform

Welcome to our Real Estate Platform! This platform is designed to simplify the process of listing, searching, and contacting individuals regarding real estate properties. It is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and utilizes JWT for secure authentication. The platform seamlessly implements CRUD operations through a well-designed API. Whether you're looking to rent or buy, our custom filter search option ensures you find the perfect property.

## Features

- **User Authentication**: Users can sign up and sign in securely using JWT for authentication.

- **Listing Management**: Create, update, and delete property listings with ease. Each listing can be designated for rent or sale.

- **Search Functionality**: Utilize our custom filter search to find properties that match your criteria.

- **Contact Property Owners**: Reach out to the person who listed the property directly through the platform.

- **Image Uploads**: Users can securely upload images of their properties, which are stored using Firebase.

- **Secure Data Storage**: MongoDB is used to store all other data, ensuring the security and reliability of your information.

- **Middleware Handling**: Express.js handles middleware, ensuring smooth communication between the client and server.

## Getting Started

Follow these steps to get the platform up and running on your local machine:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/itsnischayyy/real-estate.git
    cd real-estate-platform
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:

    Create a `.env` file in the root directory and add the following:

    ```
    MONGO=your-mongodb-uri
    JWT_SECRET=your-desired-security-key
    VITE_FIREBASE_API_KEY=your-firebase-api-key
    ```

4. **Run the Application Serve**:
    Run the code in the root directory

    ```bash
    npm start
    ```
5. **Run the Application Front-End**:
    Run the code in the client directory

    ```bash
    npm run dev
    ```

6. Visit `http://127.0.0.1:5173/` in your browser to access the platform.

## API Documentation

For detailed information on the API endpoints and usage, refer to the [API Documentation](/docs/API_DOCUMENTATION.md).

## Deployment

This platform is deployed on [Vercel](https://real-estate-spm.vercel.app/) and [Render](https://real-estate-spm.onrender.com/), ensuring a reliable and scalable deployment.

Visit our live platform: [Real Estate Platform](https://real-estate-spm.vercel.app/)

## Contributing

We welcome contributions! Feel free to open issues and submit pull requests to help improve the platform.

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

---

Thank you for exploring our Real Estate Platform! If you have any questions or feedback, please don't hesitate to [contact us](mailto:nischaygupta299@gmail.com).

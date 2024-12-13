# Sociable

Sociable is a full-stack web app for photo-sharing, and fostering user connections. The client side is built with React for a seamless interface, while Node.js powers the server, using MongoDB for data management. Cloudinary handles photo storage and delivery. Sociable employs JSON Web Tokens (JWT) for secure user authentication. Designed with the MVC architectural pattern, it offers a robust platform for sharing, exploring, and connecting through visual content.

## Key Features:

- **Seamless Photo Sharing:**
  Share your favorite moments effortlessly. Upload photos, add captions, and instantly share them with friends and followers.

- **Feed:**
  Immerse yourself in a curated Feed. Explore a diverse range of visual stories.

- **User Profiles:**
  Each user has a dedicated profile, showcasing their uploaded photos.

## Technologies Used

### Frontend:

- **React.js** for a dynamic and responsive user interface.
- **Redux** for efficient state management.

### Backend:

- **Node.js and Express.js** - for server-side development.

### Database:

- **MongoDB** - for scalable and flexible data storage.

  
### Authentication:

- **JWT** - (JSON Web Tokens) for secure user authentication.
  Cloud Storage:

- **Cloudinary** - Utilizes cloud storage for reliable photo storage and retrieval.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)


### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/social-media-app.git
   cd social-media-app
   ```

2. **Install dependencies:**
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `server` directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   CLIENT_URL=http://localhost:5173
   ```

4. **Run the development servers:**
   - Backend:
     ```bash
     cd server
     npm run dev
     ```
   - Frontend:
     ```bash
     cd client
     npm start
     ```

     
5. **Access the app:**
   Open your browser and navigate to `http://localhost:5173`.

   ## Folder Structure

```
root
├── client          # Frontend code (React.js)
├── server          # Backend code (Node.js, Express.js)
└── README.md       # Project documentation
```

## Acknowledgments

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Socket.io](https://socket.io/)

Developed by [Umesh](https://www.linkedin.com/in/umeshsharma-dev/), feel free to reach out.

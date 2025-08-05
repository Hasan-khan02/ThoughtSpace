ThoughtSpace 
ThoughtSpace is a simple Post Application built using MERN stack principles with EJS as the frontend template engine. This project demonstrates backend REST API integration and rendering dynamic data without a connected database — the data is stored in an array on the server.
📌 Features
•	Server-side rendering using EJS.
•	REST API integration for data handling.
•	Express.js backend for routing and data processing.
•	Method Override for supporting PUT and DELETE requests via HTML forms.
•	UUID for generating unique post IDs.
•	Data stored in server-side array (no database connection).
•	Clean and modular code structure.
🛠️ Tech Stack
Frontend: EJS (Embedded JavaScript Templates)
Backend: Node.js, Express.js
Templating: EJS
Data Storage: In-memory array (no database)

Project Structure
├── views/            
├── public/            
├── routes/           
├── index.html         
├── app.js             
├── package.json      
└── README.md  

🚀 Getting Started
1️⃣ Clone the repository
2️⃣ Install dependencies
npm install
3️⃣ Run the application
node app.js
The server will start (default: http://localhost:3000).
🖼️ How It Works
•	The backend holds an array of post data.
•	Data is fetched through Express routes.
•	EJS templates render the posts dynamically.
•	You can add, edit, and delete posts using forms.


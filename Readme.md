ThoughtSpace - README
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
Packages Used:
"dependencies": {
  "ejs": "^3.1.10",
  "express": "^5.1.0",
  "method-override": "^3.0.0",
  "uuid": "^11.1.0"
}
📂 Project Structure
├── views/              # EJS templates
├── public/             # Static files (CSS, JS, images)
├── routes/             # Express route handlers
├── index.html          # Main entry file
├── app.js              # Main server file
├── package.json        # Project metadata & dependencies
└── README.md           # Project documentation
🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/thoughtspace.git
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
📌 Future Improvements
•	Connect to MongoDB for persistent storage.
•	Add authentication for post creation.
•	Implement API validation and error handling.
📄 License
This project is open-source and available under the MIT License.

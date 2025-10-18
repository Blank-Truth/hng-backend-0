# /me endpoint&catfact Project

This project is a simple RESTful API that returns my profile information and a random cat fact built with Node.js/Express.
Every request to /me fetches a new random cat fact 

## ⚙️ Setup Instructions  

### Clone the Repository  
Enter this command in your powershell terminal

git clone https://github.com/Blank-Truth/hng-backend-0.git

### Install Dependencies  
Make sure Node.js (v18 or higher) is installed. Then run the cmd below in terminal  

npm install


### To run the server 

npm start


### To test it  
Open your browser or use Postman to visit:  

http://localhost:3000/me

You should see a JSON response in the format  


{
  "status": "success",
  "user": {
    "email": "<your email>",
    "name": "<your full name>",
    "stack": "<your backend stack>"
  },
  "timestamp": "<current UTC time in ISO 8601 format>",
  "fact": "<random cat fact from Cat Facts API>"
}



# Deployment details

This API is live and hosted on **Railway**   

 **You can reach the live URL @**  
https://hng-backend-0.up.railway.app/me

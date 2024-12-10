
# Wellness Way Finder  

**Wellness Way Finder** is an all-in-one wellness tracking application designed to guide users toward a healthier lifestyle. The app provides users with tools to monitor their fitness goals, calculate BMI, track nutrition, and receive medical assistance through APIs. Whether you're aiming to maintain a balanced diet or access medical resources, Wellness Way Finder has you covered!  


https://github.com/user-attachments/assets/91cf069d-bc59-4477-a0c1-34a13c4b41d2



## Features  
- **BMI Calculator**: Calculate Body Mass Index (BMI) to assess your health status based on height and weight.  
- **Chart Generation**: Dynamic and interactive charts to track fitness progress.  
- **Nutrition Tracker**: Provides nutrition charts based on user input and goals.  
- **Medical Assistance**: Integrates with the Medicare API for real-time medical support.  

## Tech Stack  
- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **State Management**: Redux  
- **External APIs**: Medicare API  

## Installation  

### Prerequisites  
Ensure you have the following installed on your system:  
- Node.js  
- MongoDB  

### Steps to Run Locally  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/yourusername/wellness-wayfinder.git  
   ```  

2. Navigate to the project directory:  
   ```bash  
   cd wellness-wayfinder  
   ```  

3. Install dependencies:  
   ```bash  
   npm install  
   ```  

4. Set up environment variables:  
   Create a `.env` file in the root directory with the following variables:  
   ```env  
   MONGO_URI=your_mongodb_uri  
   PORT=5000  
   MEDICARE_API_KEY=your_medicare_api_key  
   ```  

5. Run the app:  
   ```bash  
   npm run dev  
   ```  

6. Open your browser and navigate to:  
   ```
   http://localhost:5000  
   ```  

## Usage  
- **BMI Calculator**: Enter height and weight to calculate and track your BMI.  
- **Nutrition Tracker**: Input dietary preferences and goals to receive personalized nutrition charts.  
- **Medical Assistance**: Access healthcare information and support through Medicare API integration.  
- **Track Progress**: Visualize fitness data with interactive charts.  

## Contributing  
We welcome contributions! To contribute to **Wellness Way Finder**, follow these steps:  
1. Fork the repository.  
2. Create a new branch:  
   ```bash  
   git checkout -b feature-branch  
   ```  
3. Make your changes.  
4. Commit your changes:  
   ```bash  
   git commit -m 'Add new feature'  
   ```  
5. Push to your branch:  
   ```bash  
   git push origin feature-branch  
   ```  
6. Open a pull request.  

## License  
This project is licensed under the MIT License.  


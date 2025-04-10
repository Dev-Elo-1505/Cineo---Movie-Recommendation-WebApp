# 🎬 Cineo – Your Personalized Movie Recommendation Web App  

![Cineo Banner](path/to/your/banner-image.png)  

Cineo is a sleek and intuitive web app that helps users **discover their next favorite movie** based on personalized filters like genre, rating, release year, and language. Powered by **The Movie Database (TMDB) API**, Cineo delivers smart recommendations and an immersive movie discovery experience.  

## ✨ Features  
- 🔍 **Movie Filtering** – Find movies by genre, rating, year, and language.  
- 🎥 **Personalized Recommendations** – Get tailored movie suggestions.  
- 🌍 **Multi-Language Support** – Choose from a variety of languages, with English as the default.  
- ⚡ **Fast & Responsive** – Built with **Next.js, Tailwind CSS, and Axios** for seamless performance.   

## 📸 Screenshots  
### Home Page  
![Home Page](path/to/your/home-page-screenshot.png)  

### Filter Page  
![Filter Page](path/to/your/filter-page-screenshot.png)  

## 🚀 Tech Stack  
- **Frontend**: React (Next.js), TypeScript, Tailwind CSS  
- **API**: TMDB (The Movie Database)  
- **State Management**: useState, useEffect  
- **HTTP Client**: Axios  

## 🛠 Setup & Installation  
### Prerequisites  
- **Node.js** (v16+ recommended)  
- **NPM or Yarn**  
- **TMDB API Key** (Get yours at [TMDB](https://www.themoviedb.org/))  

### Installation  
1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/cineo.git
   ```
2. Navigate to the project directory:  
   ```bash
   cd cineo  
   ```
3. Install dependencies:  
   ```bash
   npm install  
   ```
4. Create a `.env.local` file in the root directory and add your **TMDB API key**:  
   ```
   NEXT_PUBLIC_API_KEY=your_tmdb_api_key  
   ```
5. Run the development server:  
   ```bash
   npm run dev  
   ```
6. Open `http://localhost:3000` in your browser.  

## 🚦 Usage  
1. **Select your filters**: Choose a genre, rating, release year, and language.  
2. **Click 'Recommend'**: Fetch movie recommendations based on your preferences.  
3. **Browse results**: Scroll through movie suggestions and discover new films.  

## 🛠 API Usage  
### Fetching Genres  
```typescript
axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
```

### Fetching Languages  
```typescript
axios.get(`https://api.themoviedb.org/3/configuration/languages?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
```

## 📜 License  
This project is open-source and available under the [MIT License](LICENSE).  

## 💡 Contributing  
Contributions are welcome! Feel free to open issues or submit pull requests.  

## 🌟 Show Your Support  
Give a ⭐️ if you like this project!  

---  
Enjoy Cineo and discover amazing movies effortlessly! 🍿🎬


import axios from "axios";


export const fetchTrendingMovies = async () => {
  const options = {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzhhZmZkNjgxZDIyYWYzMDdkZjljYmRlZWY4YWM0OSIsInN1YiI6IjY2NTYzNzkzYWIwNjQ1N2NjNmEzZTdiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zeq3kQJr6oJQWWD14EVExwgTD3YI7cW9ypb4jtk7VZ8"
    }
  };
  const url = 'https://api.themoviedb.org/3/trending/movie/day';
  const response = await axios.get(url, options)
  return response.data;
};

export const searchMovieByQuery = async (query) => {
  const options = {
    headers: {
     Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzhhZmZkNjgxZDIyYWYzMDdkZjljYmRlZWY4YWM0OSIsInN1YiI6IjY2NTYzNzkzYWIwNjQ1N2NjNmEzZTdiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zeq3kQJr6oJQWWD14EVExwgTD3YI7cW9ypb4jtk7VZ8"
    },
    params: {query: `${query}`, include_adult: 'false', language: 'en-US', page: '1'},
  };
  const url = 'https://api.themoviedb.org/3/search/movie';

  const response = await axios.get(url, options);
  return response.data;

};

export const fetchMovieDetails = async (movieId) => {
  const options = {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzhhZmZkNjgxZDIyYWYzMDdkZjljYmRlZWY4YWM0OSIsInN1YiI6IjY2NTYzNzkzYWIwNjQ1N2NjNmEzZTdiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zeq3kQJr6oJQWWD14EVExwgTD3YI7cW9ypb4jtk7VZ8"
    }
  };
  
  const url = `https://api.themoviedb.org/3/movie/${movieId}`

  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const options = {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzhhZmZkNjgxZDIyYWYzMDdkZjljYmRlZWY4YWM0OSIsInN1YiI6IjY2NTYzNzkzYWIwNjQ1N2NjNmEzZTdiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zeq3kQJr6oJQWWD14EVExwgTD3YI7cW9ypb4jtk7VZ8"
    }
  };
  
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`

  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMovieReviews = async (movieId) => {
  const options = {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzhhZmZkNjgxZDIyYWYzMDdkZjljYmRlZWY4YWM0OSIsInN1YiI6IjY2NTYzNzkzYWIwNjQ1N2NjNmEzZTdiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zeq3kQJr6oJQWWD14EVExwgTD3YI7cW9ypb4jtk7VZ8"
    }
  };
  
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`

  const response = await axios.get(url, options);
  return response.data;
};
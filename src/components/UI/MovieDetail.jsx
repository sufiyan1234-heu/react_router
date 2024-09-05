import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MovieDetail = () => {
  const movieDetails = useLoaderData();
  console.log(movieDetails)

  return (
    <div className="flex flex-col items-center p-8  text-black">
      {/* Movie Poster and Basic Info */}
      <div className="flex flex-col md:flex-row gap-8 bg-gray-400 p-5 rounded-lg shadow-lg">
        <img
          src={movieDetails.Poster}
          alt={movieDetails.Title}
          className="w-72 h-auto rounded-lg shadow-md"
        />
        <div className="flex flex-col justify-between">
          <h1 className="text-4xl font-bold mb-2">{movieDetails.Title}</h1>
          <p className="text-lg text-black">
            {movieDetails.Year} • {movieDetails.Genre}
          </p>
          <p className="text-lg mt-4">Directed by: {movieDetails.Director}</p>
          <p className="text-lg mt-2">Starring: {movieDetails.Actors}</p>
          <p className="text-lg mt-2">Rating: {movieDetails.Rated}</p>
          <p className="text-lg mt-2">Runtime: {movieDetails.Runtime}</p>
          <p className="text-lg mt-2">Box Office: {movieDetails.BoxOffice}</p>
          <p className="text-lg mt-2">Language: {movieDetails.Language}</p>
        </div>
      </div>

      {/* Plot and Additional Info */}
      <div className="mt-8 w-full md:w-2/3">
        <h2 className="text-3xl font-semibold mb-4">Plot</h2>
        <p className="text-lg text-black">{movieDetails.Plot}</p>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Awards</h2>
          <p className="text-lg text-black">{movieDetails.Awards}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Ratings</h2>
          <ul className="space-y-2">
            {movieDetails.Ratings.map((rating, index) => (
              <li key={index} className="text-lg text-black">
                {rating.Source}: {rating.Value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

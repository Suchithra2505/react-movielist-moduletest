// import React from 'react';

// function GenreFilter({ genres }) {
//   const handleGenreClick = (genre) => {
//     console.log(`Filtering by: ${genre}`);
//   };

//   return (
//     <div className="genre-container">
//     <h2>Filter by Genre</h2>
//     <div className="genre-filter">
//       {genres.map((genre, index) => (
//         <button key={index} onClick={() => handleGenreClick(genre)}>
//           {genre}
//         </button>
//       ))}
//     </div>
//   </div>
// );
// }

// export default GenreFilter;
import React from 'react';

function GenreFilter({ genres, onGenreSelect }) {
  const handleGenreClick = (genre) => {
    // Call the onGenreSelect handler with the selected genre
    console.log(`Filtering by: ${genre}`);
    onGenreSelect(genre);
  };

  return (
    <div className="genre-container">
      <h2>Filter by Genre</h2>
      <div className="genre-filter">
        {genres.map((genre, index) => (
          <button key={index} onClick={() => handleGenreClick(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;

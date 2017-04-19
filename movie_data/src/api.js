export const fetchMovieDetailsByTitle = (title) => {
    return fetch(`http://www.omdbapi.com/?t=${title}`)
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            return {
                title: jsonData.Title,
                year: jsonData.Year,
                director: jsonData.Director,
                plot: jsonData.Plot
            }
        })
}
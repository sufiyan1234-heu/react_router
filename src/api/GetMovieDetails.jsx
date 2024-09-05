export const GetMovieDetails = async ({ params }) => {
  console.log(params)
  try {
    const res = await fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=bbd02d93`);
    const data = res.json()
    return data
  } catch (error) {
    console.log(error)
  }

}
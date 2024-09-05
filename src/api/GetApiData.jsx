export const GetApiData = async () => {

  try {
    const res = await fetch("https://www.omdbapi.com/?apikey=bbd02d93&s=titanic&page=1");
    const data = res.json()
    return data
  } catch (error) {
    console.log(error)
  }

}


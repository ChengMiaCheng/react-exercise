const API_KEY='3a26885b35cdab03492b30666928fa4c517072e3'
const ENDPOINT = 'https://emoji-api.com/emojis'

export const fetchEmojis = async (searchText) => {

  const url = `${ENDPOINT}?access_key=${API_KEY}&search=${searchText}`
  console.log('fetching external api for ', searchText);
  try{
    const res = await fetch(url)
    const filteredEmojis = await res.json()
    await new Promise(resolve => setTimeout(resolve, 2000))
    return filteredEmojis?.slice(0,20)
  }
  catch(err){
    console.log('error while fetching api', url, err)
    return []
  }

};

export const fetchEmoji = async (slug) => {
  const url = `${ENDPOINT}/${slug}?access_key=${API_KEY}`
  try{
    const res = await fetch(url)
    return await res.json()
  }catch(err){
    console.log('error while fetching api', url, err)
  }
}

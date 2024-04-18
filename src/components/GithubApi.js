// calling github api here and sending data from here to other components if needed

const GitApi = "https://api.github.com/users/theakash04"
let imageUrl;

async function CallApi(){
  try {
    const fetched = await fetch(GitApi);
    const JsonData = await fetched.json()
    imageUrl = await JsonData.avatar_url;
  } catch (error) {
    console.log("ERROR :: Caling Git Api ", error)
  }

}
CallApi();


export default async function getImageUrl(){
  await CallApi();
  console.log(imageUrl)
  return imageUrl;
}

getImageUrl()


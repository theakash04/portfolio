export const githubInfoLoader = async() =>{
  const res = await fetch('https://api.github.com/users/theakash04')
  return res.json();
}

githubInfoLoader();
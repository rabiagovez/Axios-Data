import axios from "axios";

async function getData(userId){

try{
const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

const userData = await userResponse.data;
const postData = await postResponse.data;

const filteredPosts = postData.filter(post => post.id === 1);

return { ...userData, posts: filteredPosts };

}

catch(e){
    console.error("Error fetching data:", e);  
}

}

export default getData;


//Sırayla yazmak istiyorsak iç içe yazarız
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=> data.json())
// .then((users) => {console.log("Users yüklendi!!", users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data)=> data.json())
// .   then((post) => console.log("Post yüklendi!!",post));
// })

const { rejects } = require('assert');
const { resolve } = require('path');

//ASYNC & AWAIT

// async function getData() 
// {

// const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
// ).json();

// const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
// ).json();

// const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
// ).json();

// console.log("Users: ",users)
// console.log("Post1: ",post1)
// console.log("Post2: ",post2)


// }

// getData();

// import axios from 'axios';
const axios = require('axios').default;

// (async () => 
// {
// const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");

// const {data: post1} =  await axios("https://jsonplaceholder.typicode.com/posts/1");

// const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

// console.log("Users: ",users)
// console.log("Post1: ",post1)
// console.log("Post2: ",post2)
// })();


//PROMISE

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
});
};

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id

        );
        resolve(data);
        // reject("Bir sorun daha oluştu")
});
};

(async () => {
    try{
        const users = await getUsers();
        const post = await getPost(1);
    
        console.log(users);
        console.log(post);
    } catch(e){
        console.log(e)
    }
    
})();

//Başka bir yöntem
// Promise.all([getUsers(),getPost(1)]).then(console.log).catch(console.log);


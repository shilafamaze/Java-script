// fetch("http://jsonplaceholder.typicode.com/posts")
// .then((res)=>{return res.json()})
// .then((data)=>{console.log(data);})
// .then((error)=>{console.log(error);})



function getData(){
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then((res)=>{return res.json()})
    .then((data)=>{
        console.log(data);
        str=``
        data=map((post)=>{
            str+=`<li>${post.id}->${post.title}</li>`
        })
        document.getElementById("list").innerHTML=str;
    })
    .catch((error)=>{console.log(error);})
}
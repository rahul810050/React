// import { useEffect, useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0);

//   const [hell, setHell] = useState(true);
//   function increaseCount(){
//     setCount(count => count+1);
//   }

//     useEffect(function(){
//       const interval = setInterval(() => {
//         setHell(c => !c);
//       }, 5000);

//       return ()=>{
//         clearInterval(interval)
//       }
//     }, [])
  

  
//   return (
//     <>
//       hi  there 
//       {hell ? <Button count={count} increaseCount={increaseCount}/>: null}
//     </>
//   )
// }

// function Button(props){

//   useEffect(function(){
//     const interval = setInterval(function(){
//       props.increaseCount();
//     }, 1000)

//     return ()=> clearInterval(interval);
//   }, [])

//   return (
//     <>
//       <h1>{props.count}</h1>
      
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Post from './Post'

// export default function App() {
//   const [post, setPost] = useState([]);

//   const postRender = post.map(post => 
//     (<Post
//     image={post.image}
//     title={post.title}
//     follower={post.follower}
//     time={post.time}
//     description={post.description}
//     />)
// )


//   function  addPost(){
//     setPost([...post,{
//       image: "https://media.licdn.com/dms/image/v2/D5603AQG5scYQdTEELQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725876306275?e=1736985600&v=beta&t=gLEPDvhbgl0VJAPd1ZHF6CVVVQVS9jyIQj1Xig-BXpQ",
//       title: "Rahul Naskar",
//       follower: "2k follower",
//       time: "12m ago",
//       description: "I am thrilled to share this with you all that I have achieved..."
//     }])
//     console.log(post)
//   }
//   return (
//     <>
//       <div>
//         <button onClick={addPost}>Add Post</button>
//       </div>
//       <div style={{display:'flex', justifyContent: 'center'}}>
//       <div>
//         {postRender}
//       </div>
//       </div>
//     </>
//   )
// }



// import React, {useState, useEffect } from 'react'



// function App() {

//   const [count, setCount] = useState(0);

// useEffect(function(){
//   const interval = setInterval(function(){
//     setCount(count => count +1);
//   }, 1000)

//   return()=> {
//     clearInterval(interval)
//   }
// }, [])

// useEffect(function(){
//   console.log('count increases  to :', count)
// }, [count])


//   return (
//     <div>
//       {count} 
//     </div>
//   )
// }

// export default App


import React from 'react';

function App() {
  return (
    <div>
      <Errorboundary>
        <Card1 />
      </Errorboundary>
      <Card2 />
    </div>
  );
}

function Card1() {
  throw new Error("error while rendering");

  return (
    <div>
      hi there
    </div>
  );
}

function Card2() {
  return (
    <div>
      hey there
    </div>
  );
}

// Error Boundary

class Errorboundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default App;

import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

	const data = useLoaderData()

	// const [data, setData] = useState([])

	// useEffect(()=>{
	// 	fetch('https://api.github.com/users/rahul810050')
	// 	.then(res=> res.json())
	// 	.then(data => {
	// 		console.log(data);
	// 		setData(data)
	// 	})
	// },[])

	return (
		<div className='bg-slate-700 text-white text-2xl p-4'>
			<p>Github Followers: {data.followers}</p>
			<p>Github Repos: {data.public_repos}</p>
			<img src={data.avatar_url} alt="" width={300} />
		</div>
	)
}

export default Github


export const githubInfoLoader = async ()=>{
	const response = await fetch('https://api.github.com/users/rahul810050')
	return response.json()
}
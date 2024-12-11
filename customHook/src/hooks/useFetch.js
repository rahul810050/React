import { useState, useEffect } from "react";

export default function useFetch(url){

	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true)

	async function getData(){
		setLoading(true)
		const response = await fetch(url);
		const json = await response.json();
		setData(json);
		setLoading(false);
	}

	useEffect(()=> {
		getData()
	}, [url]);

	// useEffect(()=> {  // RE-FETCHING IN EACH 10 SEC
	// 	setInterval(() => {
	// 		getData()
	// 	}, 10 * 1000);
	// }, [url])

	return {
		data,
		loading
	}
}
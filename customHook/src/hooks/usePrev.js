import { useEffect, useRef } from "react";

export default function usePrev(value){
	const ref = useRef();
	console.log('re-render happened with new value', value)

	useEffect(()=> {
		console.log('updated the value', value);
		ref.current = value
	}, [value])

	console.log('returned', ref.current);
	return ref.current
}  // react first return value then useEffect gets called later
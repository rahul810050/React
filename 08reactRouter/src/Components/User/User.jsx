import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
	const {userid} = useParams()
	return (
		<div className='bg-green-700 rounded-lg shadow-2xl p-2 text-white text-xl'>
			User: {userid}
		</div>
	)
}

export default User

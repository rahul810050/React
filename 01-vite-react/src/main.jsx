import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function myApp(){
//   return (
//     <div>
//       <h2>Positivity</h2>
//     </div>
//   )
// } 

// const ReactElement = {
// 	type: 'a',
// 	props: {
// 		href: 'https://google.com',
// 		target: '_blank'
// 	},
// 	children: 'click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target= ''>visit google</a>
)

const variable = 'it is variable'

const reactElement = React.createElement(
	'a',
	{
		href: 'hhtps://google.com',
		target: '_blank'
	},
	'click me to visit google ',
	variable

)

ReactDOM.createRoot(document.getElementById('root')).render(

   reactElement
)

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<App/>
// )
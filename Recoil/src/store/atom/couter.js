import { atom, selector } from "recoil";
import axios from 'axios'

// export const CounterAtom = atom({
// 	default: 0,
// 	key: "Counter"
// })


// export const CounterSelector = selector({
// 	key: 'isEven',
// 	get: function({get}){
// 		const count = get(CounterAtom);
// 		const isEven = (count % 2 == 0);
// 		return isEven;
// 	}
// })


// Asynchronous data queries
export const notificationAtom = atom({
	key: "notificationAtom",
	default: selector({
		key: "notificationSelector",
		get: async ()=> {
			const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
			return res.data
		}
	})
})


export const totalNotificationSelector = selector({
	key: "totalNotificationSelector",
	get: ({get})=>{
		const allNotifications = get(notificationAtom);
		return allNotifications.userId + allNotifications.id;
	}
})
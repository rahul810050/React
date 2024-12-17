import {atomFamily} from 'recoil'

const TODOS = [
	{
		id: 1,
		title: "go to gym"
	},
	{
		id: 2,
		title: "go to class"
	}
]


export const todosAtomFamily = atomFamily({
	key: 'todosAtomFamily',
	default: id => {
		return TODOS.find(x => x.id === id)
	}
})
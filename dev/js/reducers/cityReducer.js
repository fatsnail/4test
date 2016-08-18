export default function(state='shanghai',action){
	switch(action.type)
	{
		case 'JIA_CITY':{
			return action.city
		}
		default:{
			return state
		}
	}
}
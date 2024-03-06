import {CurrentUser} from './CurrentUser';
import {UserType} from './HW2';

type FilteredUsersType = {
	myFriends: UserType[]
}

type UserList2PropsType = {
	users: FilteredUsersType // пропиши типизацию
	filterUsers: () => void // пропиши типизацию
};

export const UserList2 = (props: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={props.filterUsers}>SHOW ME FRIENDS FROM LA</button>

			<ul>
			  {props.users.myFriends.map((user: UserType) => (
			    <CurrentUser user={user} key={user.id}/>
			  ))}
			</ul>
		</div>
	);
};

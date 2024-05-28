import FriendListItem from './page/FriendListItem';

export default function FriendList({ friends }) {
    // console.log(result)
    return (
        <div>
            <ul>
                {friends.map((first) => {
                    <li key={first.id}>
                        <FriendListItem friends={first} />
                    </li>
                })}

            </ul>
        </div>
    );
}




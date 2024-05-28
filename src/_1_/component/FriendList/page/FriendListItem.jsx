import clsx from "clsx";
import css from '../../FriendList/FriendList.module.css'


const FriendListItem = ({ friends }) => {
    console.log(friends)
    return (
        <div>
            <div>
                <img src={friends.avatar} alt="Avatar" width="48" />
                <p>{friends.name}</p>
                <p
                    className={clsx(css.text, friends.isOnline === true ? css.online : css.ofline)}
                >
                    {friends.isOnline === true ? 'Online' : 'Ofline'}
                </p>
            </div>
        </div>
    );
}

export default FriendListItem;



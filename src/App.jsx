import Profile from "./component/Profile/Profile"
import userData from './api.json'
import first from './FriendListItem.json'
import FriendList from "./component/FriendList/FriendList"
import date from './pade.json'
import TransactionHistory from "./component/TransactionHistory/TransactionHistory"


function App() {

  return (
    <>
      <Profile state={userData} />
      <FriendList result={first} />
      <TransactionHistory resultFirssst={date} />
    </>
  )
}

export default App

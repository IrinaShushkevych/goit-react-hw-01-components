import user from './data/user.json'
import data from './data/data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'
import Profile from './components/React-Profile/profile/profile'
import Statistics from './components/React-Statistics/statistics/statistics'
import FriendList from './components/React-Friends/friendList/friendList'
import TransactionHistory from './components/React-TransactionHistory/transactionHistory/transactionHistory'

function App() {
  return (
    <div className="app">
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendlist={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  )
}

export default App

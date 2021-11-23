import user from './data/user.json'
import data from './data/data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'
import Profile from './components/Profile/profile'
import Statistics from './components/Statistics/statistics'
import FriendList from './components/FriendsList/friendList'
import TransactionHistory from './components/TransactionHistory/transactionHistory'

function App() {
  return (
    <div className="App">
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendlist={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  )
}

export default App

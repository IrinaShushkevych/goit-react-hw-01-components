import user from './data/user.json'
import data from './data/data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'
import s from './App.module.css'
import Profile from './components/profile/profile'
import Statistics from './components/statistics/statistics'
import FriendList from './components/friendList/friendList'
import TransactionHistory from './components/transactionHistory/transactionHistory'

function App() {
  return (
    <div>
      <div className={s.container}>
        <div>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <Statistics title="Upload stats" stats={data} />
        </div>
        <FriendList friendlist={friends} />
      </div>
      <TransactionHistory transactions={transactions} />
    </div>
  )
}

export default App

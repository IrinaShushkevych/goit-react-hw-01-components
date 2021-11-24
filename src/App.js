import user from './data/user.json'
import data from './data/data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'
import s from './App.module.css'
import Profile from './components/React-Profile'
import Statistics from './components/React-Statistics'
import FriendList from './components/React-Friends'
import TransactionHistory from './components/React-TransactionHistory'

function App() {
  return (
    <div>
      <div className={s.container}>
        <div>
          <Profile user={user} />
          <Statistics title="Upload stats" stats={data} />
        </div>
        <FriendList friendlist={friends} />
      </div>
      <TransactionHistory transactions={transactions} />
    </div>
  )
}

export default App
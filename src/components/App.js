import React, {useEffect,useState} from "react";
// import AccountContainer from "./AccountContainer";
import AddTransactionForm from "./AddTransactionForm";
//import Transaction from "./Transaction";
import TransactionsList from "./TransactionsList";

function App() {
//We fetch data in this component and pass it down to components that needs it
//We then store this data in a state so that we can use it
const [myTransactions,setMytransactions]=useState([])

  useEffect(()=>{
fetch(" http://localhost:8001/transactions")
.then(data=>data.json())
.then(transaction=>setMytransactions(transaction))
  },[]);//We pass empty dependency array to prevent continous rendering of the page
   
  console.log(myTransactions)

  function handleUpdateOnSubmission(myNewTransaction){
    console.log(myNewTransaction)
    
    //Updating the form with user input
    setMytransactions(myTransactions =>[...myTransactions,myNewTransaction])
    

  }

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      {/* <AccountContainer /> */}
      <div>
        <AddTransactionForm onSubmittion={handleUpdateOnSubmission} />
        <TransactionsList transactions={myTransactions} />
      
      </div>
    </div>
  );
}

export default App;

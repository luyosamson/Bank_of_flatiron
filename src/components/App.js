import React, {useEffect,useState} from "react";
import AddTransactionForm from "./AddTransactionForm";
import Search from "./Search";
import TransactionsList from "./TransactionsList";

function App() {
//We fetch data in this component and pass it down to components that needs it
//We then store this data in a state so that we can use it
const [myTransactions,setMytransactions]=useState([])

  useEffect(()=>{
fetch("http://localhost:8001/transactions")
.then(data=>data.json())
.then(transaction=>setMytransactions(transaction))
  },[]);//We pass empty dependency array to prevent continous rendering of the page
   
  console.log(myTransactions)

  function handleUpdateOnSubmission(myNewTransaction){
    console.log(myNewTransaction)
    
    // Updating the form with user's input
    setMytransactions(transaction =>[...transaction,myNewTransaction])
    // POST request needs to be created here
    // since it is from within this function that we get new transactions post 
  

    const server_Option={
      method:"POST",
      header:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(myNewTransaction)
    }

    fetch("http://localhost:8001/transactions",server_Option)
    .then(my_Data=>my_Data.json())
    .then(newData=>(newData))
    
  };

function handleOnFormSearching(search){
  setMytransactions(transact=>transact.filter(transaction=>transaction.description?.includes(search)))

  }


  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
    
      <div>
         <Search onSearch={handleOnFormSearching} />
        <AddTransactionForm onSubmittion={handleUpdateOnSubmission} />
        <TransactionsList transactions={myTransactions} />
      
      </div>
    </div>
  );
}

export default App;

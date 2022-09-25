import React,{useState} from "react";

function AddTransactionForm({onSubmittion}) {

  const [myFormData,setmyFormData]=useState(
    {date:"",
    description:"",
    category:"",
    amount: 0

    })

  function handleFormChange(e){
    setmyFormData({...myFormData,[e.target.name]:e.target.value})

  }

  function handleSubmit(e){
    e.preventDefault()
    onSubmittion(myFormData)
    // console.log(myFormData)

  }



  return (
    <div className="ui segment">
      <form className="ui form" onChange={handleFormChange}   onSubmit={handleSubmit}  >
        <div className="inline fields">
        <label for="date">Date</label> 
          <input type="date" name="date" value={myFormData.date} />
          <input type="text" name="description" placeholder="Description" value={myFormData.description} />
          <input type="text" name="category" placeholder="Category"  value={myFormData.category} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={myFormData.amount} />
        </div>
        <button className="ui button" type="submit" >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;

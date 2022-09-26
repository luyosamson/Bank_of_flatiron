import React,{useState} from "react";

function Searchitem({onSearch}) {
  const [search,setSearch]=useState("")

function handleChange(e){
  setSearch(e.target.value)
  onSearch(search)

}

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={search}
        placeholder="Search your Recent Transactions"
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Searchitem;

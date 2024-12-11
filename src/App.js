/* global chrome */
import { useEffect, useState } from 'react';
import "./app.css"


function App() {

  const [blockedCompanies, setBlockedCompanies] = useState([])
  const [newCompany, setNewCompany] = useState("")




  const addCompany =() =>{
    chrome.storage.sync.get(['blockedCompanies'], (result) => {
      if(!result.blockedCompanies.includes(newCompany)){
        const list = [newCompany, ...(result.blockedCompanies) || []]
        setBlockedCompanies(list)
        chrome.storage.sync.set({'blockedCompanies':list})
      }
    })
    setNewCompany("")
  }

  const removeFromFilter = (item) =>{
    chrome.storage.sync.get(['blockedCompanies'], (result) => {
      const list = result.blockedCompanies.filter((e) => e !== item)
      setBlockedCompanies(list)
      chrome.storage.sync.set({"blockedCompanies":list})
    })
  }

  useEffect(() => {
    
    chrome.storage.sync.get(['blockedCompanies'], (result) => {
      const companies = result.blockedCompanies || [];
      setBlockedCompanies(companies);
    });
    
  }, chrome.storage);
  


  return (
      <div className='px-4 py-2 mx-auto bg-white w-max' >
        <input value={newCompany}
        className = ' block w-full p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-50 text-base  dark:bg-gray-700 dark:border-gray-600  dark:text-white ' 
        onChange={(e) => setNewCompany(e.target.value)}></input>
        <button className = 'mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
          onClick={() => addCompany(newCompany)}> Add To Filter</button>
        <ul>
          {
            blockedCompanies.map((item,index) =>(
              
              <li className={`block px-3 border border-gray-500 bg-gray-100 dark:border-gray-600  rounded-lg ${index == blockedCompanies.length-1 ? "" : "mb-1"}`}>
                {console.log(index, item)}
                <div className='flex flex-wrap items-center justify-between -m-2'>
                  <span className='w-auto px-3 py-2 font-semibold tracking-tight'>
                    {item}
                  </span>
                  <div className='w-auto px-1 py-2'>
                    <button className="inline-block mx-auto px-2 py-2  text-black  text-2xl font-semibold, bg-gray-100 rounded-xl" onClick={() => removeFromFilter(item)}>
                      &times;
                    </button>
                  </div>
                  
                </div>
               
              </li>
            ))
          }
        </ul>
       
      </div>
  
   
  );
}

export default App;

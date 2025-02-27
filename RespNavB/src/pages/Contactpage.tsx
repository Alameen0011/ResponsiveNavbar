import React, { useState } from 'react'

const Contactpage = () => {

  const [userName,setUsername] = useState<string>("")
  const [email,setEmail] = useState<string>("")
  const [isChecked,setIsChecked] = useState<boolean>(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e, ": available events")
       setUsername(e.target.value)
       return;
  }

  const handleSubmit  = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userName)
    console.log(email)
  }


  return (
    <div>
      <h2>Contact form</h2>
      <form onSubmit={handleSubmit}  >
        <label htmlFor="name"  >Name :</label>
        <input 
        type="text"
        id='name'
        name='name'
        value={userName} 
        onChange={handleChange }
        />

        <label htmlFor='email' >Email :   </label>
        <input type="email" id='email' name="email" value={email} onChange={(e ) => setEmail(e.target.value) } />
      

        <label >please check 
          <input type = "checkbox" checked= {isChecked} onChange={(e) => setIsChecked(e.target.checked)} />


          </label>
       
        <p>Checkbox is {isChecked ? "Checked ✅" : "Unchecked ❌"}</p>
        <button type="submit">click here</button>





      </form>
    
    </div>
  )
}

export default Contactpage
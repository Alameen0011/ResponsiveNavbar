import React, { useState } from 'react'

const Contactpage = () => {

  const [userName,setUsername] = useState<string>("")
  const [email,setEmail] = useState<string>("")
  const [isChecked,setIsChecked] = useState<boolean>(false)
  const [gender,setGender] = useState<string>("")
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e, ": available events")
       setUsername(e.target.value)
       return;
  }

  const handleSubmit  = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userName)
    console.log(email)
    console.log(gender)
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

          <br /><br />

          <label>
            <input type="radio" name="gender" value= "Male" checked = {gender === "Male"} onChange={(e) => setGender(e.target.value)}  />
            Male
          </label>

          <label>
            <input type="radio" name="gender" value= "female" checked = {gender === "female"} onChange={(e) => setGender(e.target.value)}  />
            female
          </label>
       
        <p>Checkbox is {isChecked ? "Checked ✅" : "Unchecked ❌"}</p>
        <button type="submit">click here</button>





      </form>
    
    </div>
  )
}

export default Contactpage
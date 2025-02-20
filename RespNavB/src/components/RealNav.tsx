import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const RealNav: React.FC = () => {

    const [isOpen , setIsOpen] = useState<boolean>(false)

    const handleMobileNavigation = () => setIsOpen(!isOpen)

  return (

    <nav className="bg-black text-white px-6 py-4" >
        {/*desktop container */}
        <div className="container mx-auto flex justify-between items-center">

            {/*brand logo */}
            <Link to={"/"}  className="font-mono">mySaloon</Link>

            {/*desktop navigation */}
            <ul className="hidden md:flex space-x-6 font-mono">
                <Link  to={"/"}>Home</Link>
                <Link  to= {"/about"}>about</Link >
                <Link to={"/contact"}>contact</Link >    
                <Link to={"/info"} >info</Link >
             
            </ul>


            {/* mobile ham */}
            <button className="md:hidden" onClick={handleMobileNavigation}>{isOpen ? <X size={24}  /> : <Menu size={24}/>}</button>


        </div>
        {/* mobile container */}
        <div className= {`${isOpen ? "block" : "hidden" }  md:hidden`}>
            <ul className="space-y-2 mt-4 font-mono">
              <li>   <Link  to={"/"}>Home</Link></li>
              <li>   <Link  to= {"/about"}>about</Link ></li>
              <li>   <Link to={"/contact"}>contact</Link >                  </li>
              <li>   <Link to={"/info"} >info</Link ></li>
            </ul>

        </div>

    
    
    
    
    
    </nav>




  )
}

export default RealNav
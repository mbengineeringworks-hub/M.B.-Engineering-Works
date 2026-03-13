import { Outlet } from "react-router-dom";



const AboutDDLayout = () => {
  return (
      <div className="container py-5">

    
      {/* Nested pages will render here */}

      <Outlet />

    </div>
  )
}

export default AboutDDLayout

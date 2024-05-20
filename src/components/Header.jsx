
const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-4">
        <h3 className="font-mono font-bold">LOGO</h3>
        <div className="p-2" >
          <button className="text-eminence-700 font-bold">Login</button>
          <button className="text-white px-3 mx-2 py-2 rounded-lg custom-gradient custom-shadow">Signup</button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 bg-woodsmoke-900 text-woodsmoke-200">
          <div className="border-b-4 border-orange-400 py-1">
            <h3 className="">Overview</h3>
          </div>
          <div className="hover:border-b-4 hover:border-orange-400 py-1">
            <h3 className="">Curriculum</h3>
          </div>
          <div className="hover:border-b-4 hover:border-orange-400 py-1">
            <h3 className="">Refund</h3>
          </div>
          <div className="hover:border-b-4 hover:border-orange-400 py-1">
            <h3 className="">Testimonials</h3>
          </div>          
      </div>
    </div>
  )
}

export default Header
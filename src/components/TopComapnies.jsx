const TopComapnies = () => {
  return (
    <div className="w-full flex flex-col items-center my-10 bg-web-orange-300 py-4">
        <div className="w-6/12 text-center">
            <h3 className="text-3xl font-bold">Top Companies Hiring  <span className="bg-gradient-to-r from-primary to-[#EBCB2E] bg-clip-text text-transparent">Data Scientist</span> </h3>
        </div>
        <div className="w-full mt-16 mb-6 flex justify-evenly items-center overflow-x-auto">
            <div className="bg-white text-center text-woodsmoke-800 rounded-md text-xl w-40 p-6" >Logo</div>
            <div className="bg-white text-center text-woodsmoke-800 rounded-md text-xl w-40 p-6" >Logo</div>
            <div className="bg-white text-center text-woodsmoke-800 rounded-md text-xl w-40 p-6" >Logo</div>
            <div className="bg-white text-center text-woodsmoke-800 rounded-md text-xl w-40 p-6" >Logo</div>
            <div className="bg-white text-center text-woodsmoke-800 rounded-md text-xl w-40 p-6" >Logo</div>
        </div>    
    </div>
  )
}

export default TopComapnies;

const StepsToEnroll = () => {
  return (
    <div className="w-full flex flex-col items-center relative">
        <div className="w-6/12 text-center">
            <h3 className="text-4xl font-bold text-woodsmoke-800">
                Don&apos;t miss out on this <span className="text-eminence-700">limited-time opportunity</span> to learn for <span className="text-eminence-700">Free!</span>
            </h3>
        </div> 
        <div className="my-12 w-4/12 rounded-3xl p-4 custom-gradient text-white flex flex-col items-stretch">
            <h3 className="text-bold text-center text-2xl">100% Refund Offer 😎 </h3>
            <div className="w-full mt-2">
                <p className="text-left text-gray-50/45">20 Seats Left</p>
                <input className="w-full my-3 " type="range" name="timers" id="timer" />
                <p className="text-center">🕧 Offer ends in 10:00Mins</p>
            </div>
        </div> 
    </div>
  )
}

export default StepsToEnroll;
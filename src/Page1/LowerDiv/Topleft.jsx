import '../../App.css'
function Topleft() {
    return(
    <>
 <div className="top-right relative w-[300px] h-[200px] md:w-[400px] md:h-[250px] px-10">
                <div className="absolute left-6 top-8  w-10 h-10 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white shadow-xl z-10 bg-white/10 backdrop-blur-sm">
                    <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
                        alt="Person 1" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Second Circle - Center Top */}
                <div className="absolute left-14  top-8 w-10 h-10 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white shadow-xl z-30 bg-white/10 backdrop-blur-sm">
                    <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                        alt="Person 2" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Third Circle - Right */}
                <div className="absolute left-22  top-8 w-10 h-10 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white shadow-xl z-20 bg-white/10 backdrop-blur-sm">
                    <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
                        alt="Person 3" 
                        className="w-full h-full object-cover"
                    />
                
            </div>
            <h3 className='font-bold absolute left-32  top-8'>2M+</h3>
            <p className='text-sm absolute left-8  top-20 text-black '>Word Active User</p>
        </div>
    </>)
}
export default Topleft
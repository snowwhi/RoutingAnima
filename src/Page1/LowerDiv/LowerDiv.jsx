import '../../App.css'
import BottomLeft from './BottomLeft'
import BottomRight from './BottomRight'
import Topleft from './Topleft'
import TopRight from './TopRight'
function LowerDiv() {
    return(
    <>
      <div className='h-1/2 w-full relative  z-30'>
     <Topleft/>
     <TopRight/>
     <BottomLeft/>
     <BottomRight/>
     
      </div>
    </>)
}
export default LowerDiv
import gas from '../../../public/gas.svg'
import tire from '../../../public/tire.svg'
import steeringWheel from '../../../public/steering-wheel.svg'
export default function CarCard() {
    return (
        <div className="car-card">
            <div className="car-card-header">Honda Odyssey</div>
            <div className="car-card-body">
                <h5>
                    <span style={{ position: 'relative', top: -20, fontSize: 14}}>$</span>
                    <span className='fw-bolder fs-2'>52</span>
                    <span style={{ position: 'relative', top: 5, fontSize: 14}}>/day</span>
                </h5>
                <img className="card-image" src="https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=chevrolet&modelFamily=corvette&zoomType=fullscreen&modelYear=2020" alt="" />
            </div>
            <div className="car-card-footer">
                <div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex flex-column align-items-center flex-grow-1'>
                            <img className='icon' src={steeringWheel} alt="" />
                            <span className='pt-1'>Automation</span>
                        </div>
                        <div className='d-flex flex-column align-items-center flex-grow-1'>
                            <img className='icon' src={tire} alt="" />
                            <span className='pt-1'>FWD</span>
                        </div>
                        <div className='d-flex flex-column align-items-center flex-grow-1'>
                            <img className='icon' src={gas} alt="" />
                            <span className='pt-1'>19 MPG</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
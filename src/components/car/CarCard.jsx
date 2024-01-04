import gas from '/gas.svg'
import tire from '/tire.svg'
import steeringWheel from '/steering-wheel.svg'
import { generateCarImage } from '../../services/helper'
export default function CarCard({ car }) {
    return (
        <div className="car-card">
            <div className="car-card-header text-capitalize">{car?.make} {car?.model}</div>
            <div className="car-card-body">
                <div className='car-price'>
                    <span style={{ position: 'relative', top: -20, fontSize: 14 }}>$</span>
                    <span className='fw-bolder fs-2'>52</span>
                    <span style={{ position: 'relative', top: 5, fontSize: 14 }}>/day</span>
                </div>
                <img className="card-image" src={generateCarImage(car)} alt="" />
            </div>
            <div className="car-card-footer">
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex flex-column align-items-center flex-grow-1'>
                        <img className='icon' src={steeringWheel} alt="" />
                        <span className='pt-1'>
                            {car?.transmission === "a" ? "Automatic" : "Manual"}
                        </span>
                    </div>
                    <div className='d-flex flex-column align-items-center flex-grow-1'>
                        <img className='icon' src={tire} alt="" />
                        <span className='pt-1'>{car?.drive.toUpperCase()}</span>
                    </div>
                    <div className='d-flex flex-column align-items-center flex-grow-1'>
                        <img className='icon' src={gas} alt="" />
                        <span className='pt-1'>{car?.city_mpg} MPG</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
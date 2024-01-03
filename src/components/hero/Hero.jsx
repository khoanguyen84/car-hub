import hero from '../../../public/hero.png'
export default function Hero() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 pt-5">
                    <h1 className="display-3 fw-bolder lh-base">Find, book, rent a car quick and super easy!</h1>
                    <h3 className="lh-base">Streamline your car rental experience with our effortless booking process.</h3>
                    <button className="btn btn-lg btn-primary btn-explore">Explore Cars</button>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 pt-5">
                    <img className='hero' src={hero} alt="" />
                </div>
            </div>
        </div>
    )
}
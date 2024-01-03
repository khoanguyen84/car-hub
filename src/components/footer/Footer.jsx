import logo from '../../../public/logo.svg'
import { footerLinks } from '../../constants'

export default function Footer() {
    return (
        <footer className="container mt-5">
            <div className="border-top border-bottom py-5 row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <img className='logo-sm' src={logo} alt="" />
                    <div className='mt-4'>
                        <h6>Carhub {(new Date).getFullYear()}</h6>
                        <h6>All Rights Reserved &copy;</h6>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className='row'>
                        {footerLinks?.map((item) => (
                            <div key={item.title} className='col-md-4'>
                                <h4>{item.title}</h4>
                                <ul className='list-unstyled'>
                                    {
                                        item?.links?.map((link) => (
                                            <li className='lh-lg' key={link?.title}>{link?.title}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between mt-5'>
                <h6>&copy; {(new Date).getFullYear()} CarHub. All rights reserved</h6>
                <div className='d-flex'>
                    <h6 className='me-5'>Privacy & Policy</h6>
                    <h6>Terms & Condition</h6>
                </div>
            </div>
        </footer>
    )
}
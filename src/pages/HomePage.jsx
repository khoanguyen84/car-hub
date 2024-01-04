import { useEffect, useState } from "react";
import CarCard from "../components/car/CarCard";
import MainLayout from "../layouts/MainLayout";
import { manufacturers, yearsOfProduction, fuels } from '../constants'

export default function HomePage() {
    const [carList, setCarList] = useState([])
    useEffect(() => {
        async function getCarList() {
            let carListRes = await fetch('https://jsonserver-vercel-api.vercel.app/carList?_page=1&_limit=10')
            let data = await carListRes.json()
            setCarList(data)
        }
        getCarList()
    }, [])
    return (
        <MainLayout>
            <>
                <div className="container">
                    <h1 className="fw-bolder">Car Catalogue</h1>
                    <p>Explore out cars you might like</p>
                </div>
                <section className="search-filter container my-5">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label">Manufacturers</label>
                                        <select className="form-select" defaultValue={''}>
                                            <option value={""}>Manufacturers</option>
                                            {
                                                manufacturers?.map((manu) => (
                                                    <option key={manu} value={manu}>{manu}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label">Model</label>
                                        <input className="form-control" placeholder="Enter car model..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label">Fuels</label>
                                        <select className="form-select" defaultValue={''}>
                                            <option value={""}>Fuel</option>
                                            {
                                                fuels?.map((item) => (
                                                    <option key={item.title} value={item.value}>{item.title}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label">Year</label>
                                        <select className="form-select" defaultValue={'Year'}>
                                            <option value={""}>Year</option>
                                            {
                                                yearsOfProduction?.map((item) => (
                                                    <option key={item.title} value={item.value}>{item.title}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="card-list container">
                    <div className="row">
                        {
                            carList?.map((car) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                                    <CarCard car={car} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <button className="btn btn-loadmore">Load more ...</button>
                    </div>
                </section>
            </>
        </MainLayout>
    )
}
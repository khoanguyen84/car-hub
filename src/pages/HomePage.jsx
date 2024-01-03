import { useEffect, useState } from "react";
import CarCard from "../components/car/CarCard";
import MainLayout from "../layouts/MainLayout";

export default function HomePage() {
    const [carList, setCarList] = useState([])
    useEffect(() => {
        async function getCarList() {
            let carListRes = await fetch('https://jsonserver-vercel-api.vercel.app/carList')
            let data = await carListRes.json()
            setCarList(data)
        }
        getCarList()
    }, [])
    return (
        <MainLayout>
            <>
                <div className="container">
                    <h1 className="fw-bolder">Car Cataloge</h1>
                    <p>Explore out cars you might like</p>
                </div>
                <section className="search-filter container my-5">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <select className="form-select">
                                        <option value="Honda Odyssey">Honda Odyssey</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select className="form-select">
                                        <option value="Honda Odyssey">Honda Odyssey</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <select className="form-select">
                                        <option value="Honda Odyssey">Honda Odyssey</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select className="form-select">
                                        <option value="Honda Odyssey">Honda Odyssey</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="card-list container">
                    <div className="row">
                        {
                            carList?.map((car) => (
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
                                    <CarCard />
                                </div>
                            ))
                        }

                    </div>
                </section>
            </>
        </MainLayout>
    )
}
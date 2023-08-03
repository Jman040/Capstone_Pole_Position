import { useEffect, useState } from "react"
import "./DriverDetails.css";
import { Link, useParams } from "react-router-dom"
import { IndividualDriver } from "./IndividualDriver";

export const DriverDetails = () => {
    // const { driverId } = useParams()
    const [driver, setDriver] = useState([]);
    const [filteredDrivers, setFilteredDriver] = useState([]);
    const [selectedDriver, setSelectedDriver] = useState({})
    const [showDriverInfo, setDriverInfo] = useState(false);
    const localUser = localStorage.getItem("pole_user")
    const currentUser = JSON.parse(localUser)

    const handleShowDriver = (driver) => {
        if (!showDriverInfo) {
            setDriverInfo(true);
            setSelectedDriver(driver)
        }
        else {
            setDriverInfo(false)
        }

    }




    // useEffect(() => {
    //     const searchedDriver = driver.filter((driver) =>
    //         driver.name.toLowerCase().startsWith(searchTermState.toLowerCase())
    //     );
    //     setFilteredDriver(searchedDriver);
    // }, [searchTermState]);


    useEffect(
        () => {
            fetch(`http://localhost:8088/drivers?_sort=championshipStanding&order=asc&_expand=team`)
                .then(response => response.json())
                .then((driverArray) => {
                    setDriver(driverArray);
                    setFilteredDriver(driverArray);
                });
        },
        []
    )

    return (
        <>
            {
                showDriverInfo ? (
                    <IndividualDriver selectedDriver={selectedDriver} setDriverInfo={setDriverInfo} />
                ) : ("")
            }
            <h2>List of Drivers</h2>
            <article className="drivers">
                {filteredDrivers.map((driver) => {
                    return (
                        <div key={driver.id} className="driver-card">
                            <div className="driver-name">{driver.name}</div>
                            <div className="driver-team">{driver?.team?.teamName}</div>
                            <div className="driver-standing">Current Standing: {driver.championshipStanding}</div>
                            <img src={driver?.img} alt={driver.name} />
                            <button className="view-driver-button" onClick={() => handleShowDriver(driver)}>View Driver</button>
                        </div>
                    );
                })}
            </article>

        </>
    );
};


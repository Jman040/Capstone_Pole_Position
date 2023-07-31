import { useEffect, useState } from "react"
import "./Drivers.css";
import { useParams } from "react-router-dom"

export const DriverDetails = ({ searchTermState }) => {
    // const { driverId } = useParams()
    const [driver, setDriver] = useState([]);
    const [filteredDrivers, setFilteredDriver] = useState([]);

    useEffect(() => {
        const searchedDriver = driver.filter((driver) =>
            driver.name.toLowerCase().startsWith(searchTermState.toLowerCase())
        );
        setFilteredDriver(searchedDriver);
    }, [searchTermState]);


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
            <h2>List of Drivers</h2>
            <article className="drivers">
                {filteredDrivers.map((driver) => {
                    return (
                        <section className="driver">
                            <header>{driver.name}</header>
                            <div>Current Season Standing: {driver.championshipStanding}</div>
                            <div>Drivers Championship Points: {driver.driversChampionPoints}</div>
                            <div>Team: {driver?.team?.teamName}</div>
                        </section>
                    );
                })}
            </article>
        </>
    );
};

// IndividualDriver.js

import "./IndividualDriver.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const IndividualDriver = ({ selectedDriver, setDriverInfo }) => {
    const [myDrivers, setMyDrivers] = useState([]); // Rename state variable
    const localUser = localStorage.getItem("pole_user");
    const loggedInUser = JSON.parse(localUser); // Rename to loggedInUser

    const navigate = useNavigate();

    const handleAddToMyDrivers = (driver) => {
        fetch(`http://localhost:8088/MyDrivers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: loggedInUser.id,
                driverId: driver.id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setMyDrivers(data.myDrivers); // Rename to myDrivers
            })
            .catch((error) => {
                console.error("Error adding driver to MyDrivers list:", error);
            });
    };

    return (
        <>
            <section className="driver_pop_container"> {/* Fix the CSS class name here */}
                <div className="driver_img">
                    <img src={selectedDriver?.img} alt={selectedDriver?.name} />
                </div>
                <div className="driver_info">
                    <div>{selectedDriver?.name}</div>
                    <div>Team: {selectedDriver?.team?.teamName}</div>
                    <div>Championship Standing: {selectedDriver?.championshipStanding}</div>
                    <div>Drivers Championship Points: {selectedDriver?.driversChampionPoints}</div>
                    <div>Podiums: {selectedDriver?.podiumsThisSeason}</div>
                    <div>DHL Fastest Laps: {selectedDriver?.DHL}</div>
                    <div>Country: {selectedDriver?.country}</div>
                    <div>
                        <button className="addDriverButton" onClick={() => handleAddToMyDrivers(selectedDriver)}>
                            Add to My Drivers
                        </button>
                        {loggedInUser.isMod ? (
                            <Link to={`/drivers/${selectedDriver?.id}`}>
                                <button className="editButton">Edit Driver</button>
                            </Link>
                        ) : null}
                    </div>
                </div>
                <button className="closeButton" onClick={() => setDriverInfo(false)}>X</button>
            </section>
        </>
    );
};

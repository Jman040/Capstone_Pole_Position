// MyDrivers.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyDrivers.css"
export const MyDrivers = () => {
    // State to keep track of the user's list of tracked drivers
    const [myDrivers, setMyDrivers] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState([]);
    const localUser = localStorage.getItem("pole_user")
    const currentUser = JSON.parse(localUser)
    useEffect(() => {
        console.log(currentUser)
        getMyDrivers()
    }, []);

    const getMyDrivers = () => {
        fetch(`http://localhost:8088/myDrivers?_expand=driver&userId=${currentUser.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setMyDrivers(data); // Update the state with the fetched drivers list
            })
            .catch((error) => {
                console.error("Error fetching MyDrivers list:", error);
            });
    }
    useEffect(
        () => {
            fetch(`http://localhost:8088/myDrivers?_expand=teams`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setSelectedTeam(data); // Update the state with the fetched drivers list
                })
                .catch((error) => {
                    console.error("Error fetching MyTeams list:", error);
                });
        },
        [],
    )

    const handleRemoveFromMyDrivers = (fav) => {
        return fetch(`http://localhost:8088/MyDrivers/${fav.id}`, {
            method: "DELETE",

        })
            .then(() => {
                getMyDrivers()
            })
            .catch((error) => {
                console.error("Error removing driver from MyDrivers list:", error);
            });
    };

    return (
        <div>
            <h2>My Tracked Drivers</h2>
            {myDrivers.map((fav) => (
                <>{console.log(fav?.driver?.id)}
                    <section className="my_driver" key={fav?.driver?.id}>
                        <div className="my_driver_info">
                            <div>Name: {fav?.driver?.name}</div>
                            <div>Championship Standing: {fav?.driver?.championshipStanding}</div>
                            <div>Drivers Championship Points: {fav?.driver?.driversChampionPoints}</div>
                            <div>Podiums: {fav?.driver?.podiumsThisSeason}</div>
                            <div>DRS Fastest Laps: {fav?.driver?.DHL}</div>
                            <div>Country: {fav?.driver?.country}</div>
                        </div>
                        <div className="driver_img">
                            <img src={fav?.driver?.img} alt={fav?.driver?.name} />
                        </div>
                        <button onClick={() => handleRemoveFromMyDrivers(fav)}>Remove Driver</button>
                    </section>
                </>
            ))}
            {/* {myDrivers.map((fav) => {
                const team = selectedTeam.find((team) => team.id === fav?.driver?.teamId);
                return (
                    <div key={fav?.driver?.id}>
                        Team: {team?.logo}
                    </div>
                );
            })} */}
        </div>
    );
};



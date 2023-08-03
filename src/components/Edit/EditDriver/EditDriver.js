import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import "./EditDriver.css"
export const EditDriver = () => {
    const { driverId } = useParams()
    const navigate = useNavigate()
    const [driver, updateDriver] = useState({
        name: "",
        championshipStanding: 0,
        driversChampionPoints: 0,
        podiumsThisSeason: 0,
        DHL: 0,
        country: "",
        teamId: 0,
        img: ""
    })

    // TODO: Get employee profile info from API and update state
    useEffect(
        () => {
            fetch(`http://localhost:8088/drivers/${driverId}`)
                .then(response => response.json())
                .then((driverArray) => {
                    updateDriver(driverArray);
                });
        },
        []
    )

    const saveButtonClick = (event) => {
        event.preventDefault();
        return fetch(`http://localhost:8088/drivers/${driverId}`, { // Added curly braces for the fetch options
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(driver),
        })
            .then((response) => response.json())
            .then(() => {
                navigate("/drivers");
            });
    }


    return (
        <form className="EditDriver">
            <h2 className="EditDriver__title">Edit Driver</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Name</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={driver.name}
                        onChange={
                            (evt) => {
                                const copy = { ...driver };
                                copy.name = evt.target.value;
                                updateDriver(copy);
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="standing">Championship Standing</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={driver.championshipStanding}
                        onChange={
                            (evt) => {
                                const copy = { ...driver };
                                copy.championshipStanding = evt.target.value;
                                updateDriver(copy);
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="points">Points</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={driver.driversChampionPoints}
                        onChange={
                            (evt) => {
                                const copy = { ...driver };
                                copy.driversChampionPoints = evt.target.value;
                                updateDriver(copy);
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="podiums">Podiums</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={driver.podiumsThisSeason}
                        onChange={
                            (evt) => {
                                const copy = { ...driver };
                                copy.podiumsThisSeason = evt.target.value;
                                updateDriver(copy);
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fastestLaps">Fastest Laps</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={driver.DHL}
                        onChange={
                            (evt) => {
                                const copy = { ...driver };
                                copy.DHL = evt.target.value;
                                updateDriver(copy);
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="teamId">Team</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={driver.teamId}
                        onChange={
                            (evt) => {
                                const copy = { ...driver };
                                copy.teamId = evt.target.value;
                                updateDriver(copy);
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => saveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Profile
            </button>
        </form>
    )
}
import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import "./EditRace.css"
export const EditRace = () => {
    const { raceId } = useParams()
    const navigate = useNavigate()
    const [race, updateRace] = useState({
        id: 1,
        trackIMG: "",
        date: "",
        driverId: 0,
        round: 0,
        trackName: "",
        laps: 0

    })

    // TODO: Get employee profile info from API and update state
    useEffect(
        () => {
            fetch(`http://localhost:8088/races/${raceId}`)
                .then(response => response.json())
                .then((raceArray) => {
                    updateRace(raceArray);
                });
        },
        []
    )

    const saveButtonClick = (event) => {
        event.preventDefault();
        return fetch(`http://localhost:8088/races/${raceId}`, { // Added curly braces for the fetch options
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(race),
        })
            .then((response) => response.json())
            .then(() => {
                navigate("/schedule");
            });
    }


    return (
        <form className="EditRace">
            <h2 className="EditRace__title">Edit Race</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">{race.trackName}</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="standing">Winner's Driver ID</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={race.driverId}
                        onChange={
                            (evt) => {
                                const copy = { ...race };
                                copy.driverId = evt.target.value;
                                updateRace(copy);
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => saveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Race Data
            </button>
        </form>
    )
}
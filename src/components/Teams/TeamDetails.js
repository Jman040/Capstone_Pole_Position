import { useEffect, useState } from "react"
import "./TeamDetails.css";
import { IndividualTeam } from "./IndividualTeam.js";

export const TeamDetails = () => {
    const [team, setTeam] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8088/teams?_sort=constructorStanding&expand")
            .then((response) => response.json())
            .then((teamArray) => {
                setTeam(teamArray);
            });
    }, []);

    const handleTeamClick = (team) => {
        setSelectedTeam(team);
    };

    return (
        <>
            <h2>F1 Teams</h2>
            <div className="drivers"> {/* Use the "drivers" class from the provided CSS */}
                {team.map((team) => (
                    <div key={team.id} className="driver-card" onClick={() => handleTeamClick(team)}> {/* Use the "driver-card" class from the provided CSS */}
                        <div className="background"></div> {/* Add a background div as described in the CSS */}
                        <header className="driver-team"> {/* Use the "driver-team" class from the provided CSS */}
                            <img src={team.logo} alt={team.teamName} />
                        </header>
                        <div className="driver-name">{team.teamName}</div> {/* Use the "driver-name" class from the provided CSS */}
                        <div className="driver-standing">Constructor Standing: {team.constructorStanding}</div> {/* Use the "driver-standing" class from the provided CSS */}
                        <div className="driver-text">Constructor Points: {team.constructorPoints}</div> {/* Use the "driver-text" class from the provided CSS */}
                        <button className="view-driver-button" onClick={() => handleTeamClick(team)}>View Team Details</button> {/* Use the "view-driver-button" class from the provided CSS */}
                    </div>
                ))}
            </div>
            {selectedTeam && (
                <IndividualTeam selectedTeam={selectedTeam} setTeamInfo={setSelectedTeam} />
            )}
        </>
    );
};


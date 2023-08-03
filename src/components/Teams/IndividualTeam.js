import "./IndividualTeam.css";
import { useEffect, useState } from "react";

export const IndividualTeam = ({ selectedTeam, setTeamInfo }) => {
    const { driverId1, driverId2 } = selectedTeam;

    return (
        <section className="team_pop">
            <div className="team_info">
                <header className="team_logo">
                    <img src={selectedTeam?.logo} alt={selectedTeam.teamName} />
                </header>
                <div className="team-title">{selectedTeam?.teamName}</div>
                <div className="team-subtitle">Constructor Standing: {selectedTeam?.constructorStanding}</div>
                <div className="team-text">Constructor Points: {selectedTeam?.constructorPoints}</div>
                <div className="team-text">Fastest Laps: {selectedTeam?.fastestLaps}</div>
                <div className="team-text">Current Team Principal: {selectedTeam?.currentTeamPrincipal}</div>
                <div className="team-driver">
                    <div>
                        Driver 1: {selectedTeam?.driverId1?.name}
                        <img src={selectedTeam?.driverId1?.img} alt={selectedTeam?.driverId1?.name} />
                    </div>
                    <div>
                        Driver 2: {selectedTeam?.driverId2?.name}
                        <img src={selectedTeam?.driverId2?.img} alt={selectedTeam?.driverId2?.name} />
                    </div>
                </div>
                {/* Add other team information here */}
            </div>
            <div className="team_img">
                <img src={selectedTeam?.teamCar} alt={selectedTeam.teamName} />
            </div>
            <button className="closeButton" onClick={() => setTeamInfo(false)}>
                X
            </button>
        </section>
    );
};

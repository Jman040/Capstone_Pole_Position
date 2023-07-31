import { useEffect, useState } from "react"
import "./Teams.css";
import { useParams } from "react-router-dom"

export const TeamDetails = () => {
    // const { driverId } = useParams()
    const [team, setTeam] = useState([]);
    // const [filteredDrivers, setFilteredDriver] = useState([]);

    // useEffect(() => {
    //     const searchedDriver = driver.filter((driver) =>
    //         driver.name.toLowerCase().startsWith(searchTermState.toLowerCase())
    //     );
    //     setFilteredDriver(searchedDriver);
    // }, [searchTermState]);


    useEffect(
        () => {
            fetch(`http://localhost:8088/teams?_sort=constructorStanding&expand`)
                .then(response => response.json())
                .then((teamArray) => {
                    setTeam(teamArray);
                });
        },
        []
    )
    return (
        <>
            <h2>F1 Teams</h2>
            <article className="teams">
                {team.map((team) => {
                    return (
                        <section className="driver">
                            <header>{team.teamName}</header>
                            <div>Constructor Standing: {team.constructorStanding}</div>
                            <div>Constructor Points: {team.constructorPoints}</div>
                            <div></div>
                        </section>
                    );
                })}
            </article>
        </>
    );
};

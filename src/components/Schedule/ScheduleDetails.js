import { useEffect, useState } from "react"
import "./Schedule.css";
import { useParams } from "react-router-dom"

export const ScheduleDetails = () => {
    // const { driverId } = useParams()
    const [schedule, setSchedule] = useState([]);
    // const [filteredDrivers, setFilteredDriver] = useState([]);

    // useEffect(() => {
    //     const searchedDriver = driver.filter((driver) =>
    //         driver.name.toLowerCase().startsWith(searchTermState.toLowerCase())
    //     );
    //     setFilteredDriver(searchedDriver);
    // }, [searchTermState]);


    useEffect(
        () => {
            fetch(`http://localhost:8088/races?_sort=round&_expand=driver`)
                .then(response => response.json())
                .then((scheduleArray) => {
                    setSchedule(scheduleArray);
                });
        },
        []
    )
    return (
        <>
            <h2>2023 F1 Grand Prix Schedule</h2>
            <article className="races">
                {schedule.map((schedule) => {
                    return (
                        <section className="race">
                            <header>{schedule.trackName}</header>
                            <div>Date:{schedule.date}</div>
                            <div>Winner: {schedule?.driver?.name}</div>
                            <div></div>
                        </section>
                    );
                })}
            </article>
        </>
    );
};

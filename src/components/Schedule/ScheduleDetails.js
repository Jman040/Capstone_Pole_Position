import { useEffect, useState } from "react"
import "./Schedule.css";
import { useNavigate, Link } from "react-router-dom"

export const ScheduleDetails = () => {
    const [schedule, setSchedule] = useState([]);
    const localUser = localStorage.getItem("pole_user")
    const currentUser = JSON.parse(localUser)
    const navigate = useNavigate()

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
                        <section key={schedule.id} className="race">
                            <header><img src={schedule.trackIMG} alt={schedule.name} /></header>
                            <div>{schedule.trackName}</div>
                            <div>Date: {schedule.date}</div>
                            <div>Winner: {schedule?.driver?.name}</div>
                            <img src={schedule?.driver?.img} alt={schedule?.driver?.name} />
                            <div>
                                {currentUser.isMod ? (
                                    <Link to={`/schedule/${schedule?.id}`}>
                                        <button className="editButton">Edit Race</button>
                                    </Link>
                                ) : null}
                            </div>
                        </section>
                    );
                })}
            </article>
        </>
    );
};

import JobList from "./JobList";
import { getJobs } from "../graphql/queries";
import { useEffect, useState } from "react";

function JobBoard() {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState("");

    // console.log({ error });

    useEffect(() => {
        async function call() {
            try {
                const res = await getJobs();

                setJobs(res);
            } catch (err) {
                setError(err.message);
                console.log(err.message);
            }
        }

        call();
        // getJobs()
        //     .then((data) => setJobs(data))
        //     .catch((err) => console.log(err));
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1 className="title">Job Board</h1>
            <JobList jobs={jobs} />
        </div>
    );
}

export default JobBoard;

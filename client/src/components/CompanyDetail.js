import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getCompany } from "../graphql/queries";
import JobList from "./JobList";

function CompanyDetail() {
    const { companyId } = useParams();

    const [company, setCompany] = useState(null);

    useEffect(() => {
        getCompany(companyId).then((data) => setCompany(data.company));
    }, [companyId]);

    if (!company) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1 className="title">{company?.name}</h1>
            <div className="box">{company?.description}</div>
            <h5 className="title is5">Jobs at {company.name}</h5>
            <JobList jobs={company.jobs} />
        </div>
    );
}

export default CompanyDetail;

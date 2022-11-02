import { request, gql } from "graphql-request";

const GRAPHQL_URL = "http://localhost:9000/graphql";

export async function getCompany(id) {
    const query = gql`
        query CompanyQuery($id: ID!) {
            company(id: $id) {
                id
                name
                description
                jobs {
                    description
                    id
                    title
                }
            }
        }
    `;

    const variables = { id };
    const data = await request(GRAPHQL_URL, query, variables);
    return data;
}

export async function getJob(id) {
    const query = gql`
        query JobQuery($id: ID!) {
            job(id: $id) {
                id
                title
                description
                company {
                    id
                    name
                }
            }
        }
    `;

    const variables = { id };
    const data = await request(GRAPHQL_URL, query, variables);
    return data;
}

export async function getJobs() {
    const query = gql`
        {
            jobs {
                id
                title
                company {
                    name
                }
            }
        }
    `;
    const data = await request(GRAPHQL_URL, query);

    return data.jobs;
}

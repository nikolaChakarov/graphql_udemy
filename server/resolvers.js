import { Job, Company } from "./db.js";

export const resolvers = {
    Query: {
        company: async (_parent, args) => {
            return await Company.findById(args.id);
        },

        job: async (_parent, args) => {
            return await Job.findById(args.id);
        },

        jobs: async () => await Job.findAll(),
    },

    Mutation: {
        createJob: async (_root, { input }) => await Job.create(input),
        deleteJob: async (_root, { id }) => await Job.delete(id),
        updateJob: async (root, props) => {
            console.log(root);
            console.log(props);
        },
    },

    Company: {
        jobs: async (parent, args) => {
            return await Job.findAll((job) => job.companyId === parent.id);
        },
    },
    Job: {
        company: (parent) => {
            return Company.findById(parent.companyId);
        },
        // description: () => "override...",
    },
};

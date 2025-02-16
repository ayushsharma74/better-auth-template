import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import db from "./db";

export const auth = betterAuth({
    database: mongodbAdapter(db),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false
    },
    // socialProviders: {
    //     github: {
    //         clientId: process.env.GITHUB_CLIENT_ID,
    //         clientSecret: process.env.GITHUB_CLIENT_SECRET
    //     }
    // }
});
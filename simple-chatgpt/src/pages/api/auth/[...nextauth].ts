import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
        // clientId: "897134228293-nuljpjlche5hgro9upbnv57mvgiodkrj.apps.googleusercontent.com",
        // clientSecret: "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",
      //   authorizationUrl:"https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
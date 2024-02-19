# Welcome to DevOverflow

This is a web application for streaming inspired from the popular streaming application "Twitch"

1. Stream
2. Chat with the participants
3. Follow users
4. Block users

## Project Setup

- clone the project on your local.
- Execute `npm install` from the root directory
- create `.env` file in the root directory and add the following environment variables.

- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=`Generate it from Clerk`
- CLERK_SECRET_KEY=`Generate it from Clerk`

- NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
- NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
- NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
- NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
- CLERK_WEBHOOK_SECRET=`Follow the docs of clerk webhook to get the secret`

- DATABASE_URL=`generate at planetscale-mysql after creating a database`

- LIVEKIT_API_URL=`Follow Livekit docs`
- LIVEKIT_API_KEY=`Follow Livekit docs`
- LIVEKIT_API_SECRET=`Follow Livekit docs`
- NEXT_PUBLIC_LIVEKIT_WS_URL=`Follow Livekit docs`

- UPLOADTHING_SECRET=`Follow uploadthing docs`
- UPLOADTHING_APP_ID=`Follow uploadthing docs`

### References to get the environment variables -

- Get `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` from `https://dashboard.clerk.com/` after adding application (which is just checking the boxes on google authentication and username)

- For `NEXT_CLERK_WEBHOOK_SECRET` follow the docs at `https://clerk.com/docs/integrations/webhooks`

## Run Project

- Go to root directory and execute `npm run dev` which should run the app on `http://localhost:3000`

## Live website -

- [nextStream](https://next-stream-eight.vercel.app/)

### TODO -

- Unblock is work in progress.
- Search is work in progress

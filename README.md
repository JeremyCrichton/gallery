# My Gallery

## Tutorial Video

https://youtu.be/d5x0JCZbAJs?si=Lcl_px3Wk5tmxSag

## Steps

- 2:10: Set up shadcn/ui toaster
  - pnpm dlx shadcn-ui@latest init
  - pnpm dlx shadcn-ui@latest add sonner
  - Default, slate, yes
  - Force dark mode by adding class `dark` to body tag
- 2:19: Add SVG spinner
  - https://github.com/n3r4zzurr0/svg-spinners
- 2:26: Add Posthog for analytics
  - Open source product analytics
  - Not just what pages did people go to but which buttons did they press, which user groups are doing which things
  - Really useful for getting more general info about your user base and being able to identify patterns, conversions, behaviours
  - AN ALTERNATIVE - plausible.io: Essentially a GA alternative. If you're not having signed-in users, you just want to see what pages people go to
- Delete
- 2:50: Rate limiting with Upstash
  - `pnpm add @upstash/ratelimit`
  - add Upstash code to new server/ratelimit.ts file
  - import that fn into api/uploadthing/core.ts and throw an error if we're ratelimited
  - add stuff to onUploadError in upload button (toast, analytics)
- 2:57: Lock down uploads
  - in Clerk add **private** metadata to a user `{"can-upload": true}`
  - in uploadthing core.ts, look for this prop and throw an error if !true

## TODO

- [x] Make it deploy (vercel)
- [x] Scaffold basic ui with mock data (uploadthing.com)
- [x] Tidy up build process
- [x] Actually set up a db (vercel pg)
- [x] Attach db to UI and build the schema
- [x] Add authentication (clerk)
- [x] Add image upload
- [x] "taint" (server-only)
- [x] use Next/Image component
- [x] Error management (sentry)
- [x] Routing/image page (parallel route)
- [x] Update upload button
- [x] Add Shadui with toast
- [x] Anaytics (posthog)
- [ ] Delete button (server actions)
- [ ] Rate limiting (upstash)
- [ ] Create a dev db environment
- [ ] Read Routing: Parallel Routes in Next.js docs
- [ ] Enhance analytics for ad blockers

## USAGE

`pnpm run db:studio` Open the drizzle studio
`pnpm run db:push` Update db to match current schema

## REFERENCES

- icons from heroicons - just copy JSX

## NOTES

Only users that I specify have permission can upload
In package.json nextjs dev command, --turbo spins up dev server super fast
Commit process
`git add -p` A mini review of changes
`git commit -m "description here"`
If you don't make a route dynamic, Vercel will cache the page on the server so we won't see updates
A folder prepended by an underscore in app router tells next not to make anything within it a route, so you can create component folders within your route folders instead of a global component folder if you want

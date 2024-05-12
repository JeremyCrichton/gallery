# My Gallery

## TODO

- [x] Make it deploy (vercel)
- [x] Scaffold basic ui with mock data (uploadthing.com)
- [x] Tidy up build process
- [x] Actually set up a db (vercel pg)
- [x] Attach db to UI and build the schema
- [x] Add authentication (clerk)
- [ ] "taint" (server-only)
- [ ] use Next/Image component
- [ ] Add image upload
- [ ] Error management (sentry)
- [ ] Routing/image page (parallel route)
- [ ] Delete button (server actions)
- [ ] Anaytics (posthog)
- [ ] Rate limiting (upstash)
- [ ] Create a dev db environment

## USAGE

`pnpm run db:studio` Open the drizzle studio
`pnpm run db:push` Update db to match current schema

## NOTES

In package.json nextjs dev command, --turbo spins up dev server super fast
Commit process
`git add -p` A mini review of changes
`git commit -m "description here"`
If you don't make a route dynamic, Vercel will cache the page on the server so we won't see updates
A folder prepended by an underscore in app router tells next not to make anything within it a route, so you can create component folders within your route folders instead of a global component folder if you want

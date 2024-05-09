import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]); // am i on the dashboard route

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) auth().protect();
});

// Run on basically everything
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

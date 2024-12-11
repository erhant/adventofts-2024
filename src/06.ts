export const createRoute = <Route>(author: '💨Dasher' | '🔴Rudolph' | '🌩️Donner', route: Route) => {
  console.log(`[createRoute] route created by ${author} at ${Date.now()}`);
  return route
}

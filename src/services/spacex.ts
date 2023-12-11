import { type SpaceXRespose } from "../types/api";

export const getLatestLaunches =async () => {
  
const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: {},
    option: {
      sort: {
        date_unix: "asc",
      },
      limit: 12,
    },
  }),
});

const { docs: launches } = (await res.json()) as SpaceXRespose;
return launches

  
}
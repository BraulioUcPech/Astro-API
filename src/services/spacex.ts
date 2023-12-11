import { type Doc, type SpaceXRespose } from "../types/api";

export const getLatestLaunchBy = async ({ id }: { id: string }) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

  if (!res.ok) {
    if (res.status === 404) {
      // Handle the case where the launch is not found
      return null; // or throw a custom error
    }

    // Handle other error cases
    throw new Error(`Failed to fetch launch with ID ${id}. Status: ${res.status} - ${res.statusText}`);
  }

  const launch = (await res.json()) as Doc;
  return launch;
}


export const getLatestLaunches = async () => {
  
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

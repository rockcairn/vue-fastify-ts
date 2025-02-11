import { mountain } from "./types.js";

export async function getMountains(): Promise<[mountain]> {
    try {
      const response = await fetch("/api/outdoor/mountains", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return await response.json() as [mountain];
    } catch (err) {
      console.log((err as Error).message);
      return [{name: 'unkonwn'}];
    }
  };
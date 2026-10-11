import type { Config } from "@netlify/functions";

export default async (_request: Request) => {
  const siteUrl = process.env.URL || process.env.DEPLOY_PRIME_URL;
  const secret = process.env.CRON_SECRET;
  if (!siteUrl || !secret) {
    console.error("Episode sync skipped: URL and CRON_SECRET must be configured.");
    return new Response("Missing scheduled sync configuration", { status: 500 });
  }
  const response = await fetch(`${siteUrl.replace(/\/$/, "")}/api/episodes/sync`, {
    method: "POST", headers: { Authorization: `Bearer ${secret}` }
  });
  const body = await response.text();
  if (!response.ok) {
    console.error("Episode sync failed", response.status, body);
    return new Response(`Episode sync failed: ${response.status}`, { status: 500 });
  }
  console.log("Episode sync completed", body);
  return new Response("Episode sync completed", { status: 200 });
};

export const config: Config = { schedule: "0 */6 * * *" };

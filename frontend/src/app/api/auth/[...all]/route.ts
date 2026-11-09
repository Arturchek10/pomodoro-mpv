// import { auth } from "@/lib/auth"; // path to your auth file
// import { toNextJsHandler } from "better-auth/next-js";
// export const { POST, GET } = toNextJsHandler(auth);

export async function GET() {
  return new Response("Authentication temporarily disabled", {
    status: 503,
  });
}

export async function POST() {
  return new Response("Authentication temporarily disabled", {
    status: 503,
  });
}
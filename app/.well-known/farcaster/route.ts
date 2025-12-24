// app/.well-known/farcaster.json/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      accountAssociation: {
        header:
          "eyJmaWQiOjU4MjI5OSwidHlwZSI6ImF1dGgiLCJrZXkiOiIweDE4M0RjNjVDNWNBOTI5MjM2MjQ1RThBRjA5OTBiQzU2NTYxMjREODcifQ",
        payload:
          "eyJkb21haW4iOiJrb2tvbG9naS1mcmFtZTIudmVyY2VsLmFwcCJ9",
        signature:
          "tQ+cbh5RR8aaNQ+CkmqBTuIVbOuVXADnUhwViiCnZwUdET4wbI1Qf8H+wY9m4cDeSSw8rM4u4ez9rxat1ufBlxw="
      }
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

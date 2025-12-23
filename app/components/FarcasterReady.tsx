"use client";

import { useEffect } from "react";
import { sdk } from "@farcaster/frame-sdk";

export default function FarcasterReady() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return null;
}

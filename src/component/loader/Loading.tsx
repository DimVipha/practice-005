"use client";

import { Button, Spinner } from "flowbite-react";

export default function LoadingComponent() {
  return (
    <Spinner
      className="w-14 h-14 block m-auto"
      aria-label="Alternate spinner button example"
      size="sm"
    />
  );
}

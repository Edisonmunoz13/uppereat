"use client";
import ReservationForm from "@/components/ReservationForm";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center ">
      <ReservationForm
        cancel={() => {
          router.push("/reservations");
        }}
      />
    </div>
  );
};

export default page;

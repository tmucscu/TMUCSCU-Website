"use client";

import "../../../styles/globals.css";

import React, { useEffect, useState } from "react";

import AdminEventCard from "../../../components/admin/AdminEventCard";
import AdminEventForm from "../../../components/admin/AdminEventForm";
import { AdminEventFormOperation } from "../../../components/admin/constants";
import { ClipLoader } from "react-spinners";
import { EventType } from "../../../types/events";
import { Modal } from "@mui/material";
import PrimaryRoundButton from "../../../components/button/primaryRoundButton";
import { auth } from "../../../firebase";
import { doesWindowExist } from "../../utils";
import { getEvents } from "../../../components/events/utils";
import { onAuthStateChanged } from "firebase/auth";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const {
    data: events,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  const router = useRouter();
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
      if (!authenticatedUser) {
        if (doesWindowExist) {
          router.push("/admin");
        }
      } else {
        setUser(authenticatedUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const [openModal, setOpenModal] = useState(false);

  if (!user) {
    return null;
  }

  if (isLoading || error || !events) {
    return (
      <div className="h-screen overflow-y-auto px-[20%] pt-[20px] animate-slide-in-fade-in bg-dark font-roboto text-white">
        {isLoading && (
          <ClipLoader
            size={50}
            color={"#095790"}
            speedMultiplier={0.5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
        {error && <p>Error: {error.message}</p>}
        {!isLoading && !events && <p>Please try again.</p>}
      </div>
    );
  }

  const hasUpcomingEvents = events.upcoming.length > 0;

  return (
    <div className="h-screen overflow-y-auto px-[20%] pt-[20px] animate-slide-in-fade-in bg-dark font-roboto text-white">
      <Modal open={openModal}>
        <AdminEventForm
          operation={AdminEventFormOperation.CREATE}
          closeFormCallback={() => {
            setOpenModal(false);
          }}
        />
      </Modal>
      {hasUpcomingEvents ? (
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-left pt-20">Upcoming Events</h1>
            <PrimaryRoundButton
              text="Add an Event"
              className="text-right"
              onClick={() => {
                setOpenModal(true);
              }}
            />
          </div>

          {events.upcoming.map((event: EventType, index: number) => {
            return (
              <AdminEventCard
                key={event.id}
                event={event}
                inverted={index % 2 !== 0}
              />
            );
          })}
        </div>
      ) : null}
      <h1 className="pb-[21px]">Past Events</h1>
      {events.past.map((event: EventType, index: number) => {
        delete event.signUpLink;

        return (
          <AdminEventCard
            key={event.id}
            event={event}
            inverted={(index + events.upcoming.length) % 2 !== 0}
          />
        );
      })}
    </div>
  );
};

export default AdminDashboard;

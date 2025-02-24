"use client";

import { useContext, useState } from "react";

import AdminEventForm from "./AdminEventForm.tsx";
import { AdminEventFormOperation } from "./constants.ts";
import { EventType } from "../../types/events";
import { Modal } from "@mui/material";
import PrimaryRoundButton from "../button/primaryRoundButton";
import React from "react";
import SecondaryRoundButton from "../button/secondaryRoundButton";
import TextButton from "../button/textButton";
import { WidthContext } from "../../app/context/WidthContext.tsx";
import { auth } from "../../firebase";
import clsx from "clsx";
import { doesWindowExist } from "../../app/utils";
import { formatDateAndLocation } from "../events/utils";

const AdminEventCard = ({
  event,
  inverted = false,
}: {
  event: EventType;
  inverted: boolean;
}) => {
  const width = useContext(WidthContext);
  const [opened, setOpened] = useState(false);

  const showLargeImage = width < 1536;
  const user = auth.currentUser;

  const RoundButton = inverted ? SecondaryRoundButton : PrimaryRoundButton;
  const formattedDateAndLocation = formatDateAndLocation({
    date: event.date,
    startTime: event.startTime,
    endTime: event.endTime,
    location: event.location,
  });

  const [openEditModal, setOpenEditModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const deleteEvent = async (id: string) => {
    if (deleting) return;
    setDeleting(true);

    if (!user) {
      alert("User is not authenticated. Please sign in!");
      return;
    }

    const idToken = await user.getIdToken();

    try {
      const res = await fetch("/api/admin/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },

        body: JSON.stringify({ id: id }),
      });

      setDeleting(false);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || `HTTP error! Status: ${res.status}`);
      }

      const responseData = await res.json();

      alert(`Deleted document ID: ${responseData.id}`);
      if (doesWindowExist) location.reload();
    } catch (err) {
      setDeleting(false);
      alert(`Error: ${err}`);
    }
  };
  return (
    <div
      className={clsx(
        "h-full grid 2xl:grid-cols-10 bg-opacity-40 rounded-2xl p-10 gap-10 mb-10",
        inverted ? "border-[1px] border-white" : "bg-activeDark bg-opacity-20"
      )}
    >
      <Modal open={openEditModal}>
        <AdminEventForm
          defaultState={event}
          operation={AdminEventFormOperation.UPDATE}
          closeFormCallback={() => {
            setOpenEditModal(false);
          }}
        />
      </Modal>
      <div className="2xl:col-span-7">
        <div className="flex justify-end gap-2">
          <PrimaryRoundButton
            text={"Edit"}
            onClick={() => {
              setOpenEditModal(true);
            }}
          />
          <SecondaryRoundButton
            text={deleting ? "Deleting" : "Delete"}
            onClick={() => {
              const firstConfirm = confirm(
                "Are you sure you want to delete this event?"
              );

              if (firstConfirm) {
                const secondConfirm = confirm(
                  "This action is IRREVERSIBLE! Are you 100% sure?"
                );
                if (secondConfirm) {
                  deleteEvent(event.id);
                }
              }
            }}
          />
        </div>

        <h2 className="font-bold">{event.name}</h2>
        <p className="font-kulim tracking-normal">{formattedDateAndLocation}</p>
        <br />

        {showLargeImage ? (
          <img
            className=" rounded-2xl h-64 2xl:hidden mb-6"
            src={`https://drive.google.com/thumbnail?id=${event.imageId}&sz=w1000`}
            alt="Event Image"
          />
        ) : null}

        <p className={clsx("whitespace-pre-wrap", !opened && "line-clamp-5")}>
          {event.details}
        </p>

        <div className="flex justify-end pt-2">
          <TextButton
            text={opened ? "Read Less ▲" : "Read More ▼"}
            onClick={() => {
              setOpened(!opened);
            }}
          />
        </div>

        {event.signUpLink ? (
          <div className="mt-12">
            <RoundButton
              text={"Sign Up"}
              onClick={() => {
                if (doesWindowExist) {
                  const win = window.open(event.signUpLink, "_blank");
                  win?.focus();
                }
              }}
            />
          </div>
        ) : null}
      </div>

      {!showLargeImage ? (
        <div className="flex justify-center 2xl:col-span-3 aspect-square">
          <img
            className=" rounded-2xl hidden 2xl:block"
            src={`https://drive.google.com/thumbnail?id=${event.imageId}&sz=w1000`}
            alt="Event Image"
          />
        </div>
      ) : null}
    </div>
  );
};

export default AdminEventCard;

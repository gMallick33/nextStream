"use client";

import React, { useState, useTransition, useRef, ElementRef } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Textarea } from "../ui/textarea";
import { updateuser } from "@/actions/user";
import { toast } from "sonner";

interface BioModelProps {
  initialValue: string | null;
}
const BioModel = ({ initialValue }: BioModelProps) => {
  const closeRef = useRef<ElementRef<"button">>(null);
  const [isPending, startTransition] = useTransition();

  const [value, setValue] = useState(initialValue || "");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(() => {
      updateuser({ bio: value })
        .then(() => {
          toast.success("Bio updated");
          closeRef?.current?.click();
        })
        .catch(() => toast.error("could not update bio, something went wrong"));
    });
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="link" size="sm" className="ml-auto">
          EDIT
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit user bio</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <Textarea
            placeholder="User bio"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            disabled={isPending}
            className="resize-none"
          />
          <div className="flex justify-between">
            <DialogClose ref={closeRef} asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={isPending} type="submit">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BioModel;

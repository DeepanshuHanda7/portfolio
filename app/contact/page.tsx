"use client";
import { useState } from "react";
import { Button, Image, Input, Textarea } from "@nextui-org/react";
import toast from "react-hot-toast";

import { title } from "@/components/primitives";

export default function BlogPage() {
  const initialState = {
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  };
  const [data, setData] = useState(initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setData((prev: typeof data) => ({ ...prev, [name]: value }));
  };

  const action = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json();

        throw new Error(errorData.message || "Failed to send the message.");
      }
      setData(initialState);
      ToastSuccess();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred.";

      ToastError(errorMessage);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-8 md:py-10 gap-10">
      <h1 className={title()}>Contact Me</h1>
      <div className="grid place-items-center w-full mt-10">
        <form
          className="flex flex-col items-end justify-start gap-4 w-full max-w-[700px]"
          onSubmit={action}
        >
          <Input
            fullWidth
            required
            label="Your Email"
            name="Email"
            type="email"
            value={data.Email}
            variant="bordered"
            onChange={handleChange}
          />
          <Input
            fullWidth
            required
            label="Name"
            name="Name"
            type="text"
            value={data.Name}
            variant="bordered"
            onChange={handleChange}
          />
          <Input
            fullWidth
            required
            label="Subject"
            name="Subject"
            type="text"
            value={data.Subject}
            variant="bordered"
            onChange={handleChange}
          />
          <Textarea
            fullWidth
            required
            classNames={{
              input: "resize-y min-h-[40px]",
            }}
            label="Message"
            name="Message"
            placeholder="Enter your message"
            value={data.Message}
            variant="bordered"
            onChange={handleChange}
          />
          <Button color="primary" type="submit" variant="shadow">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

const ToastSuccess = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <Image
              className="h-10 w-10 rounded-full"
              src="images/profilePicture.jpg"
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">Priyansh Sahu</p>
            <p className="mt-1 text-sm text-gray-500">
              Thank you for reaching out! I&apos;ve received your message and
              will get back to you soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
};

const ToastError = (message: string) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } bg-red-500 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="my-2 mx-6">
        <p className="text-md font-bold">Error</p>
        <p className="mt-1 text-sm">{message}</p>
      </div>
    </div>
  ));
};

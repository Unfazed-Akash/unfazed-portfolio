"use client";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
import { User, Mail, Loader2 } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "@/services/email";
import Image from "next/image";

export function ContactForm() {
  const [status, setStatus] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);
    const emailData = {
      user_name: formData.get("user_name") as string,
      user_email: formData.get("user_email") as string,
      title: "Website Contact",
      message: formData.get("message") as string,
    };

    try {
      await sendEmail(emailData);
      setStatus("");
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setStatus("Error: Please check EmailJS config in services/email.ts");
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStatus("");
  };

  if (isSubmitted) {
    return (
      <div className="space-y-6 text-center py-4">
        <h3 className="text-2xl font-semibold">S&apos;all Good, Man </h3>
        <div className="relative w-full h-40">
          <Image
            src="/success.gif"
            alt="Message Sent"
            fill
            className="object-contain"
          />
        </div>
        <Button onClick={handleReset} variant="outline" className="mt-4">
          Send Another Message?
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="name"
            name="user_name"
            placeholder="I'm the cook Now. Say My Name"
            className="pl-9"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            name="user_email"
            type="email"
            placeholder="You're_Hiesengberg@ww.com"
            className="pl-9"
            required
          />
        </div>
      </div>

      <div className="space-y-2 pb-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Fact is, Walter White couldn't have done it without me!"
          className="min-h-[140px]"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={status === "Sending..."}
      >
        {status === "Sending..." && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {status || "Send Message"}
      </Button>
    </form>
  );
}

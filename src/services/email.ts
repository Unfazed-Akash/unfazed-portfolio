import emailjs from "@emailjs/browser";

interface EmailData {
  [key: string]: string;
  user_name: string;
  user_email: string;
  title: string;
  message: string;
}

const emailConfig = {
  serviceId: "service_z6jjf3p",
  templateId: "template_ss0pjzo",
  publicKey: "a81X-eTwlw3ehtJdW",
};

export const sendEmail = async (data: EmailData) => {
  return emailjs.send(
    emailConfig.serviceId,
    emailConfig.templateId,
    data,
    emailConfig.publicKey
  );
};
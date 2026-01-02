import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Akash Trivedi",
  description:
    "Explore my portfolio of web and game development projects, including KAVACH, AAHARITHM, and more.",
  openGraph: {
    title: "Projects | Akash Trivedi",
    description:
      "Explore my portfolio of web and game development projects, including KAVACH, AAHARITHM, and more.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

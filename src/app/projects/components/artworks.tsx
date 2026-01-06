"use client";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { ArtworkModal } from "./artworks/artwork-modal";

const ArtDescription = ({
  title,
  quote,
  context,
}: {
  title: string;
  quote: string;
  context: string;
}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 md:p-8 backdrop-blur-[2px]">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
        {title}
      </h2>
      <blockquote className="text-lg md:text-xl italic text-gray-300 mb-4 border-l-4 border-purple-500 pl-4">
        &quot;{quote}&quot;
      </blockquote>
      <p className="font-normal text-sm md:text-base text-gray-200 leading-relaxed max-w-prose">
        {context}
      </p>
    </div>
  );
};

const artworks = [
  {
    id: 1,
    content: (
      <ArtDescription
        title="Loyalty Over Everything"
        quote="A man who doesn't spend time with his family can never be a real man."
        context="The Godfather explores how power without principle corrupts, but power with family loyalty creates legacy. Vito Corleone built an empire not through ruthlessness alone, but through protecting those who couldn't protect themselves. The film shows that true strength is protecting what matters, not just accumulating power."
      />
    ),
    className: "md:col-span-5 md:row-span-3",
    thumbnail: "/art/1.webp",
  },
  {
    id: 3,
    content: (
      <ArtDescription
        title="Own Your Truth"
        quote="What is it you truly desire?"
        context="Lucifer examines the masks we wear versus our authentic selves. The throne represents self-acceptance—not hiding from your nature but owning it responsibly. Throughout six seasons, the show explores how vulnerability is strength, and running from yourself causes more damage than any external force."
      />
    ),
    className: "md:col-span-6 md:row-span-3",
    thumbnail: "/art/3.webp",
  },
  {
    id: 2,
    content: (
      <ArtDescription
        title="One Choice Changes Everything"
        quote="I am not in danger. I am the danger."
        context="Walter White's transformation from teacher to kingpin shows how desperation and untapped potential can corrupt or liberate. The series reveals that pride—not money—drives most destruction. The desert represents the moral wasteland between who we are and who we become when pushed to our limits."
      />
    ),
    className: "md:col-span-11 md:row-span-3",
    thumbnail: "/art/2.webp",
  },
  {
    id: 4,
    content: (
      <ArtDescription
        title="Truth Sets You Free, But First It Destroys You"
        quote="Nothing is more beautiful than to know everything."
        context="This devastating film follows twins uncovering their mother's wartime past. It shows how cycles of violence perpetuate through silence, and only brutal honesty—however painful—breaks them. The stencil aesthetic mirrors how trauma leaves permanent marks. Truth isn't comfortable, but living in lies is worse."
      />
    ),
    className: "md:col-span-6 md:row-span-3",
    thumbnail: "/art/4.webp",
  },
];

export default function Artworks() {
  return (
    <Section className="items-start" blurInView={false}>
      <div className="flex flex-wrap items-end justify-between gap-4 w-full">
        <h1 className="text-h2 font-extrabold md:text-h1-desktop">
          My Artworks
        </h1>
        <Button
          size="sm"
          onClick={() =>
            (window.location.href = "https://instagram.com/unfazed_akash")
          }
        >
          Follow me on Instagram
        </Button>
      </div>
      <div className="w-full mt-2 md:mt-6">
        <LayoutGrid cards={artworks} />
      </div>
      <ArtworkModal />
    </Section>
  );
}

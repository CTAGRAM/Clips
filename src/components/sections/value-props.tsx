import { Box, Clapperboard, Send } from "lucide-react";

interface ValueProp {
  icon: React.ElementType;
  title: string;
  description: string;
}

const valuePropsData: ValueProp[] = [
  {
    icon: Box,
    title: "Nothing is unbranded",
    description:
      "In the world of branding, it's a runway. Will you sizzle and steal the show, or will you be lost in the background?",
  },
  {
    icon: Clapperboard,
    title: "Videos that drive engagements.",
    description:
      "Level up your online game with videos that don't just snag attention but set sparks flying in your audience.",
  },
  {
    icon: Send,
    title: "Removing all the headaches.",
    description:
      "Say adios to the hassle, and time-consuming tasks in content creation. Embrace a process that's all about doing more with less fuss.",
  },
];

const ValueProps = () => {
  return (
    <section className="bg-background py-[120px] text-foreground">
      <div className="container">
        <div className="mx-auto mb-20 max-w-[616px] text-center">
          <h2 className="font-display text-[48px] font-bold leading-[1.2]">
            Branding, Content &amp; Systems.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-secondary">
            What happens when a branding agency who is obsessed with systems and
            frameworks, decides to dive in the world content creation? you get
            the clips agency.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:flex-row md:gap-10">
          {valuePropsData.map((prop, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col items-center text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                <prop.icon
                  className="h-8 w-8 text-icon-accent"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="mt-6 text-[32px] font-bold leading-[1.3] text-white">
                {prop.title}
              </h3>
              <p className="mt-3 text-base leading-[1.6] text-slate-400">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
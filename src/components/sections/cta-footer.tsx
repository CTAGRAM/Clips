import Link from "next/link";

const CtaFooter = () => {
  return (
    <section className="w-full bg-gradient-to-tr from-[var(--color-gradient-orb-1)] via-[var(--color-gradient-orb-2)] to-[var(--color-gradient-orb-1)] py-20 lg:py-[120px]">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-base font-normal text-text-secondary">
          Take your brand to the next level
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-[56px] md:leading-[1.1]">
          Have Some Questions? <br /> Get In Touch
        </h2>
        <Link
          href="/submit-form"
          className="mt-10 inline-block animate-pulse rounded-xl bg-accent text-accent-foreground px-10 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:animate-none hover:shadow-button-hover"
        >
          Book a call
        </Link>
      </div>
    </section>
  );
};

export default CtaFooter;
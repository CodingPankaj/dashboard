export const MainSection = ({ children, className }) => {
  return (
    <section className={`${className} flex flex-col gap-5 px-3 py-6 md:px-5`}>
      {children}
    </section>
  );
};

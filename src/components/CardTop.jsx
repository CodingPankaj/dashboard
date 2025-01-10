export const CardTop = ({ children, heading = "" }) => {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-4 border-b border-border-color px-3 py-3">
      <h4 className="text-lg font-medium capitalize text-text-primary-color">
        {heading}
      </h4>

      {children}
    </div>
  );
};

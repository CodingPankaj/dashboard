export const DashboardCardTop = ({ children, cardName = "" }) => {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-4 border-b border-border-color px-3 py-3">
      <h4 className="text-lg font-medium">{cardName}</h4>

      {children}
    </div>
  );
};

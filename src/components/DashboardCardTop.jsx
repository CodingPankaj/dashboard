export const DashboardCardTop = ({ children, cardName = "" }) => {
  return (
    <div className="flex w-full items-center justify-between border-b border-border-color px-3 py-3">
      <h4 className="text-lg font-medium">{cardName}</h4>

      {children}
    </div>
  );
};

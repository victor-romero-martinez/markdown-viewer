interface WrapperProps {
  label: string;
  icon: React.ReactNode;
  toggleIcon: React.ReactNode;
  children: React.ReactNode;
}

export default function Wrapper({
  icon,
  label,
  toggleIcon,
  children,
}: WrapperProps) {
  return (
    <div className="wrapper">
      <div className="toolbar">
        <span>{icon}</span>
        <span>{label}</span>
        <span>{toggleIcon}</span>
      </div>
      {children}
    </div>
  );
}

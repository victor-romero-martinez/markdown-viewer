import { useStore } from "../store";

interface WrapperProps {
  label: string;
  icon: React.ReactNode;
  toggle: React.ReactNode;
  children: React.ReactNode;
}

export default function Wrapper({
  icon,
  label,
  toggle,
  children,
}: WrapperProps) {
  const labelToLower = label.toLowerCase();
  const { elementHide, lastElement, update } = useStore();

  const handleCheck = (_e: React.ChangeEvent<HTMLInputElement>) => {
    update(labelToLower as "none");
  };

  return (
    <div className="wrapper" data-expand={elementHide} data-last={lastElement}>
      <div className="toolbar">
        <span>{icon}</span>
        <span>{label}</span>
        <label htmlFor={`toggle-checkbox-${labelToLower}`}>
          <input
            type="checkbox"
            id={`toggle-checkbox-${labelToLower}`}
            name={`toggle-checkbox-${labelToLower}`}
            onChange={handleCheck}
          />
          {toggle}
        </label>
      </div>
      {children}
    </div>
  );
}

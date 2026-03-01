import { Menu, X } from "lucide-react";

interface MobileToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileToggle = ({ isOpen, onClick }: MobileToggleProps) => {
  return (
    <button onClick={onClick} className="md:hidden text-foreground" aria-label="Toggle menu">
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
};

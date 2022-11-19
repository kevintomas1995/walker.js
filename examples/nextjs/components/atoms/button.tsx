interface Props {
  label: string;
  colors: string;
  action?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ label, colors, action, onClick }: Props) => {
  return (
    <button
      type="button"
      data-elbaction={action && `click:${action}`}
      onClick={onClick}
      className={`w-full flex inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${colors}`}
    >
      {label}
    </button>
  );
};

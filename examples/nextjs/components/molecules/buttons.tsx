import { Button } from '../atoms/button';

interface Props {
  label: string;
  action?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonPrimary = ({ label, action, onClick }: Props) => {
  return (
    <Button
      label={label}
      action={action}
      onClick={onClick}
      colors="text-white bg-elbwalker-600 hover:bg-elbwalker-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-elbwalker-500"
    />
  );
};

export const ButtonSecondary = ({ label, action, onClick }: Props) => {
  return (
    <Button
      label={label}
      action={action}
      onClick={onClick}
      colors="text-elbwalker-700 bg-elbwalker-100 hover:bg-elbwalker-200"
    />
  );
};

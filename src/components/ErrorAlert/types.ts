import { ReactNode } from 'react';

export interface ErrorAlertProps {
  show: boolean;
  heading?: string;
  message?: ReactNode;
  onClose: () => void;
}

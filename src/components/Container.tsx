import { FC, ReactNode } from 'react';

interface ContainerProps {
  className: string;
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

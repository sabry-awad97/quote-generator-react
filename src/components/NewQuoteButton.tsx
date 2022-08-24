import { FC } from 'react';

interface NewQuoteButtonProps {
  onNewQuote(): void;
}

export const NewQuoteButton: FC<NewQuoteButtonProps> = ({ onNewQuote }) => {
  return <button onClick={() => onNewQuote()}>New Quote</button>;
};

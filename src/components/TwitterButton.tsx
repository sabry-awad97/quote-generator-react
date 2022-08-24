import { FC } from 'react';
import { IQuote } from '../data/quotes';

interface TwitterButtonProps {
  quote: IQuote;
}

export const TwitterButton: FC<TwitterButtonProps> = ({ quote }) => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;
  return (
    <button
      className="twitter-button"
      title="Tweet This!"
      onClick={() => window.open(twitterUrl, '_blank')}
    >
      <i className="fab fa-twitter"></i>
    </button>
  );
};

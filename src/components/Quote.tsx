import { FC } from 'react';
import { IQuote } from '../data/quotes';

interface QuoteProps {
  quote: IQuote;
}

export const Quote: FC<QuoteProps> = ({ quote }) => {
  return (
    <>
      <div
        className={`quote-text ${quote.text.length > 120 ? 'long-quote' : ''}`}
      >
        <i className="fas fa-quote-left"></i>
        <span>{quote.text}</span>
      </div>
      <div className="quote-author">
        <span>{quote.author || 'Unknown'}</span>
      </div>
    </>
  );
};

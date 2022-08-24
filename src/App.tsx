import { FC, useEffect, useState } from 'react';
import { Loader } from './components/Loader';
import { TwitterButton } from './components/TwitterButton';
import { Quote } from './components/Quote';
import { NewQuoteButton } from './components/NewQuoteButton';
import { Container } from './components/Container';
import { getQuotes } from './api';
import { IQuote } from './data/quotes';

const App: FC = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [quote, setQuote] = useState<IQuote | null>(null);

  useEffect(() => void getQuotes().then(setQuotes), []);

  const getRandomQuote = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(quote);
  };

  if (!quotes.length) {
    return <Loader />;
  }

  return (
    <Container className="quote-container">
      {quote && <Quote quote={quote} />}
      <Container className="button-container">
        {quote && <TwitterButton quote={quote} />}
        <NewQuoteButton onNewQuote={() => getRandomQuote()} />
      </Container>
    </Container>
  );
};

export default App;

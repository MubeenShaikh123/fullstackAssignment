import React, { useState, useEffect } from 'react';
import Card from './Card';

const Home = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch("http://localhost:4000/cards")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCards(data);
        setFilteredCards(data); // Initially, all cards are shown
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter cards based on the search query
    const filtered = cards.filter(card =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCards(filtered);
  }, [searchQuery, cards]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className={`bg-[#DADBF0] pb-20 pt-40 flex flex-col justify-center items-center`}>
        <h1 className='uppercase text-5xl font-semibold'>How can I help?</h1>
        <input
          type="text"
          className='border border-black p-2 w-full max-w-[40%] mt-8 rounded-sm'
          placeholder='Search'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div>
          {(filteredCards.length > 0) ? (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 py-24 px-32'>
            {filteredCards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
        </div>
          ) : ''}
      </div>
      {filteredCards.length === 0
        ? (
          <div className='text-3xl font-bold text-center border w-full py-12'>No card data found</div>
        ) : ''}
    </>
  );
}

export default Home;

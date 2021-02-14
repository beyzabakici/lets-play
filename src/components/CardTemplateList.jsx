import React from 'react';
import { CardTemplate } from './CardTemplate.jsx';
import TABS from '../constant';

function CardTemplateList(props) {
  const cardList = [
    {
      id: 0,
      icon: '☕️',
      title: 'Virtual Happy Hour',
      description: 'Hours and hours of fun, packed into one righteous template.',
      type: TABS.HAPPY_HOUR,
    },
    {
      id: 1,
      icon: '👋',
      title: 'Virtual Meet & Greet',
      description: 'Hours and hours of fun, packed into one righteous template.',
      type: TABS.HAPPY_HOUR,
    },
    {
      id: 3,
      icon: '👔',
      title: 'Working From Home',
      description: 'A shockingly fun way to network. It\'s like community speed-dating!',
      type: TABS.NETWORKING,
    },
    {
      id: 4,
      icon: '🎆',
      title: '2020 Reflections',
      description: 'What a year.  Let\'s reflect and move forward.',
      type: TABS.SEASONAL,
    },
    {
      id: 5,
      icon: '🛫',
      title: 'Wanna Get Away?',
      description: 'Wouldn’t it be great to go…somewhere?',
      type: TABS.NETWORKING,
    },
    {
      id: 6,
      icon: '👨‍👩‍👦',
      title: 'Meet the Family',
      description: 'Who are the people who shaped you?',
      type: TABS.NETWORKING,
    },
    {
      id: 7,
      icon: '🙏',
      title: 'The Gratitude Game',
      description: 'Gratitude is a powerful catalyst for happiness. Let\'s get the ball rolling.',
      type: TABS.ONBOARDING,
    },
  ];

  const filterCardByType = () => {
    return cardList.filter((card) => {
      return props.type === TABS.ALL ? card : card.type === props.type;
    });
  };

  return (
    <div>
      <div className="list">
        { filterCardByType().map(((card) => <CardTemplate key={card.id} icon={card.icon} title={card.title} description={card.description} /> )) }
      </div>
    </div>
  )
}

export { CardTemplateList };

import * as React from 'react';

const CardsListItem = ({item, mode}) => {
  return (
    <li className="cards-list__item">
      <a className="cards-list__link" href={item.socials.vk}>
        <div className="cards-list__image-wrapper">
          <img className="cards-list__image" src={item.avatar.image} />
        </div>

        {mode === `human` ? item.fullName : (
          <>
            <h4 className="project-helpers-list__title">{item.title}</h4>

            <p className="project-helpers-list__description">{item.description}</p>
          </>
        )}
      </a>
    </li>
  );
};

export default CardsListItem;

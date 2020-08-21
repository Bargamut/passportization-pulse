import './style.css';
import {
  fetchHelpers,
  renderHumans,
  renderEvents,
} from './scripts/helpers';
import { share2Socials } from "./scripts/socials";

(async () => {
  const socialBarElement = document.querySelector(`.social-shares`);

  socialBarElement.addEventListener(`click`, (evt) => {
    if (!evt.target.classList.contains(`social-shares__link`)) return;

    evt.preventDefault();

    share2Socials(evt.target);
  });

  const dataHelpersListElement = document.querySelector(`.data-helpers`);
  const infoHelpersListElement = document.querySelector(`.info-helpers`);

  dataHelpersListElement.append(
    renderHumans(
      await fetchHelpers(`/api/data-helpers.json`)
    )
  );

  infoHelpersListElement.append(
    renderEvents(
      await fetchHelpers(`/api/data-helpers__info.json`)
    )
  );
})();

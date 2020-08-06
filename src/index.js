import './style.css';
import {
  fetchHelpers,
  renderHumans,
  renderEvents,
} from './scripts/helpers';

(async () => {
  const dataHelpersListElement = document.querySelector(`.data-helpers`);
	const infoHelpersListElement = document.querySelector(`.info-helpers`);

  dataHelpersListElement.append(
    renderHumans(
      await fetchHelpers(`/data-helpers.json`)
    )
  );

  infoHelpersListElement.append(
    renderEvents(
      await fetchHelpers(`/data-helpers__info.json`)
    )
  );
})();

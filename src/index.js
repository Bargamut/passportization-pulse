import './style.css';

(async () => {
	const docFragment = document.createDocumentFragment();
	const helpersListElement = document.querySelector(`.project-helpers-list`);

	const fetchHelpers = await fetch(`/data-helpers.json`);
	const helpersData = await fetchHelpers.json();

	helpersData.forEach((item) => {
    const fullName = item.nickName
      ? `${item.firstName} "${item.nickName}" ${item.lastName}`
      : `${item.firstName} ${item.lastName}`;

    const itemElement = document.createElement(`li`);

    itemElement.classList.add(`project-helpers-list__item`);

		itemElement.innerHTML = `
				<a class="project-helpers-list__link" href="${item.socials.vk}">
					<img class="project-helpers-list__image" src="${item.avatar.image}">
				</a>
				${fullName}`;

		docFragment.append(itemElement);
	});

	helpersListElement.append(docFragment);
})();

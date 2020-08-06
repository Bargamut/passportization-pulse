export const fetchHelpers = async (url) => {
	const fetchHelpers = await fetch(url);
  const helpersData = await fetchHelpers.json();

  return helpersData;
};

export const renderHumans = (data) => {
  const docFragment = document.createDocumentFragment();

  data.forEach((item) => {
    if (!item.isActive) return;

    const fullName = item.nickName
      ? `${item.firstName} "${item.nickName}" ${item.lastName}`
      : `${item.firstName} ${item.lastName}`;

    const itemElement = document.createElement(`li`);

    itemElement.classList.add(`project-helpers-list__item`);

		itemElement.innerHTML = `
				<a class="project-helpers-list__link" href="${item.socials.vk}">
          <div class="project-helpers-list__image-wrapper">
            <img class="project-helpers-list__image" src="${item.avatar.image}">
          </div>

          ${fullName}
        </a>`;

		docFragment.append(itemElement);
	});

  return docFragment;
};

export const renderEvents = (data) => {
  const docFragment = document.createDocumentFragment();

  data.forEach((item) => {
    if (!item.isActive) return;

    const itemElement = document.createElement(`li`);

    itemElement.classList.add(`project-helpers-list__item`);

		itemElement.innerHTML = `
				<a class="project-helpers-list__link" href="${item.socials.vk}">
          <div class="project-helpers-list__image-wrapper">
            <img class="project-helpers-list__image" src="${item.avatar.image}">
          </div>

          <h4 class="project-helpers-list__title">${item.title}</h4>

          <p class="project-helpers-list__description">${item.description}</p>
        </a>`;

		docFragment.append(itemElement);
	});

	return docFragment;
};

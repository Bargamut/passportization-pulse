export const fetchHelpers = async (url) => {
	const fetchHelpers = await fetch(url);
  const helpersData = await fetchHelpers.json();

  return helpersData;
};

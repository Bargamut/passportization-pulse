import { fetchHelpers } from '../data-service';

export default class HumansData {
  async getData() {
    const data = await fetchHelpers(`/api/data-helpers.json`);

    return data.map((item) => {
      if (!item.isActive) return;

      item.fullName = item.nickName
        ? `${item.firstName} "${item.nickName}" ${item.lastName}`
        : `${item.firstName} ${item.lastName}`;

      return item;
    });
  };
};

import { fetchHelpers } from '../data-service';

export default class PublicsData {
  async getData() {
    const data = await fetchHelpers(`/api/data-helpers__info.json`);

    return data;
  };
};

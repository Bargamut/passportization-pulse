import * as helpers from '../src/scripts/helpers';

const mock = {
  events: [{
    "isActive": true,
    "tags": [ "support-info" ],
    "socials": {
      "vk": "#"
    },
    "avatar": {
      "image": "#"
    },
    "title": "Hello, World!",
    "description": ""
  }],
};

it(`should be truly`, () => {
  const result = helpers.renderEvents(mock.events);

  const blockTitleElement = result.querySelector(`.project-helpers-list__title`);

  expect(blockTitleElement.textContent).toBe(`Hello, World!`);
});

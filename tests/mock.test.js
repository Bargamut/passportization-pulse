import HumansData from '../src/providers/humans-data';

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
  const humansData = mock;

  expect(humansData.events[0].title).toBe(`Hello, World!`);
});

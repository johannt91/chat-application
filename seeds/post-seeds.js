const { Post } = require('../models');

const postdata = [
  {
    title: 'I need an unordered list without any bullets',
    content: 'I have created an unordered list. I feel the bullets in the unordered list are bothersome, so I want to remove them.Is it possible to have a list without bullets?',
    type: 'forum',
    skills: 1,
    user_id: 10
  },
  {
    title: 'What are valid values for the id attribute in HTML?',
    content: 'When creating the id attributes for HTML elements, what rules are there for the value?',
    type: 'forum',
    skills: 1,
    user_id: 8
  },
  {
    title: 'Redirect from an HTML page',
    content: 'Is it possible to set up a basic HTML page to redirect to another page on load?',
    type: 'forum',
    skills: 1,
    user_id: 1
  },
  {
    title: 'Local Storage vs Cookies',
    content: 'I want to reduce load times on my websites by moving all cookies into local storage since they seem to have the same functionality.',
    type: 'forum',
    skills: 1,
    user_id: 4
  },
  {
    title: 'Inventory management system',
    content: 'We currenly recording items in excel and needs a more responsive web site. Budget $1500',
    type: 'bounties',
    skills: 1,
    user_id: 4
  },
  {
    title: 'Web profile',
    content: 'Hoping to get some help with adding CSS to the HTML profile. Budget $50',
    type: 'bounties',
    skills: 1,
    user_id: 7
  },
  {
    title: 'Social media website',
    content: 'We have created the website and already have a working local version. Need help connecting it to Heroku server',
    type: 'forum',
    skills: 1,
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'There will be some content here',
    type: 'forum',
    skills: 1,
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'There will be some content here',
    type: 'forum',
    skills: 1,
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'There will be some content here',
    type: 'forum',
    skills: 1,
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'There will be some content here',
    type: 'forum',
    skills: 1,
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'There will be some content here',
    type: 'forum',
    skills: 1,
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'There will be some content here',
    type: 'forum',
    skills: 1,
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    content: 'There will be some content here',
    type: 'forum',
    skills: 1,
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'There will be some content here',
    type: 'forum',
    skills: 1,
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    content: 'There will be some content here',
    type: 'forum',
    skills: 1,
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'There will be some content here',
    type: 'forum',
    skills: 1,
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content: 'There will be some content here',
    type: 'forum',
    skills: 1,
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content: 'There will be some content here',
    type: 'forum',
    skills: 1,
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'There will be some content here',
    type: 'forum',
    skills: 1,
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

import faker from 'faker'

faker.locale = 'ru'

const images = [
  'https://klike.net/uploads/posts/2019-03/1551516106_1.jpg',
  'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
  'https://klike.net/uploads/posts/2019-03/medium/1551512878_3.jpg',
  'https://klike.net/uploads/posts/2019-03/1551516106_1.jpg',
  'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
  'https://klike.net/uploads/posts/2019-03/medium/1551512878_3.jpg',
  'https://klike.net/uploads/posts/2019-03/1551516106_1.jpg',
  'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
  'https://klike.net/uploads/posts/2019-03/medium/1551512878_3.jpg',
  'https://klike.net/uploads/posts/2019-03/1551516106_1.jpg',
  'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
  'https://klike.net/uploads/posts/2019-03/medium/1551512878_3.jpg'
]

const generateGroup = (i) => {
  return {
    id: i,
    title: faker.lorem.words(),
    content: faker.lorem.paragraph(),
    image: faker.random.arrayElement(images),
    members: faker.random.number(),
    tags: ['Успех', 'Дисциплина', 'Мышление', 'Медитации', 'Лайф коучинг'],
    owner: faker.name.findName()
  }
}

export default (count = 10) => [...Array(count).keys()].map(generateGroup)

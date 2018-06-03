import Mock from 'mockjs';

const random = Mock.Random
const baseUrl = 'http://localhost:5000'

Mock.mock(`${baseUrl}/api/user`, {
  'nickName': '@name',
  'avatar': random.dataImage('250x250'),
  'email': random.email(),
  'profile': random.cparagraph(10, 20)
})

Mock.mock(RegExp(`${baseUrl}/api/list`),
  [
    {
      'id': '@id',
      'date': random.date('yyyy-MM-dd HH:mm'),
      'content': random.cparagraph(2, 5),
      'comments':
        [
          {
            'id': 11,
            'pid': 0,
            'date': random.date('yyyy-MM-dd HH:mm'),
            'content': random.cparagraph(1, 5),
            'user': {
              'id': 1,
              'avatar': random.dataImage('250x250'),
              'nickName': '@name'
            }
          },
          {
            'id': '@id',
            'pid': 11,
            'date': random.date('yyyy-MM-dd HH:mm'),
            'content': random.cparagraph(1, 5),
            'user': {
              'id': 1,
              'avatar': random.dataImage('250x250'),
              'nickName': '@name'
            }
          }
        ]
    },
    {
      'id': '@id',
      'cover': random.image('234x60'),
      'date': random.date('yyyy-MM-dd HH:mm'),
      'title': random.cword(4, 10),
      'content': random.cparagraph(20, 50)
    },
    {
      'id': '@id',
      'date': random.date('yyyy-MM-dd HH:mm'),
      'title': random.cword(4, 10),
      'content': random.cparagraph(20, 50)
    }
  ]
)

Mock.mock(RegExp(`${baseUrl}/api/articles`),
  [
    {
      'id': '@id',
      'cover': random.image('234x60'),
      'date': random.date('yyyy-MM-dd HH:mm'),
      'title': random.cword(4, 10),
      'content': random.cparagraph(20, 50)
    },
    {
      'id': '@id',
      'date': random.date('yyyy-MM-dd HH:mm'),
      'title': random.cword(4, 10),
      'content': random.cparagraph(20, 50)
    }
  ]
)

Mock.mock(RegExp(`${baseUrl}/api/dynamics`),
  [
    {
      'id': '@id',
      'date': random.date('yyyy-MM-dd HH:mm'),
      'content': random.cparagraph(2, 5)
    },
    {
      'id': '@id',
      'date': random.date('yyyy-MM-dd HH:mm'),
      'content': random.cparagraph(3, 10)
    },
    {
      'id': '@id',
      'date': random.date('yyyy-MM-dd HH:mm'),
      'content': random.cparagraph(2, 5)
    }
  ]
)

Mock.mock(RegExp(`${baseUrl}/api/search`),
  [
    {
      'id': '@id',
      'date': random.date('yyyy-MM-dd HH:mm'),
      'content': random.cparagraph(2, 5),
      'comments':
        [
          {
            'id': 11,
            'pid': 0,
            'date': random.date('yyyy-MM-dd HH:mm'),
            'content': random.cparagraph(1, 5),
            'user': {
              'id': 1,
              'avatar': random.dataImage('250x250'),
              'nickName': '@name'
            }
          }
        ]
    },
    {
      'id': '@id',
      'cover': random.image('234x60'),
      'date': random.date('yyyy-MM-dd HH:mm'),
      'title': random.cword(4, 10),
      'content': random.cparagraph(20, 50)
    },
    {
      'id': '@id',
      'date': random.date('yyyy-MM-dd HH:mm'),
      'title': random.cword(4, 10),
      'content': random.cparagraph(20, 50)
    }
  ]
)

Mock.mock(RegExp(`${baseUrl}/api/article/[a-zA-Z0-9]*`), {
  'id': '@id',
  'cover': random.image('234x60'),
  'date': random.date('yyyy-MM-dd HH:mm'),
  'title': random.cword(4, 10),
  'content': random.cparagraph(20, 50)
})

Mock.mock(RegExp(`${baseUrl}/api/dynamic/[a-zA-Z0-9]*`), {
  'id': '@id',
  'date': random.date('yyyy-MM-dd HH:mm'),
  'content': random.cparagraph(1, 5)
})
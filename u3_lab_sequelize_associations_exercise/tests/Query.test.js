const { sequelize, User, Article } = require('../models')
const queries = require('../query')

let stringify = queries.stringify
describe('Lab Tests', () => {
  it('should show all users', async () => {
    let users = await User.findAll()
    users = stringify(users)
    const res = await queries.getAllUsers()
    expect(stringify(res)).toEqual(users)
    return res
  })
  it('should show all articles with their creators', async () => {
    let articles = await Article.findAll({
      include: [{ model: User, as: 'creator' }]
    })
    articles = stringify(articles)
    const res = await queries.articlesWithCreator()
    expect(stringify(res)).toEqual(articles)
    return res
  })
})

describe('Bonus', () => {
  it('should show all bookmarks', async () => {
    let users = await User.findAll({
      include: [{ model: Article, as: 'bookmarks' }]
    })
    users = stringify(users)
    const res = await queries.getAllBookmarks()
    expect(stringify(res)).toEqual(users)
    return res
  })
})

afterAll(() => {
  sequelize.close()
})

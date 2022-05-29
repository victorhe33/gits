const { totalTaskTime } = require('../challenges')

describe('30-totalTaskTime', function () {
  it('returns zero when there are no tasks', function () {
    expect(totalTaskTime([], 1)).toBe(0)
  })
  it('handles two tasks and two threads', function () {
    expect(totalTaskTime([4, 2, 5], 1)).toBe(11)
    expect(totalTaskTime([5, 8], 2)).toBe(8)
    expect(totalTaskTime([4, 2, 10], 2)).toBe(12)
  })
  it('handles tasks with three threads', function () {
    expect(totalTaskTime([5, 2, 6, 8, 7, 2], 3)).toBe(12)
  })
})

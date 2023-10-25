import t from 'tap'

export default abstract class ServiceTestSuite {
  test = t.test.bind(t)
  constructor () {
    this.defineTests()
  }
  abstract defineTests(): void
}

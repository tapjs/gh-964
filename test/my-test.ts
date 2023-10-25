import ServiceTestSuite from './service-test-suite.js'

export default class MyTest extends ServiceTestSuite {
  defineTests() {
    this.test('1+1 tests', t => {
      t.equal(1 + 1, 2, '1+1=2')
      t.equal(1, 2, '1 == 2', { todo: true })
      t.end()
    })
  }
}

new MyTest()

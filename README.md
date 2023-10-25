repro for [tapjs/tapjs#964](https://github.com/tapjs/tapjs/issues/964)

```tap
TAP version 14
1..2
# Subtest: test/my-test.ts
    # Subtest: 1+1 tests
        ok 1 - 1+1=2
        not ok 2 - 1 == 2 # TODO
        1..2
    ok 1 - 1+1 tests # time=1.76ms
    
    1..1
ok 1 - test/my-test.ts # time=569.244ms

# Subtest: test/service-test-suite.ts
    1..0 # no tests found
ok 2 - test/service-test-suite.ts # SKIP no tests found

# No coverage generated
# { total: 3, pass: 1, todo: 1, skip: 1 }
# time=685.52ms
```

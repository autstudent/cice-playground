describe('map', () => {
  it('should set a value with key foo and value bar', () => {
    const map = new Map()

    map.set('foo', 'bar')

    const actual = map.get('foo')

    expect(actual).toBe('bar')
  })

  it('should set some value and get it', () => {
    const map = new Map()

    map.set('key', 'value')

    const actual = map.get('key')

    expect(actual).toBe('value')
  })

  it('should tell me the size', () => {
    const map = new Map()

    map.set('key1', 'value2')
    map.set('key2', 'value2')
    map.set('key3', 'value3')

    const actual = map.size

    expect(actual).toBe(3)
  })

  it('should check that it has some value', () => {
    const map = new Map()

    map.set('key1', 'value2')
    map.set('key2', 'value2')
    map.set('key3', 'value3')

    const given = 'value2'
    let actual = false

    const iterator = map[Symbol.iterator]()

    for (let item of iterator) {
      if (item.includes(given)) actual = true
    }

    expect(actual).toBe(true)
  })

  it('should check that it has some value after deleting a value', () => {
    const map = new Map()

    map.set('key', 'value')
    map.delete('key')

    const actual = map.has('key')

    expect(actual).toBe(false)
  })

  it('should delete all values', () => {
    const map = new Map()

    map.set('key1', 'value2')
    map.set('key2', 'value2')
    map.set('key3', 'value3')

    map.clear()

    const actual = map.size

    expect(actual).toBe(0)
  })

  it('should execute a callback for each value', () => {
    const map = new Map()

    map.set('key1', 'value2')
    map.set('key2', 'value2')
    map.set('key3', 'value3')

    let actual = []
    map.forEach((value, key, map) => {
      actual.push(key)
    })

    map.set('foo', 'bar')
    map.set('bar', 'baz')
    const actual = map.size

    expect(actual).toBe(2)
  })

  it('should check that it has some value', () => {
    const map = new Map()

    map.set('foo', 'bar')
    const actual = map.has('foo')

    expect(actual).toBe(true)
  })

  it('should check that it has some value after deleting a value', () => {
    const map = new Map()

    map.set('foo', 'bar')
    map.delete('foo')
    const actual = map.has('foo')

    expect(actual).toBe(false)
  })

  it('should delete all values', () => {
    const map = new Map()

    map.set('foo', 'bar')
    map.set('bar', 'baz')
    map.clear()

    const foo = map.has('foo')
    expect(foo).toBe(false)
    const bar = map.has('bar')
    expect(bar).toBe(false)
  })

  it('should execute a callback for each value', () => {
    const map = new Map()
    const calls = []

    map.set('foo', 'bar')
    map.set('bar', 'baz')
    map.forEach((value, key) => calls.push({ value, key }))

    expect(calls).toEqual([
      { key: 'foo', value: 'bar' },
      { key: 'bar', value: 'baz' }
    ])
  })

  it('should be transformed to an array', () => {
    const map = new Map()

    map.set('foo', 'bar')
    map.set('bar', 'baz')
    const actual = Array.from(map)

    expect(actual).toEqual([
      ['foo', 'bar'],
      ['bar', 'baz']
    ])
  })
})

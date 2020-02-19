describe('arrays', () => {
  it('should obtain the power of 2 for a given number of elements', () => {
    const given = [1, 2, 3]

    const actual = given.map(item => item * item)

    expect(actual).toEqual([1, 4, 9])
  })

  it('should filter the even numbers', () => {
    const given = [1, 24, 3, 8, 10]

    const actual = given.filter(item => item % 2 == 0)

    expect(actual).toEqual([24, 8, 10])
  })

  it('should add all the numbers', () => {
    const given = [1, 2, 3]

    let actual = 0
    given.map(item => (actual = actual + item))

    expect(actual).toBe(6)
  })

  it('should sort alphabetically', () => {
    const given = ['javascript', 'java', 'python', 'lua']

    const actual = given.sort()

    expect(actual).toEqual(['java', 'javascript', 'lua', 'python'])
  })

  it('should filter all the animals that have more than 2 legs and get the names only', () => {
    const animals = [
      {
        name: 'giraffe',
        legs: 4
      },
      {
        name: 'dog',
        legs: 4
      },
      {
        name: 'bird',
        legs: 2
      }
    ]

    const actual = animals.filter(item => item.legs > 2).map(item => item.name)

    expect(actual).toEqual(['giraffe', 'dog'])
  })

  it('should remove vowels from a word', () => {
    const word = 'hello world'

    const actual = word
      .split('')
      .map(character => {
        if (/[aeiouyAEIOUY]/.test(character)) {
          character = ''
        } else {
          return character
        }
      })
      .join('')

    expect(actual).toBe('hll wrld')
  })

  it('should return a count of all repeated elements', () => {
    const given = ['🍋', '🍉', '🍒', '🍋', '🍋', '🍎', '🍎', '🍐']

    const actual = {}

    given
      .filter((fruit, index, self) => {
        return self.indexOf(fruit) === index
      })
      .map(uniqfruit => {
        let count = 0
        given.map(item => {
          if (uniqfruit === item) count++
        })
        actual[uniqfruit] = count
      })

    expect(actual).toEqual({
      '🍋': 3,
      '🍉': 1,
      '🍒': 1,
      '🍎': 2,
      '🍐': 1
    })
  })

  it('should group all objects by a property', () => {
    const given = [
      { name: 'Alice', age: 21 },
      { name: 'Max', age: 20 },
      { name: 'Jane', age: 20 }
    ]

    const actual = {}

    given
      .filter((age, index, self) => {
        return self.indexOf(age) === index
      })
      .map(uniqage => {
        if (Object.keys(actual).includes(`${uniqage.age}`)) {
          actual[uniqage.age].push(uniqage)
        } else {
          actual[uniqage.age] = [uniqage]
        }
      })

    expect(actual).toEqual({
      20: [
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
      ],
      21: [{ name: 'Alice', age: 21 }]
    })
  })

  it('should group all books in a single array without duplicates', () => {
    const given = [
      {
        name: 'Anna',
        books: ['Dune', 'Harry Potter'],
        age: 21
      },
      {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet', 'Harry Potter'],
        age: 26
      },
      {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
      }
    ]

    const actual = given
      .map(author => author.books.join())
      .join()
      .split(',')
      .filter((book, index, self) => {
        return self.indexOf(book) === index
      })

    expect(actual).toEqual([
      'Dune',
      'Harry Potter',
      'War and peace',
      'Romeo and Juliet',
      'The Lord of the Rings',
      'The Shining'
    ])
  })

  it('should make sure every element of the array is positive', () => {
    const given = [1, -2, -5, 9]

    const actual = given.some(item => {
      if (item < 0) return false
    })

    expect(actual).toBe(false)
  })

  it('should add the length of all sub arrays', () => {
    const given = [1, [2, 3], [4, 5], [6, 7]]

    let actual = 0

    given.map(item => {
      let tmpvalue = 1
      if (Array.isArray(item)) tmpvalue = item.length
      actual = actual + tmpvalue
    })

    expect(actual).toBe(7)
  })

  it('should remove all the keys of an object whose keys start with a', () => {
    const given = {
      a: 1,
      ba: 2,
      aa: 3,
      ab: 4
    }

    const actual = {}

    Object.keys(given).map(item => {
      if (item.indexOf('a') !== 0) actual[item] = given[item]
    })

    expect(actual).toEqual({ ba: 2 })
  })

  it('should copy an object with a key of the object added dynamically when a random number is greater than 0.5 without mutating the object', () => {
    const given = {
      foo: 1,
      dynamicProp: 2
    }
    const randomNumber = 0.6

    const actual = {}

    // const actual = {}
    // Object.assign(given, actual);
    //  ===
    // const actual = {
    //   ...given
    // }

    if (randomNumber > 0.5) {
      actual.push({ foo: 1 })
    }

    expect(actual).toEqual({ foo: 1 })
  })

  it('should copy an object with a key of the object added dynamically when a random number is greater than 0.5 without mutating the object part 2', () => {
    const given = {
      foo: 1,
      dynamicProp: 2
    }
    const randomNumber = 0.3

    expect(actual).toEqual({ foo: 1, dynamicProp: 0.3 })
  })
})

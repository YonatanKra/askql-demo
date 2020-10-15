# askql-demo

A small server running an askVM to handle requests.

## Setup

1. git clone https://github.com/YonatanKra/askql-demo.git
2. cd askql-demo
3. yarn
4. yarn dev

## Usage

1. Once the server is running, go to http://localhost:8080
2. You will see a form with an initial query
3. You can create a new query (see [full documentation](https://github.com/xFAANG/askql#documentation) 
    or [code examples](https://github.com/xFAANG/askql/tree/master/src/askscript/__tests__))
4. The results will be printed in the Results section

## Demo queries
### Get all names
```
ask { names }
```
### Get all powers
```
ask { powers }
```
### Get all names and powers
```
ask { 
    let arr = [];
    for (let i = 0; i < names:length; i = i + 1) {
      arr = arr:set(i, { name: names:at(i), power: powers:at(i)});
    }
    arr
}
```

### Get name by power
```
ask {
    names:find(fun(c, i) {
       return powers:at(i):equals('Innocent')
    })
}
```

### Query the Star Wars API
```
ask {
	fetch('https://swapi.dev/api/people'):at('results')
}
```

### Query the Star Wars API and return custom data
```
ask {
	fetch('https://swapi.dev/api/people'):at('results'):map(fun(swCharacter) {
    {
      Name: swCharacter.name,
      Gender: swCharacter.gender,
      'Hair Color': swCharacter.hair_color
    }
  })
}
```

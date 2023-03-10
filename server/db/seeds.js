use smeco;
db.dropDatabase();

db.results.insertMany([
        {
                name: "Bob Saget",
                score: 4,
                country: "USA"
        },
        {
                name: "Robert De Niro",
                score: 10,
                country: "USA"
        },
        {
                 name: "King Charles",
                 score: 21,
                 country: "United Kingdom"  
        }
]);

db.noticeBoard.insertMany([
        {
                name: "Jane Bennet",
                message: "I like to make most of my trips by foot."
        },
        {
                name: "Smeagol",
                message: "It's my birthday"
        },
        {
                name: "Gollum",
                message: "My precious"
        }
])

db.countries.insertMany([
        {
                name: "USA",
                emissions: 5011686600,
                per_capita: 15.52
        },
        {
                name: "Canada",
                emissions: 675911610,
                per_capita: 18.45
        },
        {
                name: "France",
                emissions: 331533320,
                per_capita: 5.13
        }
])
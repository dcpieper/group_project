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
                name: "Canada",
                emissions: 675911610,
                per_capita: 18.45,
                score: 25
        },
        {
                name: "USA",
                emissions: 5011686600,
                per_capita: 15.52,
                score: 24
        },
        {
                name: "Russia",
                emissions: 1661899300,
                per_capita: 11.44,
                score: 23
        },
        {
                name: "Germany",
                emissions: 775752190,
                per_capita: 9.44,
                score: 22
        },
        {
                name: "Belgium",
                emissions: 94722813,
                per_capita: 8.34,
                score: 21
        },
        {
                name: "China",
                emissions: 10432751400,
                per_capita: 7.38,
                score: 20
        },
        {
                name: "Denmark",
                emissions: 38007645,
                per_capita: 6.65,
                score: 19
        },
        {
                name: "Italy",
                emissions: 358139550,
                per_capita: 5.90,
                score: 18
        },
        {
                name: "France",
                emissions: 331533320,
                per_capita: 5.13,
                score: 17
        },
        {
                name: "Argentina",
                emissions: 200708270,
                per_capita: 4.61,
                score: 16
        },
        {
                name: "Latvia",
                emissions: 8157157,
                per_capita: 4.13,
                score: 15
        },
        {
                name: "Mexico",
                emissions: 441412750,
                per_capita: 3.58,
                score: 14
        },
        {
                name: "Jamaica",
                emissions: 8946575,
                per_capita: 3.08,
                score: 13
        },
        {
                name: "Tunisia",
                emissions: 29395965,
                per_capita: 2.60,
                score: 12
        },
        {
                name: "Brazil",
                emissions: 462994920,
                per_capita: 2.25,
                score: 11
        },
        {
                name: "Georgia",
                emissions: 8610414,
                per_capita: 2.14,
                score: 10
        },
        {
                name: "Albania",
                emissions: 5208319,
                per_capita: 1.80,
                score: 9
        },
        {
                name: "Colombia",
                emissions: 77667594,
                per_capita: 1.61,
                score: 8
        },
        {
                name: "Guatemala",
                emissions: 18539316,
                per_capita: 1.12,
                score: 7
        },
        {
                name: "Pakistan",
                emissions: 178013820,
                per_capita: 0.87,
                score: 6
        },
        {
                name: "Senegal",
                emissions: 8247295,
                per_capita: 0.55,
                score: 5
        },
        {
                name: "Nigeria",
                emissions: 82634214,
                per_capita: 0.44,
                score: 4
        },
        {
                name: "Kenya",
                emissions: 16334919,
                per_capita: 0.33,
                score: 3
        },
        {
                name: "Puerto Rico",
                emissions: 712758,
                per_capita: 0.22,
                score: 2
        },
        {
                name: "Ethiopia",
                emissions: 10438855,
                per_capita: 0.10,
                score: 1
        },
])
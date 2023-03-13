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
                population: 38649943,
                googleMaps: "https://goo.gl/maps/jmEVLugreeqiZXxbA",
                flag: {
                        png: "https://flagcdn.com/w320/ca.png",
                        svg: "https://flagcdn.com/ca.svg",
                        alt: "The flag of Canada is composed of a red vertical band on the hoist and fly sides and a central white square that is twice the width of the vertical bands. A large eleven-pointed red maple leaf is centered in the white square."
                        },
                picture: "https://media.istockphoto.com/id/626545182/photo/toronto-skyline-with-purple-light-toronto-ontario-canada.jpg?s=612x612&w=0&k=20&c=gTfPgxMvsUZaz7YS3EF2voErqf2MmQRpwlHnO1jVBBc=",
                score: 25
        },
        {
                name: "USA",
                emissions: 5011686600,
                per_capita: 15.52,
                population: 331002651,
                googleMaps: "https://goo.gl/maps/e8M246zY4BSjkjAv6",
                flag: {
                        png: "https://flagcdn.com/w320/us.png",
                        svg: "https://flagcdn.com/us.svg",
                        alt: "The flag of the United States of America is composed of thirteen equal horizontal bands of red alternating with white. A blue rectangle, bearing fifty small five-pointed white stars arranged in nine rows where rows of six stars alternate with rows of five stars, is superimposed in the canton."
                        },
                picture: "https://media.istockphoto.com/id/1167975236/photo/the-statue-of-liberty-over-the-scene-of-new-york-cityscape-river-side-which-location-is-lower.jpg?s=612x612&w=0&k=20&c=Fut8fxk88b_aFn1W08ffzBqFaOaGjeW0boYf-DHekM4=",
                score: 24
        },
        {
                name: "Russia",
                emissions: 1661899300,
                per_capita: 11.44,
                population: 145934462,
                googleMaps: "https://goo.gl/maps/4F4PpDhGJgVvLby57",
                flag: {
                        png: "https://flagcdn.com/w320/ru.png",
                        svg: "https://flagcdn.com/ru.svg",
                        alt: "The flag of Russia is composed of three equal horizontal bands of white, blue and red."
                        },
                picture: "https://media.istockphoto.com/id/1062947134/photo/st-basils-cathedral-and-golden-first-rays-of-the-sun.jpg?s=612x612&w=0&k=20&c=VvFqvWKkoUm_Uwjjj-nH9b_PKBc5JnlzpXRMc8AcQSc=",
                score: 23
        },
        {
                name: "Germany",
                emissions: 775752190,
                per_capita: 9.44,
                population: 83783942,
                googleMaps: "https://goo.gl/maps/mD9FBMq1nvXUBrkv6",
                flag: {
                        png: "https://flagcdn.com/w320/de.png",
                        svg: "https://flagcdn.com/de.svg",
                        alt: "The flag of Germany is composed of three equal horizontal bands of black, red and gold."
                        },
                picture: "https://media.istockphoto.com/id/636008560/photo/berlin-cityscape-at-sunset-brandenburg-gate.jpg?s=612x612&w=0&k=20&c=OplR7FIuI7pUQ1Itic0rBH7Rp_d_84BUG_JvXftpUOc=",
                score: 22
        },
        {
                name: "Belgium",
                emissions: 94722813,
                per_capita: 8.34,
                population: 11589623,
                googleMaps: "https://goo.gl/maps/UQQzat85TCtPRXAL8",
                flag: {
                        png: "https://flagcdn.com/w320/be.png",
                        svg: "https://flagcdn.com/be.svg",
                        alt: "The flag of Belgium is composed of three equal vertical bands of black, yellow and red."
                        },
                picture: "https://media.istockphoto.com/id/486032376/photo/bruges-belgium.jpg?s=612x612&w=0&k=20&c=ZGIGnd8ZZ_I82yeFNMIgDhookcBeW0CXgc4G9bJBCZ4=",
                score: 21
        },
        {
                name: "China",
                emissions: 10432751400,
                per_capita: 7.38,
                population: 1439323776,
                googleMaps: "https://goo.gl/maps/p9qC6vgiFRRXzvGi7",
                flag: {
                        png: "https://flagcdn.com/w320/cn.png",
                        svg: "https://flagcdn.com/cn.svg",
                        alt: "The flag of China has a red field. In the canton are five yellow five-pointed stars — a large star and four smaller stars arranged in a vertical arc on the fly side of the large star."
                        },
                picture: "https://media.istockphoto.com/id/497572532/photo/cityscape-of-guiyang-at-night.jpg?s=612x612&w=0&k=20&c=iZ2avxaTDglVbfygFduRdxADXI-KqUO1nhX4DlPgFZs=",
                score: 20
        },
        {
                name: "Denmark",
                emissions: 38007645,
                per_capita: 6.65,
                population: 5792202,
                googleMaps: "https://goo.gl/maps/UddGPN7hAyrtpFiT6",
                flag: {
                        png: "https://flagcdn.com/w320/dk.png",
                        svg: "https://flagcdn.com/dk.svg",
                        alt: "The flag of Denmark has a red field with a large white cross that extend to the edges of the field. The vertical part of this cross is offset towards the hoist side."
                        },
                picture: "https://media.istockphoto.com/id/540594608/photo/colorful-traditional-houses-in-copenhagen-old-town-nyhavn-at-sunset.jpg?s=612x612&w=0&k=20&c=aExZ4BrxHo8O1UV1nLTqzYq6NgkKERSZfFslwSaKJng=",
                score: 19
        },
        {
                name: "Italy",
                emissions: 358139550,
                per_capita: 5.90,
                population: 60461826,
                googleMaps: "https://goo.gl/maps/8M1K27TDj7StTRTq8",
                flag: {
                        png: "https://flagcdn.com/w320/it.png",
                        svg: "https://flagcdn.com/it.svg",
                        alt: "The flag of Italy is composed of three equal vertical bands of green, white and red."
                        },
                picture: "https://media.istockphoto.com/id/508540910/photo/rome-sunset-over-tiber-and-st-peters-basilica-vatican-italy.jpg?s=612x612&w=0&k=20&c=-EpXLMOXoN7RhpRfN8R3MBX-5o00Mxmv_YhXTcvTTS4=",
                score: 18
        },
        {
                name: "France",
                emissions: 331533320,
                per_capita: 5.13,
                population: 65273511,
                googleMaps: "https://goo.gl/maps/g7QxxSFsWyTPKuzd7",
                flag: {
                        png: "https://flagcdn.com/w320/fr.png",
                        svg: "https://flagcdn.com/fr.svg",
                        alt: "The flag of France is composed of three equal vertical bands of blue, white and red."
                        },
                picture: "https://media.istockphoto.com/id/1185953092/photo/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-the-rays-of-the-setting.jpg?s=612x612&w=0&k=20&c=ZneUFVlR5TPCooxRV1rldUAadqLxZEvOoyVCOrtpcRQ=",
                score: 17
        },
        {
                name: "Argentina",
                emissions: 200708270,
                per_capita: 4.61,
                population: 45195774,
                googleMaps: "https://goo.gl/maps/Z9DXNxhf2o93kvyc6",
                flag: {
                        png: "https://flagcdn.com/w320/ar.png",
                        svg: "https://flagcdn.com/ar.svg",
                        alt: "The flag of Argentina features three equal horizontal bands of light blue, white and light blue. A brown-edged golden sun is centered in the white band."
                        },
                picture: "https://media.istockphoto.com/id/493485008/photo/vineyard-in-fall-at-foot-of-the-andes.jpg?s=612x612&w=0&k=20&c=2Zw0OXReX8wB4LgL_DPamMKLcQxdXIkEc-jgbwbuskE=",
                score: 16
        },
        {
                name: "Latvia",
                emissions: 8157157,
                per_capita: 4.13,
                population: 1886198,
                googleMaps: "https://goo.gl/maps/iQpUkH7ghq31ZtXe9",
                flag: {
                        png: "https://flagcdn.com/w320/lv.png",
                        svg: "https://flagcdn.com/lv.svg",
                        alt: "The flag of Latvia has a carmine-red field with a thin white horizontal band across the middle of the field."
                        },
                picture: "https://media.istockphoto.com/id/503516726/photo/riga-old-town-beautiful-view-over-the-city.jpg?s=612x612&w=0&k=20&c=n7qbpgowulzTWfiJBA6fLgbUDIfvQL5hvja7gMBxRoI=",
                score: 15
        },
        {
                name: "Mexico",
                emissions: 441412750,
                per_capita: 3.58,
                population: 128932753,
                googleMaps: "https://goo.gl/maps/s5g7imNPMDEePxzbA",
                flag: {
                        png: "https://flagcdn.com/w320/mx.png",
                        svg: "https://flagcdn.com/mx.svg",
                        alt: "The flag of Mexico is composed of three equal vertical bands of green, white and red, with the national coat of arms centered in the white band."
                        },
                picture: "https://media.istockphoto.com/id/1219898765/photo/mexico-city.jpg?s=612x612&w=0&k=20&c=Qs0WJ7OJ0joUWYdYTlQAnFur-t5qmPhB__DUK1zozZg=",
                score: 14
        },
        {
                name: "Jamaica",
                emissions: 8946575,
                per_capita: 3.08,
                population: 2961167,
                googleMaps: "https://goo.gl/maps/Z8mQ6jxnRQKFwJy9A",
                flag: {
                        png: "https://flagcdn.com/w320/jm.png",
                        svg: "https://flagcdn.com/jm.svg",
                        alt: "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides"
                        },
                picture: "https://media.istockphoto.com/id/1199108242/photo/beach-and-swimming-pool-at-jamaica.jpg?s=612x612&w=0&k=20&c=9KR3redO2ffZLgQe7eAv6n8lDYASRhL0iUAHPyKclhI=",
                score: 13
        },
        {
                name: "Tunisia",
                emissions: 29395965,
                per_capita: 2.60,
                population: 11818619,
                googleMaps: "https://goo.gl/maps/KgUmpZdUuNRaougs8",
                flag: {
                        png: "https://flagcdn.com/w320/tn.png",
                        svg: "https://flagcdn.com/tn.svg",
                        alt: "The flag of Tunisia has a red field. A white circle bearing a five-pointed red star within a fly-side facing red crescent is situated at the center of the field."
                        },
                picture: "https://media.istockphoto.com/id/700447880/photo/view-from-hill-byrsa-with-ancient-remains-of-carthage-and-landscape.jpg?s=612x612&w=0&k=20&c=vGGrqPKUhlkc7poY8c77EO87bn2ZuIxLuVDQjE8r3Qw=",
                score: 12
        },
        {
                name: "Brazil",
                emissions: 462994920,
                per_capita: 2.25,
                population: 212559417,
                googleMaps: "https://goo.gl/maps/waCKk21HeeqFzkNC9",
                flag: {
                        png: "https://flagcdn.com/w320/br.png",
                        svg: "https://flagcdn.com/br.svg",
                        alt: "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center."
                        },
                picture: "https://media.istockphoto.com/id/1251280102/photo/aerial-view-of-rio-de-janeiro-with-christ-redeemer-and-corcovado-mountain.jpg?s=612x612&w=0&k=20&c=35a8XXHc2pQLw7XNKfAFO9iOS1_Ak-oKNwgfvlFZ6uc=",      
                score: 11
        },
        {
                name: "Georgia",
                emissions: 8610414,
                per_capita: 2.14,
                population: 3989167,
                googleMaps: "https://goo.gl/maps/bvCaGBePR1ZEDK5cA",
                flag: {
                        png: "https://flagcdn.com/w320/ge.png",
                        svg: "https://flagcdn.com/ge.svg",
                        alt: "The flag of Georgia has a white field with a large centered red cross that extends to the edges and divides the field into four quarters. A small red Bolnur-Katskhuri cross is centered in each quarter."
                        },
                picture: "https://media.istockphoto.com/id/476813550/photo/beautiful-panoramic-view-of-tbilisi-at-sunset.jpg?s=612x612&w=0&k=20&c=ORlXTdkv1P4AD6BvyPvb3QKG7-GiScnRlNaUChxsCD4=",
                score: 10
        },
        {
                name: "Albania",
                emissions: 5208319,
                per_capita: 1.80,
                population: 2877797,
                googleMaps: "https://goo.gl/maps/BzN9cTuj68ZA8SyZ8",
                flag: {
                        png: "https://flagcdn.com/w320/al.png",
                        svg: "https://flagcdn.com/al.svg",
                        alt: "The flag of Albania features a silhouetted double-headed black eagle at the center of a red field."
                        },
                picture: "https://media.istockphoto.com/id/1170566529/photo/areal-view-of-tirana-city-center-at-sunset.jpg?s=612x612&w=0&k=20&c=0SDsvFfe5c3iC_rq_R-CPG5_NjvtfqbZzvKcb-M8vKI=",
                score: 9
        },
        {
                name: "Colombia",
                emissions: 77667594,
                per_capita: 1.61,
                population: 50882891,
                googleMaps: "https://goo.gl/maps/RdwTG8e7gPwS62oR6",
                flag: {
                        png: "https://flagcdn.com/w320/co.png",
                        svg: "https://flagcdn.com/co.svg",
                        alt: "The flag of Colombia is composed of three horizontal bands of yellow, blue and red, with the yellow band twice the height of the other two bands."
                        },
                picture: "https://media.istockphoto.com/id/1385882999/photo/jardin-colombia.jpg?s=612x612&w=0&k=20&c=phHizxhncoAz6cmAtY4ce14aUoUzn6a1-zr9l9L02XU=",
                score: 8
        },
        {
                name: "Guatemala",
                emissions: 18539316,
                per_capita: 1.12,
                population: 17915568,
                googleMaps: "https://goo.gl/maps/JoRAbem4Hxb9FYbVA",
                flag: {
                        png: "https://flagcdn.com/w320/gt.png",
                        svg: "https://flagcdn.com/gt.svg",
                        alt: "The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band."
                        },
                picture: "https://media.istockphoto.com/id/1078724484/photo/antigua-guatemala.jpg?s=612x612&w=0&k=20&c=MiAnQqjE47oftWZpZ-oQkdYrhMaXTtdXkL0iV16iDhg=",
                score: 7
        },
        {
                name: "Pakistan",
                emissions: 178013820,
                per_capita: 0.87,
                population: 220892340,
                googleMaps: "https://goo.gl/maps/5LYujdfR5yLUXoERA",
                flag: {
                        png: "https://flagcdn.com/w320/pk.png",
                        svg: "https://flagcdn.com/pk.svg",
                        alt: "The flag of Pakistan is composed of a white vertical band on its hoist side that takes up about one-fourth the width of the field and a dark green rectangular area that spans the rest of the field. A white fly-side facing crescent and five-pointed star are centered in the dark green area."
                        },
                picture: "https://media.istockphoto.com/id/1394042720/photo/badshahi-mosque.jpg?s=612x612&w=0&k=20&c=8ckgaGi35zz9WghP9kxUqxDUSHeoDLZWJ8FP0fh48_I=",
                score: 6
        },
        {
                name: "Senegal",
                emissions: 8247295,
                per_capita: 0.55,
                population: 16743927,
                googleMaps: "https://goo.gl/maps/o5f1uD5nyihCL3HCA",
                flag: {
                        png: "https://flagcdn.com/w320/sn.png",
                        svg: "https://flagcdn.com/sn.svg",
                        alt: "The flag of Senegal is composed of three equal vertical bands of green, golden-yellow and red, with a five-pointed green star centered in the golden-yellow band."
                        },
                picture: "https://media.istockphoto.com/id/1137099186/photo/a-bay-in-ngor-dakar.jpg?s=612x612&w=0&k=20&c=3lkS5jaqywY9SIiDd8xoy-9wRXkj4V33nrkuO8aPi7E=",
                score: 5
        },
        {
                name: "Nigeria",
                emissions: 82634214,
                per_capita: 0.44,
                population: 206139589,
                googleMaps: "https://goo.gl/maps/LTn417qWwBPFszuV9",
                flag: {
                        png: "https://flagcdn.com/w320/ng.png",
                        svg: "https://flagcdn.com/ng.svg",
                        alt: "The flag of Nigeria is composed of three equal vertical bands of green, white and green."
                        },
                picture: "https://media.istockphoto.com/id/829510960/photo/millennium-park-abuja-nigeria.jpg?s=612x612&w=0&k=20&c=LI6e6sUyx_bgcdvNNkAJQGV3rmPhCmhXG9qMSWhcjLs=",
                score: 4
        },
        {
                name: "Kenya",
                emissions: 16334919,
                per_capita: 0.33,
                population: 53771296,
                googleMaps: "https://goo.gl/maps/Ni9M7wcCxf8bJHLX8",
                flag: {
                        png: "https://flagcdn.com/w320/ke.png",
                        svg: "https://flagcdn.com/ke.svg",
                        alt: "The flag of Kenya is composed of three equal horizontal bands of black, red with white top and bottom edges, and green. An emblem comprising a red, black and white Maasai shield covering two crossed white spears is superimposed at the center of the field."
                        },
                picture: "https://media.istockphoto.com/id/1368957081/photo/giraffes-and-mount-kilimanjaro-in-amboseli-national-park.jpg?s=612x612&w=0&k=20&c=i2MSN54isrXzqP--X3b6QFhMcR0Ep5O7byaSn_qaqe4=",
                score: 3
        },
        {
                name: "Puerto Rico",
                emissions: 712758,
                per_capita: 0.22,
                population: 2860853,
                googleMaps: "https://goo.gl/maps/sygfDbtwn389wu8x5",
                flag: {
                        png: "https://flagcdn.com/w320/pr.png",
                        svg: "https://flagcdn.com/pr.svg",
                        alt: "The flag of Puerto Rico is composed of a blue triangle and red and white stripes."
                        },
                picture: "https://media.istockphoto.com/id/1187848050/photo/colorful-house-stacked-on-a-hill-over-looking-the-ocean-in-puerto-rico.jpg?s=612x612&w=0&k=20&c=Nh5I2oljw3AD-l7C2jiNajwzJmWcy3d9BPjIKY3A-xU=",
                score: 2
        },
        {
                name: "Ethiopia",
                emissions: 10438855,
                per_capita: 0.10,
                population: 114963588,
                googleMaps: "https://goo.gl/maps/2Q4hQWCbhuZLj3fG6",
                flags: {
                        png: "https://flagcdn.com/w320/et.png",
                        svg: "https://flagcdn.com/et.svg",
                        alt: "The flag of Ethiopia is composed of three equal horizontal bands of green, yellow and red, with the national emblem superimposed at the center of the field. The national emblem comprises a light blue circle bearing a golden-yellow pentagram with single yellow rays emanating from the angles between the points of the pentagram."
                        },
                picture: "https://media.istockphoto.com/id/163639070/photo/a-large-and-wide-mountain-range-in-ethiopia.jpg?s=612x612&w=0&k=20&c=Cm_PcdHLtA5jnFdUN4r4JF9lbmQxJ7DmzVsjU0IGgy0=",
                score: 1
        },
])
db.facts.insertMany([
        {id: 1,
        score: "Score 1 - 5",
        header: "You're An Eco Hero!",
        fact: "Fungi play a protective role in the environment. From digesting minerals out of rock formations to consuming fossil fuel spills, and even de-radiating the environment"
        },
        {
        id: 2,
        score: "Score 6 - 10",
        header: "You're Great At Doing Your Bit!",
        fact: "A Sperm whale's poop offsets carbon in the environment. A whale's poop is very beneficial to the environment as it offsets carbon in the atmosphere. Each whale's poop releases about 50 tonnes of iron annually that promote the growth of phytoplankton, which take in carbon dioxide."
        },
        {
        id: 3,
        score: "11-15",
        header: "You're Doing Good!",
        fact: "Aluminium can be recycled forever! Unlike paper which has a limit as to the times it can be recycled, aluminum can be recycled forever. Recycling a can made of aluminum produces enough energy to run a television for three hours. How many hours and televisions can be run given that we use 80 trillion cans per year?"
        },
        {
        id: 4,
        header: "There's Room for Improvement.",
        fact: "The Great Pacific Garbage Patch is a twisting and turning vortex composed of trash and waste. It is twice the size of continental America and contains about 100 million tons of garbage. It stretches from the West Coast of North America to Japan along the Pacific Ocean."
        },
        {
        id: 5,
        header: "Here's Your 'I Hate The Planet' Crown",
        fact: "78% of marine mammals are at risk of choking on plastic. Seventy-eight percent of marine mammals are at risk of accidental deaths, such as getting caught in fishing nets. Plastic bags and other plastic garbage that ends up in the ocean kills over 1,000,000 sea animals every year."
        }
])
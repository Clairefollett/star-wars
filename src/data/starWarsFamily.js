const family = [
    {
        id: 'luke-skywalker',
        name: 'Luke SkyWalker',
        affiliations: [
            {name: 'Rebel Alliance', id: 1},
            {name: 'Jedi Order', id: 2}
        ],
        planet: 'Tatooine',
        species: 'Human',
        image: 'luke-skywalker.jpg',
        link: 'http://www.starwars.com/databank/luke-skywalker',
        family: [
            { twin: 'Princess Leia Organa' },
            { father: 'Anakin Skywalker (Darth Vader)' },
            { mother: 'Padme Amidala (Queen of Naboo)' },
            { adopted_mother: 'Beru Lars' },
            { adopted_father: 'Owen Lars' }
        ],
        appearances: [
            { episode: 'Star Wars: Episode 4', name: 'A New Hope' },
            { episode: 'Star Wars: Episode 5', name: 'The Empire Strikes Back' },
            { episode: 'Star Wars: Episode 6', name: 'The Return of the Jedi' },
            { episode: 'Star Wars: Episode 7', name: 'The Force Awakens' }
        ],
    },
    {
        id: 'princess-leia',
        name: 'Princess Leia Organa',
        affiliations: [
            {name: 'Rebel Alliance', id: 1},
            {name: 'The Resistance', id: 2},
            {name: 'Galatic Senate', id: 3},
        ],
        planet: 'Alderaan',
        species: 'Human',
        image: 'princess-leia.jpg',
        link: 'http://www.starwars.com/databank/leia-organa',
        family: [
            { twin: 'Luke Skywalker' },
            { father: 'Anakin Skywalker (Darth Vader)' },
            { mother: 'Padme Amidala (Queen of Naboo)' },
            { adopted_mother: 'Breha Organa (Queen of Alderaan)' },
            { adopted_father: 'Bail Organa (Prince Consort)' },
            { son: 'Kylo Ren' }
        ],
        appearances: [
            { episode: 'Star Wars: Episode 4', name: 'A New Hope' },
            { episode: 'Star Wars: Episode 5', name: 'The Empire Strikes Back' },
            { episode: 'Star Wars: Episode 6', name: 'The Return of the Jedi' },
            { episode: 'Star Wars: Episode 7', name: 'The Force Awakens' },
            { episode: 'The prequel to Episode 4', name: 'Rogue One: A Star Wars Story'}
        ],
    },
    {
        id: 'anakin-skywalker',
        name: 'Anakin Skywalker/Darth Vader',
        affiliations: [
            {name: 'Jedi Oder', id: 1},
            {name: 'Galactic Empire', id: 2},
            {name: 'Sith', id: 3}
        ],
        planet: 'Tatooine',
        species: 'Human',
        image: 'darth-anaking.jpg',
        link: 'http://www.starwars.com/databank/anakin-skywalker',
        family: [
            { step_father: 'Cliegg Lars' },
            { mother: 'Shmi Skywalker' },
            { son: 'Luke Skywalker' },
            { daughter: 'Princess Leia'}
        ],
        appearances: [
            { episode: 'Star Wars: Episode 1', name: 'The Phantom Menace'},
            { episode: 'Star Wars: Episode 2', name: 'Attack of the Clones'},
            { episode: 'Star Wars: Episode 3', name: 'Revenge of the Soth'},
            { episode: 'Star Wars: Episode 4', name: 'A New Hope' },
            { episode: 'Star Wars: Episode 5', name: 'The Empire Strikes Back' },
            { episode: 'Star Wars: Episode 6', name: 'The Return of the Jedi' },
            { episode: 'Star Wars: Episode 7', name: 'The Force Awakens' },
            { episode: 'The prequel to Episode 4', name: 'Rogue One: A Star Wars Story'}
        ],
    },
    {
        id: 'padme-amidala',
        name: 'Padme Amidala',
        affiliations: [
            {name: 'Galatic Republic', id: 1},
            {name: 'Galactic Senate', id: 2}
        ],
        planet: 'Naboo',
        species: 'Human',
        image: 'padme-amidala.jpg',
        link: 'http://www.starwars.com/databank/padme-amidala',
        family: [
            { father: 'Ruwee Naberrie' },
            { mother: 'Jobal Naberrie' },
            { son: 'Luke Skywalker' },
            { daughter: 'Princess Leia'}
        ],
        appearances: [
            { episode: 'Star Wars: Episode 1', name: 'The Phantom Menace'},
            { episode: 'Star Wars: Episode 2', name: 'Attack of the Clones'},
            { episode: 'Star Wars: Episode 3', name: 'Revenge of the Soth'}
        ],
    },
    {
        id: 'kylo-ren',
        name: 'Kylo Ren',
        affiliations: [
            {name: 'The First Order', id: 1}
        ],
        planet: 'Chandrilla',
        species: 'Human',
        image: 'kylo-ren.jpg',
        link: 'http://www.starwars.com/databank/kylo-ren',
        family: [
            { father: 'Hans Solo' },
            { mother: 'Princess Leia Organa' }
        ],
        appearances: [
            { episode: 'Star Wars: Episode 7', name: 'The Force Awakens'}
        ],
    },
]
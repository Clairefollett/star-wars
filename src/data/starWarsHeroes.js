const heroes = [
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
            { mother: 'Padame Amidala (Queen of Naboo)' },
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
            { mother: 'Padame Amidala (Queen of Naboo)' },
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
]
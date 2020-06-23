import {createContext} from "react";

const initialState = [
    {
        id: 1,
        title: 'Country',
        option: 'Spain',
        selected: false,
        subOption: [
            {
                id: 1,
                title: 'Club',
                option: 'Real',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        title: 'Player',
                        option: 'Benzema',
                        selected: false,
                        subOption: [],
                        goals: 17,
                    },
                    {
                        id: 2,
                        title: 'Player',
                        option: 'Ramos',
                        selected: false,
                        subOption: [],
                        goals: 7,
                    },
                    {
                        id: 3,
                        title: 'Player',
                        option: 'Kross',
                        selected: false,
                        subOption: [],
                        goals: 4,
                    }
                ]
            },
            {
                id: 2,
                title: 'Club',
                option: 'Barcelona',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        title: 'Player',
                        option: 'Messi',
                        selected: false,
                        subOption: [],
                        goals: 21,
                    },
                    {
                        id: 2,
                        title: 'Player',
                        option: 'Suares',
                        selected: false,
                        subOption: [],
                        goals: 11,
                    },
                    {
                        id: 3,
                        title: 'Player',
                        option: 'Griezmann',
                        selected: false,
                        subOption: [],
                        goals: 8,
                    }
                ]
            },
            {
                id: 3,
                title: 'Club',
                option: 'Valencia',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        title: 'Player',
                        option: 'Parekho',
                        selected: false,
                        subOption: [],
                        goals: 8,
                    },
                    {
                        id: 2,
                        title: 'Player',
                        option: 'Maximillano',
                        selected: false,
                        subOption: [],
                        goals: 8,
                    },
                    {
                        id: 3,
                        title: 'Player',
                        option: 'Gameyro',
                        selected: false,
                        subOption: [],
                        goals: 5,
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Country',
        option: 'Italy',
        selected: false,
        subOption: [
            {
                id: 1,
                title: 'Club',
                option: 'Juventus',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        title: 'Player',
                        option: 'Ronaldo',
                        selected: false,
                        subOption: [],
                        goals: 22,
                    },
                    {
                        id: 2,
                        title: 'Player',
                        option: 'Dibala',
                        selected: false,
                        subOption: [],
                        goals: 8,
                    },
                    {
                        id: 3,
                        title: 'Player',
                        option: 'Higuain',
                        selected: false,
                        subOption: [],
                        goals: 5,
                    }
                ]
            },
            {
                id: 2,
                title: 'Club',
                option: 'Inter',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        title: 'Player',
                        option: 'Lukaku',
                        selected: false,
                        subOption: [],
                        goals: 18,
                    },
                    {
                        id: 2,
                        title: 'Player',
                        option: 'Martines',
                        selected: false,
                        subOption: [],
                        goals: 12,
                    },
                    {
                        id: 3,
                        title: 'Player',
                        option: 'Sensi',
                        selected: false,
                        subOption: [],
                        goals: 3,
                    }
                ]
            },
            {
                id: 3,
                title: 'Club',
                option: 'Roma',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        title: 'Player',
                        option: 'Jeko',
                        selected: false,
                        subOption: [],
                        goals: 12,
                    },
                    {
                        id: 2,
                        title: 'Player',
                        option: 'Mkhitaryan',
                        selected: false,
                        subOption: [],
                        goals: 6,
                    },
                    {
                        id: 3,
                        title: 'Player',
                        option: 'Kolarov',
                        selected: false,
                        subOption: [],
                        goals: 6,
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Country',
        option: 'England',
        selected: false,
        subOption: [
            {
                id: 1,
                title: 'Club',
                option: 'Liverpool',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        title: 'Player',
                        option: 'Salah',
                        selected: false,
                        subOption: [],
                        goals: 16,
                    },
                    {
                        id: 2,
                        title: 'Player',
                        option: 'Mane',
                        selected: false,
                        subOption: [],
                        goals: 14,
                    },
                    {
                        id: 3,
                        title: 'Player',
                        option: 'Firmino',
                        selected: false,
                        subOption: [],
                        goals: 8,
                    }
                ]
            },
            {
                id: 2,
                title: 'Club',
                option: 'Arsenal',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        title: 'Player',
                        option: 'Obameyang',
                        selected: false,
                        subOption: [],
                        goals: 17,
                    },
                    {
                        id: 2,
                        title: 'Player',
                        option: 'Lacazet',
                        selected: false,
                        subOption: [],
                        goals: 7,
                    },
                    {
                        id: 3,
                        title: 'Player',
                        option: 'Pepe',
                        selected: false,
                        subOption: [],
                        goals: 5,
                    }
                ]
            },
            {
                id: 3,
                title: 'Club',
                option: 'Manchester Utd',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        title: 'Player',
                        option: 'Rashford',
                        selected: false,
                        subOption: [],
                        goals: 14,
                    },
                    {
                        id: 2,
                        title: 'Player',
                        option: 'Marcial',
                        selected: false,
                        subOption: [],
                        goals: 11,
                    },
                    {
                        id: 3,
                        title: 'Player',
                        option: 'Greenwood',
                        selected: false,
                        subOption: [],
                        goals: 5,
                    }
                ]
            }
        ]
    }
]

export const chStateContext = createContext(initialState);
import {createContext} from "react";

const initialState = [
    {
        id: 1,
        option: 'Spain',
        selected: true,
        subOption: [
            {
                id: 1,
                option: 'Real',
                selected: true,
                subOption: [
                    {
                        id: 1,
                        option: 'Benzema',
                        selected: true,
                        subOption: []
                    },
                    {
                        id: 2,
                        option: 'Ramos',
                        selected: false,
                        subOption: []
                    },
                    {
                        id: 3,
                        option: 'Kross',
                        selected: false,
                        subOption: []
                    }
                ]
            },
            {
                id: 2,
                option: 'Barcelona',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        option: 'Messi',
                        selected: true,
                        subOption: []
                    },
                    {
                        id: 2,
                        option: 'Suares',
                        selected: false,
                        subOption: []
                    },
                    {
                        id: 3,
                        option: 'Griezmann',
                        selected: false,
                        subOption: []
                    }
                ]
            },
            {
                id: 3,
                option: 'Valencia',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        option: 'Parekho',
                        selected: true,
                        subOption: []
                    },
                    {
                        id: 2,
                        option: 'Maximillano',
                        selected: false,
                        subOption: []
                    },
                    {
                        id: 3,
                        option: 'Gameyro',
                        selected: false,
                        subOption: []
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        option: 'Italy',
        selected: false,
        subOption: [
            {
                id: 1,
                option: 'Juventus',
                selected: true,
                subOption: [
                    {
                        id: 1,
                        option: 'Ronaldo',
                        selected: true,
                        subOption: []
                    },
                    {
                        id: 2,
                        option: 'Dibala',
                        selected: false,
                        subOption: []
                    },
                    {
                        id: 3,
                        option: 'Higuain',
                        selected: false,
                        subOption: []
                    }
                ]
            },
            {
                id: 2,
                option: 'Inter',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        option: 'Lukaku',
                        selected: true,
                        subOption: []
                    },
                    {
                        id: 2,
                        option: 'Martines',
                        selected: false,
                        subOption: []
                    },
                    {
                        id: 3,
                        option: 'Sensi',
                        selected: false,
                        subOption: []
                    }
                ]
            },
            {
                id: 3,
                option: 'Roma',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        option: 'Jeko',
                        selected: true,
                        subOption: []
                    },
                    {
                        id: 2,
                        option: 'Mkhitaryan',
                        selected: false,
                        subOption: []
                    },
                    {
                        id: 3,
                        option: 'Kolarov',
                        selected: false,
                        subOption: []
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        option: 'England',
        selected: false,
        subOption: [
            {
                id: 1,
                option: 'Liverpool',
                selected: true,
                subOption: [
                    {
                        id: 1,
                        option: 'Salah',
                        selected: true,
                        subOption: []
                    },
                    {
                        id: 2,
                        option: 'Mane',
                        selected: false,
                        subOption: []
                    },
                    {
                        id: 3,
                        option: 'Firmino',
                        selected: false,
                        subOption: []
                    }
                ]
            },
            {
                id: 2,
                option: 'Arsenal',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        option: 'Obameyang',
                        selected: true,
                        subOption: []
                    },
                    {
                        id: 2,
                        option: 'Lacazet',
                        selected: false,
                        subOption: []
                    },
                    {
                        id: 3,
                        option: 'Pepe',
                        selected: false,
                        subOption: []
                    }
                ]
            },
            {
                id: 3,
                option: 'Manchester Utd',
                selected: false,
                subOption: [
                    {
                        id: 1,
                        option: 'Rashford',
                        selected: true,
                        subOption: []
                    },
                    {
                        id: 2,
                        option: 'Marcial',
                        selected: false,
                        subOption: []
                    },
                    {
                        id: 3,
                        option: 'Greenwood',
                        selected: false,
                        subOption: []
                    }
                ]
            }
        ]
    }
]

export const stateContext = createContext(initialState);
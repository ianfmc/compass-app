export class Fleet {
    id: string;
    name: string;
    owner: string;
    model: string;
    type: string;
}

export const FLEET: Fleet[] =  [
    { id: '1', name: 'Intrepid', owner: 'Pete Smith', model: 'Catalina 320', type: 'Sail'},
    { id: '2', name: 'Razor', owner: 'Andy Jones', model: 'Hyland 52', type: 'Power'},
    { id: '3', name: 'Scooter', owner: 'Jane Dough', model: 'Lagoon 450', type: 'Sail'},
    { id: '4', name: 'Shamrock', owner: 'Will Turner', model: 'Hatteras 38', type: 'Power'}
];
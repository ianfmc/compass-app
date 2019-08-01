export class Financial {
    transaction: number;
    date: string;
    customer: string;
    boat: string;
    amount: number;
}

export const FINANCIALS: Financial[] = [
    { transaction: 1001, date: '15-FEB-19', customer: 'William Teach', boat: 'Intrepid', amount: 625 },
    { transaction: 1002, date: '18-FEB-19', customer: 'Tiger Nixon', boat: 'Razor', amount: 1200 }
];
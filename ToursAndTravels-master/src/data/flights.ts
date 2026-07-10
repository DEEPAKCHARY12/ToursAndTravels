
export interface Flight {
    id: string;
    airline: string;
    flightNumber: string;
    aircraft: string;
    departureTime: string;
    departureAirport: string; // Code like LHR
    departureCity: string;
    arrivalTime: string;
    arrivalAirport: string; // Code like CDG
    arrivalCity: string;
    duration: string;
    stops: number;
    stopAirport?: string;
    price: number;
    currency: string;
    baggage: {
        personal: boolean;
        cabin: boolean; // weight in kg
        checked: boolean; // weight in kg, or false if not included
        checkedPrice?: number;
    };
    refundable: boolean;
    changeable: boolean;
    changeFee?: number;
}

export const MOCK_FLIGHTS: Flight[] = [
    {
        id: '1',
        airline: 'British Airways',
        flightNumber: 'BA-304',
        aircraft: 'Boeing 737',
        departureTime: '07:20',
        departureAirport: 'LHR',
        departureCity: 'London',
        arrivalTime: '09:40',
        arrivalAirport: 'CDG',
        arrivalCity: 'Paris',
        duration: '1h 20m',
        stops: 0,
        price: 245,
        currency: '$',
        baggage: {
            personal: true,
            cabin: true,
            checked: false,
            checkedPrice: 45
        },
        refundable: false,
        changeable: true,
        changeFee: 50
    },
    {
        id: '2',
        airline: 'Air France',
        flightNumber: 'AF-1129',
        aircraft: 'Airbus A320',
        departureTime: '10:15',
        departureAirport: 'LHR',
        departureCity: 'London',
        arrivalTime: '12:30',
        arrivalAirport: 'CDG',
        arrivalCity: 'Paris',
        duration: '1h 15m',
        stops: 0,
        price: 210,
        currency: '$',
        baggage: {
            personal: true,
            cabin: true,
            checked: false,
            checkedPrice: 40
        },
        refundable: true,
        changeable: true
    },
    {
        id: '3',
        airline: 'EasyJet',
        flightNumber: 'U2-8854',
        aircraft: 'Airbus A319',
        departureTime: '14:45',
        departureAirport: 'LGW',
        departureCity: 'London',
        arrivalTime: '17:10',
        arrivalAirport: 'CDG',
        arrivalCity: 'Paris',
        duration: '1h 25m',
        stops: 0,
        price: 185,
        currency: '$',
        baggage: {
            personal: true,
            cabin: false,
            checked: false,
            checkedPrice: 35
        },
        refundable: false,
        changeable: false
    },
    {
        id: '4',
        airline: 'Vueling',
        flightNumber: 'VY-7822',
        aircraft: 'Airbus A320',
        departureTime: '08:00',
        departureAirport: 'LGW',
        departureCity: 'London',
        arrivalTime: '12:45',
        arrivalAirport: 'ORY',
        arrivalCity: 'Paris',
        duration: '3h 45m',
        stops: 1,
        stopAirport: 'AMS',
        price: 156,
        currency: '$',
        baggage: {
            personal: true,
            cabin: true,
            checked: false,
            checkedPrice: 40
        },
        refundable: false,
        changeable: true,
        changeFee: 60
    },
    {
        id: '5',
        airline: 'British Airways',
        flightNumber: 'BA-308',
        aircraft: 'Boeing 737',
        departureTime: '18:30',
        departureAirport: 'LHR',
        departureCity: 'London',
        arrivalTime: '20:50',
        arrivalAirport: 'CDG',
        arrivalCity: 'Paris',
        duration: '1h 20m',
        stops: 0,
        price: 280,
        currency: '$',
        baggage: {
            personal: true,
            cabin: true,
            checked: true
        },
        refundable: true,
        changeable: true
    },
    {
        id: '6',
        airline: 'Emirates',
        flightNumber: 'EK-008',
        aircraft: 'Airbus A380',
        departureTime: '09:10',
        departureAirport: 'LHR',
        departureCity: 'London',
        arrivalTime: '20:25',
        arrivalAirport: 'DXB',
        arrivalCity: 'Dubai',
        duration: '7h 15m',
        stops: 0,
        price: 650,
        currency: '$',
        baggage: {
            personal: true,
            cabin: true,
            checked: true
        },
        refundable: true,
        changeable: true
    },
    {
        id: '7',
        airline: 'Qatar Airways',
        flightNumber: 'QR-004',
        aircraft: 'Boeing 777',
        departureTime: '15:30',
        departureAirport: 'LHR',
        departureCity: 'London',
        arrivalTime: '06:45',
        arrivalAirport: 'DOH',
        arrivalCity: 'Doha',
        duration: '12h 15m',
        stops: 1,
        stopAirport: 'DXB',
        price: 580,
        currency: '$',
        baggage: {
            personal: true,
            cabin: true,
            checked: true
        },
        refundable: true,
        changeable: true
    },
    {
        id: '8',
        airline: 'Delta',
        flightNumber: 'DL-001',
        aircraft: 'Boeing 767',
        departureTime: '13:00',
        departureAirport: 'LHR',
        departureCity: 'London',
        arrivalTime: '16:30',
        arrivalAirport: 'JFK',
        arrivalCity: 'New York',
        duration: '7h 30m',
        stops: 0,
        price: 490,
        currency: '$',
        baggage: {
            personal: true,
            cabin: true,
            checked: true
        },
        refundable: false,
        changeable: true
    },
    {
        id: '9',
        airline: 'Air India',
        flightNumber: 'AI-130',
        aircraft: 'Boeing 787',
        departureTime: '13:15',
        departureAirport: 'LHR',
        departureCity: 'London',
        arrivalTime: '03:30',
        arrivalAirport: 'BOM',
        arrivalCity: 'Mumbai',
        duration: '8h 45m',
        stops: 0,
        price: 520,
        currency: '$',
        baggage: {
            personal: true,
            cabin: true,
            checked: true
        },
        refundable: true,
        changeable: true
    },
    {
        id: '10',
        airline: 'Singapore Airlines',
        flightNumber: 'SQ-317',
        aircraft: 'Airbus A350',
        departureTime: '11:25',
        departureAirport: 'LHR',
        departureCity: 'London',
        arrivalTime: '07:30',
        arrivalAirport: 'SIN',
        arrivalCity: 'Singapore',
        duration: '13h 05m',
        stops: 0,
        price: 890,
        currency: '$',
        baggage: {
            personal: true,
            cabin: true,
            checked: true
        },
        refundable: true,
        changeable: true
    },
    {
        id: '11',
        airline: 'Virgin Atlantic',
        flightNumber: 'VS-003',
        aircraft: 'Airbus A330',
        departureTime: '10:00',
        departureAirport: 'LHR',
        departureCity: 'London',
        arrivalTime: '13:20',
        arrivalAirport: 'JFK',
        arrivalCity: 'New York',
        duration: '7h 20m',
        stops: 0,
        price: 550,
        currency: '$',
        baggage: {
            personal: true,
            cabin: true,
            checked: false
        },
        refundable: false,
        changeable: true
    },
    {
        id: '12',
        airline: 'Air India',
        flightNumber: 'AI-162',
        aircraft: 'Boeing 777',
        departureTime: '09:45',
        departureAirport: 'LHR',
        departureCity: 'London',
        arrivalTime: '22:50',
        arrivalAirport: 'DEL',
        arrivalCity: 'Delhi',
        duration: '8h 35m',
        stops: 0,
        price: 480,
        currency: '$',
        baggage: {
            personal: true,
            cabin: true,
            checked: true
        },
        refundable: true,
        changeable: true
    }
];

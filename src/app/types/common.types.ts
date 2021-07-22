export interface Card {
    title: String;
    value: String;
    id: Number;
    label?: String;
}

export type NewCard = Omit<Card, 'id'>;

export interface Card {
    title: string;
    value: string;
    id: number;
    label?: string;
}

export type NewCard = Omit<Card, 'id'>;

export interface ComponentHtmlAttributes {
    class?: string[];
    style?: { [key: string]: string; };
}

export interface UserDefinedProps {
    className: string;
    attributes: ComponentHtmlAttributes;
}
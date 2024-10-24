import { Klijent } from "./klijent";

export interface Servis{
    id: number;
    vrstaServisa: string;
    radniSati: number;
    cijena: number;
    klijent?: Klijent;
}
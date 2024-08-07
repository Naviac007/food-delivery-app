export interface hotelDataType{
    id: number;
    name: string;
    description: string;
    isPureVeg?: boolean;
    location: string;
    city:string;
    [key: string]: string | number | boolean | undefined;
}
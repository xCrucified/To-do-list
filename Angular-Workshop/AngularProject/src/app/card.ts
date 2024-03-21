export interface ICard{
    id: number,
    name: string,
    date?: Date,
    isActive?: boolean
}

export const CARDS: ICard[] = [
    {id: 1, name:"Georgy", date: new Date(2001,4,10)},
    {id: 2, name:"Viva", isActive: true}, 
    {id: 3, name:"Dotar"},
    {id: 4, name:"Yaroslav", date: new Date(1993,10,26)}, 
    {id: 5, name:"Pepsi", isActive: true}, 
    {id: 6, name:"Scar", date: new Date(1993,8,4)}, 
    {id: 7, name:"Eva", date: new Date(2001,4,1)},
    {id: 8, name:"Ngelion", isActive: true}, 
]


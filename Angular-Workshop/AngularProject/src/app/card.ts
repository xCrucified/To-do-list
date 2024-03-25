export interface ICard{
    id: number,
    name: string,
    date?: Date,
    priority: number,
    isActive?: boolean
}

export const CARDS: ICard[] = [
    {id: 1, name:"Hit the gym", date: new Date(2001,4,10), priority: 1},
    {id: 2, name:"Pay bills", isActive: true, priority: 0}, 
    {id: 3, name:"Meet John", priority: 2},
    {id: 4, name:"Buy eggs", date: new Date(1993,10,26), priority: 1}, 
    {id: 5, name:"Read a book", isActive: true, priority: 0}, 
    {id: 6, name:"Organize office", date: new Date(1993,8,4), priority: 1}, 
    {id: 7, name:"Eat dinner", date: new Date(2001,4,1), priority: 2},
    {id: 8, name:"Buy apples", isActive: true, priority: 0}, 
]


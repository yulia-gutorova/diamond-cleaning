export interface IOneCleaning {
    customerName: string
    cleanerName : string
    level       : string
    time        : string
    date        : string
}

export interface IPerformedCleanings {
    id:string
    customerName : string
    cleanerName  : string
    level        : string
    time         : string
    date         : string
}

export interface IPlannedCleanings {
    id           :string
    customerName : string
    cleanerName  : string
    level        : string
    time         : string
    date         : string
    onPerformedTaskHandler: (id:string) => void

} 
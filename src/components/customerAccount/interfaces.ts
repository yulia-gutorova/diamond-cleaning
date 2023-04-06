export interface IPlannedBookings {
    id:string
    customerName: string
    cleanerName: string
    level: string
    time: string
    date: string
    onDeleteTaskHandler: (id:string) => void
}


export interface IPerformedBookings {
    id:string
    customerName: string
    cleanerName: string
    level: string
    time: string
    date: string
    onDeleteTaskHandler: (id:string) => void
    onCheckboxHandler : (id:string) => void
}

export interface FormData {
    cleanerName : string;
    level : string;
    date: string;
    time : string;
}

export interface INewBooking{
    onAddNewBooking: (formData : FormData) => void
}

export interface ICustomerPage {
    loginButtonTextHandler : (login: boolean) => void
}
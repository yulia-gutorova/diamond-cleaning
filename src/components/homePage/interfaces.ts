export interface IHomePage {
    loginButtonTextHandler : (login : boolean) => void;
}

export interface IWhyChooseUsCard {
    text    : string
    title   : string
    icon    : string
    display :boolean
}


export interface IHowItWorksCard {
    info       : boolean
    circleText : string
    hText      : string
    pText      : string
    num        : number
}
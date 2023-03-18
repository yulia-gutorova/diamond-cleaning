export interface INavigationMenu {
    onScrollToElementClickHandler : (el : string) => void;
    loginText : string;
    login     : boolean;
    load      : string;   
}

export interface IFooter {
    onScrollToElementClickHandler : (el : string) => void;
}
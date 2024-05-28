export interface Manifest {
    action: Manifest;
    author: string;
}

interface Action {
    browser_style: boolean;
    default_area: "navbar" | "menupanel" | "tabstrip" | "personaltoolbar";
}

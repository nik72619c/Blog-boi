export interface IBlog {
    title: string;
    body: [{
        heading: string;
        content: [string]
    }];
}
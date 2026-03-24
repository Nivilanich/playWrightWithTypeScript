export class BasePage{

    protected url: string;

    constructor(url: string) {
        this.url = url;
    }

    async navigate(): Promise<void> {
        console.log(`Navigating to ${this.url}`);
        // Simulate navigation logic here
    }
}

export class HomePage extends BasePage {

    constructor() {
        super('https://demoqa.com/');
    }
    async getTitle(): Promise<string> {
        console.log('Getting page title');
        return 'ToolsQA';
    }
    async isLoaded(): Promise<boolean> {
        console.log('Checking if Home Page is loaded');
        return true;
    }
}


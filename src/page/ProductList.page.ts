import { $, ElementFinder, promise } from "protractor";

export class ProductListPage {
    private get completeBuyMessage(): ElementFinder {
        return $('#center_column > div > p > strong');
    }

    public getCompleteBuyMessage(): promise.Promise<String> {
        return this.completeBuyMessage.getText();
    }
}
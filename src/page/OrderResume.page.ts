import { $, ElementFinder, promise } from "protractor";

export class OrderResumePage {
    private getOrderResume(): ElementFinder {
        return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
    }

    public gotoOrderResume(): promise.Promise<void> {
        return this.getOrderResume().click();
    }
}
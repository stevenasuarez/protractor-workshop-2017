import { $, ElementFinder } from "protractor";

export class ShippingStepPage {

    private get agreeTermsOfService(): ElementFinder {
        return $('#cgv');
    }

    private get proceedToCheckout(): ElementFinder {
        return $('#form > p > button > span');
    }

    public async acceptShipping(): Promise<void> {
        await this.agreeTermsOfService.click();
        await this.proceedToCheckout.click();
    }
}

import { $, ElementFinder } from "protractor";

export class ShippingStepPage {
    private get agreeTermsOfServiceCheck(): ElementFinder {
        return $('#cgv');
    }

    private get proceedToCheckoutButton(): ElementFinder {
        return $('#form > p > button > span');
    }

    public async acceptShipping(): Promise<void> {
        await this.agreeTermsOfServiceCheck.click();
        await this.proceedToCheckoutButton.click();
    }
}


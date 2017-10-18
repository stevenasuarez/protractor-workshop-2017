import {$, browser, ElementFinder, ExpectedConditions} from "protractor";

export class ProductAddedModalPage {
    private get proceedToCheckoutButton(): ElementFinder {
        return $('[style*="display: block;"] .button-container > a');
    }

    public async goToProceedToCheckout(): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable($('[style*="display: block;"] .button-container > a')), 3000);
        await this.proceedToCheckoutButton.click();
    }
}

import { $, ElementFinder, promise } from "protractor";

export class PaymentStepPage {
    private get payByBanckWire(): ElementFinder {
        return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
    }

    public goToPayByBanckWire(): promise.Promise<void> {
        return this.payByBanckWire.click();
    }
}
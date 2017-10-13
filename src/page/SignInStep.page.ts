import { $, ElementFinder } from "protractor";

export class SignInStepPage {
    private get emailField(): ElementFinder {
        return $('#email');
    }

    private get password(): ElementFinder {
        return $('#passwd');
    }

    private get submitLoginButton(): ElementFinder {
        return $('#SubmitLogin > span');
    }

    public async signIn(): Promise<void> {
        this.emailField.sendKeys('aperdomobo@gmail.com');
        this.password.sendKeys('WorkshopProtractor');
        return this.submitLoginButton.click();
    }
}

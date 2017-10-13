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
        await this.emailField.sendKeys('aperdomobo@gmail.com');
        await this.password.sendKeys('WorkshopProtractor');
        await this.submitLoginButton.click();
    }
}

import { $, ElementFinder, promise } from "protractor";

export class SignInStepPage {

    private getEmailField(): ElementFinder {
        return $('#email');
    }

    private getPassword(): ElementFinder {
        return $('#passwd');
    }

    private get submitLogin(): ElementFinder {
        return $('#SubmitLogin > span');
    }

    public signIn(): promise.Promise<void> {
        this.getEmailField().sendKeys('aperdomobo@gmail.com');
        this.getPassword().sendKeys('WorkshopProtractor');
        return this.submitLogin.click();
    }
}

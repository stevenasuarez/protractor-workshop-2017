import { browser } from 'protractor';
import { MenuContentPage,
    OrderResumePage,
    ProductDetailPage,
    ProductAddedModalPage,
    SummaryStepPage,
    SignInStepPage,
    AddressStepPage,
    ShippingStepPage,
    PaymentStepPage,
    BankPaymentPage,
    ProductListPage} from '../src/page';

describe('Buy a t-shirt', () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const orderResumePage: OrderResumePage = new OrderResumePage();
    const productDetailPage: ProductDetailPage = new ProductDetailPage();
    const productAddedModal: ProductAddedModalPage = new ProductAddedModalPage();
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();
    const singInStep: SignInStepPage = new SignInStepPage();
    const addressStepPage: AddressStepPage = new AddressStepPage();
    const shippingStepPage: ShippingStepPage = new ShippingStepPage();
    const paymentStepPage: PaymentStepPage = new PaymentStepPage();
    const bankPaymentStepPage: BankPaymentPage = new BankPaymentPage();
    const productListPage: ProductListPage = new ProductListPage();

    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
    });

    it('then should be bought a t-shirt', async () => {
        await browser.get('http://automationpractice.com/');
        await (browser.sleep(3000));
        await menuContentPage.goToTShirtMenu();
        await (browser.sleep(3000));
        await orderResumePage.gotoOrderResume();
        await (browser.sleep(3000));
        await productDetailPage.goToAddToCart();
        await (browser.sleep(3000));
        await productAddedModal.goToProceedToCheckout();
        await (browser.sleep(3000));
        await summaryStepPage.goToProceedToCheckout();
        await (browser.sleep(3000));

        await singInStep.signIn();
        await (browser.sleep(3000));

        await addressStepPage.goToProceedToCheckout();
        await (browser.sleep(3000));

        shippingStepPage.acceptShipping();

        await (browser.sleep(3000));
        await paymentStepPage.goToPayByBanckWire();
        await (browser.sleep(3000));
        await bankPaymentStepPage.goToConfirmOrder();
        await (browser.sleep(3000));

        await expect(productListPage.getCompleteBuyMessage())
            .toBe('Your order on My Store is complete.');
    });
});

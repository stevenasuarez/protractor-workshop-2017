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

    it('then should be bought a t-shirt', async () => {
        await browser.get('http://automationpractice.com/');
        await menuContentPage.goToTShirtMenu();
        await orderResumePage.gotoOrderResume();
        await productDetailPage.goToAddToCart();
        await productAddedModal.goToProceedToCheckout();
        await summaryStepPage.goToProceedToCheckout();

        await singInStep.signIn();

        await addressStepPage.goToProceedToCheckout();

        await shippingStepPage.acceptShipping();

        await paymentStepPage.goToPayByBanckWire();
        await bankPaymentStepPage.goToConfirmOrder();

        await expect(productListPage.getCompleteBuyMessage())
            .toBe('Your order on My Store is complete.');
    });
});

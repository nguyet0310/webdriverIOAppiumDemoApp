
import Page from './page.js';
class ProductPage extends Page {
    get getTestMenuDisplay() {
        return $('~test-Menu');
    }
    async verifyProductPageDisplay() {
        await expect(this.getTestMenuDisplay).toBeDisplayed()
    }
 }
export default new ProductPage();

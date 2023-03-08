import LoginPage from '../pageobjects/login.page.js'
import ProductPage from '../pageObjects/product.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        
        await LoginPage.login('standard_user', 'secret_sauce')
        await ProductPage.verifyProductPageDisplay()
    })
})



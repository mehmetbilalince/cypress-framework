import { Homepage } from "../../pageObjectModel/homepage";
const homepagePom=new Homepage()
import homepageSecond from "../../pageObjectModel/homepageSecond";
describe.only('Page Object Model 1 Kullanımı', () => {
    it('POM Örnekler', () => {
        homepagePom.navigate()
        homepagePom.pricingBtn()
    });
});
describe('Page Object Model 2 Kullanımı', () => {
    it('POM Örnekler', () => {
        homepageSecond.navigate()
        //homepageSecond.pricingBtn.click()
        homepageSecond.pricingBtn.should('be.visible').and('contain','Pricing').click()
    });
});
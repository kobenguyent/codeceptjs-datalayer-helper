const Helper = require('@codeceptjs/helper');
const { expect } = require('chai');

class DataLayerHelper extends Helper {

  async getDataLayerObject() {
    const playwright = this['helpers']['Playwright'];
    if (!playwright)
      throw Error(
        'DataLayer Helper only supports Playwright at the moment.'
      );
    const { page } = playwright;
    const dataLayerObject = await page.evaluate('dataLayer')

    if (dataLayerObject.length < 0) return 'No dataLayer is implemented'
    return  dataLayerObject
  }

  async checkIfEventExistsInDataLayer(eventName:string) {
    const dl = await this.getDataLayerObject()

    if (eventName) {
      const expected = dl.filter((item: { event: string; }) => item.event === eventName)
      expect(expected.length, `${eventName} is not existing in Datalayer JSON`).to.eql(1)
    }
  }
}

exports = DataLayerHelper;

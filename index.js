const Helper = require('@codeceptjs/helper');
const expect = require('expect');

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

  /**
   * Check if a specific event exists in datalayer object
   * @param  {String}  eventName event name to check
   */
  async checkIfEventExistsInDataLayer(eventName) {
    const dl = await this.getDataLayerObject()

    if (eventName) {
      const expected = dl.filter(item => item.event === eventName)
      expect(expected.length).toEqual(1)
    }
  }
}

module.exports = DataLayerHelper;

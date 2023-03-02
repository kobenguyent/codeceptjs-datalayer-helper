const Helper = require('@codeceptjs/helper');

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
      if (expected.length < 0) return false
      return true
    }
  }
}

module.exports = DataLayerHelper;

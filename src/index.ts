const { Helper } = require("codeceptjs");
const { expect } = require("chai");

class DataLayerHelper extends Helper {
	/**
	 * Get datalayer object
	 */
	async getDataLayerObject() {
		const playwright = this["helpers"]["Playwright"];
		if (!playwright) throw Error("DataLayer Helper only supports Playwright at the moment.");
		const { page } = playwright;
		const dataLayer = page.evaluate('dataLayer');

		if (dataLayer.length < 0) return "No dataLayer is implemented";
		return dataLayer;
	}

	/**
	 * Check if a specific event exists in datalayer object
	 * @param  {String}  eventName event name to check
	 */
	async checkIfEventExistsInDataLayer(eventName: string) {
		const dl = await this.getDataLayerObject();

		if (eventName) {
			const expected = dl.filter((item: { event: string }) => item.event === eventName);
			expect(expected.length, `${eventName} is not existing in Datalayer JSON`).to.eql(1);
		}
	}
}

export = DataLayerHelper

export = DataLayerHelper;

declare class DataLayerHelper {
  /**
   * Check if a specific event exists in datalayer object
   * @param  {String}  eventName event name to check
   */
  checkIfEventExistsInDataLayer(eventName): any;

  /**
   * Get datalayer object
   */
  getDataLayerObject(): any;
}

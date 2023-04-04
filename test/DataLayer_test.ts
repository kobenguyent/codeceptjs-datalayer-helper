Feature('DataLayer Check');

Before(({ I }) => {
  I.amOnPage('https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slider/Overview/jQuery/Light/')
})

Scenario('Get DataLayer object',  async ({ I }) => {
  const dl = await I.getDataLayerObject()
  I.expectGreaterThan(dl.length, 0)
});

Scenario('DataLayer object contains a specific key',  async ({ I }) => {
  await I.checkIfEventExistsInDataLayer('gtm.dom')
});

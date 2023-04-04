[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/peternguyew)

# codeceptjs-datalayer-helper

CodeceptJS DataLayer helper helps you to get the datalayer JavaScript array that is used to store information and send this data to the tag manager.

NPM package: <https://www.npmjs.com/package/codeceptjs-datalayer-helper>

## Installation

`npm i codeceptjs-datalayer-helper --save-dev`

## Configuration

This helper should be added in your codeceptjs config file: `codecept.conf.*`

Example:

```
{
...
   helpers: {
     DatalayerHelper: {
      require: 'codeceptjs-datalayer-helper',
    }
   }
...
}
```

## Usage

- To use this helper, you must enable Playwright helper.
- After install the helper, you can use it by calling `I.getDataLayerObject()`
- To check if a certain event name exists in data layer `I.checkIfEventExistsInDataLayer('gtm.dom')`
- If there is no auto complete for `I` actor, try running `npx codeceptjs def`

```
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
```

Output

```
Running tests in 2 workers...

[01]   ✔ Get DataLayer object in 12ms
[02]   ✔ DataLayer object contains a specific key in 9ms

  OK  | 2 passed   // 6s

```

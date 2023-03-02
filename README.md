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
- If there is auto complete for I actor, try running `npx codeceptjs def`

```
Feature('DataLayer Check');

Scenario.only('Get DataLayer object',  async ({ I }) => {
    I.amOnPage('https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slider/Overview/jQuery/Light/')
    const dl = await I.getDataLayerObject()
    console.log(dl)
});
```

Output

```
DataLayer --
    [1]  Starting recording promises
    Timeouts: 
 › [Session] Starting singleton browser session
  Get dataLayer object
    I am on page "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slider/Overview/jQuery/Light/"
    I get data layer object
[
  {
    'gtm.start': 1677775441720,
    event: 'gtm.js',
    'gtm.uniqueEventId': 1
  },
  { event: 'gtm.dom', 'gtm.uniqueEventId': 8 },
  { event: 'gtm.load', 'gtm.uniqueEventId': 9 }
]
  ✔ OK in 2375ms


  OK  | 1 passed   // 3s


```

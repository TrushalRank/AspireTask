// This Project is assignment task. There are implemented bottom tabbar, debit card and weekly limit screen. Project is creating with class based components and added proper comments with format in each files.

// Project is created in javascript. Also implemented redux-saga for api calling. In screen folder debit folder have dummy api call function which has setup console log for display response. that api call perform with using redux-saga.

// Following some brief info for project folders and files structures.
src
|_ assets
    |_ images  (stores all images of projects )

|_ common
    |_ styles
        |_ color.js ( make global file for list of colors which are using in application )
        |_ commonStyle.js ( make global file for font and text style functions )
    |_ constantData.js ( make global file to handle static data )

|_ component
    |_ cardSettingComponent ( component file which includes options view like weekly limit, freeze card etc...)
    |_ debitCardComponent ( component file which includes card information with cardSettingComponent )
    |_ ProgressbarComponent ( component file which display progressbar limit )

|_ navigation

|_ screen
    |_credit
        |_ index.js
        |_ styles.js
    |_ debitCard
    |_ Home
    |_ payment
    |_ profile
    |_ weeklyLimit

|_ store
    |_ actions
        |_ Home
        |_ index.js
    |_ constant
        |_ index.js
    |_ reducers
        |_ Home
        |_ index.js
    |_ sagas
        |_ Home
        |_ index.js
    |_ services
        |_ index.js
    |_ index.js

# Blueprint Test

This test is designed to test your proficiency in the basics for a large part of what you will be developing at Blueprint.

To take the test: fork this repository, and push changes to the your forked repo.

When you are finished please send us the link to the repo along with a short video of you walking through your code and explaining your thought process. Make sure the repo is public, so we can access it.
This shouldn't take more than 2-3 hours to complete.
Please don't hesitate to reach out if you have any questions. Good luck!

## Project Requirements:

1. use React to create a view with cards for each ad with the following information: Campaign, Adset, Creative, Spend, Impressions, Clicks, Results
2. use the data in the fakeDataSet from the provided API to populate the cards with standardized data
3. the cards should be sortable by spend, ascending and descending order and it should be clearable
4. the cards should be searchable by the campaign name

### Background Information

At Blueprint, much of our data is in "ads". 

An `ad` is a unique combination of a `campaign`, `adset`, and `creative`. Different platforms may call them different names; part of what Blueprint does is standardize the names across platforms so that we can compare the data.

The following values are all equivalent.

campaign_name === campaign === utm_campaign

media_buy_name === ad_group === ad_squad_name === utm_medium

ad_name === image_name === creative_name === utm_content

Different platforms also don't name all of their metrics the same either, so we have to standardize those as well.

spend === cost

clicks === post_clicks

Google analytics doesn't contain metrics like spend, clicks or impressions. It is where we get results from and have to allocate them to the ads that come from the platforms
meaning that you will have to put the results that come from google analytics into the correct ad from the platform

### Setup

It is important to start the json server before you start the react app

<!-- instructions on how to start the json server -->

if you haven't already, install json-server globally

```
npm install -g json-server
```

then run the following command in the root directory of this project

```
json-server --watch db.json
```

the endpoint for the data is http://localhost:3000/fakeDataSet

to start React run either of the following commands in the root directory of this project

```
yarn start
OR
npm start
```
# blueprint-assessment
# blueprint-assessment

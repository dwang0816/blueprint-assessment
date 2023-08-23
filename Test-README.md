# Blueprint Test

This test is designed to test your proficiency in the basics for most of what we do at Blueprint.
When you are finished please make the repo public and send us the link to the repo along with a short ~3 minute video of you walking through your code and explaining your thought process (no longer than 5 minutes).
Please reach out if you have any questions. Good luck!
This shouldn't take more than 2-3 hours to complete.

## Project Requirements:

1. use React to create a view with cards for each ad with the following information: Campaign, Adset, Creative, Spend, Impressions, Clicks, Results
2. use the data in the fakeDataSet from the provided API to populate the cards with standardized data
3. the cards should be sortable by spend, ascending and descending order and it should be clearable
4. the cards should be searchable by the campaign name

### Background Information

an ad is a unique combination of a campaign, adset, and creative, different platforms may call them different names and part of what Blueprint does is standardize the names across platforms so that we can compare the data across platforms.
campaign is called campaign_name in facebook, campaign in twitter, campaign_name in snapchat, utm_campaign in google analytics,
adset is called media_buy_name in facebook, ad_group in twitter, ad_squad_name in snapchat, utm_medium in google analytics
creative is called ad_name in facebook, image_name in twitter, creative_name in snapchat, utm_content in google analytics
different platforms also dont name all of their metrics the same either, so we have to standardize those as well
spend === cost
clicks === post_clicks
google analytics doesnt contain metrics like spend, clicks or impressions. it is where we get results from and have to allocate them to the ads that come from the platforms
meaning that you will have to put the results that come from google analytics into the correct ad from the platform

### Setup

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

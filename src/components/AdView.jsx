import React, { useState, useEffect } from "react";
import AdCard from "./AdCard";
import "./AdView.css";

const AdView = () => {
  const [ads, setAds] = useState([]);
  const [originalAds, setOriginalAds] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch data from the provided endpoint
    fetch("http://localhost:3000/FakeDataSet")
      .then((response) => response.json())
      .then((data) => {
        const unifiedAds = UnifiedAdsData(data); // Process and unify data
        setAds(unifiedAds);
        setOriginalAds(unifiedAds); // Save a copy for reactive search
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const UnifiedAdsData = (data) => {
    const unifiedAds = [];

    // Process Facebook Ads
    data.facebook_ads.forEach((ad) => {
      const unifiedAd = {
        campaign: ad.campaign_name,
        ad_group: ad.media_buy_name,
        creative: ad.ad_name,
        spend: ad.spend,
        impressions: ad.impressions,
        clicks: ad.clicks,
        results: 0,
      };
      unifiedAds.push(unifiedAd);
    });

    // Process Twitter Ads
    data.twitter_ads.forEach((ad) => {
      const unifiedAd = {
        campaign: ad.campaign,
        ad_group: ad.ad_group,
        creative: ad.image_name,
        spend: ad.spend,
        impressions: ad.impressions,
        clicks: ad.post_clicks,
        results: 0,
      };
      unifiedAds.push(unifiedAd);
    });

    // Process Snapchat Ads
    data.snapchat_ads.forEach((ad) => {
      const unifiedAd = {
        campaign: ad.campaign_name,
        ad_group: ad.ad_squad_name,
        creative: ad.creative_name,
        spend: ad.cost,
        impressions: ad.impressions,
        clicks: ad.post_clicks,
        results: 0,
      };
      unifiedAds.push(unifiedAd);
    });

    // Process Google Analytics data and allocate results
    data.google_analytics.forEach((analytics) => {
      unifiedAds.forEach((ad) => {
        if (
          ad.campaign === analytics.utm_campaign &&
          ad.ad_group === analytics.utm_medium &&
          ad.creative === analytics.utm_content
        ) {
          ad.results += analytics.results;
        }
      });
    });

    return unifiedAds;
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortBy(null);
      setAds(originalAds);
    } else {
      setSortBy(field);
      const sortedAds = [...ads].sort((a, b) => a[field] - b[field]);
      setAds(sortedAds);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredAds = originalAds.filter((ad) =>
      ad.campaign.toLowerCase().includes(term.toLowerCase())
    );
    setAds(filteredAds);
  };

  const handleClear = () => {
    setSearchTerm("");
    setSortBy(null);
    setAds(originalAds);
  };

  return (
    <div>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by campaign name"
          className="search-input"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="sort-buttons">
          <button
            className={`sort-button ${sortBy === "spend" ? "active" : ""}`}
            onClick={() => handleSort("spend")}>
            {sortBy === "spend"
              ? "Sort by Spend (Ascending)"
              : "Sort by Spend (Descending)"}
          </button>
        </div>
        <button className="sort-button clear-button" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="ad-cards">
        {ads.map((ad, index) => (
          <AdCard key={index} ad={ad} />
        ))}
      </div>
    </div>
  );
};

export default AdView;

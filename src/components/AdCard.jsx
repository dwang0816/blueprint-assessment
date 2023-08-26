import React from "react";
import "./AdCard.css";

const AdCard = ({ ad }) => {
  return (
    <div className="ad-card">
      <div>Campaign: {ad.campaign}</div>
      <div>Adset: {ad.ad_group}</div>
      <div>Creative: {ad.creative}</div>
      <div>Spend: {ad.spend}</div>
      <div>Impressions: {ad.impressions}</div>
      <div>Clicks: {ad.clicks}</div>
      <div>Results: {ad.results}</div>
    </div>
  );
};

export default AdCard;

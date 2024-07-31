import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics, onTopicSelect}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {topics.map((topicData) => {
        return (
          <TopicListItem 
            key={topicData.id}
            title={topicData.title}
            onClick={() => {onTopicSelect(topicData.id)}}
          />
        );
      })}
    </div>
  );
};

export default TopicList;

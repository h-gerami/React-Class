import React from "react";
import { useLocation } from "react-router-dom";
const ImageDetailScreen = () => {
  const location = useLocation();
  const { imgDetail } = location.state;
  const { user, urls, description } = imgDetail;
  const { first_name, last_name, username, total_likes, instagram_username } =
    user;
  const lorem =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <div className="img-detail-container">
      <div className="img-wrapper">
        <img src={urls.regular} />
      </div>
      <div className="user-description-wrapper">
        <div className="user-wrapper">
          <ul>
            <li>
              <span>{`Name & Last Name: ${first_name} ${last_name}`}</span>
            </li>
            <li>
              <span>{`User Name: ${username}`}</span>
            </li>
            <li>
              <span>{`Likes ❤️ : ${total_likes}`}</span>
            </li>
            <li>
              <span>{`Instagram: ${instagram_username}`}</span>
            </li>
          </ul>
        </div>
        <div className="description-wrapper">
          <p>{description ? description : lorem}</p>
          {/* <p>{description || lorem}</p> */}
        </div>
      </div>
    </div>
  );
};
export default ImageDetailScreen;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
interface ImageCardType {
  title: string;
  subheader: string;
  image: string;
  alt: string;
  decription: string;
  avatar: string;
  onCardClick: () => void;
  imgDesc: string;
  testData?: [] | null;
}
const ImageCard = (props: ImageCardType) => {
  const {
    title,
    subheader,
    image,
    alt,
    decription,
    avatar,
    onCardClick,
    imgDesc,
    testData,
  } = props;

  return (
    <Card onClick={onCardClick} sx={{ width: "100%", minHeight: 400 }}>
      <CardHeader
        avatar={
          <Avatar src={avatar} sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={title}
        subheader={subheader}
      />
      <p>{imgDesc}</p>
      <CardMedia component="img" height="194" image={image} alt={alt} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {decription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default ImageCard;

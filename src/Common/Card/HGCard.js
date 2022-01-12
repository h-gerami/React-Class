import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function HGCard(props) {
  const { children, background } = props;
  // console.log(props, "props");
  return (
    <div>
      <Card
        style={{ backgroundColor: background }}
        sx={{ maxWidth: 345, margin: 1 }}
      >
        <CardContent>{children}</CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

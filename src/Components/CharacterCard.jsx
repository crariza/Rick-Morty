import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CharacterModal from "./CharacterModal";


const CharacterCard = ({ data }) => {
  const { name, status, gender, image } = data;
  return (
    <Card sx={{ width: "300px", border: "1px solid blue" }}>
      <CardMedia
        component="img"
        image={image}
        alt="character image"
        height="200"
      />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography
          width="fit-content"
          mb={2}
          padding="4px 8px"
          color="white"
          fontWeight={700}
          borderRadius="4px"
          sx={{
            backgroundColor:
              status === "Alive"
                ? "#198754"
                : status === "Dead"
                ? "#DC3545"
                : "#242424",
          }}
        >
          {status ? status : "random"}
        </Typography>
        <Typography>
          <strong>Gender: </strong>
          {gender}
        </Typography>
      </CardContent>
      <CardActions>
        <CharacterModal data={data}/>
      </CardActions>
    </Card>
  );
};

export default CharacterCard;

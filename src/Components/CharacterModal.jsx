import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Fade,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const CharacterModal = ({ data }) => {
  const { name, image, status, species, gender, origin, location, episode } =
    data;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "300px", sm: "450px" },
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{
          "&:hover": { backgroundColor: "primary.main", color: "white" },
        }}
      >
        Details
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Card sx={style}>
            <CardMedia
              component="img"
              image={image}
              alt="character image"
              height="300"
            />
            <CardContent>
              <Typography variant="h6">{name}</Typography>
              <Typography
                position="absolute"
                top='10px'
                right='10px'
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
              <Typography>
                <strong>Species: </strong>
                {species}
              </Typography>
              <Typography
                component="h6"
                fontSize="14px"
                width="fit-content"
                m="12px 0"
                padding="4px 8px"
                color="white"
                fontWeight={700}
                borderRadius="4px"
                sx={{ backgroundColor: "#5B6D81" }}
              >
                {`Find me in ${
                  location.name === "unknown" ? "shhh" : location.name
                }`}
              </Typography>
              <Box display="flex" flexWrap="wrap">
                <Typography component='h6' fontWeight='bold'>Episodes:</Typography>
                {episode?.map((epi, index) =>
                  index === episode.length - 1 ? (
                    <Typography component="h6">{`${epi.substring(
                      40
                    )}`}</Typography>
                  ) : (
                    <Typography component="h6">{` ${epi.substring(
                      40
                    )},`}</Typography>
                  )
                )}
              </Box>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </>
  );
};

export default CharacterModal;

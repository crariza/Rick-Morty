import React, { useState, useEffect } from "react";
import UseCharacters from "../Hooks/UseCharacters";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FilterAltSharpIcon from "@mui/icons-material/FilterAltSharp";
import CharacterCard from "../Components/CharacterCard";

const HomeScreen = () => {
  const { getAllCharacters, data, pages } = UseCharacters();
  const [pageNumber, setPageNumber] = useState(1);
  const [filterName, setFilterName] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [status, setStatus] = useState("");
  const [inputStatus, setInputStatus] = useState(true);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    getAllCharacters(pageNumber, filterName, filterGender, status);
  }, [pageNumber, filterName, filterGender, status]);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };

  const handleSearchClick = () => {
    inputStatus ? setInputStatus(false) : setInputStatus(true);
  };

  return (
    <Stack alignItems="center" padding="20px 0">
      <Typography variant="h1">
        Rick & Morty <span style={{ color: "#5FA8F1" }}>API</span>
      </Typography>
      <Box
        width="60%"
        display="flex"
        justifyContent="center"
        gap={1}
        margin="16px"
      >
        <IconButton onClick={handleSearchClick}>
          <SearchRoundedIcon />
        </IconButton>
        <TextField
          placeholder="Filter By Name"
          size="small"
          value={filterName}
          disabled={inputStatus}
          onChange={({ target: { value } }) => setFilterName(value)}
          sx={{ width: "100%", maxWidth: "550px" }}
        />
      </Box>
      <Box
        width="60%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={3}
        margin="16px"
      >
        <FilterAltSharpIcon sx={{ color: "primary.main" }} />
        <FormControl
          variant="filled"
          sx={{ width: "40%", minWidth: "100px", maxWidth: "200px" }}
        >
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            size="small"
            id="demo-simple-select"
            value={filterGender}
            label="Gender"
            onChange={({ target: { value } }) => setFilterGender(value)}
          >
            <MenuItem value={""}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Unknown"}>Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="filled"
          sx={{ width: "40%", minWidth: "100px", maxWidth: "200px" }}
        >
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            size="small"
            id="demo-simple-select"
            value={status}
            label="Status"
            onChange={({ target: { value } }) => setStatus(value)}
          >
            <MenuItem value={""}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Alive"}>Alive</MenuItem>
            <MenuItem value={"Dead"}>Dead</MenuItem>
            <MenuItem value={"Unknown"}>Unknown</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Pagination
        count={pages}
        onChange={handlePageChange}
        page={pageNumber}
        showFirstButton
        showLastButton
        siblingCount={isSmallScreen ? 0 : 1}
        boundaryCount={isSmallScreen ? 0 : 1}
        sx={{ margin: "16px" }}
      />
      <Stack
        direction="row"
        gap={1}
        justifyContent="center"
        flexWrap="wrap"
        margin="0 12px"
      >
        {data.map((character) => (
          <CharacterCard key={character.id} data={character} />
        ))}
      </Stack>
      <Pagination
        count={pages}
        onChange={handlePageChange}
        page={pageNumber}
        showFirstButton
        showLastButton
        siblingCount={isSmallScreen ? 0 : 1}
        boundaryCount={isSmallScreen ? 0 : 1}
        sx={{ margin: "16px" }}
      />
    </Stack>
  );
};

export default HomeScreen;

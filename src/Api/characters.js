import axios from "axios";
const charactersApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
  timeout: 2000,
})

export default charactersApi
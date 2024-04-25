import React from "react";
import charactersApi from "../Api/characters";
import { useState } from "react";

const UseCharacters = () => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0)
  const getAllCharacters = async (page,filterName, filterGender,status) => {
    try {
      const request = await charactersApi.get(`?page=${page}&name=${filterName}&gender=${filterGender}&status=${status}`);
      setData(request.data.results);
      setPages(request.data.info.pages);
    } catch (error) {
      console.log(error)
    }
  }

  const getSingleCharacter = async (id) => {
    try {
      const request = await charactersApi.get(`${id}`);
      setData(request.data)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    getAllCharacters,
    getSingleCharacter,
    data,
    pages,
  }
}

export default UseCharacters


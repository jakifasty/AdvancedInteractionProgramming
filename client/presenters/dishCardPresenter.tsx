import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DishCard from "../components/dishCard";
import { addFav, deleteFav } from "../redux/actions/favouritesActions";

export default function DishCardPresenter(props: any) {
  const dispatch = useDispatch<any>();
  const addedToFav = useSelector((state: any) =>
    state.favourites.data.includes(props.data.idMeal)
  );
  const loading = useSelector((state: any) => state.favourites.loading);
  function favBtnClickedACB() {
    console.log("fav" + addedToFav);
    if (!addedToFav) dispatch(addFav(props.data.idMeal));
    else dispatch(deleteFav(props.data.idMeal));
  }

  return (
    <DishCard
      data={props.data}
      key={props.key}
      // addedToFav={addedToFav}
      onSelectedRecipe={props.onSelectedRecipe}
      loading={loading}
      handleFavorites={favBtnClickedACB}
    />
  );
}
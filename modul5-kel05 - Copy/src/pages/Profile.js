import { Fragment } from "react";
import CardProfile from "../component/CardProfile";
// import CardSmall from "../component/CardSmall";
import "./Profile.css";
export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const data = [
    {
      name: "Nisyrina Rahmatina",
      id: 1,
      rate: 4,
      NIM: "21111111",
      img1: "https://i.pinimg.com/564x/12/69/10/1269106e5cb919b6654f48062c0e053b.jpg",
    },
    {
      name: "Leonardus",
      id: 2,
      rate: 4,
      NIM: "2111111",
      img1: "https://i.pinimg.com/564x/12/69/10/1269106e5cb919b6654f48062c0e053b.jpg",
    },
    {
      name: "Roy",
      id: 3,
      rate: 4,
      NIM: "21111111",
      img1: "https://i.pinimg.com/564x/12/69/10/1269106e5cb919b6654f48062c0e053b.jpg",
    },
    {
      name: "AB",
      id: 4,
      rate: 4,
      NIM: "21111111",
      img1: "https://i.pinimg.com/564x/12/69/10/1269106e5cb919b6654f48062c0e053b.jpg",
    },
  ];
  return (
    <>
      <p id="movies">Anggota Kelompok 5</p>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardProfile name={item.name} img1={item.img1} NIM={item.NIM} size={STAR_SIZE} color={STAR_COLOR} onClick={() => alert("item id = " + item.id)} />
          {data.length === index + 1 && (
            <div
              style={{
                marginBottom: 80,
              }}
            />
          )}
        </Fragment>
      ))}
    </>
  );
}

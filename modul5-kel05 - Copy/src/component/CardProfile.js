import "./CardProfile.css";

export default function CardProfile(props) {
  return (
    <div className="card">
      <img src={props.img1} alt="" className="photo" id="gambar"/>
      <div className="description">
        <div>
          <p id="name">{props.name}</p>
          <p id="NIM">{props.NIM}</p>
        </div>
      </div>
    </div>
  );
}

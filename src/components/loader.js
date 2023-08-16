import { BallTriangle } from "react-loader-spinner";
export default function Loader() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#131313",
      }}
    >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#e4e4dd"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
}

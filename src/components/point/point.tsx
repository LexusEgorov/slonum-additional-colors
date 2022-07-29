type PointProps = {
  img: string;
  text: string;
}

function Point({img, text} : PointProps ) : JSX.Element {
  return (
    <div className="point">
      <img src={`images/points/${img}.png`} alt="" width={70} height={70}/>
      <p>{text}</p>
    </div>
  );
}

export default Point;

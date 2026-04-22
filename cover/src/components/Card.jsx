//PROPS are parameters passed to components to make them reusable and dynamic






const Card = ({name = `Plant`, desc = `Description`}) => {
  return (
    <div className="card">
      <h4>{name}</h4>
      <div className="img-container">
        <img src="https://picsum.photos/100" alt="" />
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default Card;

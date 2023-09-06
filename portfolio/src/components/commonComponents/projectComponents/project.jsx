function Project(props) {
  const { title, description, img } = props;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={img} alt={title} />
    </div>
  );
}

export default Project;

export const GifItem = ({ id, url, title }) => {
  return (
    <div key={id}>
      <img src={`${url}`} />
      <h5>{title}</h5>
    </div>
  );
};

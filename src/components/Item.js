const Item = ({ url, name, image, rating, summary, country }) => {
  return (
    <a href={url} target="blank">
      <div className="mt-4 mr-0 bg-gray-300 shadow-lg cursor-pointer rounded-lg shadow-black">
        <div className="bg-sky-300 p-3 rounded-lg">
          <img
            className="object-fill h-56 w-full rounded-lg"
            src={image.medium ? image.medium : image}
            alt={name}
          />
        </div>
        <div className="p-3">
          {name && <h4>Name : {name}</h4>}
          {rating && <h4>Rating : {rating}</h4>}
          {country && <h4>Country : {country}</h4>}
          {summary && (
            <div className="h-40 overflow-scroll">
              <span>Summary :</span>
              <div
                className="px-2 italic"
                dangerouslySetInnerHTML={{ __html: summary }}
              />
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default Item;

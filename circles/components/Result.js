window.Result = ({ data }) => {

  return (
    <div className="result">
      {data.map((item) => (
        <div className="result-line">
          <span>{item.label}</span>

          <div className="result-score">
            <Score value={item.value} />
          </div>
        </div>
      ))}
    </div>
  );
};

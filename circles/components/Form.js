window.Form = ({ data, onChange }) => {
  return (
    <div className="form">
      {data.map((item) => (
        <label key={item.id}>
          {item.label}
          <input type="number" value={item.value} onChange={(e) => onChange(item.id, e.target.value)} />
        </label>
      ))}
    </div>
  );
};

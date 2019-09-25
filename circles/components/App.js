const INITIAL_DATA = [
  { id: 1, label: 'Овощи', value: 2 },
  { id: 2, label: 'Фрукты', value: 1.5 },
  { id: 3, label: 'Зерновые', value: 5 },
  { id: 4, label: 'Белковые', value: 4.5 },
  { id: 5, label: 'Молочные', value: 3 },
  { id: 6, label: 'Жиры', value: 1 },
];

window.App = () => {
  const [data, setData] = React.useState(INITIAL_DATA);

  const handleDataChange = React.useCallback((id, value) => {
    setData((prev) => {
      return prev.map((item) => {
        if (item.id !== id) {
          return item;
        }

        return {
          ...item,
          value,
        };
      });
    });
  }, []);

  return (
    <div className="app">
      <h1>Circles</h1>
      <Form data={data} onChange={handleDataChange} />
      <Result data={data} />
    </div>
  );
};

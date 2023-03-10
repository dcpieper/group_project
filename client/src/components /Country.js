const Country = ({ country }) => {
  return (
    <tr>
      <td>{country.name}</td>
      <td>{country.emissions}</td>
      <td>{country.per_capita}</td>
    </tr>
  );
};

export default Country;

const Repair = ({ data }) => {
  const { item, detail } = data;
  return (
    <>
      <div className="repairBox">
        <h3>{item}</h3>
        <table>
          <thead>
            <tr>
              <th>품목</th>
              <th>소요일수</th>
              <th>수선비용</th>
            </tr>
          </thead>
          <tbody>
            {detail &&
              detail.map((det) => (
                <tr key="name">
                  <td className="name">{det.name}</td>
                  <td className="days">
                    <input type="number" value={det.days} disabled />일
                  </td>
                  <td className="price">
                    <input type="number" value={det.price} disabled />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="btnBox">
          <button>수정</button>
        </div>
      </div>
    </>
  );
};
export default Repair;

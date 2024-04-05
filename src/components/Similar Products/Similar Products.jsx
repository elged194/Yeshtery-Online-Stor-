import "./Similar Products.css";

const SimilarProducts = ({ newArr, Products }) => {
  return (
    <section className="container Similar-Products">
      <div className="title-Products">
        <h2>Similar Products</h2>
        <p>You may like these products also</p>
      </div>

      <div className="row">
        {Products.map((e, index) => {
          return (
            <div
              className="card mb-4 p-0 "
              style={{ width: "18rem" }}
              key={e.id}
            >
              <img src={e.img} alt="" />
              <div className="card-body">
                <p className="card-text p-0" style={{ fontSize: "16px" }}>
                  {e.discripshn}
                </p>

                <div className="total">
                  <dir>
                    <h5>{e.total}</h5>
                    <p>
                      <span className="opacity-50 fw-bold">9.999 LE</span>{" "}
                      <b className="off-total opacity-100">30% </b>
                    </p>
                  </dir>
                  <img src={e.logo} style={{ width: "auto" }} alt="" />
                </div>

                <div className="star">
                  <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>

                  <span className="ml-3">
                    <b>4.2 Of 5</b>
                  </span>
                </div>

                <p>
                  Pickup From: <b>Genena Mall</b>
                </p>
                <button onClick={() => newArr(index)}>add</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SimilarProducts;
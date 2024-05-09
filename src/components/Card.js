import React from "react";

export default function Card() {
  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      {/* 850x478 */}
      <img src="https://e0.pxfuel.com/wallpapers/815/436/desktop-wallpaper-%E0%AE%9A%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%A9%E0%AF%8D-65-with-home-made-masala-hot-spicy-chicken-65-chicken-kabab-recipe.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text"> This text is very important</p>
        <div className="container w-100">
          <select className="m-2 h-100 bg-success rounded">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select className="m-2 h-100 bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
      </div>
    </div>
  );
}

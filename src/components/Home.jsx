import React from "react";
import cafe from "../cafe.PNG"

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={cafe}
              alt=""
              
              height="450px"
              width="1000px"
              
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light" >Cafeteria</h1>
            <p className="text-right">
              Cafeteria sdtdcyhfu yyyyyfyf ugggugu ttftt fyfyhbh
              dxdrftft gyyyyyyyyyyyyyy fdrdrt 2021 gftftf fttfffy
              vhgygff cfdttddd cftft fgysv gggggg hfdx hgf fdddddd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
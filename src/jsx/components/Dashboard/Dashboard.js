import React from "react";

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-xl-12 col-xxl-12">
        <div className="card">
          <div className="card-header border-0 pb-0">
            <h5 className="mb-0 text-black fs-20">Dashboard</h5>
          </div>
          <div className="card-body">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-3 ">
                <div className="card border coin-holding-card border-primary">
                  <div className="card-header align-items-start border-0 pb-0">
                    <div className="mr-auto">
                      <h2 className="text-black mb-0 font-w600">Total Sales</h2>
                    </div>
                    <svg
                      width={42}
                      height={42}
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM12.3281 19.4999H18.328C19.1566 19.4999 19.8281 20.1715 19.8281 21C19.8281 21.8286 19.1566 22.5001 18.328 22.5001H12.3281C11.4996 22.5001 10.828 21.8286 10.828 21C10.828 20.1715 11.5 19.4999 12.3281 19.4999ZM31.0841 17.3658L29.28 26.392C28.8552 28.4872 27.0155 29.9951 24.8777 30.0001H12.3281C11.4996 30.0001 10.828 29.3286 10.828 28.5C10.828 27.6715 11.5 26.9999 12.3281 26.9999H24.8777C25.5868 26.9981 26.197 26.4982 26.338 25.8033L28.1425 16.7772C28.3027 15.9715 27.7799 15.1887 26.9747 15.0285C26.8791 15.0097 26.782 15.0001 26.685 15.0001H15.3283C14.4998 15.0001 13.8282 14.3286 13.8282 13.5C13.8282 12.6715 14.4998 11.9999 15.3283 11.9999H26.685C29.1633 12.0009 31.1715 14.01 31.1711 16.4883C31.1711 16.7827 31.1418 17.0765 31.0841 17.3658Z"
                        fill="#3693FF"
                      />
                    </svg>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap mt-4 align-items-center">
                      <div className="d-flex align-items-center mr-auto pr-3 mb-2">
                        <h4 className="font-w500 text-black amount mb-0">
                          $1234
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 ">
                <div className="card border coin-holding-card border-primary">
                  <div className="card-body bg-primary rounded">
                    <div className="d-flex align-items-center">
                      <div>
                        <h4 className="font-w500 text-white title mb-0">
                          Live Sales
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap mt-4 align-items-center">
                      <div className="d-flex align-items-center mr-auto pr-3 mb-2">
                        <h4 className="font-w500 text-white amount mb-0">
                          $1234
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className="card border coin-holding-card border-primary">
                  <div className="card-body bg-primary rounded">
                    <div className="d-flex align-items-center">
                      <div>
                        <h4 className="font-w500 text-white title mb-0">
                          Paid Sales
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap mt-4 align-items-center">
                      <div className="d-flex align-items-center mr-auto pr-3 mb-2">
                        <h4 className="font-w500 text-white amount mb-0">
                          $1234
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className="card border coin-holding-card border-primary">
                  <div className="card-body bg-primary rounded">
                    <div className="d-flex align-items-center">
                      <div>
                        <h4 className="font-w500 text-white title mb-0">
                          Dead Sales
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap mt-4 align-items-center">
                      <div className="d-flex align-items-center mr-auto pr-3 mb-2">
                        <h4 className="font-w500 text-white amount mb-0">
                          $1234
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className="card border coin-holding-card border-primary">
                  <div className="card-body bg-primary rounded">
                    <div className="d-flex align-items-center">
                      <div>
                        <h4 className="font-w500 text-white title mb-0">
                          WIP Sales
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap mt-4 align-items-center">
                      <div className="d-flex align-items-center mr-auto pr-3 mb-2">
                        <h4 className="font-w500 text-white amount mb-0">
                          $1234
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

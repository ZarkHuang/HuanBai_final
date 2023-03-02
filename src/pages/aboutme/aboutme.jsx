import React, { useEffect } from "react";
import "./about.css";
import BrandCategory from "../../component/aboutme-components/brandCategory/brandCategory";
import Content from "../../component/aboutme-components/content/content";
import TeaminBox from "../../component/aboutme-components/inbox/teaminbox";
import Communicate from "../../component/aboutme-components/communicate/communicate";
import Circular from '../../img/aboutme_image/circularCup2.jpg'
import Circular2 from '../../img/aboutme_image/circularCup.jpg'

const Brand = () => {
  useEffect(() => {
    const body = document.body;
    const content = document.querySelector(".js-content");
    const blocks = document.querySelectorAll(".block");

    const updateOffset = () => {
      requestAnimationFrame(updateOffset);
      if (content) {
        body.style.setProperty("--y", content.scrollTop);
        updateProps();
      }
    };

    const updateProps = () => {
      let i = -1;
      for (let block of blocks) {
        i += 1;
        let top = blocks[i].getBoundingClientRect().top;
        if (
          top < window.innerHeight * 1.3 &&
          top > window.innerHeight * -1.3
        ) {
          body.style.setProperty(`--yBlock-${i + 1}`, top);
        } else {
          body.style.setProperty(`--yBlock-${i + 1}`, 0);
        }
      }
    };

    updateProps();
    updateOffset();

    return () => {
      cancelAnimationFrame(updateOffset);
    };
  }, []);

  return (
    <>
    <main className="cup-content js-content">
      <section className="block section-intro">
        <div className="item-parallax-content flex-container">
          <div className="centered-content">
            <h4 className="copy copy-white">Brand</h4>
            <h2 className="head-small head-centered">關於我們</h2>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="item-parallax-content flex-container img-grid">
          <figure className="img-gridItem type-right">
            <img
              src={Circular}
              alt=""
            />
            <figcaption className="img-caption">
              <h2 className="content-small">THANK YOU， GOOD THINGS ARE HAPPENING</h2>
              <p className="contenr-small">
              讓好事持續發生，讓所在的環境更美好
              </p>
            </figcaption>
          </figure>
          <figure className="img-gridItem type-left">
            <img
              src={Circular2}
              alt=""
            />
            <figcaption className="img-caption">
            <h2 className="content-small">I start from a low-carbon life.</h2>
              <p className="contenr-small">
              低碳生活從我做起。
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
      </main>
      <BrandCategory />
      <Content />
      <TeaminBox />
      <Communicate />
      </>
  );
};

export default Brand;

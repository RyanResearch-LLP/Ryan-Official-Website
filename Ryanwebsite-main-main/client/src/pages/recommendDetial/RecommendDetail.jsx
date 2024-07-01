import MainLayout from "../../components/MainLayout";
import RecommendDeatailImageSlider from "./container/RecommendImage";
import image1 from "../../files/champion.png";
import image2 from "../../files/image1bg.jpg";
import image3 from "../../files/image2bg.jpg";
import "./recommenddetail.css";
import image4 from '../../../src/files/download.jpg'

const RecommendDetailPage = () => {
  const images = [image1, image2, image3];
  const link = "https://www.instagram.com/";

  return (
    <MainLayout>
      <div className="Recommend-detail-layout">
        <div className="rcm-content-layout">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            molestias, qui quidem sequi, eius dicta explicabo, odit rerum fugit
            vero quibusdam asperiores eum laboriosam eaque numquam. Voluptate
            corporis et ducimus? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quae, nesciunt. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Libero ipsam expedita exercitationem
            deserunt nisi assumenda labore mollitia facere odio. Error cum ab
            earum eos sequi?
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus, hic. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Provident, eligendi? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium, quis. Lorem ipsum dolor sit amet.
          </p>
          <button> Special price for you</button>
        </div>
        <RecommendDeatailImageSlider className="rcm-content-image" images={images} instagramLink={link} />
      </div>
      <section className="rcm-content-detail-layout">
        <div className="rcm-content-detail-left">
          <iframe
            src="https://www.youtube.com/embed/geiGq3ko-zw?si=KJqnpkyI0mcD_tJG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="rcm-content-detail-right">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            aperiam.
          </h1>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
            nulla?
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
            nostrum eaque? Aliquam doloribus qui beatae tenetur provident
            molestias eos? Eveniet nobis harum, officiis repellat ducimus nam
            tempora voluptates aspernatur optio.
          </p>
        </div>
      </section>
      <section className="rcm-ryan-note">
        <div className="rcm-ryan-note-left">
          <img src={image4} alt="" />
        </div>
        <div className="rcm-ryan-note-right">
          <h1>Note from Ryan Fernando</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis accusamus quidem laboriosam pariatur delectus
            consequatur optio, iusto temporibus quas at!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, iure?
          </p>
        </div>
      </section>
      <div style={{height:'50px'}}></div>
    </MainLayout>
  );
};

export default RecommendDetailPage;

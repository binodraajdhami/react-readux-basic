import Slider from "react-slick";

function BannerSection() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section>
            <Slider {...settings}>
                <div className="banner-item">
                    <img src="/images/img1.jpg" alt="" width={"100%"} />
                    <div className="banner-content">
                        <h2>Welcome to Nepal</h2>
                    </div>
                </div>
                <div className="banner-item">
                    <img src="/images/img1.jpg" alt="" width={"100%"} />
                    <div className="banner-content">
                        <h2>Welcome to Nepal</h2>
                    </div>
                </div>
            </Slider>
        </section>
    )
}

export default BannerSection;
import slider1 from '../../assets/1.png'
import slider2 from '../../assets/2.png'
import slider3 from '../../assets/3.png'
import slider4 from '../../assets/4.png'
import slider5 from '../../assets/5.png'
import slider6 from '../../assets/6.png'
// import slider1 from '../../assets/1.jpg'
// import slider2 from '../../assets/2.jpg'
// import slider3 from '../../assets/3.jpg'
// import slider4 from '../../assets/4.jpg'
// import slider5 from '../../assets/5.jpg'
// import slider6 from '../../assets/1.jpg'
const Slider = () => {
    return (
        <div>
            <div className="carousel h-[720px]">
                <div className="carousel-item">
                    <img
                        src={slider1}
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                        src={slider4}
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                       src={slider3}
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                       src={slider2}
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                        src={slider6}
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                        src={slider5}
                        alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                        src={slider1}
                        alt="Burger" />
                </div>
            </div>
        </div>
    );
};

export default Slider;
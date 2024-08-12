import BgVideo from '../../assets/Lake Road.webm'

const Carousel = () => {
    return (
        <div className="">
            <video
                autoPlay
                loop
                muted
                className="right-0 top-0 w-full object-cover z-[-1]"
            >
                <source src={BgVideo} type="video/mp4" />
            </video>
        </div>
    );
};

export default Carousel;
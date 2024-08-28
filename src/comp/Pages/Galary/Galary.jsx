import img1 from '../../../assets/galary/1.jpg'
import img2 from '../../../assets/galary/2.jpg'
import img3 from '../../../assets/galary/3.jpg'
import img4 from '../../../assets/galary/4.jpg'
import img5 from '../../../assets/galary/5.jpg'
import img6 from '../../../assets/galary/6.jpg'
import img7 from '../../../assets/galary/7.jpg'
import img8 from '../../../assets/galary/8.jpg'
import img9 from '../../../assets/galary/9.jpg'
import img10 from '../../../assets/galary/10.jpg'
import img11 from '../../../assets/galary/11.jpg'
import img12 from '../../../assets/galary/12.jpg'
import img13 from '../../../assets/galary/13.jpg'
import img14 from '../../../assets/galary/14.jpg'
import img15 from '../../../assets/galary/15.jpg'

const Galary = () => {
    return (
        <div>
            <div className="w-full relative ">

                <div className="w-fit grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                    <img className="w-[full] rounded" src={img8} alt="" />
                    <img className="w-[full] rounded" src={img11} alt="" />
                    <img className="w-[full] rounded" src={img5} alt="" />

                    <img className="w-[full] rounded" src={img3} alt="" />
                    <img className="w-[full] rounded" src={img1} alt="" />
                    <img className="w-[full] rounded" src={img2} alt="" />

                    <img className="w-[full] rounded" src={img4} alt="" />
                    <img className="w-[full] rounded" src={img12} alt="" />
                    <img className="w-[full] rounded" src={img7} alt="" />

                    <img className="w-[full] rounded" src={img9} alt="" />
                    <img className="w-[full] rounded" src={img10} alt="" />
                    <img className="w-[full] rounded" src={img6} alt="" />

                    <img className="w-[full] rounded" src={img13} alt="" />
                    <img className="w-[full] rounded" src={img15} alt="" />
                    <img className="w-[full] rounded" src={img14} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Galary;
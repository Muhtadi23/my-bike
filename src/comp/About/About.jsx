import aboutpic from '../../assets/IMG_5724-03.jpeg'


const About = () => {
    return (
        <div id='about' className='mx-auto lg:flex md:flex-row sm:flex-col items-center mt-14 gap-14 p-4'>
            <div><img className='rounded-lg' src={aboutpic} alt="" /></div>

            <div className=''>
                <h3 className='text-3xl font-bold mb-4 mt-6'>About Me</h3>
                <h2 className='text-5xl font-bold mb-6'>Hello! <span className='text-[#eb4034]'>I am Miran Muhtadi</span></h2>
                <p className='font-bold'>An enthusiastic beginner with a growing passion for web development and an eagerness to learn. Seeking an entry-level position in Front-end Development to gain hands-on experience, build skills, and contribute to web projects while under the guidance of experienced professionals
                </p>
            </div>



        </div>
    );
};

export default About;
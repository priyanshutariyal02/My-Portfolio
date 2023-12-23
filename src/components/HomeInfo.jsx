import { Link } from "react-router-dom";
import { mylogo } from "../assets/images"
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <div className="flex flex-row gap-1">

                <div>
                    <img
                        src={mylogo}
                        alt='logo'
                        className="w-16 h-16 object-contain"
                    />
                </div>
                <div>
                    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                        Hi, I'm
                        <span className='font-semibold mx-2 text-white'>Priyanshu Tariyal</span>
                        👋
                        <br />
                        Aspiring Software Engineer from India
                    </h1>
                </div>
            </div>
        );

    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    To seek an opportunity for skill enhancement, learning new skills and expending my knowledge while contributing to the organization's growth.
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    Learn more
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-xl'>
                    Led multiple projects to success over the years. <br /> Curious about the impact?
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    Visit my portfolio
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
                </p>

                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                    Let's talk
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    return null;
};

export default HomeInfo;
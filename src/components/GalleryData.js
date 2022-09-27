import logo from '../assets/photo.jpg';
import logo1 from '../assets/photo.jpg';
import logo2 from '../assets/photo.jpg';
import logo3 from '../assets/photo.jpg';
import logo4 from '../assets/photo.jpg';
import logo5 from '../assets/photo.jpg';
import logo6 from '../assets/photo.jpg';
import logo7 from '../assets/photo.jpg';
import logo8 from '../assets/photo.jpg';
import logo9 from '../assets/photo.jpg';
import logo10 from '../assets/photo.jpg';
import logo11 from '../assets/photo.jpg';
import logo12 from '../assets/photo.jpg';
import logo13 from '../assets/photo.jpg';
import logo14 from '../assets/photo.jpg';


//import '../components/GallerData.css';
const GalleryData = () => {
    return ( 
        <>
            
            <h1>Innobuzz Gallery</h1>
            <div class="wrapper">
   
    <nav>

        <div class="items">
         <span class="item active" data-name="all">All</span>
         <span class="item" data-name="innobuzz2019">innobuzz2019</span>
                        <span class="item" data-name="innobuzz2020">innobuzz2020</span>
                    </div>
                    </nav>
        <div className="gallery">
            
            <div>
            <img src={logo} alt="Logo" className="" />
            </div>
            <div>
            <img src={logo1} alt="Logo" className="photo" />
            </div>
            <div>
            <img src={logo2} alt="Logo" className="photo" />
            </div>
            <div>
            <img src={logo3} alt="Logo" className="photo" />
            </div>
            <div>
            <img src={logo4} alt="Logo" className="photo" />
                </div>
                <div>
            <img src={logo5} alt="Logo" className="photo" />
                </div>
                <div>
            <img src={logo6} alt="Logo" className="photo" />
                </div>
                <div>
            <img src={logo7} alt="Logo" className="photo" />
                </div>
                <div>
            <img src={logo8} alt="Logo" className="photo" />
                </div>
                <div>
            <img src={logo9} alt="Logo" className="photo" />
                </div>
                <div>
            <img src={logo10} alt="Logo" className="photo" />
                </div>
                <div>
            <img src={logo11} alt="Logo" className="photo" />
                </div>
                <div>
            <img src={logo12} alt="Logo" className="photo" />
                </div>
                <div>
            <img src={logo13} alt="Logo" className="photo" />
                </div>
                <div>
            <img src={logo14} alt="Logo" className="" />
            </div>
                </div>
                </div>
</>
     );
}
 
export default GalleryData;
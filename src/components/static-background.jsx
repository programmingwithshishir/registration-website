import background_potrait from "../assets/background_potrait.jpg"
import background_landscape from "../assets/background_landscape.jpg"

const StaticBackground = () => {
    return ( 
        <div className="fixed overflow-hidden select-none -z-10 h-screen w-screen bg-gray-800">
            <img className="h-full w-full opacity-50 object-cover block md:hidden" src={background_potrait} />
            <img className="h-full w-full opacity-50 object-cover hidden md:block" src={background_landscape} />
        </div>
    );
}
 
export default StaticBackground;
import architectureImg from "../../imges/WhatsApp-Image-2024-08-05-at-15.10.32_d1d83d1b.jpg";
import StructureImg from "../../imges/WhatsApp-Image-2024-08-05-at-15.10.43_0493ab0b.jpg";
import HomeDecorImg from "../../imges/WhatsApp-Image-2024-08-05-at-15.10.41_ec56d192.jpg";
export default function Work() {
  return (
    <div> <div className="w-full p-10 relative">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 relative">
      {/* Architecture Section */}
      <div className="lg:w-1/3 flex flex-col">
        <div
          id="work-a"
          className="p-6 rounded-3xl overflow-hidden flex flex-col justify-between relative group transform hover:scale-105 transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${architectureImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "300px",
          }}
        >
          {/* Hover Effect and Details */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <h5 className="text-2xl font-bold">Architecture</h5>
            <p className="text-lg text-center mt-2">
              ASH, it all begins with architecture. Our architects turn your
              vision into a perfect design, ensuring every detail reflects
              your dream home.
            </p>
          </div>
        </div>
      </div>
      {/* Structure Section */}
      <div className="lg:w-1/3 flex flex-col">
        <div
          id="work-b"
          className="p-6 rounded-3xl overflow-hidden flex flex-col justify-between relative group transform hover:scale-105 hover:rotate-3 transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${StructureImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "300px",
          }}
        >
          {/* Hover Effect and Details */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <h5 className="text-2xl font-bold">Structure</h5>
            <p className="text-lg text-center mt-2">
              The structure is the backbone. We build solid, durable
              frameworks that bring the design to life, ensuring safety and
              long-lasting quality.
            </p>
          </div>
        </div>
      </div>
      {/* Home Decor Section */}
      <div className="lg:w-1/3 flex flex-col">
        <div
          id="work-c"
          className="p-6 rounded-3xl overflow-hidden flex flex-col justify-between relative group transform hover:scale-105 hover:rotate-3 transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${HomeDecorImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "300px",
          }}
        >
          {/* Hover Effect and Details */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <h5 className="text-2xl font-bold">Home Decor</h5>
            <p className="text-lg text-center mt-2">
              Our home decor team adds the personal touch, selecting the
              right colors and furniture to create a space that feels
              uniquely yours.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

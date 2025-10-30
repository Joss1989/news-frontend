import { getWeather } from "@/data/weatherData";
import { WiDaySunny } from "react-icons/wi";

const Vejr = async () => {
  
  const weather = await getWeather();

  const forecast = [
    { day: "Mandag", temp: 14, icon: "🌤️" },
    { day: "Tirsdag", temp: 12, icon: "⛅" },
    { day: "Onsdag", temp: 12, icon: "🌥️" },
    { day: "Torsdag", temp: 13, icon: "🌤️" },
    { day: "Fredag", temp: 16, icon: "☀️" },
    { day: "Lørdag", temp: 17, icon: "☀️" },
  ];

  return (
    <section className="col-span-4 gap-x-2 text-white px-5  ">
        <section className="grid grid-cols-4 gap-2 bg-[#00bae8]">
          <section className="flex flex-col">
            <div className="flex justify-between items-baseline">
              <h2 className="text-2xl font-bold">{weather.name}</h2>
              <small>12. april kl. 13:35</small>
            </div>
            <div className="flex flex-col items-center my-auto">
              <p className="text-[5rem] font-bold">{Math.round(weather.main.temp)}°</p>
              <p className="">Overskyet</p>
            </div>
          </section>
            <section className="flex flex-col">
              <p className="text-[13rem] m-auto"><WiDaySunny /></p>
              <section className="flex justify-between  mt-auto">
                <p className="text-center">Morgen 8°</p>
                <p className="text-center">Middag 12°</p>
                <p className="text-center">Aften 10°</p>
                <p className="text-center">Nat 5°</p>
              </section>
            </section>
          <section>
          {forecast.map(({ day, temp, icon }) => (
            <div
              key={day}
              className="flex justify-between items-center bg-[#00bae8] rounded-md px-4 py-2"
            >
              <div>{day}</div>
              <div>{temp}°</div>
              <div>{icon}</div>
            </div>
          ))}
        </section>
        </section>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#00aae8] rounded-lg p-4 font-bold flex flex-col">
            <span>Vind</span>
            <span className="text-2xl">
              {Math.round(weather.wind.speed)} m/s
            </span>
          </div>
          <div className="bg-[#00aae8] rounded-lg p-4 font-bold flex flex-col">
            <span>Chance for regn</span>
            <span className="text-2xl">12%</span>
          </div>
          <div className="bg-[#00aae8] rounded-lg p-4 font-bold flex flex-col">
            <span>Luftfugtighed</span>
            <span className="text-2xl">{weather.main.humidity}%</span>
          </div>
          <div className="bg-[#00aae8] rounded-lg p-4 font-bold flex flex-col">
            <span>UV indeks</span>
            <span className="text-2xl">0.5</span>
          </div>
        </div>
    </section>
  );
};

export default Vejr;

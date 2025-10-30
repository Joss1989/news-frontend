import { getWeather } from "@/data/weatherData";

const Vejr = async () => {
  const weatherData = await getWeather();
  const { dt_txt, main, weather, clouds, wind } = weatherData.list[0];

  return (
    <section className="grid grid-cols-3 col-span-4 gap-2 text-white my-10">
      <section className="grid grid-cols-2 col-span-2 gap-2 p-2 bg-[#00bae8]">
        <section className="flex flex-col">
          <div className="flex justify-between items-baseline">
            <h2 className="text-2xl font-bold">{weatherData.city.name}</h2>
            <small>
              {new Date(dt_txt).toLocaleTimeString("da-DK", {
                day: "numeric",
                month: "long",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
          <div className="flex flex-col items-center my-auto">
            <p className="text-[5rem] font-bold">
              {Math.round(main.temp)}&deg;
            </p>
            <p className="">{weather[0].description}</p>
          </div>
        </section>
        <section className="flex flex-col">
          <figure className="m-auto">
            <img
              src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
              alt=""
            />
          </figure>
          <ol className="flex justify-between  mt-auto">
            {weatherData.list
              .filter((_, index) => index % 2 === 0)
              .slice(0, 4)
              .map((item, index) => (
                <li
                  className="flex flex-col text-center capitalize"
                  key={index}
                >
                  <strong className="text-xs">
                    {new Date(item.dt_txt)
                      .toLocaleString("da-DK", {
                        dayPeriod: "long",
                      })
                      .slice(2)}
                  </strong>
                  <small>{Math.round(item.main.temp)}&deg;</small>
                </li>
              ))}
          </ol>
        </section>
      </section>
      <div className="bg-[#00bae8] p-4 font-bold flex flex-wrap gap-10">
        <span className="basis-full">Vind</span>
        <span className="mt-auto">m/s</span>
        <span className="ml-auto text-2xl">{Math.round(wind.speed)}</span>
      </div>
      <div className="bg-[#00bae8] p-4 font-bold flex flex-wrap gap-10">
        <span className="basis-full">Chance for regn</span>
        <span className="mt-auto">%</span>
        <span className="ml-auto text-2xl">{clouds.all}</span>
      </div>
      <div className="bg-[#00bae8] p-4 font-bold flex flex-wrap gap-10">
        <span className="basis-full">Luftfugtighed</span>
        <span className="mt-auto">%</span>
        <span className="ml-auto text-2xl">{main.humidity}</span>
      </div>
      <div className="bg-[#00bae8] p-4 font-bold flex flex-wrap gap-10">
        <span className="basis-full">UV indeks</span>
        <span className="ml-auto text-2xl">0.5</span>
      </div>
      <section className="flex flex-col justify-between col-start-3 row-start-1 row-span-3 bg-[#00bae8] px-4 py-2">
        {weatherData.list
          .filter((_, index) => index % 8 === 0)
          .map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-between items-center"
            >
              <div className="capitalize">
                {new Date(item.dt_txt).toLocaleDateString("da-DK", {
                  weekday: "long",
                })}
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
                alt=""
              />
              <div>{Math.round(item.main.temp)} &deg;</div>
              <div>{Math.round(item.main.temp_max)} &deg;</div>
              <div>{Math.round(item.main.temp_min)} &deg;</div>
              <div>{Math.round(item.main.feels_like)} &deg;</div>
              <small className="basis-full text-cyan-800">
                {new Date(item.dt_txt).toLocaleString("da-Dk", {
                  day: "2-digit",
                  month: "short",
                })}
              </small>
            </div>
          ))}
      </section>
    </section>
  );
};

export default Vejr;

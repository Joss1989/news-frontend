import { getWeather } from "@/data/weatherData"; // Importerer funktionen til at hente vejrdata fra den eksterne kilde.

const Vejr = async () => {
  // Henter vejrdata ved hjælp af den asynkrone getWeather funktion.
  const weatherData = await getWeather();

  // Destrukturering af data fra den første vejropdatering i listen (dvs. den aktuelle tid).
  const { dt_txt, main, weather, clouds, wind } = weatherData.list[0];

  return (
    <section className="grid grid-cols-3 col-span-4 gap-2 text-white my-10">
      {/* Sektion for de overordnede vejrdata */}
      <section className="grid grid-cols-2 col-span-2 gap-2 p-2 bg-[#00bae8]">
        {/* Venstre sektion med bynavn og tid */}
        <section className="flex flex-col">
          <div className="flex justify-between items-baseline">
            {/* Byens navn vises */}
            <h2 className="text-2xl font-bold">{weatherData.city.name}</h2>
            {/* Vist tidspunkt (den aktuelle tid, formateret til dansk) */}
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
            {/* Vist temperatur (afrundet til nærmeste heltal) */}
            <p className="text-[5rem] font-bold">
              {Math.round(main.temp)}&deg;
            </p>
            {/* Vist beskrivelse af vejret (f.eks. solskin, regn, osv.) */}
            <p className="">{weather[0].description}</p>
          </div>
        </section>

        {/* Højre sektion med vejrikon og mini-prognose */}
        <section className="flex flex-col">
          <figure className="m-auto">
            {/* Vejr ikon for den nuværende vejrtilstand (f.eks. sol, regn, skyet) */}
            <img
              src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
              alt="Vejrikon"
            />
          </figure>

          <ol className="flex justify-between mt-auto">
            {/* Vist mini-prognose for de kommende timer (hver 3. time) */}
            {weatherData.list
              .filter((_, index) => index % 2 === 0) // Filtrerer ud for at vise hver anden opdatering (hver 3. time)
              .slice(0, 4) // Viser kun de første 4 tidspladser (op til ca. 12 timers prognose)
              .map((item, index) => (
                <li
                  className="flex flex-col text-center capitalize"
                  key={index}
                >
                  {/* Vist dag og tidspunkt */}
                  <strong className="text-xs">
                    {new Date(item.dt_txt)
                      .toLocaleString("da-DK", {
                        dayPeriod: "long", // F.eks. "Formiddag" eller "Eftermiddag"
                      })
                      .slice(2)} {/* Fjern "i dag" eller "kl." fra datoen */}
                  </strong>
                  {/* Vist temperatur på dette tidspunkt */}
                  <small>{Math.round(item.main.temp)}&deg;</small>
                </li>
              ))}
          </ol>
        </section>
      </section>

      {/* Sektioner med yderligere vejrinformation */}
      {/* Vindhastighed */}
      <div className="bg-[#00bae8] p-4 font-bold flex flex-wrap gap-10">
        <span className="basis-full">Vind</span>
        <span className="mt-auto">m/s</span>
        <span className="ml-auto text-2xl">{Math.round(wind.speed)}</span>
      </div>

      {/* Chance for regn */}
      <div className="bg-[#00bae8] p-4 font-bold flex flex-wrap gap-10">
        <span className="basis-full">Chance for regn</span>
        <span className="mt-auto">%</span>
        <span className="ml-auto text-2xl">{clouds.all}</span> {/* Procent chance for regn */}
      </div>

      {/* Luftfugtighed */}
      <div className="bg-[#00bae8] p-4 font-bold flex flex-wrap gap-10">
        <span className="basis-full">Luftfugtighed</span>
        <span className="mt-auto">%</span>
        <span className="ml-auto text-2xl">{main.humidity}</span> {/* Procent luftfugtighed */}
      </div>

      {/* UV-indeks (hardcoded som 0.5 for nu) */}
      <div className="bg-[#00bae8] p-4 font-bold flex flex-wrap gap-10">
        <span className="basis-full">UV indeks</span>
        <span className="ml-auto text-2xl">0.5</span> {/* Hardcoded UV-indeks (kan være variabelt) */}
      </div>

      {/* Prognose for de kommende dage */}
      <section className="flex flex-col justify-between col-start-3 row-start-1 row-span-3 bg-[#00bae8] px-4 py-2">
        {weatherData.list
          .filter((_, index) => index % 8 === 0) // Filtrerer data og viser kun én opdatering pr. dag (hver 8. time)
          .map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-between items-center"
            >
              {/* Ugedag (f.eks. mandag, tirsdag osv.) */}
              <div className="capitalize">
                {new Date(item.dt_txt).toLocaleDateString("da-DK", {
                  weekday: "long", // Formatér som ugedag (f.eks. mandag, tirsdag osv.)
                })}
              </div>

              {/* Vejr ikon for den pågældende dag */}
              <img
                src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
                alt="Vejr ikon"
              />
              
              {/* Vist temperatur: nuværende, max, min og føles som */}
              <div>{Math.round(item.main.temp)} &deg;</div>
              <div>{Math.round(item.main.temp_max)} &deg;</div>
              <div>{Math.round(item.main.temp_min)} &deg;</div>
              <div>{Math.round(item.main.feels_like)} &deg;</div>

              {/* Vist dato for den pågældende dag (f.eks. 01-okt) */}
              <small className="basis-full text-cyan-800">
                {new Date(item.dt_txt).toLocaleString("da-Dk", {
                  day: "2-digit", // Formaterer datoen som dag (01)
                  month: "short", // Kort måned (okt)
                })}
              </small>
            </div>
          ))}
      </section>
    </section>
  );
};

export default Vejr; // Eksporterer komponenten som default

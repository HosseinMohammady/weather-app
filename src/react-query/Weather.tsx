import { useRef } from "react";
import useWheather from "./hooks/useWheather";
import weatherConditions from "./weatherCondition";
import { IoSearch } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";

const Weather = () => {
  const { data } = useWheather();

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="leading-7 w-screen h-screen flex flex-row justify-center items-center">
        <div
          className="lg:w-4/12 lg:h-5/6 min-[320px]:w-screen min-[320px]:h-screen p-6 flex flex-col lg:justify-between min-[320px]:justify-around items-center text-slate-200 max-[500px]:gap-10 max-[500px]:overflow-auto"
          style={{
            backgroundColor: data?.weather[0].icon[2] === "d" ? "blue" : "#222",
          }}
        >
          <div className="w-full flex flex-row justify-between items-center min-[320px]:gap-7 lg:gap-0">
            <label className="input text-[#555] shadow-[0_0_2px_lightgray] flex items-center bg-slate-200 gap-2 w-5/6 outline-none">
              <input ref={inputRef} type="text" placeholder="Enter a city" />
            </label>
            <button
              className="btn btn-circle btn-outline bg-slate-200 text-[#555] hover:bg-zinc-400 hover:text-zinc-200"
              onClick={() => {
                window.location.replace(`?q=${inputRef.current?.value}`);
              }}
            >
              <IoSearch size={20} />
            </button>
          </div>

          <div className="h-[34%]">{weatherConditions()}</div>

          <div className="w-full h-[22%] flex flex-col justify-between items-center max-[500px]:gap-10">
            {data?.main.temp ? (
              <div className="flex flex-row items-center">
                <h1 className="text-[5.2rem] ">
                  {(data?.main.temp - 273.15).toFixed() + "°"}
                </h1>
                <h2 className="text-[4.2rem]">C</h2>
              </div>
            ) : null}
            <div>
              <p className="text-4xl">
                {data?.weather ? data.weather[0].main : null}
              </p>
            </div>
          </div>

          <div className="w-full h-[10%] flex flex-col justify-between items-center">
            <p className="text-xl">{data?.name ? data.name : null}</p>
            <p className="text-base">{data?.sys.country}</p>
          </div>

          <div className="w-full flex flex-row justify-between">
            {data?.main.humidity ? (
              <div className="flex flex-row">
                <div>
                  <WiHumidity size={52} />
                </div>
                <div>
                  <p className="text-[1.4rem] font-semibold">
                    {data?.main.humidity ? data.main.humidity + "%" : null}
                  </p>
                  <p className="text-base font-medium">Humidity</p>
                </div>
              </div>
            ) : null}
            {data?.wind.speed ? (
              <div className="flex flex-row">
                <div>
                  <WiStrongWind size={52} />
                </div>
                <div>
                  <p className="text-[1.4rem] font-semibold">
                    {data?.wind.speed
                      ? (data?.wind.speed * 3.6).toFixed() + "km/h"
                      : null}
                  </p>
                  <p className="text-base font-medium">Wind speed</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;

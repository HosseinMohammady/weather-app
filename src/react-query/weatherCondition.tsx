import useWheather from "./hooks/useWheather";
import { WiDaySunny } from "react-icons/wi";
import { WiMoonWaningCrescent3 } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiNightAltCloudy } from "react-icons/wi";
import { WiCloud } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiShowers } from "react-icons/wi";
import { WiDayShowers } from "react-icons/wi";
import { WiNightAltShowers } from "react-icons/wi";
import { WiDayLightning } from "react-icons/wi";
import { WiNightLightning } from "react-icons/wi";
import { FaRegSnowflake } from "react-icons/fa6";
import { WiDust } from "react-icons/wi";

const weatherConditions = () => {
  const { data } = useWheather();
  if (data?.weather[0].icon === "01d") return <WiDaySunny size={200} />;
  else if (data?.weather[0].icon === "01n")
    return <WiMoonWaningCrescent3 size={200} />;
  else if (data?.weather[0].icon === "02d") return <WiDayCloudy size={200} />;
  else if (data?.weather[0].icon === "02n")
    return <WiNightAltCloudy size={200} />;
  else if (data?.weather[0].icon === "03d") return <WiCloud size={200} />;
  else if (data?.weather[0].icon === "03n") return <WiCloud size={200} />;
  else if (data?.weather[0].icon === "04d") return <WiCloudy size={200} />;
  else if (data?.weather[0].icon === "04n") return <WiCloudy size={200} />;
  else if (data?.weather[0].icon === "09d") return <WiShowers size={200} />;
  else if (data?.weather[0].icon === "09n") return <WiShowers size={200} />;
  else if (data?.weather[0].icon === "10d") return <WiDayShowers size={200} />;
  else if (data?.weather[0].icon === "10n")
    return <WiNightAltShowers size={200} />;
  else if (data?.weather[0].icon === "11d")
    return <WiDayLightning size={200} />;
  else if (data?.weather[0].icon === "11n")
    return <WiNightLightning size={200} />;
  else if (data?.weather[0].icon === "13d")
    return <FaRegSnowflake size={200} />;
  else if (data?.weather[0].icon === "13n")
    return <FaRegSnowflake size={200} />;
  else if (data?.weather[0].icon === "50d") return <WiDust size={200} />;
  else if (data?.weather[0].icon === "50n") return <WiDust size={200} />;
  else return null;
};

export default weatherConditions;

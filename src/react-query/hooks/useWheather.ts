import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface weatherInfo {
  id: number;
  name: string;
  weather: [
    {
      main: string;
      icon: string;
    }
  ];
  main: {
    humidity: number;
    temp: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
}

const useWheather = () => {
  const city = window.location.search;
  return useQuery<weatherInfo>({
    queryKey: [`wheather_${city}`],
    queryFn: () =>
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather${city}&appid=4f8e0de7304c8fe7867d34bfd903451a`
        )
        .then((res) => res.data),
  });
};

export default useWheather;

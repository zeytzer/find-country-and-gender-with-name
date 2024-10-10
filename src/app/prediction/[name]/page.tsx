import Link from "next/link";

const getPrediction = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

interface Params {
  params: { name: string };
}

export default async function Page({ params }: Params) {
  const [age, gender, country, countryCodes] = await Promise.all([
    getPrediction(`https://api.agify.io/?name=${params.name}`),
    getPrediction(`https://api.genderize.io/?name=${params.name}`),
    getPrediction(`https://api.nationalize.io/?name=${params.name}`),
    getPrediction(
      `https://gist.githubusercontent.com/ssskip/5a94bfcd2835bf1dea52/raw/3b2e5355eb49336f0c6bc0060c05d927c2d1e004/ISO3166-1.alpha2.json`
    ),
  ]);

  return (
    <div className="flex items-center justify-center flex-col w-screen min-h-screen pb-10 gap-8 sm:pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] uppercase select-none">
      <div className="flex items-center justify-center flex-col bg-black gap-10 w-full sm:w-screen max-h-lg sm:max-h-[600px] p-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          Name: {age?.name}
        </h1>
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          Country Name: {countryCodes[country?.country[0]?.country_id]}
        </h1>
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          Gender: {gender?.gender}
        </h1>
      </div>
      <Link href="/">
        <button
          type="submit"
          className="text-center text-lg sm:text-2xl border-2 border-white p-4 h-16 w-48 sm:h-20 sm:w-60 rounded-2xl hover:bg-white hover:text-black"
        >
          GO BACK
        </button>
      </Link>
    </div>
  );
}

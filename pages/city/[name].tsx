import Link from "next/link";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { City } from "../../src/components/City";
import { withClient } from "../../src/graphql/client";

type CityNamePageProps = {
  cities: string[];
};

const CityNamePage: NextPage<CityNamePageProps> = ({ cities }) => {
  const router = useRouter();

  if (typeof router.query.name !== "string") {
    return null;
  }

  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        {cities.map((city) => (
          <Link key={city} href={`/city/${encodeURIComponent(city)}`}>
            {city}
          </Link>
        ))}
      </div>
      <City name={router.query.name} />
    </div>
  );
};

CityNamePage.getInitialProps = async () => {
  return {
    cities: ["Berlin", "Moscow"],
  };
};

// @ts-expect-error next-apollo types are broken.
export default withClient({ ssr: true })(CityNamePage);

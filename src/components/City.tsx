import { useCityByNameQuery } from "../graphql/hooks";

export type CityProps = {
  name: string;
};

export const City = ({ name }: CityProps) => {
  const { data } = useCityByNameQuery({
    variables: {
      name,
    },
  });

  return <div>{data?.getCityByName?.name}</div>;
};

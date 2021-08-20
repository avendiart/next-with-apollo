import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export const CacheControlScope = {
  Public: "PUBLIC",
  Private: "PRIVATE",
} as const;

export type CacheControlScope =
  typeof CacheControlScope[keyof typeof CacheControlScope];
export type City = {
  __typename?: "City";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  coord?: Maybe<Coordinates>;
  weather?: Maybe<Weather>;
};

export type Clouds = {
  __typename?: "Clouds";
  all?: Maybe<Scalars["Int"]>;
  visibility?: Maybe<Scalars["Int"]>;
  humidity?: Maybe<Scalars["Int"]>;
};

export type ConfigInput = {
  units?: Maybe<Unit>;
  lang?: Maybe<Language>;
};

export type Coordinates = {
  __typename?: "Coordinates";
  lon?: Maybe<Scalars["Float"]>;
  lat?: Maybe<Scalars["Float"]>;
};

export const Language = {
  Af: "af",
  Al: "al",
  Ar: "ar",
  Az: "az",
  Bg: "bg",
  Ca: "ca",
  Cz: "cz",
  Da: "da",
  De: "de",
  El: "el",
  En: "en",
  Eu: "eu",
  Fa: "fa",
  Fi: "fi",
  Fr: "fr",
  Gl: "gl",
  He: "he",
  Hi: "hi",
  Hr: "hr",
  Hu: "hu",
  Id: "id",
  It: "it",
  Ja: "ja",
  Kr: "kr",
  La: "la",
  Lt: "lt",
  Mk: "mk",
  No: "no",
  Nl: "nl",
  Pl: "pl",
  Pt: "pt",
  PtBr: "pt_br",
  Ro: "ro",
  Ru: "ru",
  Sv: "sv",
  Se: "se",
  Sk: "sk",
  Sl: "sl",
  Sp: "sp",
  Es: "es",
  Sr: "sr",
  Th: "th",
  Tr: "tr",
  Ua: "ua",
  Uk: "uk",
  Vi: "vi",
  ZhCn: "zh_cn",
  ZhTw: "zh_tw",
  Zu: "zu",
} as const;

export type Language = typeof Language[keyof typeof Language];
export type Query = {
  __typename?: "Query";
  getCityByName?: Maybe<City>;
  getCityById?: Maybe<Array<Maybe<City>>>;
};

export type QueryGetCityByNameArgs = {
  name: Scalars["String"];
  country?: Maybe<Scalars["String"]>;
  config?: Maybe<ConfigInput>;
};

export type QueryGetCityByIdArgs = {
  id?: Maybe<Array<Scalars["String"]>>;
  config?: Maybe<ConfigInput>;
};

export type Summary = {
  __typename?: "Summary";
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
};

export type Temperature = {
  __typename?: "Temperature";
  actual?: Maybe<Scalars["Float"]>;
  feelsLike?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  max?: Maybe<Scalars["Float"]>;
};

export const Unit = {
  Metric: "metric",
  Imperial: "imperial",
  Kelvin: "kelvin",
} as const;

export type Unit = typeof Unit[keyof typeof Unit];

export type Weather = {
  __typename?: "Weather";
  summary?: Maybe<Summary>;
  temperature?: Maybe<Temperature>;
  wind?: Maybe<Wind>;
  clouds?: Maybe<Clouds>;
  timestamp?: Maybe<Scalars["Int"]>;
};

export type Wind = {
  __typename?: "Wind";
  speed?: Maybe<Scalars["Float"]>;
  deg?: Maybe<Scalars["Int"]>;
};

export type CityByNameQueryVariables = Exact<{
  name: Scalars["String"];
}>;

export type CityByNameQuery = {
  __typename?: "Query";
  getCityByName?: Maybe<{
    __typename?: "City";
    id?: Maybe<string>;
    name?: Maybe<string>;
  }>;
};

export const CityByNameDocument = gql`
  query CityByName($name: String!) {
    getCityByName(name: $name) {
      id
      name
    }
  }
`;

/**
 * __useCityByNameQuery__
 *
 * To run a query within a React component, call `useCityByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useCityByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCityByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCityByNameQuery(
  baseOptions: Apollo.QueryHookOptions<
    CityByNameQuery,
    CityByNameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CityByNameQuery, CityByNameQueryVariables>(
    CityByNameDocument,
    options
  );
}
export function useCityByNameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CityByNameQuery,
    CityByNameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CityByNameQuery, CityByNameQueryVariables>(
    CityByNameDocument,
    options
  );
}
export type CityByNameQueryHookResult = ReturnType<typeof useCityByNameQuery>;
export type CityByNameLazyQueryHookResult = ReturnType<
  typeof useCityByNameLazyQuery
>;
export type CityByNameQueryResult = Apollo.QueryResult<
  CityByNameQuery,
  CityByNameQueryVariables
>;

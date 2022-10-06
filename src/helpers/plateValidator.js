const PLATES_RULES_DE = [/[a-z]{1,3}\s?[a-z]{1,2}\s?\d{1,4}$/i];
const PLATES_RULES_FR = [/[a-z]{2}-\d{3}-[a-z]{2}$/i];
const PLATES_RULES_CH = [/[a-z]{2}\s?\d{6}$/i];
const PLATES_RULES_AT = [/[a-z]{2}\s?[a-z0-9]{3,6}$/i];

const countryValidatorMapping = {
  DE: PLATES_RULES_DE,
  FR: PLATES_RULES_FR,
  CH: PLATES_RULES_CH,
  AT: PLATES_RULES_AT
};

export const isPlateValid = (country, number) => {
  return countryValidatorMapping[country].some((rule) => rule.test(number));
};

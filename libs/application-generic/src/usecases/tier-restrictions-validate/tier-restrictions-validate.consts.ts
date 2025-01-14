export const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
export const FREE_TIER_MAX_DELAY_DAYS = 30;
export const BUSINESS_TIER_MAX_DELAY_DAYS = 90;
export const MAX_DELAY_FREE_TIER =
  FREE_TIER_MAX_DELAY_DAYS * MILLISECONDS_IN_DAY; // 30 days in milliseconds
export const MAX_DELAY_BUSINESS_TIER =
  BUSINESS_TIER_MAX_DELAY_DAYS * MILLISECONDS_IN_DAY; // 90 days in milliseconds

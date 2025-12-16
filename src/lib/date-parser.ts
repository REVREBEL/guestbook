/**
 * Date Parser Utility
 * 
 * Parses various date formats and returns ISO string for CMS.
 * Defaults to day 1 if not provided.
 * 
 * Supported formats:
 * - "June 1990" → 1990-06-01
 * - "06/01/2025" → 2025-06-01
 * - "06/01/25" → 2025-06-01
 * - "June 1 2025" → 2025-06-01
 * - "June 2025" → 2025-06-01 (defaults to day 1)
 */

const MONTH_NAMES: Record<string, number> = {
  'january': 1, 'jan': 1,
  'february': 2, 'feb': 2,
  'march': 3, 'mar': 3,
  'april': 4, 'apr': 4,
  'may': 5,
  'june': 6, 'jun': 6,
  'july': 7, 'jul': 7,
  'august': 8, 'aug': 8,
  'september': 9, 'sep': 9, 'sept': 9,
  'october': 10, 'oct': 10,
  'november': 11, 'nov': 11,
  'december': 12, 'dec': 12
};

export interface ParsedDate {
  year: number;
  month: number;
  day: number;
  iso: string;
}

/**
 * Parse a date string in various formats
 */
export function parseFlexibleDate(input: string): ParsedDate | null {
  if (!input || typeof input !== 'string') {
    return null;
  }

  const trimmed = input.trim();
  
  // Try ISO format first (2025-06-01)
  if (/^\d{4}-\d{2}-\d{2}/.test(trimmed)) {
    const date = new Date(trimmed);
    if (!isNaN(date.getTime())) {
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        iso: date.toISOString()
      };
    }
  }

  // Try slash format (MM/DD/YYYY or MM/DD/YY)
  const slashMatch = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
  if (slashMatch) {
    const [, monthStr, dayStr, yearStr] = slashMatch;
    let year = parseInt(yearStr, 10);
    const month = parseInt(monthStr, 10);
    const day = parseInt(dayStr, 10);

    // Handle 2-digit years
    if (year < 100) {
      year = year < 30 ? 2000 + year : 1900 + year;
    }

    if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      const date = new Date(year, month - 1, day);
      return {
        year,
        month,
        day,
        iso: date.toISOString()
      };
    }
  }

  // Try "Month Year" format (June 1990)
  const monthYearMatch = trimmed.match(/^([a-z]+)\s+(\d{4})$/i);
  if (monthYearMatch) {
    const [, monthName, yearStr] = monthYearMatch;
    const month = MONTH_NAMES[monthName.toLowerCase()];
    const year = parseInt(yearStr, 10);

    if (month && year >= 1900 && year <= 2100) {
      const date = new Date(year, month - 1, 1); // Default to day 1
      return {
        year,
        month,
        day: 1,
        iso: date.toISOString()
      };
    }
  }

  // Try "Month Day Year" format (June 1 2025)
  const monthDayYearMatch = trimmed.match(/^([a-z]+)\s+(\d{1,2})\s+(\d{4})$/i);
  if (monthDayYearMatch) {
    const [, monthName, dayStr, yearStr] = monthDayYearMatch;
    const month = MONTH_NAMES[monthName.toLowerCase()];
    const day = parseInt(dayStr, 10);
    const year = parseInt(yearStr, 10);

    if (month && day >= 1 && day <= 31 && year >= 1900 && year <= 2100) {
      const date = new Date(year, month - 1, day);
      return {
        year,
        month,
        day,
        iso: date.toISOString()
      };
    }
  }

  // Try "Month Day, Year" format (June 1, 2025)
  const monthDayCommaYearMatch = trimmed.match(/^([a-z]+)\s+(\d{1,2}),?\s+(\d{4})$/i);
  if (monthDayCommaYearMatch) {
    const [, monthName, dayStr, yearStr] = monthDayCommaYearMatch;
    const month = MONTH_NAMES[monthName.toLowerCase()];
    const day = parseInt(dayStr, 10);
    const year = parseInt(yearStr, 10);

    if (month && day >= 1 && day <= 31 && year >= 1900 && year <= 2100) {
      const date = new Date(year, month - 1, day);
      return {
        year,
        month,
        day,
        iso: date.toISOString()
      };
    }
  }

  // Try just year (1990)
  const yearMatch = trimmed.match(/^(\d{4})$/);
  if (yearMatch) {
    const year = parseInt(yearMatch[1], 10);
    if (year >= 1900 && year <= 2100) {
      const date = new Date(year, 0, 1); // January 1
      return {
        year,
        month: 1,
        day: 1,
        iso: date.toISOString()
      };
    }
  }

  // Failed to parse
  console.warn('Failed to parse date:', trimmed);
  return null;
}

/**
 * Parse a date string and return ISO format, or current date if parsing fails
 */
export function parseDateOrDefault(input: string | null | undefined): string {
  if (!input) {
    return new Date().toISOString();
  }

  const parsed = parseFlexibleDate(input);
  if (parsed) {
    return parsed.iso;
  }

  // Default to current date if parsing fails
  return new Date().toISOString();
}

/**
 * Format a parsed date for display
 */
export function formatDate(parsed: ParsedDate): string {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  return `${monthNames[parsed.month - 1]} ${parsed.day}, ${parsed.year}`;
}

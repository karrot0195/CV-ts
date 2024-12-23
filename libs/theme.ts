import { ThemeType } from "./types/theme.type";

export const useTheme = (): ThemeType => {
  return {
    textColorPrimary: "text-black",
    textColorSecondary: "text-green-600",
    bgBorder: "text-white",
    primary: {
      bg: "bg-green-200",
      bgIcon: "bg-green-600",
      bgWhite: "bg-white",
    },
    detail: {
      bg: "bg-white",
    },
    summary: {
      bg: "bg-[#f7f7f7]",
      basicInfo: {
        bg: "bg-[#d7e4d8]",
        icon: {
          bg: "bg-green-600",
          border: "border-2 border-white",
        },
      },
      MetaInfo: {
        heading: "text-[#91C190]",
        line: {
          bg: "bg-[#91C190]",
        },
      },
    },
  };
};

export const useOverrideTheme = (
  overridedData: Partial<ThemeType>
): ThemeType => {
  return {
    ...useTheme(),
    ...overridedData,
  };
};


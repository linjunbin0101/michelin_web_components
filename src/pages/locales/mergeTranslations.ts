export const mergeTranslations = (
  customTranslation: Record<string, any>,
  vuetifyTranslation: Record<string, any>,
): Record<string, any> => {
  return {
    ...customTranslation,
    $vuetify: vuetifyTranslation,
  };
};

const getCategoryTypeFromSlug = (slug: string): string => {
  const categories: Record<string, string> = {
    notice: '0',
    family: '1',
    children: '2',
    academics: '3',
    sports: '4',
    pets: '5',
  };

  return categories[slug] || '';
};

export default getCategoryTypeFromSlug;

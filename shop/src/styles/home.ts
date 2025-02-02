export const homeStyles = {
  container: "flex-1",
  scrollView: "flex-1 bg-background-light",
  
  // Header styles
  header: {
    container: "px-4 py-3 flex-row items-center justify-between",
    textContainer: "flex-1",
    title: "text-lg font-bold text-text-primary",
    subtitle: "text-sm text-text-tertiary",
  },

  // Search bar styles
  searchBar: {
    container: "px-4 py-2",
    inputContainer: "flex-row items-center bg-surface-light rounded-xl px-4 py-2",
    input: "flex-1 ml-2 text-text-primary",
  },

  // Categories styles
  categories: {
    container: "mt-4",
    header: "px-4 flex-row justify-between items-center",
    headerText: "text-lg font-semibold text-text-primary",
    seeAll: "text-primary-500",
    scrollView: "mt-3 px-2",
    categoryItem: "items-center mx-2 bg-surface-light rounded-xl p-3 w-20",
    categoryText: "text-xs mt-2 text-text-secondary",
  },

  // Special offer styles
  specialOffer: {
    container: "mt-6 px-4",
    banner: "bg-primary-500 rounded-2xl p-4 flex-row items-center",
    textContainer: "flex-1",
    title: "text-white text-lg font-bold",
    description: "text-white text-sm mt-1 opacity-90",
  },

  // Products styles
  products: {
    container: "mt-6",
    header: "px-4 flex-row justify-between items-center",
    headerText: "text-lg font-semibold text-text-primary",
    seeAll: "text-primary-500",
    grid: "mt-3 px-4",
    gridContainer: "flex-row flex-wrap justify-between",
    productCard: {
      container: "bg-surface-light rounded-xl mb-4 w-[48%]",
      image: "w-full h-40 rounded-t-xl",
      details: "p-3",
      name: "text-text-primary font-medium",
      ratingContainer: "flex-row items-center mt-1",
      rating: "text-xs text-text-tertiary ml-1",
      price: "text-primary-500 font-semibold mt-2",
    },
  },
} as const;
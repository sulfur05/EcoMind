var arts = [
    {
      title: '5 Easy Ways to Reduce Food Waste',
      category: 'food',
      sourceName: 'National Geographic',
      desc: 'This is an article about food waste. It discusses how one-third of all food produced is never eaten...',
      link: 'https://blog.education.nationalgeographic.org/2016/02/17/5-things-you-can-do-about-food-waste/'
    },
    {
      title: 'The Ultimate Guide to Meal Planning for Beginners',
      category: 'food',
      sourceName: 'BBC Good Food',
      desc: 'This article offers tips and tricks to get you started with meal planning. Learn...', // Truncated description
      link: 'https://www.bbcgoodfood.com/howto/guide/10-top-tips-to-make-meal-prep-easier'
    },
    {
      title: 'How to Eat Less Meat (and Still Love Food)',
      category: 'food',
      sourceName: 'The New York Times',
      desc: 'Thinking about reducing your meat consumption? This article explores...', // Truncated description
      link: 'https://www.nytimes.com/2019/12/31/dining/flexitarian-eating-less-meat.html'
    },
    {
      title: '15 Quick Tips for Reducing Food Waste and Becoming a Food Hero',
      category: 'food',
      sourceName: 'Food and Agriculture Organization',
      desc: 'The Food and Agriculture Organization provides 15 practical tips to...', // Truncated description
      link: 'https://www.fao.org/fao-stories/article/en/c/1309609/'
    },
    {
      title: '20 Easy Ways to Reduce Your Food Waste',
      category: 'food',
      sourceName: 'Healthline',
      desc: 'Save money and help the environment by following these 20 tips...', // Truncated description
      link: 'https://www.healthline.com/nutrition/zero-waste-cooking-eating#bottom-line'
    },
    {
      title: 'Top 10 Ways to Reduce Your Food Waste',
      category: 'food',
      sourceName: 'Love Food Hate Waste',
      desc: 'Love Food Hate Waste shares their top 10 strategies to...', // Truncated description
      link: 'https://lovefoodhatewaste.co.nz/top-10-ways-to-reduce-food-waste/'
    },
    {
      title: '10 Ways to Cut Your Food Waste',
      category: 'food',
      sourceName: 'British Heart Foundation',
      desc: 'The British Heart Foundation offers 10 ways to reduce food waste...', // Truncated description
      link: 'https://www.bhf.org.uk/informationsupport/heart-matters-magazine/news/10-ways-to-cut-your-food-waste'
    },
    {
      title: 'Food Waste: What It Is and How to Reduce It',
      category: 'food',
      sourceName: 'Environmental Protection Agency',
      desc: 'Learn about food waste and its impact, and discover ways to...', // Truncated description
      link: 'https://www.colorado.edu/ecenter/food#:~:text=Food%20waste'
    },
    {
      title: 'Food Waste: What It Is and How to Reduce It',
      category: 'food',
      sourceName: 'Environmental Protection Agency',
      desc: 'Learn about food waste and its impact, and discover ways to...', // Truncated description
      link: 'https://www.colorado.edu/ecenter/food#:~:text=Food%20waste'
    },
    {
      title: "10 Easy Ways to Make Your Home More Energy-Efficient",
      category: "home",
      sourceName: "The Spruce",
      desc: "Save money and reduce your environmental impact with these tips to make your home more energy-efficient...",
      link: "https://www.thespruce.com/how-to-save-on-heating-costs-1388212"
    },
    {
      title: "DIY Natural Cleaning Products",
      category: "home",
      sourceName: "The Wellness Mama",
      desc: "Clean your home safely and effectively with natural ingredients! This article provides recipes for DIY all-purpose cleaner...",
      link: "https://wellnessmama.com/natural-home/homemade-all-purpose-cleaner/"
    },
    {
      title: "How to Save Water at Home",
      category: "home",
      sourceName: "HOMEWATER",
      desc: "Conserve this precious resource and save money on your water bill with these easy tips...",
      link: "https://www.homewater.com/blog/how-to-save-water-at-home-14-ways-you-can-do-your-part"
    },
    {
      title: "How to Green Your Cleaning Routine",
      category: "home",
      sourceName: "Treehugger",
      desc: "Reduce your exposure to harmful chemicals and clean more sustainably with these eco-friendly methods...",
      link: "https://www.treehugger.com/how-to-go-green-cleaning-4858127"
    },
    {
      title: "The ultimate guide to Green Cleaning",
      category: "home",
      sourceName: "sgcleaningservices",
      desc: "Learn everything you need to know about green cleaning, from the benefits to choosing the right products and creating your own cleaning solutions...",
      link: "https://sgcleaningservices.com/2023/06/06/green-cleaning-ultimate-guide/"
    },
    {
      title: "5 Ways to Make Your Home More Eco-Friendly on a Budget",
      category: "home",
      sourceName: "The Guardian",
      desc: "Go green without breaking the bank! This article provides tips for making sustainable swaps in your home...",
      link: "https://www.theguardian.com/environment/2020/feb/29/50-ways-to-green-up-your-life-save-the-planet"
    },
    {
      title: "Best Energy-Efficient Kitchen Appliances",
      category: "home",
      sourceName: "Consumer Reports",
      desc: "When it's time to replace your old appliances, consider energy-efficient models to save money and conserve energy...",
      link: "https://www.consumerreports.org/kitchen-appliances/best-energy-efficient-kitchen-appliances-a1040572723/"
    },
    {
      title: "A Beginner's Guide to Sustainable Fashion",
      category: 'fashion', // Assuming category for fashion content
      sourceName: 'Green Matters',
      desc: "Green Matters offers a guide to sustainable fashion. (Source: Green Matters)", // First 30 words with source
      link: 'https://www.greenmatters.com/t/sustainable-fashion'
    },
    {
      title: "Sustainable Fashion on a Budget: How to Look Good and Do Good",
      category: 'fashion',
      sourceName: 'Refinery29',
      desc: "Refinery29 provides tips for achieving sustainable fashion on a budget. (Source: Refinery29)", // First 30 words with source
      link: 'https://www.refinery29.com/en-gb/sustainable-fashion-guide'
    },
    {
      title: "The Ultimate Guide to Thrifting",
      category: 'fashion',
      sourceName: 'Glamour Magazine',
      desc: "Glamour Magazine offers an ultimate guide to thrifting. (Source: Glamour Magazine)", // First 30 words with source
      link: 'https://www.glamourmagazine.co.uk/gallery/glamourcoms-guide-to-vintage-shopping'
    },
    {
      title: "10 Sustainable Clothing Brands That Are Worth Knowing About",
      category: 'fashion',
      sourceName: 'Vogue',
      desc: "Vogue curates a list of 10 sustainable clothing brands. (Source: Vogue)", // First 30 words with source
      link: 'https://www.vogue.com/article/sustainable-brands-2023'
    },
    {
      title: "How to Care for Clothes for a Longer Life",
      category: 'fashion',
      sourceName: 'The New York Times',
      desc: "The New York Times provides tips on caring for clothes for a longer lifespan. (Source: The New York Times)", // First 30 words with source
      link: 'https://www.nytimes.com/article/how-to-do-laundry.html#:~:text=Use%20shorter%2cycles%20for%20less,the%longer%they%ll%20last.'
    },
    {
      title: "The Ultimate Guide to Sustainable Fabrics",
      category: 'fashion',
      sourceName: 'The Everygirl',
      desc: "The Everygirl provides a guide to sustainable fabrics. (Source: The Everygirl)", // First 30 words with source
      link: 'https://theeverygirl.com/sustainable-fashion/'
    }
  ];
  
  export default arts;
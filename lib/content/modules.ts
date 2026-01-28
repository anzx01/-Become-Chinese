export interface ModuleContent {
  title: string;
  intro: string;
  lessons: string[];
  callout: {
    type: 'tip' | 'warning' | 'fact';
    title: string;
    content: string;
  };
  cta: string;
}

export const MODULE_CONTENT: Record<string, ModuleContent> = {
  food: {
    title: "Food: Your First Survival Skill",
    intro: "In China, food isn't just sustenance—it's culture, social glue, and daily ritual. Master this, and you're halfway to fitting in. Mess it up, and you'll be the foreigner who eats pizza every day.",
    lessons: [
      "Learn to use chopsticks properly (yes, it matters—people will judge)",
      "Master the art of ordering without a menu (point, smile, hope for the best)",
      "Understand the unwritten rules of group dining (lazy Susan etiquette is real)",
      "Know when to say \"我吃饱了\" (wǒ chī bǎo le) - \"I'm full\" (before they force-feed you)",
      "Embrace the fact that breakfast might be savory, not sweet"
    ],
    callout: {
      type: 'warning',
      title: '⚠️ Hot Pot Warning',
      content: 'Never, ever put the serving spoon in your mouth. This is not your personal utensil. Commit this crime and watch the table go silent.'
    },
    cta: "Next: Street Food Mastery"
  },
  'street-food': {
    title: "Street Food: Where the Real Magic Happens",
    intro: "Street food in China is not a backup plan—it's often better than restaurants. Learn to navigate the stalls, order like a local, and avoid the tourist traps.",
    lessons: [
      "Point at what looks good (seriously, this works)",
      "Learn the names of 5 essential street foods: 煎饼 (jiānbǐng), 包子 (bāozi), 烤串 (kǎochuàn), 麻辣烫 (málàtàng), 炒面 (chǎomiàn)",
      "Cash is king at street stalls—have small bills ready",
      "Watch where locals eat—long lines mean good food",
      "Don't be afraid of the mystery meat (it's usually delicious)"
    ],
    callout: {
      type: 'tip',
      title: '💡 Pro Tip',
      content: 'The best street food is often found near universities and office buildings during lunch hours. Follow the crowds.'
    },
    cta: "Next: Living Essentials"
  },
  living: {
    title: "Living: Setting Up Your Life",
    intro: "Finding a place, getting utilities, dealing with landlords—living in China has its quirks. Here's how to navigate the basics without losing your mind.",
    lessons: [
      "Apartments come unfurnished (and we mean UNFURNISHED—no kitchen, sometimes no bathroom fixtures)",
      "Rent is usually paid quarterly or semi-annually (yes, upfront)",
      "Get a Chinese phone number immediately—you'll need it for everything",
      "Download essential apps: WeChat, Alipay, Meituan, Didi",
      "Learn your address in Chinese characters (delivery drivers won't understand pinyin)"
    ],
    callout: {
      type: 'fact',
      title: '📌 Reality Check',
      content: 'Your landlord probably won\'t speak English. Bring a Chinese-speaking friend when signing contracts. Always.'
    },
    cta: "Next: Healthcare"
  },
  healthcare: {
    title: "Healthcare: Navigating Chinese Medical System",
    intro: "Getting sick in China doesn't have to be scary. The healthcare system is efficient, affordable, and surprisingly modern—once you know how it works.",
    lessons: [
      "How to find and register at a hospital (public vs. private options)",
      "Understanding the registration system (guahao 挂号) and department selection",
      "What to expect during consultations (quick, direct, sometimes blunt)",
      "Pharmacy access (many medications available without prescription)",
      "Insurance options for foreigners (local vs. international coverage)"
    ],
    callout: {
      type: 'tip',
      title: '💡 Pro Tip: Hospital Apps',
      content: 'Download your hospital\'s app before you get sick. You can register, pay, and check results all from your phone—no waiting in lines.'
    },
    cta: "Next: Transportation Mastery"
  },
  transport: {
    title: "Transport: Getting Around Without Getting Lost",
    intro: "Chinese cities are massive. The metro is your best friend, taxis are everywhere, and bikes are making a comeback. Here's how to navigate it all.",
    lessons: [
      "Download metro apps for your city (they work offline!)",
      "Get a transport card—it works on metros, buses, and some taxis",
      "Didi is Chinese Uber (but better and cheaper)",
      "Bike-sharing apps: Meituan, Hellobike—scan, ride, park anywhere",
      "Avoid rush hour if you value personal space (7-9am, 5-7pm)"
    ],
    callout: {
      type: 'warning',
      title: '⚠️ Taxi Warning',
      content: 'Always use Didi or official taxi apps. Street-hailed taxis might take "scenic routes" for foreigners.'
    },
    cta: "Next: Clothing & Style"
  },
  clothing: {
    title: "Clothing: Dress Like You Belong",
    intro: "Fashion in China is different. What's trendy, what's acceptable, and what will make you stand out (in a bad way). Here's the lowdown.",
    lessons: [
      "Taobao is your new best friend for cheap, trendy clothes",
      "Sizes run smaller—always size up (or two)",
      "Business casual means something different here (more formal)",
      "Sneakers are acceptable everywhere (yes, even nice restaurants)",
      "Weather extremes: invest in good winter gear and breathable summer clothes"
    ],
    callout: {
      type: 'tip',
      title: '💡 Shopping Tip',
      content: 'Markets are great for bargaining. Start at 30% of the asking price and work your way up. It\'s expected.'
    },
    cta: "Next: Language Basics"
  },
  language: {
    title: "Language: Survival Mandarin",
    intro: "You don't need to be fluent, but knowing a few key phrases will transform your experience. People appreciate the effort, even if your tones are terrible.",
    lessons: [
      "Master these 10 phrases: 你好 (nǐhǎo - hello), 谢谢 (xièxie - thanks), 多少钱 (duōshao qián - how much), 不要 (bùyào - don't want), 我不懂 (wǒ bù dǒng - I don't understand)",
      "Learn to read numbers in Chinese—essential for prices and addresses",
      "Tones matter, but context saves you most of the time",
      "Use translation apps, but learn to recognize common characters",
      "Don't be embarrassed—locals find it endearing when you try"
    ],
    callout: {
      type: 'fact',
      title: '📌 Language Reality',
      content: 'English is not widely spoken outside major tourist areas. Download offline translation apps before you need them.'
    },
    cta: "Next: Money & Apps"
  },
  money: {
    title: "Money: Going Cashless in China",
    intro: "China is the most cashless society on Earth. WeChat Pay and Alipay rule everything. Here's how to set up and survive in the digital economy.",
    lessons: [
      "Set up WeChat Pay and Alipay ASAP (you'll need a Chinese bank account)",
      "QR codes are everywhere—learn to scan and be scanned",
      "Cash is becoming obsolete (some places don't even accept it)",
      "Red envelopes (红包) are digital now—learn the etiquette",
      "Split bills easily with group payment features"
    ],
    callout: {
      type: 'warning',
      title: '⚠️ Banking Warning',
      content: 'Opening a bank account requires a residence permit. Tourist accounts have limitations. Plan accordingly.'
    },
    cta: "Next: Work Culture"
  },
  work: {
    title: "Work: Understanding Chinese Work Culture",
    intro: "996 culture, hierarchy, face-saving, and guanxi—Chinese work culture is intense and relationship-driven. Here's what you need to know.",
    lessons: [
      "996 = 9am to 9pm, 6 days a week (yes, it's real in some industries)",
      "Hierarchy matters—respect seniority and titles",
      "Face (面子 miànzi) is everything—never embarrass someone publicly",
      "Guanxi (关系) = relationships = currency—invest in building connections",
      "Business dinners are mandatory and often involve baijiu (strong liquor)"
    ],
    callout: {
      type: 'tip',
      title: '💡 Career Tip',
      content: 'Learn to drink tea properly. Tea culture is serious business in professional settings.'
    },
    cta: "Next: Social Life"
  },
  social: {
    title: "Social Life: Making Friends and Fitting In",
    intro: "Chinese social dynamics are different. Friendships are deep but take time. Here's how to navigate social situations and build genuine connections.",
    lessons: [
      "WeChat is your social lifeline—everyone uses it for everything",
      "Group activities are the norm (solo dining is seen as sad)",
      "Gift-giving has rules—avoid clocks, umbrellas, and the number 4",
      "KTV (karaoke) is a social requirement—learn a few songs",
      "Be prepared for personal questions (age, salary, relationship status)"
    ],
    callout: {
      type: 'fact',
      title: '📌 Social Reality',
      content: 'Chinese friendships are built on reciprocity. If someone helps you, you\'re expected to return the favor.'
    },
    cta: "Next: Dating & Relationships"
  },
  dating: {
    title: "Dating: Love in the Middle Kingdom",
    intro: "Dating in China comes with unique expectations, family pressure, and cultural differences. Whether you're single or coupled up, here's what you need to know.",
    lessons: [
      "Family approval is crucial—you're dating the family, not just the person",
      "Marriage pressure is real (especially for women over 25)",
      "Dating apps: Tantan, Momo, or expat-focused apps",
      "Expect to move fast—relationships escalate quickly",
      "Financial expectations vary but are often explicit"
    ],
    callout: {
      type: 'warning',
      title: '⚠️ Cultural Warning',
      content: 'Traditional gender roles are still prevalent. Expectations around who pays, proposes, and provides can be very different from Western norms.'
    },
    cta: "Next: Festivals & Holidays"
  },
  festivals: {
    title: "Festivals: Celebrating Like a Local",
    intro: "Chinese festivals are spectacular, meaningful, and often involve a lot of food. Here's your guide to the major celebrations and how to participate.",
    lessons: [
      "Spring Festival (Chinese New Year) is THE holiday—everything shuts down for a week",
      "Red envelopes (红包) are given during festivals—know the amounts",
      "Mid-Autumn Festival = mooncakes (they're an acquired taste)",
      "Dragon Boat Festival = zongzi (sticky rice in bamboo leaves)",
      "National Day (Oct 1) = Golden Week = avoid traveling if possible"
    ],
    callout: {
      type: 'tip',
      title: '💡 Festival Tip',
      content: 'Book travel and accommodations months in advance for major holidays. Prices skyrocket and everything sells out.'
    },
    cta: "Next: Chinese Mindset"
  },
  mindset: {
    title: "Mindset: Thinking Like a Local",
    intro: "Understanding the Chinese mindset is the final piece of the puzzle. It's about collectivism, pragmatism, and a unique worldview shaped by thousands of years of history.",
    lessons: [
      "Collectivism over individualism—the group comes first",
      "Pragmatism over idealism—what works matters more than what's \"right\"",
      "Long-term thinking—patience and planning are valued",
      "Indirect communication—learn to read between the lines",
      "Resilience and adaptability—\"吃苦\" (chīkǔ) = eating bitterness = enduring hardship"
    ],
    callout: {
      type: 'fact',
      title: '📌 Cultural Insight',
      content: 'The concept of \"face\" (面子) underpins everything. It\'s about reputation, respect, and social standing. Protect it—yours and others\'.'
    },
    cta: "Complete Your Journey"
  },
};

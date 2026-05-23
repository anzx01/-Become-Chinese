export interface Lesson {
  title: string;
  content: string;
  steps?: string[];
  tips?: string[];
}

export interface ModuleContent {
  title: string;
  intro: string;
  lessons: Lesson[] | string[]; // Support both formats for gradual migration
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
      {
        title: "Learn to use chopsticks properly",
        content: "Chopstick etiquette in China is serious business. Using them incorrectly won't just make eating difficult—it can be seen as disrespectful or childish. The basics: hold them in your dominant hand, use your thumb and fingers to control the top stick while the bottom one stays stationary. Never stick chopsticks vertically into rice (it resembles incense at funerals), never pass food chopstick-to-chopstick (funeral ritual), and never point or gesture with them. When not using them, place them horizontally on your bowl or a chopstick rest, never crossed.",
        steps: [
          "Hold the top chopstick like a pencil between thumb, index, and middle finger",
          "Rest the bottom chopstick in the crook of your thumb and on your ring finger—it stays still",
          "Move only the top chopstick to create a pinching motion",
          "Practice with peanuts or small items before attempting slippery noodles",
          "When resting, place chopsticks horizontally across your bowl, never stuck upright in rice"
        ],
        tips: [
          "If you're struggling, it's okay to ask for a fork at casual restaurants—but learn chopsticks ASAP",
          "Watch how locals hold theirs—there are slight regional variations",
          "Avoid stabbing food with chopsticks—it's considered crude",
          "In formal settings, use the serving chopsticks (公筷) for shared dishes, not your personal ones"
        ]
      },
      {
        title: "Master the art of ordering without a menu",
        content: "Many authentic Chinese restaurants don't have English menus, and some don't have menus at all—just a verbal list of what's available today. The key is to not panic. Pointing works surprisingly well. Look at what other tables are eating and point at dishes that look good, saying \"我要这个\" (wǒ yào zhège - I want this). Use your phone's translation app to show pictures of dishes you want. Learn the names of 10-15 common dishes and you'll be able to eat well anywhere. Don't be afraid to ask \"有什么推荐?\" (yǒu shénme tuījiàn? - What do you recommend?).",
        steps: [
          "Walk around the restaurant and look at what others are eating",
          "Point at a dish and say \"我要这个\" (wǒ yào zhège) or \"一样的\" (yīyàng de - same as that)",
          "Use your phone to show pictures of dishes from review apps like Dianping (大众点评)",
          "Learn to recognize common dish names in Chinese characters: 宫保鸡丁 (kung pao chicken), 麻婆豆腐 (mapo tofu), 红烧肉 (braised pork)",
          "Ask the server for recommendations: \"有什么推荐?\" (yǒu shénme tuījiàn?)"
        ],
        tips: [
          "Download Dianping (大众点评) app—it has photos of dishes at most restaurants",
          "Learn to say \"不要辣\" (bùyào là - no spicy) if you can't handle heat",
          "Order rice separately—it's not automatic: \"来一碗米饭\" (lái yī wǎn mǐfàn)",
          "In small restaurants, check the kitchen or display case to see what's fresh today"
        ]
      },
      {
        title: "Understand the unwritten rules of group dining",
        content: "Chinese dining is communal and hierarchical. Dishes are shared, the lazy Susan rotates clockwise, and there's an unspoken order to everything. The eldest or most senior person typically sits facing the door (the seat of honor) and orders first. Never start eating before the host or eldest person begins. Use serving spoons (公筷) for shared dishes, not your personal chopsticks—this is increasingly important post-COVID. When the lazy Susan rotates, take small portions so everyone gets a chance. Pouring tea for others before yourself shows respect, especially for elders. If someone pours tea for you, tap two fingers on the table as a silent thank you.",
        steps: [
          "Wait for the host or eldest person to sit first—they usually face the door",
          "Don't start eating until the host says \"开动\" (kāidòng - let's eat) or takes the first bite",
          "Use serving spoons (公筷) for shared dishes, never your personal chopsticks",
          "Take small portions from shared dishes—you can always get more",
          "Rotate the lazy Susan clockwise, and don't spin it while someone is serving themselves",
          "Pour tea for others before filling your own cup, starting with elders",
          "Tap two fingers on the table when someone pours tea for you (silent thank you)"
        ],
        tips: [
          "The person who invites usually pays—don't fight over the bill unless you're close friends",
          "Leaving a little food on your plate shows you're satisfied; cleaning it completely might suggest you're still hungry",
          "Burping is not as taboo as in the West—it can even signal satisfaction",
          "If you're the youngest, offer to pour tea and serve elders first"
        ]
      },
      {
        title: "Know when to say \"我吃饱了\" (I'm full)",
        content: "Chinese hospitality means hosts will keep piling food on your plate. Saying \"I'm full\" (我吃饱了 - wǒ chī bǎo le) is essential survival skill, but timing matters. Say it too early and they'll think you're being polite and push harder. Say it too late and you'll be uncomfortably stuffed. The key is to say it firmly and repeatedly while physically stopping them from adding more food to your plate. Put your hand over your bowl as a physical barrier. In formal settings, you may need to refuse 3-4 times before they accept it (this is the politeness dance). Learn to pace yourself—eat slowly and take small portions so you don't fill up too quickly.",
        steps: [
          "Start saying \"我吃饱了\" (wǒ chī bǎo le - I'm full) when you're about 80% full",
          "Use body language: put your hand over your bowl or plate as a physical barrier",
          "Be firm but polite: \"真的吃饱了，谢谢\" (zhēnde chī bǎo le, xièxie - Really full, thank you)",
          "If they insist, repeat 2-3 times—this is the expected politeness dance",
          "Compliment the food while refusing: \"很好吃，但是真的吃不下了\" (hěn hǎochī, dànshì zhēnde chī bù xià le - Very delicious, but really can't eat more)"
        ],
        tips: [
          "Pace yourself—eat slowly and take small portions from the start",
          "If you're at someone's home, expect even more aggressive food-pushing",
          "Learn \"我不能吃\" (wǒ bù néng chī) for dietary restrictions or allergies",
          "In business dinners, refusing food can be seen as refusing hospitality—tread carefully"
        ]
      },
      {
        title: "Embrace savory breakfast culture",
        content: "Forget pancakes and cereal—Chinese breakfast is savory, hot, and often involves noodles, dumplings, or rice porridge (粥 zhōu). Street vendors sell 煎饼 (jiānbǐng - savory crepes), 包子 (bāozi - steamed buns), 油条 (yóutiáo - fried dough sticks) dipped in soy milk (豆浆 dòujiāng). Congee (粥) comes with pickled vegetables, century eggs, or pork. It's filling, cheap, and everywhere. Sweet breakfast exists but it's not the default. Embrace it—savory breakfast will keep you full longer and it's deeply satisfying once you adjust. Many locals eat breakfast on the go from street stalls or small shops near metro stations.",
        steps: [
          "Find a breakfast stall near your home or metro station—look for crowds in the morning",
          "Start with 煎饼 (jiānbǐng) - savory crepe with egg, crispy cracker, and sauce (5-10 RMB)",
          "Try 包子 (bāozi) - steamed buns with pork, vegetables, or sweet bean paste filling",
          "Order 豆浆 (dòujiāng - soy milk) and 油条 (yóutiáo - fried dough sticks) for dipping",
          "If you want something milder, try 白粥 (bái zhōu - plain rice porridge) with pickled vegetables"
        ],
        tips: [
          "Breakfast stalls are busiest 7-9am—arrive early for the freshest food",
          "Most breakfast items cost 5-15 RMB ($1-2 USD)",
          "If you need sweet breakfast, look for 豆沙包 (dòushā bāo - sweet red bean buns)",
          "Download Meituan (美团) or Ele.me (饿了么) to get breakfast delivered",
          "Hotel breakfasts often have both Western and Chinese options if you need a transition period"
        ]
      }
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
      {
        title: "Point at what looks good",
        content: "Pointing is your superpower at street food stalls. Most vendors don't speak English, menus are rare or in Chinese only, and the food is often displayed or being cooked in front of you. Walk up, point at what looks appetizing, and hold up fingers for quantity. Say \"这个\" (zhège - this one) while pointing. Vendors are used to this and will confirm your order. Watch what locals are ordering—if there's a line, that's your signal. Don't overthink it. Street food is cheap (5-20 RMB per item), so even if you order something weird, it's a low-risk experiment. The best discoveries happen when you point at mystery items.",
        steps: [
          "Walk up to the stall and observe what's being cooked or displayed",
          "Point at the item you want and say \"这个\" (zhège - this one)",
          "Hold up fingers to indicate quantity: 一个 (yī gè - one), 两个 (liǎng gè - two)",
          "Vendor will confirm—nod or say \"对\" (duì - yes)",
          "Pay with cash or scan their QR code (WeChat/Alipay)",
          "Wait for your food—usually 2-5 minutes",
          "Take your food and find a place to eat (standing is common)"
        ],
        tips: [
          "Watch locals first to see how ordering works at that specific stall",
          "If unsure, point at what someone else is eating and say \"一样的\" (yīyàng de - same as that)",
          "Street food is meant to be eaten immediately—don't expect takeaway packaging",
          "Napkins are rare—bring tissues or wet wipes",
          "Spicy is the default in many regions—say \"不要辣\" (bùyào là) if you can't handle heat"
        ]
      },
      {
        title: "Learn 5 essential street foods",
        content: "These five street foods are ubiquitous across China and represent different meal types. Mastering these names and knowing what to expect will make you a confident street food navigator. 煎饼 (jiānbǐng) is a savory breakfast crepe with egg, crispy cracker, and sauce. 包子 (bāozi) are steamed buns with various fillings—pork, vegetables, or sweet bean paste. 烤串 (kǎochuàn) are grilled skewers of meat, vegetables, or tofu, heavily spiced. 麻辣烫 (málàtàng) is a customizable spicy soup where you pick ingredients and they're cooked in broth. 炒面 (chǎomiàn) is stir-fried noodles with vegetables and meat. Learn to recognize these characters and you'll never go hungry.",
        steps: [
          "煎饼 (jiānbǐng) - Savory breakfast crepe: Look for flat griddles in the morning, 5-10 RMB",
          "包子 (bāozi) - Steamed buns: Look for bamboo steamers, 2-5 RMB each",
          "烤串 (kǎochuàn) - Grilled skewers: Look for charcoal grills with skewered items, 2-5 RMB per skewer",
          "麻辣烫 (málàtàng) - Spicy soup: Pick ingredients from baskets, they weigh and cook them, 15-30 RMB",
          "炒面 (chǎomiàn) - Stir-fried noodles: Watch the wok action, 10-20 RMB"
        ],
        tips: [
          "煎饼 is best in the morning (7-10am) near metro stations",
          "包子 comes in many varieties: 肉包 (meat), 菜包 (vegetable), 豆沙包 (sweet red bean)",
          "烤串 is an evening/night snack—pairs well with beer",
          "麻辣烫 lets you control spice level—ask for 微辣 (wēi là - mild spicy) or 不辣 (bù là - not spicy)",
          "炒面 can be made with different noodles—粗面 (thick) or 细面 (thin)"
        ]
      },
      {
        title: "Cash is king at street stalls",
        content: "While China is largely cashless, many street food vendors still prefer cash, especially older vendors or those in less developed areas. Have small bills ready—10, 20, 50 RMB notes. Vendors often don't have change for 100 RMB bills. That said, more and more stalls now accept WeChat Pay and Alipay via printed QR codes. Look for QR codes displayed on the stall or cart. If you see them, scan and pay digitally. If not, have cash ready. Carrying 100-200 RMB in small bills is smart for street food adventures. Some vendors use mobile card readers, but this is less common.",
        tips: [
          "Carry small bills: 10, 20, 50 RMB—vendors hate breaking 100s",
          "Look for QR codes on the stall—most accept WeChat Pay/Alipay now",
          "If paying digitally, confirm the amount before scanning",
          "Keep cash in a separate pocket for quick access",
          "ATMs are less common in street food areas—withdraw cash beforehand",
          "Prices are usually displayed or the vendor will tell you—don't overpay",
          "Bargaining is not common for street food—prices are fixed"
        ]
      },
      {
        title: "Watch where locals eat",
        content: "Long lines at street food stalls are your best indicator of quality. Locals know which vendors are good, clean, and worth the wait. If you see a crowd, join it. Empty stalls might be new, bad, or overpriced. Observe the turnover—good stalls sell out quickly and restock constantly, meaning fresh ingredients. Look for cleanliness: vendors wearing gloves, clean cooking surfaces, fresh ingredients visible. Avoid stalls with flies, dirty utensils, or food sitting out for hours. Peak times are breakfast (7-9am), lunch (11:30am-1:30pm), and dinner (5-8pm). Street food near universities, office buildings, and residential areas is usually better and cheaper than tourist areas.",
        tips: [
          "Long lines = good food—don't be afraid to wait 10-15 minutes",
          "Look for high turnover—food should be cooked fresh, not sitting out",
          "Cleanliness matters: gloves, clean surfaces, fresh ingredients",
          "Avoid tourist areas—prices are inflated and quality is lower",
          "Best locations: near universities, office buildings, residential neighborhoods",
          "Peak times have the freshest food but longest waits",
          "Ask locals for recommendations: \"哪里的[food name]最好吃?\" (nǎlǐ de [food] zuì hǎochī? - Where is the best [food]?)"
        ]
      },
      {
        title: "Don't be afraid of mystery meat",
        content: "Street food often features mystery meat—skewers, dumplings, or stir-fries where you're not 100% sure what animal it is. Here's the truth: it's usually delicious and safe. Common meats: pork (猪肉 zhūròu), chicken (鸡肉 jīròu), beef (牛肉 niúròu), lamb (羊肉 yángròu), and sometimes duck, rabbit, or organ meats. Organ meats (liver, kidney, intestines) are popular and nutritious. If you're adventurous, try them. If you're cautious, stick to recognizable cuts. Food safety at popular stalls is generally good—high turnover means fresh ingredients. Trust your instincts: if it smells off or looks sketchy, skip it. But don't let fear stop you from experiencing amazing food.",
        tips: [
          "Common meats: 猪肉 (pork), 鸡肉 (chicken), 牛肉 (beef), 羊肉 (lamb)",
          "Organ meats: 肝 (liver), 腰 (kidney), 肠 (intestines)—nutritious and flavorful",
          "If unsure, ask: \"这是什么肉?\" (zhè shì shénme ròu? - What meat is this?)",
          "High turnover stalls = fresh ingredients = safer",
          "Avoid stalls with food sitting out in hot weather for hours",
          "Cooked-to-order is safest—watch them cook your food",
          "If you have dietary restrictions, learn key phrases: \"我不吃猪肉\" (wǒ bù chī zhūròu - I don't eat pork)",
          "Vegetarian options exist: 素菜 (sùcài - vegetarian dishes), 豆腐 (dòufu - tofu)"
        ]
      }
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
      {
        title: "Find and rent an apartment",
        content: "Apartments in China come UNFURNISHED—and we mean truly unfurnished. No kitchen cabinets, sometimes no bathroom fixtures, occasionally not even light fixtures. Furnished apartments exist but cost more. Rent is typically paid quarterly or semi-annually upfront, plus a 1-2 month deposit. Leases are usually 1 year minimum. Finding apartments happens through apps like Ziroom (自如), Lianjia (链家), or Anjuke (安居客), or through agents who charge 30-50% of one month's rent as commission. Location matters enormously—proximity to metro stations dramatically affects rent and quality of life. Expect to compromise on space, age of building, or location.",
        steps: [
          "Download apartment apps: Ziroom (自如), Lianjia (链家), Anjuke (安居客)",
          "Filter by: location (near metro), price range, furnished vs unfurnished",
          "Schedule viewings—see at least 5-10 apartments before deciding",
          "Check: water pressure, AC/heating, windows, noise level, phone signal, internet",
          "Negotiate rent—especially if signing a long lease or paying upfront",
          "Bring a Chinese-speaking friend to read the contract carefully",
          "Pay: first quarter/semester rent + 1-2 months deposit + agent fee (if applicable)",
          "Register your address at local police station within 24 hours (required by law)"
        ],
        tips: [
          "Ziroom (自如) is popular for young professionals—standardized, furnished, but pricier",
          "Older buildings (pre-2000) are cheaper but may lack elevators and have poor insulation",
          "Avoid ground floor (humidity, noise) and top floor (heat in summer, leaks)",
          "Negotiate for landlord to include appliances, furniture, or repairs",
          "Read the contract for hidden fees: management fees, utility deposits, early termination penalties",
          "Take photos/videos of the apartment condition before moving in"
        ]
      },
      {
        title: "Set up utilities and internet",
        content: "Utilities (water, electricity, gas) are usually not included in rent and must be paid separately, either directly to utility companies or through your landlord. Electricity is prepaid in many buildings—you buy credits that get deducted as you use power. Internet requires a separate contract with providers like China Telecom (中国电信), China Unicom (中国联通), or China Mobile (中国移动). Installation takes 3-7 days. Speeds are good (100-1000 Mbps) and prices are reasonable (100-200 RMB/month). Some international services may be unavailable or unreliable, so research lawful access options before you arrive. Some buildings have restrictions on which internet providers you can use.",
        steps: [
          "Electricity: Ask landlord how to pay—some buildings use prepaid cards, others bill monthly",
          "Water & Gas: Usually billed every 2-3 months—landlord will tell you how to pay",
          "Internet: Contact China Telecom (电信), Unicom (联通), or Mobile (移动)",
          "Provide: passport, lease contract, landlord's contact info",
          "Choose plan: 100-300 Mbps for 100-150 RMB/month, 500-1000 Mbps for 150-250 RMB/month",
          "Technician installs router within 3-7 days",
          "Research which communication, map, and translation services are currently accessible and lawful"
        ],
        tips: [
          "Electricity costs vary by province: 0.5-1 RMB per kWh",
          "AC usage in summer can double or triple your electricity bill",
          "Some buildings include water in management fees—check your lease",
          "Access rules change—follow current local regulations and your organization’s policy",
          "Internet contracts are usually 1-2 years—breaking early incurs penalties",
          "Keep utility receipts—landlords may ask for proof when you move out"
        ]
      },
      {
        title: "Get a Chinese phone number immediately",
        content: "A Chinese phone number is absolutely essential. You need it to register for WeChat, Alipay, Didi, Meituan, Taobao, and virtually every other app and service. You also need it for two-factor authentication, delivery services, and even some building access systems. Getting a number is easy—go to any China Mobile (中国移动), China Unicom (中国联通), or China Telecom (中国电信) store with your passport. Prepaid plans start at 30-50 RMB/month with data. Postpaid plans offer better rates but require a Chinese bank account. Your number becomes your identity in China—guard it carefully.",
        steps: [
          "Find a China Mobile, Unicom, or Telecom store (they're everywhere)",
          "Bring your passport—required for registration",
          "Choose a plan: prepaid (no contract) or postpaid (requires bank account)",
          "Typical plans: 30-50 RMB/month for 5-10GB data + unlimited calls",
          "Get a SIM card (free or 10-20 RMB) and activate immediately",
          "Register your number with WeChat and Alipay ASAP",
          "Top up prepaid plans at convenience stores or via apps"
        ],
        tips: [
          "China Mobile has the best coverage nationwide",
          "China Unicom is cheaper and good in cities",
          "China Telecom is best for international calls",
          "Prepaid plans don't require contracts—easier for short stays",
          "Data is cheap—10GB costs 30-50 RMB, 20GB costs 50-80 RMB",
          "Keep your number active even if you leave China—it's tied to all your accounts",
          "International roaming is expensive—use local SIMs when traveling"
        ]
      },
      {
        title: "Download essential apps for daily life",
        content: "Surviving in China requires a specific app ecosystem. WeChat (微信) is the super-app for messaging, payments, and social media—it's non-negotiable. Alipay (支付宝) is for payments and services. Meituan (美团) and Ele.me (饿了么) are for food delivery and services. Didi (滴滴) is for taxis. Taobao (淘宝) and JD (京东) are for shopping. Baidu Maps (百度地图) or Amap (高德地图) for navigation. Dianping (大众点评) for restaurant reviews. Pleco for Chinese dictionary. These apps replace Google, Uber, Amazon, Yelp, and more. Download them all immediately and link them to your phone number and payment methods.",
        steps: [
          "Priority 1: WeChat (微信) - messaging, payments, everything",
          "Priority 1: Alipay (支付宝) - payments, services",
          "Priority 2: Meituan (美团) or Ele.me (饿了么) - food delivery",
          "Priority 2: Didi (滴滴) - taxis and ride-sharing",
          "Priority 2: Baidu Maps (百度地图) or Amap (高德地图) - navigation",
          "Priority 3: Taobao (淘宝) or JD (京东) - online shopping",
          "Priority 3: Dianping (大众点评) - restaurant reviews and deals",
          "Useful: Pleco - Chinese-English dictionary with camera translation"
        ],
        tips: [
          "Set up all apps with your Chinese phone number immediately",
          "Link WeChat and Alipay to your bank account for full functionality",
          "Enable location services for delivery and navigation apps",
          "Join WeChat groups for expats in your city—great for tips and community",
          "Some apps have English interfaces—check settings",
          "Keep apps updated—features and interfaces change frequently"
        ]
      },
      {
        title: "Learn your address in Chinese characters",
        content: "Your address in Chinese characters is critical. Delivery drivers, taxi drivers, and service providers won't understand pinyin or English. You need to know your full address in Chinese: province (省), city (市), district (区), street (路/街), building number (号), building name, unit (单元), floor (层), and apartment number (室). Save it in your phone's notes, take a screenshot, and memorize the key parts. When ordering delivery or taking taxis, you'll need to input or show this address. Many buildings have complex names or are part of larger compounds (小区 xiǎoqū), making it even more important to have the exact Chinese characters.",
        steps: [
          "Get your full address from your lease contract in Chinese characters",
          "Format: [Province省] [City市] [District区] [Street路] [Number号] [Building] [Unit单元] [Floor层] [Room室]",
          "Save it in your phone's notes app with a clear label like \"我的地址\" (My Address)",
          "Take a screenshot and save it to your photos for quick access",
          "Practice saying the key parts: building name, street name, district",
          "Add your address to WeChat, Alipay, Meituan, and Taobao for deliveries",
          "Share your location pin in Baidu Maps or Amap when ordering taxis"
        ],
        tips: [
          "Delivery drivers often call when they arrive—answer or they'll leave",
          "Some compounds have multiple gates—specify which gate (几号门) in delivery notes",
          "Learn to say \"我在[building name]\" (wǒ zài [building name] - I'm at [building name])",
          "Keep your landlord's phone number handy in case delivery drivers can't find you",
          "Register your address at the local police station (required within 24 hours of moving in)",
          "If your building has a Chinese name, learn to recognize the characters"
        ]
      }
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
      {
        title: "How to find and register at a hospital",
        content: "China has two main types of hospitals: public (公立医院) and private (私立医院). Public hospitals are cheaper but crowded with long wait times. Private international hospitals are expensive but offer English-speaking staff and shorter waits. For routine care, use public hospitals. For emergencies or if you need English support, go to international hospitals like United Family (和睦家), Parkway Health, or Raffles Medical.",
        steps: [
          "Search for hospitals on Baidu Maps (百度地图) or Dianping (大众点评)",
          "Check if they accept foreigners - some public hospitals don't",
          "Bring your passport - required for registration",
          "Download the hospital's app if available (e.g., 北京协和医院 app for Peking Union Medical College Hospital)"
        ],
        tips: [
          "Avoid Monday mornings - busiest time at hospitals",
          "Bring cash - not all hospitals accept foreign credit cards",
          "Public hospital registration opens at 7am - arrive early to avoid crowds"
        ]
      },
      {
        title: "Understanding the registration system (guahao 挂号)",
        content: "Guahao (挂号) means 'registration' and it's mandatory before seeing any doctor. You'll choose a department (科室) based on your symptoms - 内科 (nèikē) for internal medicine, 外科 (wàikē) for surgery, 皮肤科 (pífūkē) for dermatology, etc. You can also choose a specific doctor by seniority level. Registration fees range from 5-50 RMB for public hospitals, 300-800 RMB for private.",
        steps: [
          "Go to the registration desk (挂号处) or use a self-service kiosk",
          "Show your passport and describe your symptoms in simple terms",
          "Staff will recommend a department - accept their suggestion",
          "Pay the registration fee (现金 or WeChat Pay/Alipay)",
          "Receive a queue number and wait for your turn"
        ],
        tips: [
          "Use hospital apps to register online and skip the queue",
          "Expert doctors (专家号) cost more but have more experience",
          "Your queue number will be called on screens - watch carefully"
        ]
      },
      {
        title: "What to expect during consultations",
        content: "Chinese doctor consultations are quick and direct - expect 5-10 minutes max. Doctors are efficient and may seem blunt by Western standards. They'll ask direct questions, examine you briefly, and prescribe treatment immediately. Privacy is limited - consultations often happen with other patients nearby. Don't expect lengthy explanations unless you specifically ask.",
        tips: [
          "Prepare your symptoms in advance - write them down if needed",
          "Ask questions directly - doctors won't volunteer extra information",
          "Request a translator if available at international hospitals",
          "Get a second opinion if unsure - it's common practice"
        ]
      },
      {
        title: "Pharmacy access and medications",
        content: "Chinese pharmacies (药店 yàodiàn) are everywhere and many medications are available without prescription. Pain relievers and cold medicines can often be bought over the counter, and pharmacists can recommend basic options. Use antibiotics and prescription medication only with qualified medical guidance and current local rules. Hospital pharmacies dispense prescribed medications immediately after your consultation. Prices are generally much cheaper than Western countries.",
        steps: [
          "Find a pharmacy - look for green cross signs (绿十字)",
          "Describe your symptoms or show the medication name",
          "Pharmacist will recommend options",
          "Pay and receive medication with instructions (usually in Chinese)"
        ],
        tips: [
          "Use translation apps to read medication instructions",
          "Keep original packaging for reference",
          "Chain pharmacies like Watsons (屈臣氏) have English-speaking staff",
          "Traditional Chinese Medicine (TCM) pharmacies are separate - look for 中药店"
        ]
      },
      {
        title: "Insurance options for foreigners",
        content: "Foreigners in China have three insurance options: Chinese social insurance (if employed), international health insurance, or pay-as-you-go. Chinese social insurance covers public hospitals at low cost but requires employment. International insurance (like Cigna, Allianz, Bupa) covers private hospitals and is expensive but comprehensive. Many expats use a hybrid approach - Chinese insurance for routine care, international for serious issues.",
        tips: [
          "Check if your employer provides insurance - most do",
          "Keep all receipts and medical reports for insurance claims",
          "International hospitals can bill insurance directly",
          "Public hospitals require upfront payment then reimbursement",
          "Emergency services (120) are free but ambulances may charge"
        ]
      }
    ],
    callout: {
      type: 'tip',
      title: '💡 Pro Tip: Hospital Apps',
      content: 'Download your hospital\'s app before you get sick. You can register, pay, check test results, and even consult doctors online—all from your phone. Major hospitals like 北京协和, 上海华山, and 广州中山 all have excellent apps.'
    },
    cta: "Next: Transportation Mastery"
  },
  transport: {
    title: "Transport: Getting Around Without Getting Lost",
    intro: "Chinese cities are massive. The metro is your best friend, taxis are everywhere, and bikes are making a comeback. Here's how to navigate it all.",
    lessons: [
      {
        title: "Master the metro system with offline apps",
        content: "Chinese metro systems are world-class—clean, efficient, cheap, and extensive. Every major city has a metro app that works offline, showing you routes, transfer points, and estimated times. Download your city's official metro app (北京地铁 for Beijing, 上海地铁 for Shanghai, etc.) before you need it. Metro maps are in both Chinese and English, and announcements are bilingual. Fares are distance-based, typically 3-10 RMB ($0.50-1.50 USD) per trip. Security checks are mandatory at every station—bags go through X-ray machines. Peak hours (7-9am, 5-7pm) are brutally crowded—expect to be packed like sardines.",
        steps: [
          "Download your city's official metro app: 北京地铁 (Beijing), 上海地铁 (Shanghai), 广州地铁 (Guangzhou), 深圳地铁 (Shenzhen)",
          "Enable offline mode so maps work without internet",
          "Input your destination in English or Chinese—app will show the best route",
          "Check which exit to use at your destination station (exits can be far apart)",
          "Follow color-coded lines and numbered exits—signage is clear"
        ],
        tips: [
          "Stand on the right side of escalators, walk on the left",
          "Let people exit before boarding—pushing will get you nowhere",
          "Download multiple route apps like Baidu Maps (百度地图) or Amap (高德地图) as backups",
          "First and last trains are around 5:30am and 11pm—check your specific line",
          "Avoid Line 1 and Line 2 during rush hour in most cities—they're the busiest"
        ]
      },
      {
        title: "Get a transport card for seamless travel",
        content: "Physical transport cards (交通卡 jiāotōng kǎ) work on metros, buses, and some taxis across most Chinese cities. You can buy them at metro station service counters for a 20 RMB deposit plus however much you want to load (minimum 10-20 RMB). Tap to enter and exit metro stations, tap once on buses. However, digital payment is taking over—WeChat Pay and Alipay now work directly at metro gates and on buses in most cities. If you have a Chinese bank account linked to WeChat/Alipay, you can skip the physical card entirely. Some cities also have metro-specific apps with QR code payment.",
        steps: [
          "Go to any metro station service counter (客服中心)",
          "Say \"我要买交通卡\" (wǒ yào mǎi jiāotōng kǎ - I want to buy a transport card)",
          "Pay 20 RMB deposit + initial load amount (suggest 50-100 RMB)",
          "Tap card on readers when entering and exiting metro, once when boarding buses",
          "Recharge at station machines or convenience stores (7-Eleven, FamilyMart)"
        ],
        tips: [
          "Digital option: Link WeChat Pay/Alipay to metro gates—no physical card needed",
          "Transport cards from one city usually don't work in other cities",
          "You can get your 20 RMB deposit back when you return the card",
          "Some cities offer tourist cards with unlimited rides for 1-3 days",
          "Keep your card—it works for years and you can recharge anytime"
        ]
      },
      {
        title: "Use Didi for taxis and ride-sharing",
        content: "Didi (滴滴出行) is China's dominant ride-hailing app—think Uber but better integrated and cheaper. It offers multiple service levels: Express (快车 - cheapest), Premier (专车 - nicer cars), Hitch (顺风车 - carpooling), and Taxi (出租车 - official taxis). The app works in English, accepts WeChat Pay/Alipay, and drivers can't scam you on routes because the fare is set upfront. You can also use it to call official taxis. Street-hailing taxis is possible but risky for foreigners—drivers might take longer routes or refuse to use the meter. Didi eliminates this problem entirely.",
        steps: [
          "Download Didi (滴滴出行) app from App Store or Android stores",
          "Register with your phone number (Chinese number required for full features)",
          "Link WeChat Pay or Alipay for payment",
          "Enter your destination—app shows fare estimate before you confirm",
          "Choose service level: Express (快车) for budget, Premier (专车) for comfort",
          "Driver picks you up—track their location in real-time",
          "Payment is automatic when you arrive—no cash needed"
        ],
        tips: [
          "Use the translation feature to communicate with drivers if needed",
          "Save common destinations (home, work) for faster booking",
          "Didi Hitch (顺风车) is cheapest but requires Chinese ID verification",
          "During peak hours or bad weather, fares surge—check the multiplier",
          "If you don't have a Chinese number, some cities allow international numbers with passport verification"
        ]
      },
      {
        title: "Navigate bike-sharing systems",
        content: "Bike-sharing in China is everywhere and dirt cheap—typically 1.5-2 RMB per 30 minutes. Major apps include Meituan Bike (美团单车), Hellobike (哈啰单车), and Didi Bike (青桔单车). No docking stations required—just scan a QR code on the bike, ride, and park anywhere that's not blocking traffic. Bikes have built-in locks that unlock via the app. Most bikes are bright yellow, blue, or green and easy to spot. This is perfect for short trips (under 5km) and exploring neighborhoods. E-bikes and e-scooters are also available in some cities for slightly higher prices.",
        steps: [
          "Download Meituan (美团), Hellobike (哈啰出行), or Didi (滴滴出行) app",
          "Link WeChat Pay or Alipay for payment",
          "Find a bike nearby using the app's map feature",
          "Scan the QR code on the bike's handlebars or frame",
          "Bike unlocks automatically—adjust the seat and start riding",
          "When done, park in a legal spot (not blocking sidewalks/doors) and lock via app",
          "Payment is automatic based on ride duration"
        ],
        tips: [
          "Check the bike's condition before riding—brakes, tires, seat",
          "Don't park in restricted zones (red areas on app map) or you'll be fined",
          "Some apps require a deposit (99-299 RMB) but refund it when you stop using the service",
          "E-bikes require helmet usage in some cities—check local rules",
          "Bike lanes exist in most cities but aren't always respected—ride defensively"
        ]
      },
      {
        title: "Survive rush hour and plan around peak times",
        content: "Rush hour in Chinese cities is no joke. Metro cars are packed to the point where you physically cannot move, buses are standing-room-only, and taxi/Didi prices surge. Morning rush is 7-9am, evening rush is 5-7pm. If you can avoid traveling during these times, do it. If you can't, prepare mentally for close physical contact with strangers, zero personal space, and slow-moving crowds. Some metro stations have crowd control during peak hours—you might wait 10-15 minutes just to enter the platform. Plan buffer time for important appointments. Alternatively, leave earlier (before 7am) or later (after 9am) to avoid the worst of it.",
        tips: [
          "If you must travel during rush hour, position yourself near doors for easier exit",
          "Wear a backpack on your front to save space and prevent pickpocketing",
          "Download podcasts or music offline—you won't have mental space to read",
          "Women-only metro cars exist in some cities during peak hours—look for pink signs",
          "Consider working remotely or flexing your hours if your job allows it",
          "Fridays and Mondays are typically the worst days for rush hour traffic",
          "Use Baidu Maps or Amap to check real-time traffic before leaving"
        ]
      }
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
      {
        title: "Taobao is your new best friend",
        content: "Taobao (淘宝) is China's Amazon—but bigger, cheaper, and more chaotic. It's where locals buy everything: clothes, electronics, home goods, weird gadgets. Prices are incredibly low compared to Western countries. A t-shirt costs 20-50 RMB ($3-7), jeans 50-150 RMB ($7-20). The catch: it's entirely in Chinese, quality varies wildly, and sizing is inconsistent. Use the Taobao app with built-in translation, read reviews carefully (look for photo reviews), and check seller ratings. Shipping is fast (2-7 days) and cheap. Returns are possible but complicated. Once you master Taobao, you'll never pay full price for clothes again.",
        steps: [
          "Download Taobao (淘宝) app and register with your Chinese phone number",
          "Link Alipay for payment (required)",
          "Search for items using keywords or photos (camera search is powerful)",
          "Filter by: price, sales volume (销量), reviews (评价)",
          "Read reviews carefully—look for buyer photos showing real product quality",
          "Check size charts—Chinese sizes run 1-2 sizes smaller than Western",
          "Add to cart and checkout—shipping is usually included",
          "Track delivery in the app—usually arrives in 2-7 days"
        ],
        tips: [
          "Use the camera search feature—take a photo of clothes you like and find similar items",
          "Sort by sales volume (销量) to find popular, reliable items",
          "Read negative reviews (差评) to spot quality issues",
          "Tmall (天猫) is Taobao's premium version—higher quality, higher prices, better returns",
          "Shipping is fast in cities, slower in rural areas",
          "Returns are possible but require Chinese language skills—buy carefully",
          "Join Taobao shopping groups on WeChat for recommendations and deals"
        ]
      },
      {
        title: "Sizes run smaller—always size up",
        content: "Chinese clothing sizes are significantly smaller than Western sizes. A Chinese Large is often a Western Small or Medium. This applies to everything: shirts, pants, shoes, underwear. Always check the size chart (尺码表 chǐmǎ biǎo) and measure yourself. Don't trust S/M/L labels—go by measurements in centimeters. Shoulders, chest, waist, and length measurements are provided for most items. If you're between sizes, size up. Shoes are especially tricky—Chinese sizes use centimeters (e.g., 42 = 26cm foot length). Try shoes in physical stores first to find your size, then buy online.",
        steps: [
          "Measure yourself: chest, waist, hips, shoulder width, inseam (in centimeters)",
          "Save these measurements in your phone for quick reference",
          "On Taobao/JD, click the size chart (尺码表) for each item",
          "Compare your measurements to the chart—don't trust S/M/L labels",
          "If between sizes, always size up—Chinese clothes fit tighter",
          "For shoes, measure your foot length in cm and add 0.5-1cm for comfort",
          "Read reviews for sizing feedback—buyers often mention if items run small/large"
        ],
        tips: [
          "Chinese XL ≈ Western M/L in most cases",
          "Pants often have shorter inseams—tall people struggle",
          "Shoes: Chinese 42 ≈ US Men's 8.5, US Women's 10",
          "Brands vary—always check individual size charts",
          "Physical stores: Uniqlo, H&M, Zara carry Western-friendly sizes",
          "Custom tailoring is cheap (100-300 RMB for a shirt)—consider it for perfect fit",
          "Plus-size options are limited—Taobao has specialized stores"
        ]
      },
      {
        title: "Business casual means something different",
        content: "Business dress codes in China are more formal than in the West, especially in traditional industries (finance, government, manufacturing). Men wear suits or dress shirts with slacks—jeans are rarely acceptable. Women wear dresses, skirts, or pantsuits—conservative cuts, minimal cleavage. Colors are muted: black, navy, gray, white. Bright colors or bold patterns are seen as unprofessional. Shoes matter: men wear leather dress shoes, women wear closed-toe heels or flats. Sneakers are unacceptable in formal business settings. Tech and creative industries are more relaxed, but still more formal than Silicon Valley. When in doubt, overdress.",
        tips: [
          "Men: Suit or dress shirt + slacks + leather shoes (no jeans, no sneakers)",
          "Women: Dress, skirt, or pantsuit + closed-toe shoes (conservative cuts)",
          "Colors: Black, navy, gray, white—avoid bright colors or bold patterns",
          "Accessories: Minimal and professional—avoid flashy jewelry",
          "Grooming: Clean, neat appearance—messy hair or visible tattoos are frowned upon",
          "Tech/creative industries: Business casual is acceptable (collared shirt, chinos)",
          "First day: Overdress and observe what others wear, then adjust",
          "Suits are cheap in China—get one tailored (500-2000 RMB)"
        ]
      },
      {
        title: "Sneakers are acceptable everywhere",
        content: "Unlike formal business settings, casual sneakers are widely acceptable in China for everyday life—even at nice restaurants, shopping malls, and casual social events. White sneakers are especially trendy and versatile. Brands like Nike, Adidas, New Balance, and local brands like Li-Ning and Anta are popular. Sneaker culture is huge among young people. However, avoid worn-out or dirty sneakers—appearance matters. Keep them clean. For formal occasions (weddings, business meetings, upscale restaurants), switch to dress shoes. But for 90% of daily life, clean sneakers are perfectly fine and even fashionable.",
        tips: [
          "White sneakers are the most versatile—pair with jeans, chinos, or casual dresses",
          "Keep sneakers clean—dirty shoes are seen as sloppy",
          "Popular brands: Nike, Adidas, New Balance, Li-Ning (李宁), Anta (安踏)",
          "Sneakers are fine for: casual dining, shopping, movies, parks, casual work environments",
          "Not acceptable for: formal business meetings, weddings, upscale restaurants, government offices",
          "Fake sneakers are common—buy from official stores or verified Tmall shops",
          "Sneaker prices: 300-800 RMB for mid-range, 800-1500 RMB for premium"
        ]
      },
      {
        title: "Weather extremes require good gear",
        content: "China has extreme weather variations. Northern cities (Beijing, Harbin) have brutal winters (-10 to -30°C) requiring heavy coats, thermal layers, and insulated boots. Southern cities (Guangzhou, Shenzhen) have hot, humid summers (30-40°C) requiring breathable, moisture-wicking clothes. Central cities (Shanghai, Wuhan) have both extremes. Invest in quality winter gear if you're in the north—down jackets (羽绒服 yǔróngfú) are essential. For summer, lightweight, breathable fabrics are key. Air conditioning is everywhere indoors, so layer. Pollution masks (N95) are useful in northern cities during winter. Rain gear is essential in southern cities during monsoon season.",
        tips: [
          "Northern winter: Down jacket (500-2000 RMB), thermal underwear, insulated boots, scarf, gloves",
          "Southern summer: Breathable cotton/linen, moisture-wicking fabrics, sun protection (hat, sunglasses, sunscreen)",
          "Spring/Fall: Layering is key—temperatures fluctuate wildly",
          "Pollution masks: N95 or KN95 for northern cities in winter (air quality apps: AQI, PM2.5)",
          "Rain gear: Compact umbrella (always carry), waterproof jacket for southern cities",
          "Indoor AC is aggressive—bring a light jacket even in summer",
          "Buy seasonal gear locally—it's cheaper and better suited to local climate",
          "Uniqlo HeatTech and AIRism are popular for thermal and cooling layers"
        ]
      }
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
      {
        title: "Master 10 essential survival phrases",
        content: "These 10 phrases will get you through 80% of daily interactions. Pronunciation doesn't have to be perfect—context and gestures help. Chinese people appreciate any attempt to speak their language, even if your tones are off. The key is confidence and repetition. Practice these until they become automatic. Don't worry about sounding stupid—locals find it endearing when foreigners try. These phrases cover greetings, gratitude, basic needs, and polite refusals—the foundation of survival communication.",
        steps: [
          "你好 (nǐ hǎo) - Hello (universal greeting)",
          "谢谢 (xièxie) - Thank you (say it constantly)",
          "不好意思 (bù hǎoyìsi) - Excuse me / Sorry (very useful)",
          "多少钱? (duōshao qián?) - How much? (essential for shopping)",
          "我不懂 (wǒ bù dǒng) - I don't understand (honesty is key)",
          "不要 (bùyào) - Don't want / No (firm but polite refusal)",
          "这个 (zhège) - This one (point and say this)",
          "在哪里? (zài nǎlǐ?) - Where is it? (for finding things)",
          "可以 (kěyǐ) - OK / Can (agreement or asking permission)",
          "再见 (zàijiàn) - Goodbye (polite exit)"
        ],
        tips: [
          "Tone mistakes are forgivable—context usually makes meaning clear",
          "Combine with pointing and gestures for clarity",
          "Say 谢谢 (xièxie) constantly—it's never wrong",
          "不好意思 (bù hǎoyìsi) is more polite than 对不起 (duìbùqǐ) for minor things",
          "Practice pronunciation with Chinese friends or language exchange partners",
          "Use translation apps to hear correct pronunciation"
        ]
      },
      {
        title: "Learn to read numbers in Chinese",
        content: "Numbers are everywhere—prices, addresses, phone numbers, dates, building floors. Learning Chinese numbers 1-10 and basic combinations unlocks so much. Chinese numbers are logical: 11 is \"ten-one\" (十一), 20 is \"two-ten\" (二十), 25 is \"two-ten-five\" (二十五). Prices are stated in 元 (yuán - RMB), 块 (kuài - colloquial for yuan), 毛 (máo - 0.1 yuan), and 分 (fēn - 0.01 yuan). Addresses use numbers for buildings, floors, and units. Phone numbers are read digit by digit. Master this and you'll understand prices, navigate buildings, and comprehend basic information.",
        steps: [
          "Learn 1-10: 一 (yī), 二 (èr), 三 (sān), 四 (sì), 五 (wǔ), 六 (liù), 七 (qī), 八 (bā), 九 (jiǔ), 十 (shí)",
          "Learn tens: 十 (10), 二十 (20), 三十 (30), 四十 (40), etc.",
          "Learn hundreds: 一百 (100), 两百 (200), 三百 (300), etc.",
          "Learn thousands: 一千 (1000), 两千 (2000), 一万 (10,000)",
          "Practice prices: 25块 (25 kuài - 25 RMB), 3块5 (3 kuài 5 - 3.50 RMB)",
          "Practice addresses: 5号楼 (building 5), 3层 (floor 3), 201室 (room 201)"
        ],
        tips: [
          "二 (èr) vs 两 (liǎng): use 两 before measure words (两个, 两百, 两千)",
          "Phone numbers: read digit by digit, 1 is often pronounced 幺 (yāo) to avoid confusion with 7",
          "Floors: 1st floor is 一层 or 一楼, not ground floor (ground is 底层)",
          "Prices: 块 (kuài) is more common than 元 (yuán) in spoken Chinese",
          "Practice listening to numbers in markets and shops"
        ]
      },
      {
        title: "Understand tones (but don't obsess)",
        content: "Mandarin has 4 tones plus a neutral tone. Yes, tones change meaning—妈 (mā - mother) vs 马 (mǎ - horse). But here's the truth: context saves you most of the time. Native speakers will understand you even with bad tones if the situation makes sense. Focus on getting the consonants and vowels right first, then gradually improve tones. Don't let tone anxiety stop you from speaking. That said, some words are tone-critical: 买 (mǎi - buy) vs 卖 (mài - sell), 四 (sì - four) vs 十 (shí - ten). Practice these high-stakes words carefully.",
        tips: [
          "Tone 1 (ā): high and flat, like singing a sustained note",
          "Tone 2 (á): rising, like asking a question in English \"huh?\"",
          "Tone 3 (ǎ): dip down then up, like saying \"oh really?\" skeptically",
          "Tone 4 (à): sharp falling, like a command \"Stop!\"",
          "Neutral tone: short and light, no emphasis",
          "Context matters more than perfect tones—don't be paralyzed by fear",
          "Listen to native speakers and mimic their rhythm and intonation",
          "Use apps like HelloChinese or Duolingo for tone practice",
          "Focus on tone pairs in common words: 谢谢 (xièxie), 妈妈 (māma), 爸爸 (bàba)"
        ]
      },
      {
        title: "Use translation apps effectively",
        content: "Translation apps are lifesavers, but you need to use them right. Google Translate and some other services may be unavailable or unreliable in China. Use locally accessible tools such as Baidu Translate (百度翻译), Microsoft Translator, or Pleco instead. Camera translation is magic—point your phone at signs, menus, or labels and get instant translations. Voice translation works for simple phrases but struggles with accents and background noise. Text translation is most reliable. Save common phrases offline. Learn to recognize key characters so you can spot them in the wild. Apps are tools, not crutches—use them to learn, not just to survive.",
        steps: [
          "Download: Pleco (best dictionary), Baidu Translate (百度翻译), Microsoft Translator",
          "Enable offline mode for emergency use without internet",
          "Camera translation: Open app > Camera icon > Point at text > Instant translation",
          "Voice translation: Speak clearly in a quiet environment for best results",
          "Save common phrases: \"Where is the bathroom?\" \"I'm allergic to...\" \"Call a taxi\"",
          "Learn to recognize characters: 出口 (exit), 入口 (entrance), 厕所 (toilet), 男 (men), 女 (women)"
        ],
        tips: [
          "Pleco has handwriting input—draw characters you see to look them up",
          "Baidu Translate works better for Chinese-specific contexts than Google",
          "Microsoft Translator has conversation mode for back-and-forth translation",
          "Don't rely on apps for important documents—get human translation",
          "Learn radicals (character components) to guess meanings of unknown characters",
          "Screenshot translations of your address, dietary restrictions, and medical info"
        ]
      },
      {
        title: "Recognize common characters for navigation",
        content: "You don't need to read fluently, but recognizing 20-30 key characters will make navigation and daily life infinitely easier. These characters appear on signs, menus, apps, and buildings constantly. Focus on survival characters: directions, facilities, food categories, and warnings. Once you can spot these, you'll feel less lost and more confident. Many characters are pictographic or logical—厕所 (toilet) has the \"building\" radical, 出口 (exit) literally means \"out-mouth.\" Learning these creates a foundation for deeper language learning if you choose to continue.",
        steps: [
          "Directions: 东 (east), 南 (south), 西 (west), 北 (north), 左 (left), 右 (right), 前 (front), 后 (back)",
          "Facilities: 厕所 (toilet), 出口 (exit), 入口 (entrance), 电梯 (elevator), 楼梯 (stairs)",
          "Gender: 男 (men), 女 (women)",
          "Food: 肉 (meat), 鱼 (fish), 鸡 (chicken), 牛 (beef), 猪 (pork), 菜 (vegetables), 饭 (rice)",
          "Actions: 开 (open), 关 (close), 推 (push), 拉 (pull), 禁止 (prohibited)",
          "Numbers: 一二三四五六七八九十 (1-10)"
        ],
        tips: [
          "Use flashcard apps like Anki or Pleco to memorize characters",
          "Look for patterns: many characters share components (radicals)",
          "Practice spotting characters in real life—signs, menus, packaging",
          "Learn stroke order—it helps with handwriting and character recognition",
          "Start with high-frequency characters that appear everywhere",
          "Simplified Chinese (used in mainland China) is easier than Traditional (used in Taiwan/Hong Kong)"
        ]
      }
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
      {
        title: "Set up WeChat Pay and Alipay",
        content: "WeChat Pay (微信支付) and Alipay (支付宝) are essential for daily life in China. You'll need them for everything—restaurants, taxis, vending machines, street vendors, even some public toilets. Setting them up requires a Chinese bank account for full functionality, though some features work with international cards. WeChat Pay is integrated into WeChat (China's super-app for messaging, social media, and payments). Alipay is standalone and slightly more merchant-focused. Most people use both, but WeChat Pay is more universal for peer-to-peer transfers and red envelopes. Without these, you'll struggle to function in modern Chinese society.",
        steps: [
          "Download WeChat (微信) and Alipay (支付宝) apps",
          "Register with your phone number (Chinese number strongly recommended)",
          "For full features: Open a Chinese bank account (requires residence permit)",
          "Link your bank card: Go to Me > Payment > Add Bank Card in WeChat, or My > Bank Cards in Alipay",
          "Verify your identity with passport or Chinese ID",
          "Set a 6-digit payment password (different from login password)",
          "Enable fingerprint/face recognition for faster payments"
        ],
        tips: [
          "Some international cards work but with limitations—Chinese bank account is best",
          "WeChat Pay is better for social features (red envelopes, splitting bills)",
          "Alipay often has better deals and cashback for shopping",
          "Keep some cash as backup—not everywhere accepts digital payment yet",
          "Tourist versions exist but have transaction limits and fewer features"
        ]
      },
      {
        title: "Master QR code payments",
        content: "QR codes are the universal payment method in China. There are two types: you scan the merchant's code, or they scan yours. For small purchases (street food, small shops), you scan their printed QR code using WeChat or Alipay's scan function, enter the amount, and confirm. For larger purchases or when the merchant has a scanner, you show your payment QR code (found in WeChat Pay or Alipay) and they scan it. The payment is instant and both parties get a notification. No cash, no cards, no contact needed. Even beggars sometimes have QR codes printed on cardboard.",
        steps: [
          "To pay by scanning: Open WeChat/Alipay > Tap Scan (扫一扫) > Point at merchant's QR code",
          "Enter the amount if required, or it auto-fills",
          "Confirm with payment password, fingerprint, or face ID",
          "To receive payment: Open WeChat/Alipay > Show payment code (收付款)",
          "Merchant scans your code—payment is instant",
          "Check your transaction history to confirm payment went through"
        ],
        tips: [
          "Screenshot your payment QR code for offline use (works for a few minutes)",
          "Don't share your payment QR code publicly—anyone can scan it to charge you",
          "If a merchant's QR code doesn't work, try the other app (WeChat vs Alipay)",
          "Some places only accept one app—always have both installed",
          "Transaction limits exist: 500-5000 RMB per transaction depending on verification level"
        ]
      },
      {
        title: "Understand the death of cash",
        content: "Cash is rapidly becoming obsolete in Chinese cities. Many restaurants, shops, and services no longer accept cash—digital payment only. Younger generations rarely carry cash at all. Even street vendors, wet markets, and taxi drivers prefer QR codes. This creates a problem for foreigners without Chinese bank accounts. Some places are legally required to accept cash, but enforcement is inconsistent. ATMs are becoming rarer. If you rely on cash, you'll face constant friction—vendors will be annoyed, some will refuse service, and you'll miss out on deals and discounts that are digital-only. The solution: get a Chinese bank account ASAP or use tourist-friendly payment options.",
        tips: [
          "Keep 500-1000 RMB cash as emergency backup",
          "Hospitals and government offices usually still accept cash",
          "Rural areas are more cash-friendly than cities",
          "Some international hotels and tourist spots accept foreign cards",
          "If you can't get a Chinese bank account, use Alipay/WeChat tourist wallets with international cards",
          "Exchange currency at banks, not hotels—better rates",
          "ATMs charge 10-20 RMB per withdrawal for foreign cards"
        ]
      },
      {
        title: "Navigate red envelope culture (红包)",
        content: "Red envelopes (红包 hóngbāo) are digital now, sent via WeChat. They're used for gifts during holidays (Chinese New Year, weddings), to thank people, or just for fun in group chats. The amount matters: 8 is lucky (sounds like prosperity), 6 is smooth, 4 is unlucky (sounds like death). Common amounts: 6.66, 8.88, 66, 88, 168, 188, 666, 888 RMB. During Chinese New Year, elders give red envelopes to younger people. In group chats, people send \"lucky red envelopes\" where a random amount is distributed to whoever clicks first. It's part social game, part tradition. You're expected to reciprocate—if you receive, you should give back eventually.",
        steps: [
          "To send: Open a WeChat chat > Tap + > Red Envelope (红包)",
          "Enter amount and optional message",
          "Choose individual or group lucky envelope (random amounts)",
          "Confirm with payment password",
          "To receive: Tap the red envelope in chat > Tap 开 (open)",
          "Money goes directly to your WeChat wallet"
        ],
        tips: [
          "Lucky numbers: 6, 8, 9, 66, 88, 168, 188, 666, 888",
          "Avoid: 4 (death), 250 (insult meaning idiot)",
          "During CNY, give to anyone younger or lower status than you",
          "In group chats, be quick—lucky envelopes disappear fast",
          "Don't send tiny amounts (under 1 RMB) unless it's a joke among friends",
          "Wedding red envelopes: 200-2000 RMB depending on relationship"
        ]
      },
      {
        title: "Split bills easily with group payments",
        content: "Splitting bills in China is seamless thanks to WeChat and Alipay group payment features. No more awkward cash calculations or Venmo requests. One person pays the full bill, then creates a group payment request in WeChat, and everyone pays their share instantly via QR code or direct transfer. Alternatively, people just send direct transfers to whoever paid. It's fast, transparent, and expected. In friend groups, people often take turns paying for meals rather than splitting every time—it evens out over time. This is part of the reciprocity culture. Don't be the person who never pays or always insists on splitting to the cent.",
        steps: [
          "Method 1 - Direct transfer: Open friend's WeChat chat > Tap + > Transfer (转账) > Enter amount",
          "Method 2 - Group split: After one person pays, they create a group payment request",
          "In WeChat group chat: Tap + > Group Payment (群收款) > Enter total and split method",
          "Everyone in the group receives a notification to pay their share",
          "Payment goes directly to the person who paid the bill",
          "Alternatively, use Alipay's AA Payment (AA收款) feature"
        ],
        tips: [
          "Taking turns paying is more common than splitting every bill",
          "If someone paid last time, offer to pay this time",
          "Don't fight over the bill in formal settings—the host pays",
          "Among close friends, splitting is fine, but don't be stingy",
          "Use the \"lucky number\" amounts when transferring (8.88 instead of 8.50)",
          "Always confirm the person received your transfer—check for the green checkmark"
        ]
      }
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
      {
        title: "996 culture is real (but not everywhere)",
        content: "996 means working 9am to 9pm, 6 days a week. It's prevalent in tech startups, e-commerce, and competitive industries. Not all companies enforce it, but the expectation of long hours and high availability is widespread. Leaving at 6pm can be seen as lazy or uncommitted, even if you've finished your work. Face time matters—being seen at your desk is valued. However, this is changing among younger workers and foreign companies. International companies and some progressive Chinese companies offer better work-life balance. Ask about work culture during interviews. If they brag about 996, believe them.",
        tips: [
          "996 is most common in: tech startups, e-commerce, finance, consulting",
          "Better work-life balance in: foreign companies, education, government, state-owned enterprises",
          "Overtime is often unpaid—it's expected as part of your commitment",
          "Weekends may include work messages or calls—boundaries are blurry",
          "Burnout is common—prioritize mental health and set boundaries where possible",
          "Younger generation is pushing back—attitudes are slowly changing",
          "Ask about work hours and culture during interviews—don't assume",
          "Remote work is rare—physical presence is valued"
        ]
      },
      {
        title: "Hierarchy matters—respect seniority",
        content: "Chinese workplaces are hierarchical. Titles, age, and seniority determine respect and decision-making power. Address people by their title + surname: 王经理 (Manager Wang), 李总 (Director Li). Never contradict or criticize superiors publicly—it causes them to lose face. Decisions flow top-down; junior employees execute, not question. Meetings are often for announcements, not discussions. Real decisions happen in private conversations before meetings. Respect elders and seniors even if you disagree. If you're young or new, observe and learn before speaking up. Foreigners get some leeway, but don't abuse it.",
        tips: [
          "Address people by title + surname: 经理 (manager), 总监 (director), 老板 (boss)",
          "Never contradict superiors in public—discuss privately if needed",
          "Meetings are for announcements, not debates—real decisions happen beforehand",
          "Junior employees: listen more, speak less, especially in the first few months",
          "Age matters: older colleagues expect respect regardless of position",
          "Promotions are often based on seniority, not just performance",
          "If you have ideas, present them privately to your manager first",
          "Foreigners get some flexibility, but don't be arrogant or dismissive"
        ]
      },
      {
        title: "Face (面子) is everything",
        content: "Face (面子 miànzi) is about reputation, respect, and social standing. Losing face is humiliating and damages relationships. Never embarrass someone publicly—no public criticism, no calling out mistakes in meetings, no making someone look incompetent in front of others. If you need to address an issue, do it privately and tactfully. Giving face means showing respect, praising publicly, and acknowledging someone's status. Saving face means helping someone avoid embarrassment. In conflicts, find ways for both parties to save face—compromise without blame. Face extends to companies and teams—don't badmouth your employer publicly.",
        tips: [
          "Never criticize someone publicly—always discuss issues privately",
          "Praise publicly, criticize privately (if at all)",
          "If someone makes a mistake, help them save face—don't expose it",
          "In disagreements, find solutions that let both parties save face",
          "Apologize indirectly: \"Maybe there was a misunderstanding\" instead of \"You were wrong\"",
          "Giving face: acknowledge someone's expertise, defer to their opinion publicly",
          "Losing face: being contradicted, criticized, or embarrassed in front of others",
          "Face applies to groups too—don't badmouth your company or team publicly"
        ]
      },
      {
        title: "Guanxi (关系) = relationships = currency",
        content: "Guanxi (关系) means relationships and connections. It's how things get done in China—more important than rules or procedures. Building guanxi takes time: shared meals, favors, gifts, personal conversations. It's reciprocal—if someone helps you, you owe them. Guanxi opens doors: job opportunities, business deals, problem-solving, navigating bureaucracy. Invest in relationships with colleagues, clients, and contacts. Attend social events, even if you're tired. Share meals, exchange WeChat contacts, remember birthdays. Guanxi is long-term—don't expect immediate returns. It's not corruption; it's relationship-based trust.",
        steps: [
          "Build relationships through: shared meals, drinks, KTV, social events",
          "Exchange favors: help colleagues with tasks, share information, make introductions",
          "Give gifts appropriately: holidays, after receiving help, to build goodwill",
          "Stay in touch: WeChat messages, occasional meetups, remember important dates",
          "Be reliable: follow through on commitments, respond promptly, be trustworthy",
          "Introduce people: connecting others builds your guanxi network",
          "Attend company social events: team dinners, outings, celebrations"
        ],
        tips: [
          "Guanxi is reciprocal—track favors and return them appropriately",
          "Meals are guanxi-building—accept dinner invitations even if inconvenient",
          "WeChat is essential for maintaining guanxi—stay active and responsive",
          "Guanxi takes time—don't expect instant results",
          "It's not bribery—it's relationship-based trust and mutual benefit",
          "Foreigners can build guanxi too—show genuine interest and respect",
          "Guanxi extends beyond work—personal relationships matter"
        ]
      },
      {
        title: "Business dinners and baijiu are mandatory",
        content: "Business dinners are where real relationships are built and deals are sealed. They're long (2-4 hours), involve multiple courses, and often include heavy drinking—especially baijiu (白酒), a strong Chinese liquor (40-60% alcohol). Refusing to drink can be seen as disrespectful, but you can negotiate: drink less, toast with tea, or claim health reasons. Toasting etiquette matters: hold your glass lower than seniors', toast the host first, say \"干杯\" (gānbēi - bottoms up) or \"随意\" (suíyì - drink as you like). Pace yourself—dinners are marathons, not sprints. Eating and socializing matter more than the alcohol itself.",
        steps: [
          "Accept dinner invitations—declining damages relationships",
          "Arrive on time or slightly early—punctuality shows respect",
          "Wait for the host to start eating and drinking",
          "Toast the host and seniors first: hold glass lower, say \"干杯\" or \"随意\"",
          "Pace yourself with alcohol—it's a marathon, not a sprint",
          "Participate in conversations—dinners are for bonding, not just eating",
          "If you can't drink, explain politely: health reasons, medication, driving",
          "Offer to pour drinks for others—shows respect and attentiveness"
        ],
        tips: [
          "Baijiu is strong (40-60% alcohol)—sip slowly or dilute with water/tea",
          "\"干杯\" (gānbēi) means bottoms up, \"随意\" (suíyì) means drink as you like—use the latter to pace yourself",
          "Hold your glass lower than seniors' when toasting—shows respect",
          "Eating is important too—don't just focus on drinking",
          "Business discussions happen during dinner—stay alert",
          "If you can't drink, toast with tea or juice—explain politely",
          "Women face less pressure to drink heavily, but should still participate",
          "Hangovers are expected—plan accordingly"
        ]
      }
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
      {
        title: "WeChat is your social lifeline",
        content: "WeChat (微信) is not just a messaging app—it's your entire social infrastructure in China. It's how you make plans, stay in touch, join groups, share moments (like Instagram stories), pay people back, send gifts, and maintain relationships. Not having WeChat is like not having a phone number. Everyone exchanges WeChat IDs, not phone numbers. Your WeChat profile, Moments feed, and responsiveness define your social presence. Groups are huge—friend groups, work groups, hobby groups, neighborhood groups. Muting notifications is essential or you'll go insane. WeChat etiquette matters: respond promptly, don't leave people on read, use stickers appropriately.",
        steps: [
          "Set up a proper WeChat profile: real photo, Chinese name (if you have one), brief intro",
          "Add people immediately after meeting them—exchange QR codes",
          "Post to Moments occasionally to stay visible (but not too much)",
          "Join relevant groups: expat groups, hobby groups, neighborhood groups",
          "Use stickers and emojis—they're essential for tone and friendliness",
          "Respond to messages within a few hours—being responsive builds trust",
          "Mute noisy groups but check them occasionally"
        ],
        tips: [
          "WeChat Moments are semi-public—coworkers and acquaintances can see them",
          "You can hide Moments from specific people or create private groups",
          "Red envelopes in group chats are social bonding—participate",
          "Voice messages are common but can be annoying—use sparingly",
          "WeChat is monitored—avoid sensitive political topics",
          "Blocking someone is serious—it's a relationship ender"
        ]
      },
      {
        title: "Group activities are the norm",
        content: "Chinese social life is group-oriented. Solo dining, solo travel, or solo hobbies are seen as lonely or sad. People do things in groups—eating, shopping, traveling, exercising, even going to the bathroom. This is collectivism in action. If you want to make friends, join group activities: language exchanges, sports clubs, hiking groups, board game meetups, volunteer organizations. Don't expect one-on-one hangouts early in friendships—groups are safer and more comfortable. Once you're part of a group, you'll be included in everything. The downside: constant group chat notifications and pressure to participate in every activity.",
        steps: [
          "Find groups on WeChat, Meetup, or expat forums (e.g., InterNations)",
          "Join activities that interest you: hiking, language exchange, sports, cooking classes",
          "Show up consistently—regularity builds familiarity and trust",
          "Participate actively in group chats—silence makes you invisible",
          "Offer to organize activities occasionally—it shows investment",
          "Be prepared for group decisions—consensus matters more than individual preference"
        ],
        tips: [
          "Language exchange groups are great for meeting locals and practicing Chinese",
          "Sports clubs (badminton, basketball, running) are social and active",
          "Hiking groups are popular in cities near mountains—easy way to make friends",
          "Board game cafes and escape rooms are trendy group activities",
          "Don't decline group invitations too often—you'll stop being invited",
          "Group photos are mandatory—smile and participate"
        ]
      },
      {
        title: "Gift-giving has rules",
        content: "Gift-giving in China is ritualistic and symbolic. Gifts are given for holidays (Chinese New Year, Mid-Autumn Festival), when visiting someone's home, after receiving help, or to build relationships (guanxi). The gift itself matters less than the gesture and presentation. Avoid: clocks (sounds like death), umbrellas (sounds like separation), shoes (walking away), anything in sets of 4 (unlucky number). Prefer: fruit baskets, imported snacks, tea, alcohol, or practical items. Wrap gifts nicely—presentation matters. Recipients often refuse gifts 2-3 times before accepting (politeness ritual). Don't open gifts in front of the giver unless invited.",
        steps: [
          "When visiting someone's home: bring fruit, snacks, or tea (50-200 RMB)",
          "For holidays: red envelopes (cash) for younger people, gifts for elders",
          "After receiving help: small gift or treat them to a meal",
          "For business: higher-value gifts (alcohol, tea, imported goods) (200-1000 RMB)",
          "Present with both hands—shows respect",
          "Expect the recipient to refuse 2-3 times—insist politely",
          "Don't open gifts immediately unless the giver insists"
        ],
        tips: [
          "Avoid: clocks (钟 zhōng = 送终 sòngzhōng, attending a funeral), umbrellas (伞 sǎn = 散 sàn, separation), shoes, sharp objects, anything in 4s",
          "Lucky numbers: 6 (smooth), 8 (prosperity), 9 (longevity)",
          "Imported goods (foreign snacks, wine, cosmetics) are prestigious",
          "Fruit baskets are safe and appreciated",
          "Tea is always appropriate, especially for elders",
          "Keep receipts hidden—price shouldn't be obvious"
        ]
      },
      {
        title: "KTV (karaoke) is a social requirement",
        content: "KTV (卡拉OK) is not optional—it's a core social activity in China. Friends, coworkers, and even business associates go to KTV regularly. Private rooms are rented by the hour, equipped with microphones, screens, tambourines, and sometimes dice games. Everyone is expected to sing at least one song. It's not about being good—it's about participation and bonding. Refusing to sing makes you seem aloof or unfriendly. Popular songs: Chinese pop (C-pop), classic ballads, and English songs everyone knows (\"Hotel California,\" \"Yesterday Once More\"). Drinking, snacking, and cheering are part of the experience. KTV sessions can last 3-6 hours.",
        steps: [
          "When invited to KTV, say yes—it's important for social bonding",
          "Prepare 2-3 songs you can sing: 1 Chinese song (even badly), 1-2 English songs",
          "Popular Chinese songs: 月亮代表我的心, 朋友, 童话, 小苹果",
          "Popular English songs: Hotel California, Yesterday Once More, My Heart Will Go On",
          "Cheer loudly for others—enthusiasm matters more than talent",
          "Take turns singing—don't hog the mic or refuse to participate",
          "Drink, snack, and play dice games between songs"
        ],
        tips: [
          "KTV rooms are rented by the hour (50-200 RMB/hour depending on location and time)",
          "Afternoon sessions are cheaper than evening/night sessions",
          "Bring your own snacks and drinks to save money (or buy from KTV at markup)",
          "Duets are popular—offer to sing with someone",
          "Tambourines are for everyone to shake along—use them",
          "Don't judge others' singing—it's about fun, not performance",
          "Business KTV can involve heavy drinking—pace yourself"
        ]
      },
      {
        title: "Prepare for personal questions",
        content: "Chinese people ask personal questions that Westerners consider intrusive: age, salary, relationship status, why you're not married, when you'll have kids, how much your rent is, why you're so fat/thin. This isn't rude—it's normal curiosity and relationship-building. Refusing to answer makes you seem cold or secretive. You don't have to be 100% honest, but deflecting entirely damages rapport. Develop polite, vague answers: \"I'm still looking for the right person,\" \"Rent is reasonable,\" \"I'm working on it.\" Older people are more direct. Younger, educated people are more aware of Western sensitivities but still more direct than you're used to.",
        tips: [
          "Common questions: How old are you? Are you married? How much do you earn? Why are you in China?",
          "Age: Just answer—it's not sensitive in Chinese culture",
          "Salary: You can be vague—\"Enough to live comfortably\" or give a range",
          "Relationship status: Be honest but brief—\"Still looking\" or \"Focusing on career\"",
          "Weight/appearance comments: Not meant as insults—acknowledge and move on",
          "Don't take offense—it's cultural difference, not malice",
          "You can ask similar questions back—it's expected reciprocity",
          "Deflect with humor if uncomfortable: \"That's a secret!\" with a smile",
          "Older generations are more direct—younger people are more aware of boundaries"
        ]
      }
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
      {
        title: "Family approval is crucial",
        content: "In Chinese dating culture, you're not just dating the person—you're dating their family. Family approval matters enormously, especially for serious relationships leading to marriage. Parents have significant influence over their children's relationship choices, even into their 30s and 40s. Expect to meet parents relatively early (within 6-12 months). Parents will evaluate you based on: job stability, income, education, family background, and whether you own property. If parents disapprove, the relationship faces serious obstacles. This isn't just tradition—it's practical. Families are tightly knit, and you'll be expected to participate in family life, holidays, and obligations.",
        tips: [
          "Meeting parents is a big deal—dress conservatively, bring gifts, be respectful",
          "Parents will ask direct questions: job, salary, family, plans for marriage and kids",
          "Property ownership matters—owning an apartment is a major plus",
          "Education level matters—parents prefer partners with similar or higher education",
          "Be prepared for family involvement in major decisions: marriage, housing, children",
          "If parents disapprove, the relationship may not survive—family pressure is intense",
          "Foreigners face extra scrutiny—cultural differences, distance from family, language barriers",
          "Show respect for Chinese culture and willingness to learn—it helps win approval"
        ]
      },
      {
        title: "Marriage pressure is real (especially for women)",
        content: "Chinese society puts enormous pressure on people to marry, especially women. Women over 27 are considered \"leftover women\" (剩女 shèngnǚ)—a derogatory term for unmarried women past prime marriage age. Men face pressure too, but less intensely. Parents, relatives, and even coworkers will ask constantly: \"When are you getting married?\" \"Why are you still single?\" This pressure intensifies during holidays, especially Chinese New Year. Dating is often pragmatic and goal-oriented: people date to find a marriage partner, not just for fun. Casual dating exists among younger, urban, educated people, but traditional expectations remain strong.",
        tips: [
          "Women over 27 face intense pressure to marry—it's not personal, it's cultural",
          "Men are expected to have stable income and property before marriage",
          "Dating is often pragmatic—people evaluate marriage potential early",
          "Casual dating is less common—relationships escalate quickly toward marriage",
          "If you're not looking for marriage, communicate this clearly and early",
          "Holidays amplify pressure—expect constant questions from relatives",
          "Younger, educated, urban people are more open to casual dating",
          "Foreigners dating Chinese may face different expectations—discuss openly"
        ]
      },
      {
        title: "Dating apps and meeting people",
        content: "Dating apps are popular in China, but different from Western apps. Tantan (探探) is like Tinder—swipe-based, casual. Momo (陌陌) is for meeting nearby people, more hookup-oriented. Soul (Soul) focuses on personality matching. Zhenai (珍爱网) and Jiayuan (世纪佳缘) are serious matchmaking sites for marriage-minded people. WeChat is also used for dating—people exchange WeChat IDs and chat there. Expat-focused apps like Tandem (language exchange) or expat WeChat groups are good for meeting people. Bars, clubs, and social events work too. Be aware: scams exist, especially targeting foreigners. Video chat before meeting in person.",
        steps: [
          "Download dating apps: Tantan (casual), Momo (nearby), Soul (personality), Zhenai/Jiayuan (serious)",
          "Create a profile with clear photos and honest bio",
          "Swipe/browse and match with people",
          "Chat on the app first, then move to WeChat",
          "Video chat before meeting in person (safety and scam prevention)",
          "Meet in public places for first dates",
          "Be clear about your intentions: casual dating vs. serious relationship"
        ],
        tips: [
          "Tantan is most popular for casual dating among young people",
          "Zhenai and Jiayuan are for serious marriage-minded dating",
          "WeChat is essential—most people prefer chatting there",
          "Scams exist: fake profiles, catfishing, money requests—be cautious",
          "Video chat before meeting to verify identity",
          "Language exchange apps (Tandem, HelloTalk) can lead to dating",
          "Expat bars and social events are good for meeting people",
          "Be respectful of cultural differences in dating expectations"
        ]
      },
      {
        title: "Relationships escalate quickly",
        content: "Chinese relationships often move faster than Western ones. Meeting parents within 6-12 months is normal. Discussions about marriage happen early—within the first year. Living together before marriage is becoming more common but still somewhat taboo, especially outside big cities. Engagement periods are short (3-12 months). The goal is marriage, not indefinite dating. If you're not ready for this pace, communicate clearly. Stringing someone along without marriage intentions is seen as wasting their time, especially for women facing age pressure. Be honest about your timeline and expectations.",
        tips: [
          "Meeting parents within 6-12 months is normal—don't panic",
          "Marriage discussions happen early—be prepared to talk about it",
          "Living together before marriage is controversial—discuss with partner and families",
          "Engagement periods are short—weddings happen quickly after engagement",
          "If you're not ready for marriage, communicate this clearly and early",
          "Don't waste someone's time—be honest about your intentions",
          "Age matters: women over 27 face more pressure, so relationships move faster",
          "Foreigners may get more flexibility, but don't assume—discuss expectations"
        ]
      },
      {
        title: "Financial expectations are explicit",
        content: "Money conversations happen early and openly in Chinese dating. It's not taboo—it's practical. Men are traditionally expected to pay for dates, provide housing (or contribute significantly), and financially support the family. Women's families may expect a bride price (彩礼 cǎilǐ)—cash or gifts given to the bride's family, ranging from 50,000 to 500,000+ RMB depending on region and family. Property ownership is a major factor—many women won't marry without the man owning an apartment. This isn't gold-digging; it's about financial security and cultural norms. Discuss finances openly: income, savings, property, expectations for marriage costs.",
        tips: [
          "Men typically pay for dates—it's expected, especially early on",
          "Bride price (彩礼) is common: 50,000-500,000+ RMB depending on region",
          "Property ownership matters—owning an apartment is a major advantage",
          "Wedding costs are high: 100,000-500,000+ RMB for venue, banquet, photos, etc.",
          "Discuss finances openly—it's not taboo, it's practical",
          "Women's families evaluate financial stability—job, income, property",
          "Splitting costs is becoming more common among educated, urban couples",
          "Foreigners may face different expectations—discuss openly with partner",
          "Prenuptial agreements are rare but becoming more common"
        ]
      }
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
      {
        title: "Spring Festival (Chinese New Year) is THE holiday",
        content: "Spring Festival (春节 Chūnjié), also called Chinese New Year, is the biggest holiday in China. It lasts 7-15 days (official holiday is 7 days, but celebrations extend longer). Everything shuts down—businesses, restaurants, services. Cities empty as people return to hometowns. Travel is a nightmare—trains, planes, buses are packed and expensive. Traditions: family reunion dinners, red envelopes (红包) with cash, fireworks, temple visits, watching the CCTV Spring Festival Gala. Avoid traveling during this period unless necessary. If you're invited to celebrate with a Chinese family, it's a huge honor—bring gifts, participate in traditions, and prepare for lots of food.",
        steps: [
          "Dates: Late January to mid-February (varies yearly, based on lunar calendar)",
          "Official holiday: 7 days, but many take 10-15 days off",
          "Traditions: Family reunion dinner (年夜饭), red envelopes (红包), fireworks, temple visits",
          "Food: Dumplings (北方), fish (年年有余), rice cakes (年糕), spring rolls",
          "Avoid: Traveling during this period—trains/planes are packed and expensive",
          "If invited to celebrate: Bring gifts (fruit, alcohol, tea), dress nicely, participate in traditions",
          "Red envelopes: Give to children and unmarried younger people (amounts: 100-500 RMB)"
        ],
        tips: [
          "Book travel 2-3 months in advance if you must travel during Spring Festival",
          "Cities are ghost towns—most restaurants and shops close",
          "Fireworks are loud and constant—expect sleepless nights",
          "Red is the lucky color—wear red for good fortune",
          "Avoid: Saying unlucky words (death, sickness, breaking things)",
          "Clean your home before New Year—sweeping during the holiday sweeps away luck",
          "Watch the CCTV Spring Festival Gala—it's a national tradition"
        ]
      },
      {
        title: "Red envelopes (红包) and gift-giving etiquette",
        content: "Red envelopes (红包 hóngbāo) are cash gifts given during festivals, especially Spring Festival and weddings. Elders give to younger people, married give to unmarried, employers give to employees. Amounts matter: even numbers are lucky (except 4), 8 is especially lucky. Common amounts: 100, 200, 500, 800, 1000 RMB. For weddings: 200-2000 RMB depending on relationship. Digital red envelopes via WeChat are now common. Never open red envelopes in front of the giver—it's rude. Say \"恭喜发财\" (gōngxǐ fācái - wishing you prosperity) when giving or receiving.",
        tips: [
          "Lucky amounts: 100, 200, 500, 600, 800, 1000, 1688 (sounds like prosperity)",
          "Avoid: 4 (death), odd numbers (except 9), 250 (insult)",
          "Weddings: 200-2000 RMB depending on how close you are",
          "Children: 100-500 RMB during Spring Festival",
          "Employees: Employers give red envelopes as bonuses",
          "Digital red envelopes: Send via WeChat during holidays",
          "Never open in front of giver—wait until later",
          "Say \"恭喜发财\" (gōngxǐ fācái) or \"新年快乐\" (xīnnián kuàilè - Happy New Year)"
        ]
      },
      {
        title: "Mid-Autumn Festival and mooncakes",
        content: "Mid-Autumn Festival (中秋节 Zhōngqiū Jié) celebrates the harvest and family reunion. It falls on the 15th day of the 8th lunar month (September/October). The tradition: eating mooncakes (月饼 yuèbǐng), admiring the full moon, and spending time with family. Mooncakes are dense pastries with sweet or savory fillings—lotus seed paste, red bean, egg yolk, meat. They're an acquired taste. Companies give mooncake gift boxes to employees and clients. If you receive mooncakes, share them—they're rich and one is enough. Lanterns, pomelos, and tea are also part of the celebration.",
        tips: [
          "Dates: September or October (15th day of 8th lunar month)",
          "Mooncakes: Dense pastries with sweet/savory fillings—an acquired taste",
          "Common fillings: Lotus seed paste, red bean, egg yolk, five kernel, meat",
          "Mooncakes are gifts—companies give elaborate gift boxes",
          "One mooncake is enough—they're very rich and filling",
          "Traditions: Admiring the full moon, eating pomelos, lighting lanterns",
          "If you receive mooncakes, share them with friends or colleagues",
          "Modern mooncakes: Ice cream, chocolate, creative flavors"
        ]
      },
      {
        title: "Dragon Boat Festival and zongzi",
        content: "Dragon Boat Festival (端午节 Duānwǔ Jié) commemorates the poet Qu Yuan and falls on the 5th day of the 5th lunar month (May/June). Traditions: dragon boat races, eating zongzi (粽子 - sticky rice wrapped in bamboo leaves), hanging mugwort, wearing perfume pouches. Zongzi come in sweet (red bean, jujube) or savory (pork, egg yolk) varieties. Northern and southern styles differ. Dragon boat races are spectacular—teams paddle long boats decorated like dragons, racing to drumbeats. If you're near water during this festival, watch the races. Zongzi are sold everywhere—try both sweet and savory.",
        tips: [
          "Dates: May or June (5th day of 5th lunar month)",
          "Zongzi: Sticky rice in bamboo leaves—sweet or savory",
          "Northern zongzi: Sweet (red bean, jujube)",
          "Southern zongzi: Savory (pork, egg yolk, mushrooms)",
          "Dragon boat races: Spectacular team races with drumming",
          "Traditions: Hanging mugwort (艾草) to ward off evil, wearing perfume pouches",
          "Try both sweet and savory zongzi to find your preference",
          "Zongzi are dense—one is a full meal"
        ]
      },
      {
        title: "National Day Golden Week",
        content: "National Day (国庆节 Guóqìng Jié) on October 1st celebrates the founding of the People's Republic of China. It's a 7-day holiday called Golden Week. Like Spring Festival, it's a major travel period—tourist sites are mobbed, hotels are expensive, trains/planes are packed. If you want to travel, book months in advance or avoid this week entirely. Cities have flag displays, patriotic decorations, and sometimes military parades (especially milestone anniversaries like 70th, 75th). It's a good time to explore your local city if you stay put, as many locals leave for travel.",
        tips: [
          "Dates: October 1-7 (fixed dates)",
          "Golden Week: Major travel period—tourist sites are extremely crowded",
          "Avoid: Popular tourist destinations unless you enjoy massive crowds",
          "Book travel 2-3 months in advance if you must travel",
          "Prices surge: Hotels, flights, trains are 2-3x normal prices",
          "Alternative: Stay local and explore your city while it's empty",
          "Patriotic displays: Flags, decorations, sometimes military parades",
          "Combine with Mid-Autumn Festival if dates align for longer holiday"
        ]
      }
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
      {
        title: "Collectivism over individualism",
        content: "Chinese culture prioritizes the group over the individual. Family, community, and nation come before personal desires. Decisions are made considering how they affect others—parents, family, colleagues, society. This explains why family approval matters in relationships, why group activities dominate social life, and why conformity is valued over standing out. \"The nail that sticks out gets hammered down\" is a real mentality. Individual expression is growing among younger generations, but collectivist values remain strong. Understanding this helps you navigate social expectations, workplace dynamics, and cultural norms.",
        tips: [
          "Family comes first—individual desires are secondary to family harmony",
          "Group consensus matters more than individual opinions",
          "Conformity is valued—standing out can be seen as selfish or disruptive",
          "Decisions consider impact on others: family, colleagues, community",
          "Saving face is about protecting group harmony, not just personal pride",
          "Younger generations are more individualistic, but collectivism remains strong",
          "In conflicts, solutions prioritize group harmony over individual justice",
          "This explains: family involvement in dating, group activities, workplace hierarchy"
        ]
      },
      {
        title: "Pragmatism over idealism",
        content: "Chinese culture is deeply pragmatic. What works matters more than what's theoretically \"right.\" Rules are flexible if bending them achieves better outcomes. Relationships (guanxi) trump formal procedures. This isn't corruption—it's practical problem-solving. Ideology takes a backseat to results. This explains why China can blend capitalism with socialism, why rules are negotiable, and why connections matter more than credentials. Don't expect rigid adherence to rules or principles. Expect creative solutions, workarounds, and a focus on outcomes over process.",
        tips: [
          "Results matter more than following rules to the letter",
          "Rules are guidelines, not absolutes—flexibility is expected",
          "Relationships (guanxi) can solve problems that rules can't",
          "Ideology is less important than practical outcomes",
          "\"Does it work?\" is more important than \"Is it right?\"",
          "This explains: flexible business practices, creative problem-solving, guanxi culture",
          "Don't be rigid about rules—adapt to situations",
          "Focus on outcomes, not process—Chinese culture values efficiency"
        ]
      },
      {
        title: "Long-term thinking and patience",
        content: "Chinese culture values long-term planning and patience. Success is measured in decades, not quarters. Relationships are built over years. Investments pay off slowly. This contrasts with Western short-term thinking. Chinese people save aggressively, plan for retirement early, and invest in education for future generations. Business relationships take years to develop. Instant gratification is less valued than delayed rewards. This explains high savings rates, emphasis on education, and the importance of building guanxi over time. Be patient—results take time.",
        tips: [
          "Success is measured in years and decades, not months",
          "Relationships take time to build—don't expect instant trust",
          "Savings rates are high—people plan for long-term security",
          "Education is a long-term investment in future success",
          "Business deals take time—patience is essential",
          "Guanxi is built over years through consistent actions",
          "Instant gratification is less valued than delayed rewards",
          "This explains: high savings, emphasis on education, slow relationship-building"
        ]
      },
      {
        title: "Indirect communication and reading between the lines",
        content: "Chinese communication is often indirect. Direct refusals are rare—people say \"maybe,\" \"it's difficult,\" or \"we'll see\" instead of \"no.\" Criticism is softened with compliments. Disagreement is expressed subtly. This avoids confrontation and preserves face. You need to read between the lines: \"We'll think about it\" often means \"no.\" \"It might be difficult\" means \"it's not happening.\" Silence can mean disagreement. Learn to interpret indirect signals. Don't take words at face value. Pay attention to tone, context, and body language.",
        tips: [
          "\"Maybe\" or \"We'll see\" often means \"no\"",
          "\"It's difficult\" or \"It might be challenging\" means \"it's not happening\"",
          "Direct refusals are rare—people avoid saying \"no\" directly",
          "Criticism is softened: \"This is good, but maybe consider...\"",
          "Silence can indicate disagreement or discomfort",
          "Pay attention to tone, context, and body language—not just words",
          "If someone keeps changing the subject, they're avoiding the topic",
          "Learn to read indirect signals—don't take everything literally"
        ]
      },
      {
        title: "Resilience and \"eating bitterness\" (吃苦)",
        content: "\"Eating bitterness\" (吃苦 chīkǔ) means enduring hardship without complaint. It's a core value—resilience, perseverance, and toughness are admired. Chinese people are taught from childhood to endure difficulties, work hard, and not give up. This explains the intense work culture, competitive education system, and high tolerance for discomfort. Complaining is seen as weak. Overcoming obstacles is celebrated. This mindset drives ambition and success but can also lead to burnout. Understanding this helps you appreciate the work ethic and resilience you'll encounter.",
        tips: [
          "\"Eating bitterness\" (吃苦) means enduring hardship without complaint",
          "Resilience and perseverance are highly valued",
          "Complaining is seen as weak—people endure silently",
          "Hard work and sacrifice are expected and admired",
          "This explains: intense work culture, competitive education, high ambition",
          "Overcoming obstacles is celebrated more than avoiding them",
          "Mental health struggles are often hidden—stigma exists",
          "Younger generations are pushing back, but the value remains strong"
        ]
      }
    ],
    callout: {
      type: 'fact',
      title: '📌 Cultural Insight',
      content: 'The concept of \"face\" (面子) underpins everything. It\'s about reputation, respect, and social standing. Protect it—yours and others\'.'
    },
    cta: "Complete Your Journey"
  },
};

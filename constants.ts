import { Project, WritingWork, Artwork } from './types';

export const LOGO_URL = "https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548192/logo_kcwgxo.png";

export const CODING_PROJECTS: Project[] = [
  {
    id: 'c1',
    title: 'VERRION',
    description: 'Intelligent Document Analysis for legal due dilligence.',
    longDescription: `VERRION is an intelligent document analysis platform that helps legal and business teams rapidly review large volumes of contracts, corporate records, and transaction documents by using advanced AI to detect conflicts, connections, and key clauses across an entire document set. It focuses on speeding up workflows like due diligence and contract review by surfacing risks, inconsistencies, and action points in a structured, explainable format, aiming to cut review time by roughly 50–70% while maintaining a high level of precision and traceability.\n\nThe platform lets users securely upload documents (primarily PDFs) and then runs AI-powered analysis to produce organized outputs such as clause-wise breakdowns, conflict assessment overviews, risk scores, and suggested next steps that teams can use directly in their review process. Alongside its core analysis engine, VERRION offers enterprise-friendly features like strong encryption in transit and at rest, configurable plans including custom enterprise solutions, and governance via clear terms, privacy, and security policies designed for professional legal environments`,
    type: 'VENTURE',
    tech: ['React', 'Node.js', 'NEXT', 'GenAI', 'Firebase', 'TailwindCSS'],
    image: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764575495/bd782f6f-a170-4f0c-9ae6-41cf9488efb6.png',
    logo: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764579450/logo-dark_accent_prwyij_c1ozpf.png',
    startDate: '2025',
    link: 'https://www.docsbrainai.com',
    gallery: ['https://res.cloudinary.com/dd3r9iubi/image/upload/v1764575495/bd782f6f-a170-4f0c-9ae6-41cf9488efb6.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764579907/b24ce01b-0310-46cb-972f-7b35094a42ed.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764579977/2bf5109d-df78-4a1a-be6b-db58f603227b.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764580003/1cf4e9cc-63b8-4859-bd10-a2f1ab00b471.png']
  }, {
    id: 'c2',
    title: 'InterrZap',
    description: 'All-in-one & integrated work ecosystem in a single platform.',
    longDescription: `InterrZap is a web-based productivity platform designed to serve as an all-in-one personal ecosystem for users. It aims to streamline and enhance productivity by integrating various tools and applications into a single accessible interface. Users can manage multiple workflows and applications seamlessly within this unified environment, eliminating the need to switch between different tabs or services continually.​

The platform functions like an operating system for work, providing real-time collaboration and alignment among team members and applications. InterrZap focuses on reducing inefficiencies caused by juggling multiple apps and workflows, thereby saving time and increasing operational clarity. It is designed to be accessible anywhere, supporting remote work and dynamic business environments with a single login for all connected tools.`,
    type: 'VENTURE',
    tech: ['React', 'Node.js', 'Firebase'],
    image: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764575612/0dc34b00-2bee-4901-b9c6-3c68c71a070c.png',
    logo: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764580144/InterrZap_primary_icon_haau3p.png',
    startDate: '2023',
    link: 'https://interrzap.web.app',
    gallery: ['https://res.cloudinary.com/dd3r9iubi/image/upload/v1764575612/0dc34b00-2bee-4901-b9c6-3c68c71a070c.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764580293/cb10c7e1-9a43-4e01-b823-4728a9a89419.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764580360/9901341e-8673-4012-9f9f-399bf85b9abe.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764580400/3b0044a0-e6b2-4888-a097-e8181e9c0e29.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764580436/9deec0fe-6f69-4859-8fee-82b537badf39.png']
  },
  {
    id: 'c3',
    title: 'RGOS',
    description: 'A Family of operating systems in your browsers. An InterrZap Initiative.',
    longDescription: `RGOS (Ripen OS) is an open-source, web-based operating system family developed using just Vanilla HTML, CSS, and JavaScript. It features a modern, sleek graphical user interface with a distinctive orange theme, aiming to replicate the feel and functionality of a traditional OS but entirely accessible via a web browser. The system offers core OS-like capabilities including authenticating users, running multiple apps such as browsers, games, notes, paint, gallery, and a full office suite, all within the web environment. It also supports customization and can be used on various screen sizes, including mobile devices.​

Designed as an ecosystem rather than a conventional OS installation, RGOS serves as a "GUI bridge" that acts as a platform for diverse applications and services accessible through the web. The project envisions providing a complete suite of productivity, gaming, editing, and streaming tools integrated into this web OS environment. This ambitious initiative focuses on delivering a cohesive user experience for web-based computing with broad application support and extendability.`,
    type: 'SIDE_PROJECT',
    tech: ['HTML', 'CSS', 'JS'],
    image: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764575729/848356b7-4fbe-425e-b62d-ab0765d8c5dc.png',
    logo: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764580935/3dd98232-b8d4-4a86-bb9f-c8a988cb9a74.png',
    startDate: '2022',
    link: 'https://ripenos.web.app',
    gallery: ['https://res.cloudinary.com/dd3r9iubi/image/upload/v1764575729/848356b7-4fbe-425e-b62d-ab0765d8c5dc.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764580851/9ccc176f-0f97-4ff3-a599-f68a4076f040.png']
  },
  {
    id: 'c4',
    title: 'ClassEase AI',
    description: 'An AI-powered platform for personalized learning.',
    longDescription: `ClassEaseAI is an academic intelligence platform designed to transform textbooks and chapter notes into structured, interactive learning insights tailored to the educational curriculum. It offers instant analysis that breaks down complex PDFs, DOCX, or text files into clear, organized summaries featuring definitions, core concepts, key formulas, and step-by-step processes. This structure helps students and educators grasp difficult topics more effectively by highlighting important elements such as teachers' insights, lexicons, and essential academic content in an easily digestible format.

A key feature of ClassEaseAI is its built-in chat interface that acts as a personal AI tutor, allowing users to engage directly with their uploaded documents. Students can ask questions, request examples, quiz themselves, or clarify doubts instantly through this interactive chat, enhancing personalized learning experiences. Additionally, the platform supports audio learning with neural AI narration, enabling users to listen to chapter summaries and concepts on the go, making studying flexible and accessible. ClassEaseAI offers flexible plans, including a free Starter plan and a Pro plan with premium narration, advanced quizzes, and export options to PDF and Anki flashcards, catering to different learning needs and preferences.`,
    type: 'SIDE_PROJECT',
    tech: ['NEXT', 'TypeScript', 'GenAI','TailwindCSS'],
    image: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764575912/098c0e10-472d-4af0-8bdf-7692aa752529.png',
    logo: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764581679/a18b82f6-8f35-4f68-8e34-28dcbb717cc8.png',
    startDate: '2025',
    link: 'https://classeaseai.vercel.app/',
    gallery: ['https://res.cloudinary.com/dd3r9iubi/image/upload/v1764575912/098c0e10-472d-4af0-8bdf-7692aa752529.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764581231/Screenshot_2025-12-01_145430_tytsnu.png']
  },
  {
    id: 'c5',
    title: 'Alien Runner',
    description: 'A retro-style arcade-endless runner Platform game.',
    longDescription: `Alien Runner is an action-packed space adventure game set in a distant galaxy where an ancient alien civilization is on the brink of extinction. Players take on the role of the last surviving alien, tasked with escaping relentless pursuers — the Xarxons and Zorvath, who are enemies sworn to destroy the protagonist’s people. The gameplay involves navigating through at least six challenging levels filled with treacherous terrain while scavenging valuable items and advanced technology to aid in the escape. The game emphasizes quick reflexes, strategy, and resource collection to stay ahead of enemies and survive the dangerous journey.

The narrative centers on the survival and hope of an ancient alien race, with a compelling storyline of evading capture and reaching safety on the distant planet Xylophia-IV by the year 2290. Players face constant threats and must outsmart and outmaneuver their ruthless pursuers, making for a high-stakes and immersive experience. The game combines thrilling level design with a rich sci-fi story that captures the urgency and desperation of the protagonist’s mission to save their civilization.`,
    type: 'SIDE_PROJECT',
    tech: ['HTML', 'SASS', 'JS'],
    image: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764577072/5b602072-1e9f-446f-8dc0-fe00c405575a.png',
    logo: 'https://navaneetj239.web.app/Assets/Works/alienRunner.png',
    startDate: '2020',
    link: 'https://navaneet239.github.io/AlienRunner/',
    gallery: ['https://res.cloudinary.com/dd3r9iubi/image/upload/v1764577072/5b602072-1e9f-446f-8dc0-fe00c405575a.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764582352/bf05fb9b-3b6e-4d5a-8803-760c49535563.png']
  },
  {
    id: 'c6',
    title: 'synixora',
    description: 'World’s most-used tools in one seamless workspace.',
    longDescription: `Synixora is a unified web-based platform that integrates the world's most-used online tools into a single seamless workspace, designed to enhance productivity by eliminating the need for multiple logins and app switching. It features an OS-like experience with windowed applications and multitasking capabilities, making it feel like a familiar desktop environment accessible from any modern web browser. The platform towers with a curated collection of essential tools such as URL shorteners, QR code generators, online notepads with Markdown, calculators, PDF viewers, advanced image editors like Photopea, YouTube thumbnail generators, meme creators, whiteboards, temporary email generators, base64 encoders/decoders, and AI summarizers, all free to use with no hidden subscriptions.

Key advantages of Synixora include its customizable workspace for personalized tool arrangements and a strong emphasis on security and privacy, ensuring that user data remains safe. It allows users to switch effortlessly between tools without repeated authentications, streamlining work processes significantly. The platform is designed to be extensible, offering APIs and documentation for developers to integrate additional applications, enabling a continually expanding tool library. Synixora has received positive feedback from its community, highlighting how it revolutionizes workflows by bringing diverse productivity tools under one intuitive interface, making daily digital tasks simple and efficient.`,
    type: 'SIDE_PROJECT',
    tech: ['HTML', 'SASS', 'JS'],
    image: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764577310/d158336d-46d9-4e67-b89b-7227290e6334.png',
    logo: 'https://res.cloudinary.com/interrzapweb/image/upload/v1759285511/logo_zfw8lm.png',
    startDate: '2020',
    link: 'https://navaneet239.github.io/synixora/',
    gallery: ['https://res.cloudinary.com/dd3r9iubi/image/upload/v1764577310/d158336d-46d9-4e67-b89b-7227290e6334.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764582523/94c588b2-cafd-4794-a84e-152c14a013f8.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764582549/db8ecbf4-89ad-4f80-b536-52368cb83a19.png']
  },
  {
    id: 'c7',
    title: "Bragadheesh's Portfolio",
    description: 'The Official Personal Portfolio for a photographer.',
    longDescription: 'A freelance project for a high-volume retailer. This dashboard aggregates sales data, user metrics, and inventory levels in real-time. Built with Next.js for server-side rendering and Recharts for data visualization, it provides actionable insights through a clean, dark-mode UI.',
    type: 'FREELANCE',
    tech: ['HTML', 'SASS', 'JS'],
    image: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764577226/4f4fc81f-db93-4c7d-b615-89f47bddfa9c.png',
    startDate: '2024',
    link: 'https://bragadeesh-portfolio.pages.dev/',
    gallery: ['https://res.cloudinary.com/dd3r9iubi/image/upload/v1764577226/4f4fc81f-db93-4c7d-b615-89f47bddfa9c.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764582673/ff04f551-57a4-4ede-972c-6c837d037e5c.png']
  },
  {
    id: 'c8',
    title: "The Forbidden Legend's Website",
    description: 'Official Website for my Epic Saga',
    longDescription: 'A freelance project for a high-volume retailer. This dashboard aggregates sales data, user metrics, and inventory levels in real-time. Built with Next.js for server-side rendering and Recharts for data visualization, it provides actionable insights through a clean, dark-mode UI.',
    type: 'FREELANCE',
    tech: ['HTML', 'SASS', 'JS'],
    image: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764578655/10bd19ff-0616-4384-be56-09b3abf017b4.png',
    startDate: '2025',
    link: 'https://forbidden-legend.web.app/',
    gallery: ['https://res.cloudinary.com/dd3r9iubi/image/upload/v1764578655/10bd19ff-0616-4384-be56-09b3abf017b4.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764582769/ebf23bbb-9d59-4ee0-acdd-2637dc1f9d02.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764582807/a1440218-38cc-4e8a-85d6-742e05f956a6.png', 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764582839/61fef2a8-8125-4b5e-86a9-da2d1cef7084.png']
  }
];

export const WRITING_WORKS: WritingWork[] = [
  {
    id: 'w1',
    title: 'The Forbidden Legend: A Glory and the Fall',
    excerpt: 'An epic Fantasy of power,  family, redemption, greed, love, venguence and Destiny.',
    type: 'BOOK',
    year: '2025',
    content: `It’s more than just a chronicle of empires, it's a symphony orchestrated by divine hands.
    
Legends were never meant to be lived; they were meant to be etched into the annals of history, written in blood, marked by betrayal, and shaped by destiny...Or is it?

What starts as a desperate struggle for dominance spirals into a labyrinthine descent into darkness, a cosmic trap laid by mysterious forces. As kings topple, whispers echo through the divine realms, and the inferno of the underworld rages on, the boundary separating prophecy from puppetry crumbles.

From the majestic heights of kingdoms to the grim depths of the cosmos, The Glory and the Fall unfolds not just as a chronicle of defeat, but as a pivotal moment when a legend that was never meant to endure transforms into a tale waiting to be retold. When the prophecies echo, they will ignite, setting the stage, questioning the very purpose of everything.`  },
  {
    id: 'w2',
    title: 'Art Face of the Universe',
    excerpt: 'A sneak peek of the abstraction side of the ocean above us.',
    type: 'BOOK',
    year: '2025',
    content: `"What if the universe isn’t just math and matter, but melody and mirror, dream and dance?"

The Art Face of the Universe is not your typical nonfiction book. It doesn’t hand you facts like a textbook, nor does it settle for easy mysticism. Instead, it dares to wander through stars, stories, particles, and poems, asking the oldest questions in the newest ways. What is time? Is death a pause or a page-turn? Are we living a scripted destiny or improvising reality with every breath?

I invite you on a contemplative journey that sits at the crossroads of science, philosophy, and artistic intuition. With lyrical prose and mind-expanding metaphors, he explores topics like the Big Bounce, simulated realities, emotional geometry, and quantum observation,not to prove or preach, but to provoke wonder.

Drawing from sources as diverse as Hindu cosmology, modern physics, Jungian psychology, and artistic abstraction, this book doesn’t claim to know “the truth.” It offers something more useful: new ways to think, feel, and imagine the universe, within you and beyond.`
  },
  {
    id: 'w3',
    title: 'Changes',
    excerpt: `A poem exploring the transient nature of change and the evolution of human consciousness.`,
    type: 'POETRY',
    year: '2021',
    content: `I.\nChanges feels more than us,\nDon't you feel it too?\nYou hit the bed and wake up fed,\nThere would be something new!\n\nII.\nYou find it tough to seek a store,\nYour bike once roared but now it smoked.\nCan't you bare this too?\nSince tech has thrown your writing deck,\nFrom your working room!\n\nIII.\nYou churn your grains,\nTo feed yourself.\nNow grinders do their job.\nKnockers stood at every dawn,\nBut now phone does their jobs.\n\nIV.\nThis is how the world exist,\nWhere changes tune our time.\nWhere we are pawns and thoughts are lawns,\nThat's how all things do shine!!`
  },
  {
    id: 'w4',
    title: 'Lushes in the Nether',
    excerpt: 'A poem inspired by Minecraft\'s Nether dimension.',
    type: 'POETRY',
    year: '2023',
    content: `I.\nThe Lushes in the Nether,\nAre in velvet hue.\nWhich vines top the fossils,\nPlayers due.\n\nII.\nYou seek for a blazer,\ndims that seek.\nSince it's spawn spamming over\nties your feet.\n\nIII.\nThe Oceans feels so broader,\nspits the boiling red.\nThus the bridges crossing over,\ndraws like a thread.\n\nIV.\nBastern, fortress, caves and pools,\nthe only signs of treasury fruit.\nWhich makes us meet the blazes, brute,\nwhich robs your loot or you dodge their shoot.\n\nV.\nDiamond, eyes and Netherites,\nthe only need to reach the fly.\nGot to stroll with the gold-less pair?\nYour the dining for the pigs and packs!\n\nVI.\nYou seek a stare with shader packs,\nthe flare would darken netheracks.\nYour Pc has a starter pack?\nYour lawn would have a grave and sack!!`
  }
];

export const ARTWORKS: Artwork[] = [
  {
    id: 'a0',
    title: 'Cosmic Vision 1',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548547/Expo-2019_pe0bee.jpg'
  },
  {
    id: 'a1',
    title: 'Cosmic Vision 2',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764549040/IMG_20240709_175022_012_hxcjlo.jpg'
  },
  {
    id: 'a2',
    title: 'Cosmic Vision 3',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764549036/441500421_291919007252205_4397020183159757740_n_bvjdxr.jpg'
  },
  {
    id: 'a3',
    title: 'Cosmic Vision 4',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764549032/art24_uxoq5c.jpg'
  },
  {
    id: 'a4',
    title: 'Cosmic Vision 5',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764549027/art23_en6dqc.jpg'
  },
  {
    id: 'a5',
    title: 'Cosmic Vision 6',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764549022/art14_kldppu.jpg'
  },
  {
    id: 'a6',
    title: 'Cosmic Vision 7',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764549016/art6_cvcfza.jpg'
  },
  {
    id: 'a7',
    title: 'Cosmic Vision 8',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548498/art17_zhwlh0.jpg'
  },
  {
    id: 'a8',
    title: 'Cosmic Vision 9',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548477/Expo-2022_buhamd.jpg'
  },
  {
    id: 'a9',
    title: 'Cosmic Vision 10',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548490/art16_wtmour.jpg'
  },
  {
    id: 'a10',
    title: 'Cosmic Vision 11',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548473/445001578_1170154184343079_1060157159404255153_n_iwmrhi.jpg'
  },
  {
    id: 'a11',
    title: 'Cosmic Vision 12',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548470/art22_twozsu.jpg'
  },
  {
    id: 'a12',
    title: 'Cosmic Vision 13',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548465/art21_ll9nxo.jpg'
  },
  {
    id: 'a13',
    title: 'Cosmic Vision 14',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548462/art20_ybvujl.jpg'
  },
  {
    id: 'a14',
    title: 'Cosmic Vision 15',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548450/art7_uawh6f.jpg '
  },
  {
    id: 'a15',
    title: 'Cosmic Vision 16',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548452/art3_gq0iq3.jpg'
  },
  {
    id: 'a16',
    title: 'Cosmic Vision 17',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548459/IMG_20240502_212837_335_leqkiz.jpg'
  },
  {
    id: 'a17',
    title: 'Cosmic Vision 18',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548446/art5_vubrls.jpg'
  },
  {
    id: 'a18',
    title: 'Cosmic Vision 19',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548443/art19_evlgmc.jpg'
  },
  {
    id: 'a19',
    title: 'Cosmic Vision 20',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548441/art2_f60fyx.jpg'
  },
  {
    id: 'a20',
    title: 'Cosmic Vision 21',
    url: 'https://res.cloudinary.com/dd3r9iubi/image/upload/v1764548428/art1_l1vnbg.jpg'
  }
];

export const TRANSITION_DURATION = 550; // in milliseconds
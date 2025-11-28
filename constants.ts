import { Project, WritingWork, Artwork } from './types';

export const LOGO_URL = "logo.png";

export const CODING_PROJECTS: Project[] = [
  {
    id: 'c1',
    title: 'InterrZap',
    description: 'A revolutionary fintech platform for seamless international transactions.',
    longDescription: 'InterrZap is a cutting-edge fintech solution designed to bridge the gap between traditional banking and decentralized finance. By utilizing blockchain technology, it ensures instant, secure, and low-cost international transfers. The architecture relies on a microservices approach using Node.js, ensuring scalability and resilience.',
    type: 'VENTURE',
    tech: ['React', 'Node.js', 'Blockchain'],
    image: 'https://picsum.photos/600/400?random=1',
    logo: 'https://picsum.photos/100/100?random=101',
    startDate: '2023',
    link: 'https://example.com',
    gallery: ['https://picsum.photos/800/600?random=1', 'https://picsum.photos/800/600?random=11', 'https://picsum.photos/800/600?random=21']
  },
  {
    id: 'c2',
    title: 'RGOS',
    description: 'Real-time Gaming Operating System built for web-based cloud gaming.',
    longDescription: 'RGOS (Real-time Gaming Operating System) pushes the boundaries of browser capabilities. It leverages WebAssembly to run high-fidelity games directly in the browser with near-native performance. The system manages resources efficiently, providing a seamless cloud gaming experience without heavy downloads.',
    type: 'VENTURE',
    tech: ['C++', 'WebAssembly', 'WebGL'],
    image: 'https://picsum.photos/600/400?random=2',
    logo: 'https://picsum.photos/100/100?random=102',
    startDate: '2022',
    link: 'https://example.com',
    gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=12']
  },
  {
    id: 'c3',
    title: 'Cosmic Invaders',
    description: 'A retro-style arcade shooter with a modern neon twist.',
    longDescription: 'A passion project paying homage to classic arcade shooters. Cosmic Invaders features procedural level generation, dynamic lighting effects, and a synth-wave soundtrack. Built with Phaser and TypeScript, it demonstrates how modern web technologies can recreate and enhance retro gaming experiences.',
    type: 'SIDE_PROJECT',
    tech: ['Phaser', 'TypeScript'],
    image: 'https://picsum.photos/600/400?random=3',
    logo: 'https://picsum.photos/100/100?random=103',
    startDate: '2021',
    link: 'https://example.com',
    gallery: ['https://picsum.photos/800/600?random=3', 'https://picsum.photos/800/600?random=13']
  },
  {
    id: 'c4',
    title: 'Portfolio V1',
    description: 'The first iteration of my digital garden.',
    longDescription: 'The genesis of my online presence. This portfolio was hand-crafted using raw HTML, SASS, and vanilla JavaScript. It focused on performance and accessibility, serving as a playground for experimenting with CSS animations and responsive design principles.',
    type: 'SIDE_PROJECT',
    tech: ['HTML', 'SASS', 'JS'],
    image: 'https://picsum.photos/600/400?random=4',
    logo: 'https://picsum.photos/100/100?random=104',
    startDate: '2020',
    link: 'https://example.com',
    gallery: ['https://picsum.photos/800/600?random=4', 'https://picsum.photos/800/600?random=14']
  },
  {
    id: 'c5',
    title: 'E-Com Dashboard',
    description: 'High-performance analytics dashboard for a major retailer.',
    longDescription: 'A freelance project for a high-volume retailer. This dashboard aggregates sales data, user metrics, and inventory levels in real-time. Built with Next.js for server-side rendering and Recharts for data visualization, it provides actionable insights through a clean, dark-mode UI.',
    type: 'FREELANCE',
    tech: ['Next.js', 'Tailwind', 'Recharts'],
    image: 'https://picsum.photos/600/400?random=5',
    logo: 'https://picsum.photos/100/100?random=105',
    startDate: '2024',
    link: 'https://example.com',
    gallery: ['https://picsum.photos/800/600?random=5', 'https://picsum.photos/800/600?random=15']
  }
];

export const WRITING_WORKS: WritingWork[] = [
  {
    id: 'w1',
    title: 'The Forbidden Legend',
    excerpt: 'In a world where history is rewritten daily, one scholar finds the truth hidden in the stars.',
    type: 'BOOK',
    year: '2023',
    content: `Chapter 1: The Echo of Silence\n\nThe sky above Sector 7 was the color of a bruised plum, swirling with the toxic runoff of a thousand industrial stacks. Kael adjusted his rebreather, the hiss of recycled air the only sound in the desolate plaza. He wasn't supposed to be here. No one was.\n\nThe Archives had been sealed since the Great Erasure of 2140. History, they said, was a dangerous variable. It led to dissent, to chaos. Better to live in the Eternal Now, a curated reality streamed directly into the neural cortex of every citizen.\n\nBut Kael had found a glitch. A fragment of old code hidden in the maintenance subroutines of his cleaning drone. It was a map. A map to something called a "Library."\n\nHe approached the massive blast doors, their surface pitted by acid rain. His hand trembled as he raised the decoder key he'd spent three years assembling from scrap tech. The device hummed, a low resonance that seemed to vibrate in his teeth.\n\n"Access Requested," a mechanical voice boomed, dusting falling from the archway.\n\n"Override code: ALEPH-NULL," Kael whispered.\n\nThe gears groaned, the sound of metal waking from a century-long slumber. As the doors parted, a gust of stale, dry air hit him. It smelled of paper. It smelled of time.\n\nInside, rows upon rows of physical books stretched into the darkness. No holograms. No data streams. Just ink on wood pulp. Kael walked forward, his flashlight cutting through the gloom. He picked up a leather-bound volume from a nearby table. The title was faded, but legible: "The History of the Free World."\n\nHe opened it, and for the first time in his life, Kael began to read the truth.`
  },
  {
    id: 'w2',
    title: 'Art Face of the Universe',
    excerpt: 'An exploration of how aesthetics shape the fundamental laws of physics.',
    type: 'BOOK',
    year: '2022',
    content: `Introduction: The Symmetry of Existence\n\nIs beauty a byproduct of evolution, a trick of the mind to encourage reproduction and survival? Or is it something more fundamental, woven into the very fabric of spacetime?\n\nWhen we look at the equations that govern our universe—Einstein's General Relativity, Dirac's equation for the electron—we find a startling elegance. Physicists often use the word "beautiful" to describe a theory that is concise, symmetrical, and inevitable.\n\nThis book posits that the universe is not just a machine, but a canvas. The laws of physics are the brushstrokes of a cosmic artist. From the Fibonacci spirals in a sunflower to the hexagonal storm on Saturn's north pole, nature exhibits a preference for order, for pattern, for art.\n\nWe will explore the concept of "Aesthetic Gravity"—the idea that the universe tends towards states of maximum beauty. Just as a ball rolls down a hill to minimize potential energy, perhaps the cosmos evolves to maximize complexity and aesthetic resonance.\n\nConsider the formation of stars. Dust and gas collapse under gravity, igniting nuclear fusion, creating light in the darkness. It is a violent process, yes, but one that results in the creation of heavy elements—carbon, oxygen, iron—the building blocks of life. We are, quite literally, stardust admiring the stars.\n\nIn the following chapters, we will journey from the quantum realm, where particles dance in probabilistic clouds, to the edge of the observable universe, looking for the signature of the artist in the background radiation of the Big Bang.`
  },
  {
    id: 'w3',
    title: 'Changes',
    excerpt: 'The seasons turn, and so do the hearts of men. A collection of transient thoughts.',
    type: 'POETRY',
    year: '2021',
    content: `I.\n\nThe leaves turn gold,\nNot because they want to,\nBut because the sun has grown cold,\nAnd the earth has withdrawn its due.\n\nWe change the same,\nShedding skins of who we were,\nForgetting a lover's name,\nBecoming a distinct blur.\n\nII.\n\nWinter comes in silence,\nA blanket of white noise.\nIt covers the violence,\nOf our discarded toys.\n\nI sat by the window pane,\nWatching the frost take hold.\nThinking of the summer rain,\nAnd stories left untold.\n\nIII.\n\nSpring is a violent thing,\nBreaking the frozen ground.\nLife demands to sing,\nA chaotic, messy sound.\n\nWe rise from the bed,\nRub the sleep from our eyes.\nThe past is dead,\nLook at the sunrise.`
  },
  {
    id: 'w4',
    title: 'Lushes in the Nether',
    excerpt: 'Neon lights reflecting in puddles of synthetic rain.',
    type: 'POETRY',
    year: '2024',
    content: `// SYSTEM_BOOT: SEQUENCE_ALPHA\n// LOCATION: NEON_DISTRICT_04\n\nAcid rain on chrome,\nA million lights, but nobody's home.\nThe drone overhead scans my face,\nClassifying me: Human, waste.\n\nData streams in the gutter flow,\nRGB reflections in the undertow.\nI plugged into the net at three,\nSearching for a ghost of me.\n\nShe was binary code and light,\nA digital phantom in the night.\n"Come away," she typed in green,\n"To a world you've never seen."\n\nBut my body is meat and bone,\nTethered to this sinking stone.\nSo I watch the pixels dance and fade,\nSipping syn-caf in the shade.\n\nLushes in the nether, lost and found,\nSilence is the only sound.\nDisconnect.\nRestart.\nRepeat.`
  }
];

export const ARTWORKS: Artwork[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `a${i}`,
  title: `Cosmic Vision ${i + 1}`,
  url: `https://picsum.photos/400/500?random=${10 + i}`
}));

export const TRANSITION_DURATION = 550; // in milliseconds
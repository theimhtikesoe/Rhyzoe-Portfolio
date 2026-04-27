import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiSpotify, 
  SiApplemusic, 
  SiYoutube, 
  SiInstagram, 
  SiLine, 
  SiFacebook, 
  SiGithub 
} from 'react-icons/si';

interface SocialLink {
  platform: string;
  title: string;
  cta: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}

const socialLinks: SocialLink[] = [
  {
    platform: 'Spotify',
    title: 'Listen My Sound',
    cta: 'Stream on Spotify',
    url: 'https://open.spotify.com/artist/6nyd1OiXag3LVVhASA1HQ9',
    icon: <SiSpotify size={40} />,
    color: '#1DB954',
    glowColor: 'rgba(29, 185, 84, 0.5)',
  },
  {
    platform: 'Apple Music',
    title: 'Listen My Sound',
    cta: 'Stream on Apple Music',
    url: 'https://music.apple.com/us/artist/rhyzoe/1585617412',
    icon: <SiApplemusic size={40} />,
    color: '#FA243C',
    glowColor: 'rgba(250, 36, 60, 0.5)',
  },
  {
    platform: 'YouTube (Rhyzoe)',
    title: 'Watch My Vision',
    cta: 'Subscribe to Main',
    url: 'https://youtube.com/@rhyzoeinburma',
    icon: <SiYoutube size={40} />,
    color: '#FF0000',
    glowColor: 'rgba(255, 0, 0, 0.5)',
  },
  {
    platform: 'YouTube (Zayat Vibes)',
    title: 'Watch My Vision',
    cta: 'Subscribe to Vibes',
    url: 'https://youtube.com/@zayatvibes',
    icon: <SiYoutube size={40} />,
    color: '#FF0000',
    glowColor: 'rgba(255, 0, 0, 0.5)',
  },
  {
    platform: 'Instagram',
    title: 'Follow My Journey',
    cta: 'View Stories',
    url: 'https://www.instagram.com/mgrhyzoe',
    icon: <SiInstagram size={40} />,
    color: '#E4405F',
    glowColor: 'rgba(228, 64, 95, 0.5)',
  },
  {
    platform: 'LINE',
    title: 'Tap In Directly',
    cta: 'Let\'s Chat',
    url: 'https://line.me/ti/p/DaXybLSsSJ',
    icon: <SiLine size={40} />,
    color: '#00B900',
    glowColor: 'rgba(0, 185, 0, 0.5)',
  },
  {
    platform: 'Facebook Personal',
    title: 'Stay Connected',
    cta: 'Add Friend',
    url: 'https://www.facebook.com/share/163Eysu3YX/',
    icon: <SiFacebook size={40} />,
    color: '#1877F2',
    glowColor: 'rgba(24, 119, 242, 0.5)',
  },
  {
    platform: 'Facebook Page',
    title: 'Stay Connected',
    cta: 'Follow Page',
    url: 'https://www.facebook.com/share/1FvL5c8caz/',
    icon: <SiFacebook size={40} />,
    color: '#1877F2',
    glowColor: 'rgba(24, 119, 242, 0.5)',
  },
  {
    platform: 'GitHub',
    title: 'See My Code',
    cta: 'View Repos',
    url: 'https://github.com/theimhtikesoe',
    icon: <SiGithub size={40} />,
    color: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.3)',
  },
];

const SocialHub: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0A0A0A]">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px] animate-pulse" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-orbitron uppercase"
          >
            Connect Everywhere
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-light"
          >
            Not a fan of forms? Tap in directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-white/10"
              style={{
                boxShadow: `0 0 0px transparent`,
              }}
            >
              {/* Neon Border Glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: `1px solid ${link.color}`,
                  boxShadow: `0 0 20px ${link.glowColor}, inset 0 0 10px ${link.glowColor}`,
                }}
              />

              {/* Icon with Platform Color */}
              <div 
                className="mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{ color: link.color }}
              >
                {link.icon}
              </div>

              {/* Text Content */}
              <div className="text-center">
                <h3 className="text-white font-orbitron text-sm md:text-base font-bold mb-2 uppercase tracking-wide">
                  {link.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm font-medium group-hover:text-white transition-colors duration-300">
                  {link.cta}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 transition-all duration-500 group-hover:w-1/2 rounded-full"
                style={{ backgroundColor: link.color, boxShadow: `0 0 10px ${link.color}` }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialHub;

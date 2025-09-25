// Team Images Configuration
// Import local images properly for React

// Import system images
import logoImg from './system/logo.png';
import logo1Img from './system/logo1.png'

// Import Shah Hussain's actual image
import shahHussainImg from './team/co-founders/shah-hussain.jpg';
import somanAhmadImg from './team/co-founders/soman-ahmad.jpeg'

export const teamImages = {
    // Co-founders - Professional executive headshots
    coFounders: {
        shahHussain: shahHussainImg,
        somanAhmad: somanAhmadImg,        // Legacy names for backward compatibility
},

    // Lead Ambassadors - Academic/Professional look
    leadAmbassadors: {
        emilychen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
        michaelRodriguez: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
        priyaSharma: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    },

    // Core Team - Professional corporate headshots
    coreTeam: {
        jamesWilson: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
        lisaThompson: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
        robertKim: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
        annaKowalski: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    },

    // University Ambassadors - Young professional/student look
    universityAmbassadors: {
        alexThompson: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face&auto=format&q=80',
        mariaGonzalez: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face&auto=format&q=80',
        davidKim: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face&auto=format&q=80',
        sophieWilson: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face&auto=format&q=80',
        rajPatel: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=300&h=300&fit=crop&crop=face&auto=format&q=80',
        emmaJohnson: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face&auto=format&q=80',
        carlosSilva: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face&auto=format&q=80',
        yukiTanaka: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&auto=format&q=80',
        lisaAnderson: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face&auto=format&q=80',
        ahmedHassan: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face&auto=format&q=80',
    },

    // Placeholder
    placeholder: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&auto=format&q=80',
};

// System images
export const systemImages = {
    logo: logoImg,
    logo1: logo1Img
};

export default teamImages;
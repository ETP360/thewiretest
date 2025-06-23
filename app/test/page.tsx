/* eslint-disable react/no-unescaped-entities */

'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="relative h-screen w-full bg-black text-white font-sans overflow-hidden snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {/* Background image fixed */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image
          src="/the-wire.png"
          alt="The Wire Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Sections */}
      <section className="snap-start min-h-screen flex flex-col justify-center items-center text-center relative z-10 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif text-[#d6c3a1] tracking-wide mb-6">THE WIRE</h1>
          <p className="text-xl uppercase tracking-widest text-[#f5f5f5]">RÉSEAU DES ARTISANS DE LA PAIX</p>
          <a href="#contact" className="inline-block mt-10 bg-[#d6c3a1] text-black px-8 py-4 rounded-lg text-lg hover:bg-[#e3d3b6] transition shadow-md">Rejoindre le Cercle</a>
        </motion.div>
      </section>

      <section className="snap-start min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <p className="text-lg leading-relaxed max-w-2xl">
            Tu rêves d’un monde de paix.<br /><br />
            Et ce rêve n’est pas un simple idéal pour toi. C’est une vision profonde qui te traverse depuis toujours.<br />
            Tu sais que tu es là pour servir plus grand que toi : la Vie, l’Amour, la Paix, Dieu…<br />
            Tu sens que tu es ici pour contribuer à un monde plus juste, plus vivant, plus aimant.
          </p>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} viewport={{ once: true }} className="text-lg mt-6 max-w-2xl">
          Mais voilà… ce rêve est exigeant. Et parfois, tu es fatigué·e.<br />
          Fatigué·e d’y croire seul·e. Fatigué·e de porter sans relâche, de semer sans toujours voir germer.<br />
          Fatigué·e de ne pas trouver un lieu où toi aussi, tu peux être soutenu·e, aimé·e, entendu·e.
        </motion.p>
      </section>

      <section className="snap-start min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-[#d6c3a1]">The Wire est né pour toi.</h2>
          <p>
            Un cercle sacré. Un espace vivant. Un réseau d’âme à âme.<br />
            Un fil invisible entre celles et ceux qui veulent incarner la paix… pour de vrai.<br />
            Tu n’as pas à tout faire seul·e.<br />
            Tu n’as pas à t’épuiser dans ton coin.<br /><br />
            The Wire te soutient autant dans ton intériorité que dans tes projets concrets.<br />
            C’est un lieu où tu peux te déposer, te sentir, respirer, <strong>mais aussi clarifier, structurer, poser les bases de ce que tu veux faire naître dans le monde</strong>.<br /><br />
            Un espace où ta vision devient plus claire. Où tu avances, sans pression, mais avec engagement. Où ton rêve devient chemin.
          </p>
        </div>
      </section>

      <section className="snap-start min-h-screen flex flex-col justify-center items-center px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-serif text-[#d6c3a1] mb-4">Ce que tu trouveras dans The Wire :</h3>
            <ul className="list-disc list-inside space-y-2 text-md text-white/90">
              <li>Un espace de repos pour l’âme</li>
              <li>Un lieu de connexion profonde avec d’autres artisan·e·s de paix</li>
              <li>Un soutien vivant et régulier pour nourrir ta vision et la rendre tangible</li>
              <li>Des temps pour se déposer, partager, ressentir — sans masque ni jugement</li>
              <li>Des transmissions pour éclairer ce qui se joue en toi et autour de toi</li>
              <li>Des repères concrets pour avancer, un pas à la fois</li>
              <li>Une plongée dans les lois du vivant, de l’équilibre, de l’homéostasie</li>
              <li>Des rappels puissants de qui tu es et de ce que tu portes déjà en toi</li>
            </ul>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-serif text-[#d6c3a1] mb-4">Ce que je t’offre dans The Wire :</h3>
            <p>
              Je serai là pour t’accueillir. Pour t’écouter profondément. Pour t’aider à revenir à toi… et avancer vers ce que tu veux bâtir.<br /><br />
              Je suis là pour rallumer ta flamme quand elle vacille. Pour poser avec toi des mots, des intentions, des actes.<br />
              Pour te rappeler que ta lumière est faite pour se diffuser.<br /><br />
              Dans The Wire, je t’accompagne autant dans l’invisible que dans le concret. Tu n’es pas seul·e pour faire ce pas de plus.
            </p>
          </div>
        </div>
      </section>

      <section className="snap-start min-h-screen flex flex-col justify-center items-center px-6 relative z-10 text-center">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-[#d6c3a1]">Ce n&apos;est pas un programme.</h2>
          <p>
            C’est une centrale d’amour et de lumière. Un cercle vivant où l’on chemine ensemble — intérieurement et extérieurement.<br />
            Un espace pour que ta paix intérieure se transforme en force d'action dans le monde.
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-[#d6c3a1]">Prête à te relier ?</h2>
          <p>
            Je t’invite à prendre un temps avec moi. Un moment simple, de cœur à cœur.<br />
            Pour sentir si The Wire est le bon espace pour toi, ici et maintenant.
          </p>

          <a href="#contact" className="inline-block mt-4 bg-[#d6c3a1] text-black px-8 py-4 rounded-lg text-lg hover:bg-[#e3d3b6] transition shadow-md">Prendre rendez-vous</a>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-10">
        &copy; 2025 The Wire. Tous droits réservés.
      </footer>
    </div>
  );
}

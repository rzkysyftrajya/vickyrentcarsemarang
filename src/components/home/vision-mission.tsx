import { CheckCircle, Target } from "lucide-react";

const visions = [
    "Menjadi perusahaan rental mobil terdepan yang mendefinisikan ulang pengalaman perjalanan di Indonesia.",
    "Menjadi pilihan utama dalam industri penyewaan kendaraan dengan standar pelayanan dan kualitas armada terbaik."
];

const missions = [
    "Memberikan layanan rental berkualitas tinggi dengan armada terawat dan dukungan tim profesional.",
    "Menyediakan solusi transportasi yang fleksibel, aman, dan efisien bagi pelanggan individu maupun korporat.",
    "Menjalin hubungan jangka panjang dengan pelanggan melalui pelayanan yang ramah, responsif, dan terpercaya.",
]

export function VisionMission() {
  return (
      <section className="py-24 lg:py-32 bg-background">
          <div className="container">
              <div className="text-center mb-12 animate-fade-in-up">
                  <p className="font-semibold text-primary uppercase tracking-wider">FONDASI KAMI</p>
                  <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-foreground">Visi & Misi Perusahaan</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Fondasi yang menggerakkan komitmen kami untuk selalu memberikan yang terbaik bagi Anda.
                  </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                  <div className="animate-fade-in-up bg-secondary/50 p-8 rounded-lg" style={{animationDelay: '0.1s'}}>
                      <div className="flex items-center gap-4 mb-6">
                        <Target className="h-10 w-10 text-primary"/>
                        <h3 className="text-2xl font-bold text-foreground">Visi Kami</h3>
                      </div>
                      <ul className="space-y-4">
                        {visions.map((vision, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                                <p className="text-muted-foreground">{vision}</p>
                            </li>
                        ))}
                      </ul>
                  </div>
                   <div className="animate-fade-in-up bg-secondary/50 p-8 rounded-lg" style={{animationDelay: '0.2s'}}>
                      <div className="flex items-center gap-4 mb-6">
                        <CheckCircle className="h-10 w-10 text-primary"/>
                        <h3 className="text-2xl font-bold text-foreground">Misi Kami</h3>
                      </div>
                      <ul className="space-y-4">
                        {missions.map((mission, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                                <p className="text-muted-foreground">{mission}</p>
                            </li>
                        ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  );
}

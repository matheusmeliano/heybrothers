import React from 'react'
import { ExternalLink, Search, MapPin, Star, Globe, Heart, Rocket, ShieldCheck, ArrowRight } from 'lucide-react'

export default function GuemdiPage() {
  return (
    <main className="relative z-20 flex-1 flex flex-col items-center justify-start w-full py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header da Página */}
        <div className="text-center mb-16 px-4 md:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6">
            <Star size={16} className="text-[#34a853]" />
            <span className="text-sm font-medium tracking-wide uppercase text-[#34a853]">Nosso Maior Orgulho</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Conheça o <span className="text-[#34a853]">Guemdi</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            O Guia Empresarial Digital definitivo. Uma plataforma desenvolvida com carinho pela <span className="text-gray-900 font-semibold">HEYBROTHERS</span> para conectar pessoas aos melhores negócios locais.
          </p>
        </div>

        {/* História e Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-8 md:gap-8 px-4 sm:px-6 md:px-8 mb-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-[#34a853] border border-green-100">
                  <Heart size={20} strokeWidth={1.75} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">A Nossa História</h2>
              </div>
              
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  Tudo começou com uma dor real que observamos em nossa jornada na <strong>HEYBROTHERS</strong>. Muitos negócios incríveis estavam escondidos. Por mais que tivessem potencial, a falta de uma presença digital estruturada dificultava que fossem encontrados por quem realmente precisava deles.
                </p>
                <p>
                  Foi então que decidimos criar algo maior que uma simples campanha. Queríamos um ecossistema. Nasceu o <strong>Guemdi - Guia Empresarial Digital</strong>.
                </p>
                <p>
                  Nós integramos a plataforma diretamente aos dados do <strong>Google Meu Negócio</strong>. Isso nos permitiu organizar informações públicas de forma estruturada, limpa e de fácil acesso. Mas não paramos por aí: adicionamos recursos e serviços exclusivos dentro da própria plataforma, proporcionando uma vitrine digital robusta e prática para empresas e usuários.
                </p>
                <blockquote className="border-l-4 border-[#34a853] pl-4 italic text-gray-800 font-medium my-6 bg-green-50/50 py-2 rounded-r-lg">
                  "Mais do que um diretório, o Guemdi é uma ponte entre o consumidor que busca qualidade e o empreendedor que merece destaque."
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="https://guemdi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#34a853] hover:bg-[#2b8a44] text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Acessar guemdi.vercel.app
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-square md:aspect-[4/3] bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
              <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <div className="ml-3 bg-white px-3 py-0.5 rounded text-[10px] text-gray-400 font-mono flex items-center gap-1 border border-gray-100">
                  <Globe size={10} /> guemdi.vercel.app
                </div>
              </div>
              <div className="flex-1 p-6 sm:p-8 bg-gradient-to-br from-green-50/50 to-white flex flex-col relative">
                <div className="absolute top-4 right-4 bg-[#34a853] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  BETA
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">O que você procura?</h3>
                <div className="w-full h-10 bg-white rounded-lg border border-gray-200 flex items-center px-3 mb-6">
                  <Search size={16} className="text-gray-400 mr-2" />
                  <div className="w-24 h-3 bg-gray-100 rounded-sm"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white p-3 rounded-lg border border-gray-100 hover:border-green-200 transition-colors">
                      <div className="w-8 h-8 bg-green-50 rounded-md mb-2 flex items-center justify-center">
                        <MapPin size={14} className="text-[#34a853]" />
                      </div>
                      <div className="w-3/4 h-3 bg-gray-100 rounded-sm mb-1.5"></div>
                      <div className="w-1/2 h-2 bg-gray-50 rounded-sm"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Por que o Guemdi é diferente?</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Pensado na experiência do usuário e no resultado real para os lojistas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-12 gap-x-8 md:gap-8 px-4 sm:px-6 md:px-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-[#34a853] border border-green-100 mb-4">
                <Globe size={24} strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrado ao Google</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Utilizamos os dados do Google Meu Negócio para garantir que as informações estejam sempre atualizadas, organizadas e prontas para serem encontradas.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-[#34a853] border border-green-100 mb-4">
                <Rocket size={24} strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visibilidade Ampliada</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Oferecemos recursos exclusivos na plataforma para que as empresas parceiras tenham um destaque ainda maior frente à concorrência local.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-[#34a853] border border-green-100 mb-4">
                <ShieldCheck size={24} strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Selo de Confiança</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Um ambiente seguro e confiável. Negócios verificados e organizados para que o cliente final tome a melhor decisão de compra.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="px-4 sm:px-6 md:px-8">
          <div className="bg-gray-100 rounded-2xl p-6 text-center border border-gray-200">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Pronto para explorar o <span className="text-[#34a853]">Guemdi</span>?
              </h2>
              <p className="text-sm md:text-base text-gray-800 mb-6">
                Descubra empresas, serviços e profissionais da sua região em um só lugar. Uma iniciativa HEYBROTHERS para o crescimento local.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://guemdi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#34a853] hover:bg-[#2b8a44] text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  Acessar a Plataforma
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

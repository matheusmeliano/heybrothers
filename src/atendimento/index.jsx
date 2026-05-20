import React from 'react'
import { Instagram, Facebook, MessageCircle, Mail, ArrowUpRight } from 'lucide-react'

export default function AtendimentoPage() {
  const whatsappNumberHuman = '(65) 9 9693-3336'
  const whatsappLink = 'https://wa.me/5565996933336'
  const email = 'heybrotherscolaboradores@gmail.com'
  const instagramUrl = 'https://www.instagram.com/eiirmaos/'
  const facebookUrl = 'https://www.facebook.com/eiirmaos'

  return (
    <main className="relative z-20 flex-1 flex flex-col items-center justify-start w-full py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Atendimento
          </h1>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Escolha o canal preferido para falar com a nossa equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-8 md:gap-x-8 px-4 sm:px-6 md:px-8">
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-[#de0303] border border-red-100">
                  <Instagram size={20} strokeWidth={1.75} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Redes sociais</h2>
              </div>
              <div className="h-px bg-gray-200 mb-3"></div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Acompanhe conteúdos, atualizações e fale conosco pelas redes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 text-gray-800 transition-all"
                >
                  <Instagram size={18} strokeWidth={1.75} className="text-[#de0303]" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 text-gray-800 transition-all"
                >
                  <Facebook size={18} strokeWidth={1.75} className="text-[#de0303]" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-[#de0303] border border-red-100">
                  <MessageCircle size={20} strokeWidth={1.75} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">WhatsApp</h2>
              </div>
              <div className="h-px bg-gray-200 mb-3"></div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Atendimento rápido para dúvidas, solicitações e orçamentos.
              </p>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                <span className="text-sm font-medium text-gray-900">{whatsappNumberHuman}</span>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#de0303] hover:bg-[#b80202] text-white rounded-full pl-4 pr-3 py-2 transition-all w-full lg:w-auto mt-3 lg:mt-0"
                >
                  <span className="text-xs font-bold tracking-widest uppercase">Abrir</span>
                  <ArrowUpRight size={16} strokeWidth={2.25} />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-[#de0303] border border-red-100">
                  <Mail size={20} strokeWidth={1.75} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">E-mail</h2>
              </div>
              <div className="h-px bg-gray-200 mb-3"></div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Envie sua mensagem por e-mail e retornamos com a melhor solução.
              </p>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                <div className="overflow-auto max-w-full">
                  <span className="text-sm font-medium text-gray-900">{email}</span>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#de0303] hover:bg-[#b80202] text-white rounded-full pl-4 pr-3 py-2 transition-all w-full lg:w-auto mt-3 lg:mt-0"
                >
                  <span className="text-xs font-bold tracking-widest uppercase">Enviar</span>
                  <ArrowUpRight size={16} strokeWidth={2.25} />
                </a>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Disponibilidade</p>
              <p className="text-sm text-gray-800">
                Respondemos de segunda a sexta, horário comercial. Mensagens fora do horário serão atendidas no próximo dia útil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

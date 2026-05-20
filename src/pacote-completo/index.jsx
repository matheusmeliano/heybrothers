import React, { useState, useEffect } from 'react'
import { Check, ArrowRight, Star, Smartphone, Video, Camera, MousePointer, Share2, Globe, TrendingUp, AlertTriangle, X } from 'lucide-react'

export default function PacoteCompletoPage() {
  const [showBudgetModal, setShowBudgetModal] = useState(false)
  const [modalAnim, setModalAnim] = useState('hidden')
  const [budgetForm, setBudgetForm] = useState({
    socialMedia: { instagram: false, facebook: false, none: false },
    videosPerWeek: '',
    artsPerWeek: '',
    photoSessionsPerWeek: '',
    paidTraffic: { instagram: false, facebook: false, google: false, none: false },
    needSiteOrApp: 'Não',
    siteOrAppDetails: ''
  })

  const openBudgetModal = () => {
    setShowBudgetModal(true)
    setTimeout(() => setModalAnim('enter'), 10)
  }

  const closeBudgetModal = () => {
    setModalAnim('exit')
    setTimeout(() => setShowBudgetModal(false), 200)
  }

  useEffect(() => {
    if (showBudgetModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showBudgetModal])

  const handleBudgetChange = (e) => {
    const { name, value } = e.target
    setBudgetForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleBudgetSubmit = (e) => {
    e.preventDefault()
    const socialSelected = budgetForm.socialMedia.none
      ? 'Nenhum'
      : [
          budgetForm.socialMedia.instagram ? 'Instagram' : null,
          budgetForm.socialMedia.facebook ? 'Facebook' : null
        ].filter(Boolean).join(', ') || 'Nenhum'
    const trafficSelected = budgetForm.paidTraffic.none
      ? 'Nenhum'
      : [
          budgetForm.paidTraffic.instagram ? 'Instagram' : null,
          budgetForm.paidTraffic.facebook ? 'Facebook' : null,
          budgetForm.paidTraffic.google ? 'Google' : null
        ].filter(Boolean).join(', ') || 'Nenhum'
    const message =
      `Solicitação de orçamento PERSONALIZADO:\n` +
      `- Gestão de Redes Sociais: ${socialSelected}\n` +
      `- Quantos vídeos na semana precisa: ${budgetForm.videosPerWeek || '0'}\n` +
      `- Quantas artes por semana: ${budgetForm.artsPerWeek || '0'}\n` +
      `- Quantas fotos por semana: ${budgetForm.photoSessionsPerWeek || '0'}\n` +
      `- Gestão de Tráfego Pago: ${trafficSelected}\n` +
      `- Precisa de Site/App: ${budgetForm.needSiteOrApp}\n` +
      (budgetForm.needSiteOrApp === 'Sim' ? `- Sobre o site/app: ${budgetForm.siteOrAppDetails?.trim() || 'Não informado'}\n` : '')
    const url = `https://wa.me/5565996933336?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
    closeBudgetModal()
  }
  const plans = [
    {
      name: 'PLANO BÁSICO',
      price: 'R$ 800,00',
      period: '/ mês',
      description: 'Ideal para empresas que querem presença digital ativa e profissional.',
      color: 'text-green-500',
      buttonText: 'Quero este plano',
      link: 'https://pag.ae/81zZxs-HJ',
      highlight: false,
      services: [
        { icon: Share2, text: 'Gestão de Redes Sociais (Instagram e Facebook)' },
        { icon: Check, text: 'Planejamento mensal' },
        { icon: Check, text: 'Organização de calendário' },
        { icon: Check, text: 'Publicação e acompanhamento' },
        { icon: Video, text: '2 vídeos por mês (Gravação e edição simples)' },
        { icon: Star, text: 'Até 2 artes por semana' },
        { icon: Camera, text: '1 sessão de fotos por semana' },
        { icon: MousePointer, text: 'Gestão de Tráfego Pago (Insta e Face)' },
        { icon: Globe, text: 'Site ou Aplicativo – consultar valor' }
      ],
      objective: 'Manter presença constante e profissionalizar a imagem da empresa.',
      note: '*Investimento em anúncios pago à parte'
    },
    {
      name: 'PLANO ESSENCIAL',
      price: 'R$ 1.600,00',
      period: '/ mês',
      description: 'Ideal para empresas que querem crescer, gerar vendas e autoridade.',
      color: 'text-[#de0303]',
      buttonText: 'Quero crescer',
      link: 'https://pag.ae/81zZD3rga',
      highlight: true,
      services: [
        { icon: Share2, text: 'Gestão de Redes Sociais (Instagram e Facebook)' },
        { icon: Check, text: 'Planejamento mensal' },
        { icon: Check, text: 'Organização de calendário' },
        { icon: Check, text: 'Publicação e acompanhamento' },
        { icon: TrendingUp, text: 'Estratégia de posicionamento' },
        { icon: Video, text: '4 vídeos por mês (Gravação com drone + edição profissional)' },
        { icon: Star, text: 'Até 4 artes por semana' },
        { icon: Camera, text: '2 sessões de fotos por semana' },
        { icon: MousePointer, text: 'Gestão de Tráfego Pago (Insta, Face e Google)' },
        { icon: Globe, text: 'Site ou Aplicativo – consultar valor' }
      ],
      objective: 'Aumentar visibilidade e potencializar vendas com anúncios estratégicos.',
      note: '*Investimento em anúncios pago à parte'
    },
    {
      name: 'PERSONALIZADO',
      price: 'Sob Consulta',
      period: '',
      description: 'Consulte um orçamento particular conforme a necessidade da sua empresa.',
      color: 'text-blue-500',
      buttonText: 'Solicitar orçamento',
      highlight: false,
      services: [
        { icon: TrendingUp, text: 'Estratégia exclusiva' },
        { icon: Check, text: 'Funil de vendas estruturado' },
        { icon: Video, text: 'Produção intensiva de vídeos' },
        { icon: MousePointer, text: 'Campanhas avançadas' },
        { icon: Globe, text: 'Desenvolvimento completo de site ou aplicativo' },
        { icon: Star, text: 'Estratégias de escala' }
      ],
      objective: 'Soluções sob medida para grandes desafios e metas agressivas.',
      note: ''
    }
  ]

  return (
    <>
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center w-full min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 px-4 md:px-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
              <Star size={16} className="text-[#de0303]" />
              <span className="text-sm font-medium tracking-wide uppercase text-[#de0303]">Tudo em um só lugar</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Planos de Marketing Digital
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Escolha o plano ideal para o crescimento do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 md:gap-8 px-4 sm:px-6 md:px-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white border border-gray-200 hover:border-gray-300 ${plan.highlight ? 'scale-105 z-10' : ''} rounded-2xl p-8 flex flex-col`}
              >
                {plan.highlight && (
                  <div className="hidden md:block absolute -top-4 left-1/2 -translate-x-1/2 bg-[#de0303] text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                    + Escolhido
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-lg font-bold tracking-wider mb-2 ${plan.color}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 text-sm font-medium">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  {plan.services.map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <service.icon size={16} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-[#de0303]' : 'text-gray-500'}`} />
                      <span>{service.text}</span>
                    </div>
                  ))}
                  {plan.note && (
                    <p className="text-xs text-gray-500 italic mt-4 border-t border-gray-200 pt-4">
                      {plan.note}
                    </p>
                  )}
                </div>

                <div className="mt-auto">
                  <div className="bg-gray-100 rounded-lg p-4 mb-6 border border-gray-200">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Objetivo</p>
                    <p className="text-sm text-gray-800">{plan.objective}</p>
                  </div>
                  
                  {plan.link ? (
                    <a
                      href={plan.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 bg-[#de0303] hover:bg-[#b80202] text-white"
                    >
                      {plan.buttonText}
                      <ArrowRight size={16} />
                    </a>
                  ) : (
                    <button
                      className="w-full py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 bg-[#de0303] hover:bg-[#b80202] text-white"
                      onClick={openBudgetModal}
                    >
                      {plan.buttonText}
                      <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="px-4 sm:px-6 md:px-8 mt-10 md:mt-12 lg:mt-16">
            <div className="border border-gray-200 bg-gray-50 rounded-xl p-5">
              <div className="flex items-center justify-center gap-3">
                <span className="w-5 h-5 shrink-0 flex items-center justify-center">
                  <AlertTriangle size={20} className="text-[#de0303] shrink-0" />
                </span>
                <p className="text-base text-gray-800">
                  Caso deseje cancelar o plano contratado, entre em contato com nossa equipe de atendimento.
                </p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-xs sm:text-sm text-gray-600 text-center max-w-3xl mx-auto">
                Após a contratação, o prazo para solicitação de cancelamento com reembolso é de até 7 dias. Após esse período, o cancelamento poderá ser solicitado, porém o plano permanecerá ativo até a conclusão do ciclo mensal contratado.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      {showBudgetModal && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div
              onClick={closeBudgetModal}
              className={`fixed inset-0 bg-black/40 transition-opacity duration-200 ${modalAnim === 'enter' ? 'opacity-100' : 'opacity-0'}`}
            />
            <div
              className={`relative z-[10000] w-full max-w-lg bg-white border border-gray-200 rounded-2xl p-6 shadow-xl transform transition-all duration-300 ease-out ${
                modalAnim === 'enter' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Solicitar orçamento</h3>
                <button
                  onClick={closeBudgetModal}
                  className="p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100"
                  aria-label="Fechar"
                >
                  <X size={18} />
                </button>
              </div>
              <form onSubmit={handleBudgetSubmit} className="space-y-5">
                <div className="space-y-4">
                  <div className="flex flex-col text-sm text-gray-700">
                    <span className="mb-2 font-medium">Gestão de Redes Sociais</span>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={budgetForm.socialMedia.instagram}
                          onChange={(e) =>
                            setBudgetForm((p) => ({
                              ...p,
                              socialMedia: { ...p.socialMedia, instagram: e.target.checked, none: e.target.checked ? false : p.socialMedia.none }
                            }))
                          }
                        />
                        <span>Instagram</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={budgetForm.socialMedia.facebook}
                          onChange={(e) =>
                            setBudgetForm((p) => ({
                              ...p,
                              socialMedia: { ...p.socialMedia, facebook: e.target.checked, none: e.target.checked ? false : p.socialMedia.none }
                            }))
                          }
                        />
                        <span>Facebook</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={budgetForm.socialMedia.none}
                          onChange={(e) =>
                            setBudgetForm((p) => ({
                              ...p,
                              socialMedia: { instagram: false, facebook: false, none: e.target.checked }
                            }))
                          }
                        />
                        <span>Nenhum</span>
                      </label>
                    </div>
                  </div>

                  <label className="flex flex-col text-sm text-gray-700">
                    <span className="mb-1">Quantos vídeos na semana precisa?</span>
                    <input
                      type="number"
                      min="0"
                      name="videosPerWeek"
                      value={budgetForm.videosPerWeek}
                      onChange={handleBudgetChange}
                      className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-gray-500"
                    />
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex flex-col text-sm text-gray-700">
                      <span className="mb-1">Quantas artes por semana</span>
                      <input
                        type="number"
                        min="0"
                        name="artsPerWeek"
                        value={budgetForm.artsPerWeek}
                        onChange={handleBudgetChange}
                        className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-gray-500"
                      />
                    </label>
                    <label className="flex flex-col text-sm text-gray-700">
                      <span className="mb-1">Quantas fotos por semana</span>
                      <input
                        type="number"
                        min="0"
                        name="photoSessionsPerWeek"
                        value={budgetForm.photoSessionsPerWeek}
                        onChange={handleBudgetChange}
                        className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-gray-500"
                      />
                    </label>
                  </div>

                  <div className="flex flex-col text-sm text-gray-700">
                    <span className="mb-2 font-medium">Gestão de Tráfego Pago</span>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={budgetForm.paidTraffic.instagram}
                          onChange={(e) =>
                            setBudgetForm((p) => ({
                              ...p,
                              paidTraffic: { ...p.paidTraffic, instagram: e.target.checked, none: e.target.checked ? false : p.paidTraffic.none }
                            }))
                          }
                        />
                        <span>Instagram</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={budgetForm.paidTraffic.facebook}
                          onChange={(e) =>
                            setBudgetForm((p) => ({
                              ...p,
                              paidTraffic: { ...p.paidTraffic, facebook: e.target.checked, none: e.target.checked ? false : p.paidTraffic.none }
                            }))
                          }
                        />
                        <span>Facebook</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={budgetForm.paidTraffic.google}
                          onChange={(e) =>
                            setBudgetForm((p) => ({
                              ...p,
                              paidTraffic: { ...p.paidTraffic, google: e.target.checked, none: e.target.checked ? false : p.paidTraffic.none }
                            }))
                          }
                        />
                        <span>Google</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={budgetForm.paidTraffic.none}
                          onChange={(e) =>
                            setBudgetForm((p) => ({
                              ...p,
                              paidTraffic: { instagram: false, facebook: false, google: false, none: e.target.checked }
                            }))
                          }
                        />
                        <span>Nenhum</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col text-sm text-gray-700">
                    <span className="mb-2">Irá precisar de Site ou Aplicativo?</span>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="needSiteOrApp"
                          value="Sim"
                          checked={budgetForm.needSiteOrApp === 'Sim'}
                          onChange={(e) => setBudgetForm((p) => ({ ...p, needSiteOrApp: e.target.value }))}
                        />
                        <span>Sim</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="needSiteOrApp"
                          value="Não"
                          checked={budgetForm.needSiteOrApp === 'Não'}
                          onChange={(e) => setBudgetForm((p) => ({ ...p, needSiteOrApp: e.target.value, siteOrAppDetails: '' }))}
                        />
                        <span>Não</span>
                      </label>
                    </div>
                    {budgetForm.needSiteOrApp === 'Sim' && (
                      <label className="mt-3 flex flex-col text-sm text-gray-700">
                        <span className="mb-1">Diga-nos um pouco sobre:</span>
                        <textarea
                          name="siteOrAppDetails"
                          value={budgetForm.siteOrAppDetails}
                          onChange={handleBudgetChange}
                          rows={3}
                          className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-gray-500 resize-none"
                        />
                      </label>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 bg-[#de0303] hover:bg-[#b80202] text-white"
                >
                  Enviar pelo WhatsApp
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

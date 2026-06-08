import React, { useEffect, useState, useRef } from 'react'
import { ArrowUpRight, Megaphone, Share2, PenTool, Home, Video, FileText, Camera, Palette, Package, BookOpen, Instagram, Facebook, Github, Monitor, Search, Target, TrendingUp, Wallet, Link as LinkIcon, BarChart3, Zap, Sliders, Quote, ChevronDown } from 'lucide-react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import VideoPage from './video'
import SocialMediaPage from './social-media'
import PacoteCompletoPage from './pacote-completo'
import FlyerPage from './flyer'
import FotografiaPage from './fotografia'
import TrafegoPagoPage from './trafego-pago'
import WebDesignerPage from './web-designer'
import GuemdiPage from './guemdi'
import AtendimentoPage from './atendimento'
import PoliticaPrivacidadePage from './politica-privacidade'
import TermosCondicoesPage from './termos-condicoes'

function FAQSection() {
  const [open, setOpen] = useState(null)
  const items = [
    { q: 'Funciona para meu tipo de negócio?', a: 'Sim. Adequamos as estratégias ao seu segmento, porte e região, priorizando os canais que geram melhor retorno.' },
    { q: 'Qual o investimento mínimo?', a: 'Definimos juntos conforme metas e capacidade de operação. Começamos enxuto e escalamos de acordo com os resultados.' },
    { q: 'Em quanto tempo vejo resultados?', a: 'Campanhas começam a rodar em poucos dias. Os primeiros sinais aparecem nas primeiras semanas e evoluem com otimização contínua.' },
    { q: 'Atendemos só negócios presenciais locais?', a: 'Não. Atuamos com negócios locais, regionais e nacionais, inclusive operações totalmente online.' },
    { q: 'Preciso ter site?', a: 'Ter um site ajuda muito na performance e mensuração. Se você ainda não tem, construímos soluções leves e focadas em conversão.' },
    { q: 'Como sei se está funcionando?', a: 'Acompanhamos métricas de verdade: leads, vendas, CAC, ROAS e funil. Relatórios claros e reuniões de performance.' }
  ]
  return (
    <div className="mt-16">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-10">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {items.map((it, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl shadow-sm">
            <button
              type="button"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between text-left px-5 py-4 md:px-6 md:py-5"
            >
              <span className="text-base md:text-lg font-medium text-gray-900">{it.q}</span>
              <ChevronDown size={18} className={`text-[#de0303] transition-transform ${open === i ? 'rotate-180' : ''}`} />
            </button>
            {open === i && (
              <div className="px-5 md:px-6 pb-5 -mt-2">
                <div className="h-px bg-gray-200 mb-3"></div>
                <p className="text-sm md:text-[0.95rem] leading-relaxed text-gray-600">{it.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function BrandBanner() {
  return (
    <div className="mt-12 bg-gray-100 rounded-2xl p-6 border border-gray-200 text-center">
      <div className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-2 flex justify-center">
        <span>HEY</span><span className="text-[#de0303]">BROTHERS</span>
      </div>
      <p className="text-sm md:text-base text-gray-800">
        Unimos design estratégico e tráfego pago para elevar marcas com resultados reais.
      </p>
    </div>
  )
}

function TestimonialsSlider() {
  const [index, setIndex] = useState(0)
  const items = [
    {
      quote: '“HEYBROTHERS foi uma peça essencial de nossas vendas”',
      text: 'O comprometimento constante, a visão estratégica e o alto nível de consciência sobre o crescimento do negócio fazem da equipe uma peça essencial para nossos resultados.',
      author: 'Bike Center'
    },
    {
      quote: '“Contar com a HEY. tem feito toda a diferença para a empresa.”',
      text: 'Conhece bem o mercado, identifica e alcança os clientes certos e direciona as campanhas com precisão para garantir bons resultados. Sempre aberta ao diálogo e dedicada em encontrar formas de aumentar as vendas.',
      author: 'Central Motos'
    },
    {
      quote: '“Sentimos melhorias significativas em especial o acompanhamento e aperfeiçoamento da nossa gestão de tráfego.”',
      text: 'Agradecemos à equipe da HEYBROTHERS pelo excelente trabalho realizado ao longo do último ano, com melhorias significativas no acompanhamento e no aperfeiçoamento da gestão de tráfego, executadas de forma consistente no dia a dia.',
      author: 'JJ Assessoria em Segurança no Trabalho'
    },
    {
      quote: '“Trabalhar com a HEYBROTHERS tem sido uma experiência extremamente positiva.”',
      text: 'Entende muito bem o negócio, atrai os clientes certos e direciona campanhas consistentes. Sempre disponível para tirar dúvidas, propor melhorias e buscar novas formas de aumentar resultados.',
      author: 'Eduardo Auto Mecânica'
    }
  ]
  useEffect(() => {
    let id
    const run = () => {
      const delay = 5000 + Math.random() * 2000
      id = setTimeout(() => {
        setIndex((i) => (i + 1) % items.length)
        run()
      }, delay)
    }
    run()
    return () => clearTimeout(id)
  }, [])
  return (
    <div className="mt-12">
      <div className="relative bg-white text-gray-900 rounded-2xl border border-gray-200 p-6 md:p-7 shadow-sm max-w-[820px] mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-[#de0303] border border-red-100">
            <Quote size={16} />
          </div>
          <span className="text-lg font-semibold">{items[index].quote}</span>
        </div>
        <div className="h-px bg-gray-200 mb-3"></div>
        <p className="text-sm md:text-[0.95rem] leading-relaxed text-gray-600">{items[index].text}</p>
        <div className="mt-4 text-sm font-medium text-[#de0303]">{items[index].author}</div>
        <div className="absolute left-3 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#de0303] to-transparent opacity-50 rounded-full"></div>
      </div>
    </div>
  )
}

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.search])

  useEffect(() => {
    const headerEl = headerRef.current
    if (!headerEl) return

    const rootEl = document.documentElement
    const updateHeaderHeightVar = () => {
      const rect = headerEl.getBoundingClientRect()
      rootEl.style.setProperty('--hb-header-h', `${Math.round(rect.height)}px`)
    }

    updateHeaderHeightVar()
    const ro = new ResizeObserver(updateHeaderHeightVar)
    ro.observe(headerEl)
    window.addEventListener('resize', updateHeaderHeightVar, { passive: true })

    const borderAfterPx = 250
    let borderActive = false
    const updateBorder = () => {
      const y = window.scrollY || 0
      const next = y > borderAfterPx
      if (next === borderActive) return
      borderActive = next
      headerEl.classList.toggle('hb-header--scrolled', next)
    }

    updateBorder()
    window.addEventListener('scroll', updateBorder, { passive: true })

    return () => {
      window.removeEventListener('resize', updateHeaderHeightVar)
      window.removeEventListener('scroll', updateBorder)
      headerEl.classList.remove('hb-header--scrolled')
      ro.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative overflow-x-hidden flex flex-col selection:bg-[#de0303] selection:text-white">
      {location.pathname === '/' && (
        <>
          <div
            className="hidden lg:block absolute inset-0 z-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
          <div className="hidden lg:block absolute top-[40%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-gray-100 rounded-[100%] blur-[120px] opacity-60 z-0 pointer-events-none" />
          <div className="lg:hidden absolute top-[50%] left-1/2 -translate-x-1/2 w-[92vw] h-[38vh] bg-gray-100 rounded-[100%] blur-[90px] opacity-60 z-0 pointer-events-none" />
        </>
      )}

      <header ref={headerRef} className="hb-site-header">
        <div className="flex justify-between items-center px-8 py-6 w-full max-w-7xl mx-auto">
          <Link to="/" className="hb-header__brand text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            <span>HEY</span><span className="text-[#de0303]">BROTHERS</span>
          </Link>
          <button
            className="text-gray-700 hover:text-black p-2"
            aria-expanded={menuOpen}
            aria-controls="side-menu"
            onClick={() => setMenuOpen(true)}
          >
            <div className="flex flex-col gap-[6px] items-end w-8">
              <div className="h-[1px] bg-current w-full"></div>
              <div className="h-[1px] bg-current w-6"></div>
            </div>
          </button>
        </div>
      </header>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/20 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />
      <aside
        id="side-menu"
        className={`fixed top-0 right-0 h-full z-[70] bg-white border-l border-gray-200 transform transition-transform duration-300 ease-out max-[500px]:w-full sm:w-[75%] lg:w-[40%] ${menuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col shadow-2xl`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-lg font-semibold text-gray-900">Nossos serviços</span>
          <button onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-black transition-colors p-2">
            <div className="flex flex-col gap-[6px] items-end w-6">
              <div className="h-[1px] bg-current w-full rotate-45 translate-y-[3px]"></div>
              <div className="h-[1px] bg-current w-full -rotate-45 -translate-y-[3px]"></div>
            </div>
          </button>
        </div>
        <nav className="p-6">
          {[
            { label: 'Início', path: '/', icon: Home },
            { label: 'Social Media', path: '/social-media', icon: Share2 },
            { label: 'Vídeo', path: '/video', icon: Video },
            { label: 'Flyer', path: '/flyer', icon: FileText },
            { label: 'Fotografia', path: '/fotografia', icon: Camera },
            { label: 'Tráfego Pago', path: '/trafego-pago', icon: Megaphone },
            { label: 'Sistemas', path: '/sistemas', icon: Monitor }
          ].map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-2 py-3 rounded-md transition-all ${
                  isActive
                    ? 'text-gray-900 bg-gray-100 font-medium'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon size={18} className={`${isActive ? 'text-[#de0303]' : 'text-gray-400'}`} strokeWidth={1.5} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
        <div className="p-6 mt-auto space-y-3 border-t border-gray-100">
          <a
            href="/pacote-completo"
            onClick={(e) => {
              e.preventDefault()
              setMenuOpen(false)
              window.location.href = '/pacote-completo'
            }}
            className="group block w-full text-center px-3 max-[420px]:px-2 py-3 rounded-md bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 text-gray-800 font-medium transition-all"
          >
            <span className="flex items-center justify-center gap-3 max-[420px]:gap-2 whitespace-nowrap text-base max-[420px]:text-sm leading-none">
              <Package size={20} strokeWidth={1.75} className="text-[#de0303]" />
              Contratar Pacote Completo
            </span>
          </a>
          <Link
            to="/guemdi"
            onClick={() => setMenuOpen(false)}
            className="group block w-full text-center px-3 max-[420px]:px-2 py-3 rounded-md bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 text-gray-800 font-medium transition-all"
          >
            <span className="flex items-center justify-center gap-3 max-[420px]:gap-2 whitespace-nowrap text-base max-[420px]:text-sm leading-none">
              <BookOpen size={20} strokeWidth={1.75} className="text-[#34a853]" />
              Guemdi - Guia Empresarial Digital
            </span>
          </Link>
        </div>
      </aside>

      {children}

      {location.pathname === '/' && (
        <footer className="relative z-20 w-full max-w-7xl mx-auto px-8 pb-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-8 md:gap-0 mt-auto">
          <div className="flex flex-col gap-3 text-gray-500 w-full md:w-auto max-[500px]:items-center max-[500px]:text-center">
            <div className="flex items-center gap-3">
              <Megaphone size={18} className="text-gray-400" strokeWidth={1.5} />
              <span className="text-sm italic tracking-wide">Tráfego Pago</span>
            </div>
            <div className="flex items-center gap-3">
              <Share2 size={18} className="text-gray-400" strokeWidth={1.5} />
              <span className="text-sm italic tracking-wide">Social Media</span>
            </div>
            <div className="flex items-center gap-3">
              <PenTool size={18} className="text-gray-400" strokeWidth={1.5} />
              <span className="text-sm italic tracking-wide">Design Estratégico</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-600 w-full md:w-auto justify-center md:justify-start max-[500px]:flex-col max-[500px]:items-center max-[500px]:gap-3">
            <span className="text-sm font-medium tracking-wide">+ 100 Empresas Atingidas</span>
            <div className="flex -space-x-3 max-[500px]:mt-1">
              {['/images/logo/logo-1.png','/images/logo/logo-2.png','/images/logo/logo-3.png','/images/logo/logo-4.png','/images/logo/logo-5.png','/images/logo/logo-6.png'].map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Logo ${idx + 1}`}
                  onError={(e) => {
                    if (!e.currentTarget.dataset.fallback) {
                      e.currentTarget.dataset.fallback = '1'
                      e.currentTarget.src = src.replace('.png', '.svg')
                    }
                  }}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:z-10 relative transition-all bg-gray-100 shadow-sm"
                />
              ))}
            </div>
          </div>
        </footer>
      )}
      
      {location.pathname === '/' && (
        <section className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-[#de0303] border border-red-100 mb-4">
                  <Search size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pare de perder vendas para concorrentes mais visíveis</h3>
                <p className="text-sm text-gray-600">Enquanto você espera o cliente chegar, seus concorrentes estão aparecendo nos canais certos e conquistando seus potenciais clientes.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-[#de0303] border border-red-100 mb-4">
                  <Target size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Seja encontrado por quem já quer comprar</h3>
                <p className="text-sm text-gray-600">Apareça no momento exato em que seu cliente está procurando o que você oferece, em qualquer lugar.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-[#de0303] border border-red-100 mb-4">
                  <TrendingUp size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Escale suas vendas com previsibilidade</h3>
                <p className="text-sm text-gray-600">Com estratégias comprovadas que geram resultados para negócios de diferentes portes e regiões.</p>
              </div>
            </div>
            
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Serviços que oferecemos hoje</h3>
              </div>
              
              <div className="lg:col-span-3">
                <ServicesCarousel />
              </div>
            </div>

            <div className="mt-14">
              <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
                Por que nos escolhem?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-[#de0303] border border-red-100 mb-4">
                    <Share2 size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media Estratégico</h3>
                  <div className="h-px bg-gray-200 mb-3"></div>
                  <p className="text-sm text-gray-600">Planejamento e gestão de redes sociais com conteúdo que posiciona sua marca, gera autoridade e transforma seguidores em clientes.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-[#de0303] border border-red-100 mb-4">
                    <Video size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Vídeos que Vendem</h3>
                  <div className="h-px bg-gray-200 mb-3"></div>
                  <p className="text-sm text-gray-600">Produção de vídeos profissionais para anúncios, redes sociais e campanhas que aumentam engajamento e impulsionam conversões.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-[#de0303] border border-red-100 mb-4">
                    <FileText size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Flyers que Chamam Atenção</h3>
                  <div className="h-px bg-gray-200 mb-3"></div>
                  <p className="text-sm text-gray-600">Design estratégico para materiais promocionais que destacam sua oferta e aumentam o impacto das suas campanhas.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-[#de0303] border border-red-100 mb-4">
                    <Camera size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Fotografia Profissional</h3>
                  <div className="h-px bg-gray-200 mb-3"></div>
                  <p className="text-sm text-gray-600">Imagens de alta qualidade que valorizam seu produto, fortalecem sua marca e elevam o nível da sua comunicação visual.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-[#de0303] border border-red-100 mb-4">
                    <Megaphone size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Tráfego Pago Inteligente</h3>
                  <div className="h-px bg-gray-200 mb-3"></div>
                  <p className="text-sm text-gray-600">Gestão estratégica de anúncios no Google e redes sociais para atrair clientes qualificados e gerar vendas previsíveis.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-[#de0303] border border-red-100 mb-4">
                    <Monitor size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sistemas para Empresas</h3>
                  <div className="h-px bg-gray-200 mb-3"></div>
                  <p className="text-sm text-gray-600">Automação e implementação de sistemas que otimizam processos, melhoram o atendimento e aumentam a eficiência da operação.</p>
                </div>
              </div>
            </div>

            
            
            <FAQSection />
            <BrandBanner />
          </div>
        </section>
      )}
      
      <footer className="relative z-20 w-full border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-sm text-gray-600 max-[500px]:flex-col max-[500px]:items-center max-[500px]:gap-3">
            <Link to="/atendimento" className="hover:text-gray-900">Atendimento</Link>
            <Link to="/politica-de-privacidade" className="hover:text-gray-900">Política de Privacidade</Link>
            <Link to="/termos-e-condicoes" className="hover:text-gray-900">Termos & Condições</Link>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/eiirmaos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 hover:border-gray-300 bg-white text-gray-600 hover:text-black transition-all"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.75} />
            </a>
            <a
              href="https://www.facebook.com/EIIRMAOS/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 hover:border-gray-300 bg-white text-gray-600 hover:text-black transition-all"
              aria-label="Facebook"
            >
              <Facebook size={18} strokeWidth={1.75} />
            </a>
            <a
              href="https://github.com/matheusmeliano"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 hover:border-gray-300 bg-white text-gray-600 hover:text-black transition-all"
              aria-label="GitHub"
            >
              <Github size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 pt-10 pb-20">
      <p className="text-sm md:text-base text-gray-600 font-medium tracking-wide mb-8 text-center max-w-xl px-4">
        Unimos design estratégico e tráfego pago para elevar marcas a novos patamares de autoridade e lucratividade.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
        <Link to="/pacote-completo" className="bg-[#de0303] hover:bg-[#b80202] text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-4 transition-all group">
          <span className="text-xs font-bold tracking-widest uppercase">Contratar</span>
          <div className="bg-white text-black rounded-full p-2 group-hover:bg-gray-100 transition-colors">
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </div>
        </Link>
      </div>

      <div className="relative text-center z-20 mb-8 max-w-5xl mx-auto px-4">
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[80%] md:w-[70%] h-[60%] bg-[#de0303] blur-[120px] opacity-10 rounded-[100%]"></div>
        <h1 className="relative text-3xl sm:text-4xl md:text-7xl lg:text-[5.5rem] leading-[1.06] font-semibold tracking-tight text-gray-900 pb-4 md:pb-3 px-2">
          Transformamos sua <br className="block" />
          presença no digital
        </h1>
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-[4px] md:-bottom-[8px] h-3 w-[72%] sm:w-[66%] md:w-[60%] bg-gray-200 blur-[18px] opacity-60 rounded-full"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[8px] md:-bottom-[14px] h-[2px] w-[72%] sm:w-[66%] md:w-[60%] bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-90"></div>
      </div>

      <div></div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/flyer" element={<FlyerPage />} />
          <Route path="/fotografia" element={<FotografiaPage />} />
          <Route path="/trafego-pago" element={<TrafegoPagoPage />} />
          <Route path="/sistemas" element={<WebDesignerPage />} />
          <Route path="/pacote-completo" element={<PacoteCompletoPage />} />
          <Route path="/guemdi" element={<GuemdiPage />} />
          <Route path="/atendimento" element={<AtendimentoPage />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidadePage />} />
          <Route path="/termos-e-condicoes" element={<TermosCondicoesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

function ServicesCarousel() {
  const items = [
    { label: 'Social Media', icon: Share2, to: '/social-media' },
    { label: 'Vídeo', icon: Video, to: '/video' },
    { label: 'Flyer', icon: FileText, to: '/flyer' },
    { label: 'Fotografia', icon: Camera, to: '/fotografia' },
    { label: 'Tráfego Pago', icon: Megaphone, to: '/trafego-pago' },
    { label: 'Sistemas', icon: Monitor, to: '/sistemas' }
  ]
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let rafId
    let last = performance.now()
    const speed = 0.12
    const loop = (now) => {
      const dt = now - last
      last = now
      el.scrollLeft += dt * speed
      const half = el.scrollWidth / 2
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half
      }
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div ref={ref} className="overflow-x-hidden w-full">
      <div className="flex items-stretch gap-6">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={idx}
              className="slide relative rounded-2xl border border-gray-200 bg-white h-36 sm:h-40 md:h-48 w-56 sm:w-64 md:w-72 flex items-center pl-8 pr-5 shrink-0 group cursor-default"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-[#de0303] border border-red-100 mr-4">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <span className="text-gray-900 font-medium tracking-wide">{item.label}</span>
              <div className="absolute left-3 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#de0303] to-transparent opacity-60"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

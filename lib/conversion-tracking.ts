/**
 * Utilitários para rastreamento de conversões do Google Ads
 */

// ID da conta do Google Ads
export const GOOGLE_ADS_ID = 'AW-17552993084'

// ID do evento de conversão
export const CONVERSION_EVENT_ID = 'i4tyCLmD7J8bELzW9bFB'

/**
 * Dispara um evento de conversão do Google Ads
 * @param value - Valor da conversão (opcional)
 * @param currency - Moeda da conversão (opcional, padrão: BRL)
 */
export const trackConversion = (value?: number, currency: string = 'BRL') => {
  if (typeof window === 'undefined') return

  // Verificar se gtag está disponível
  if ((window as any).gtag) {
    const conversionData: any = {
      'send_to': `${GOOGLE_ADS_ID}/${CONVERSION_EVENT_ID}`
    }

    if (value) {
      conversionData.value = value
      conversionData.currency = currency
    }

    (window as any).gtag('event', 'conversion', conversionData)
  }
}

/**
 * Dispara um evento personalizado no Google Tag Manager
 * @param eventName - Nome do evento
 * @param category - Categoria do evento
 * @param label - Rótulo do evento
 * @param value - Valor do evento (opcional)
 */
export const trackGTMEvent = (
  eventName: string, 
  category: string, 
  label: string, 
  value?: number
) => {
  if (typeof window === 'undefined') return

  if ((window as any).dataLayer) {
    const eventData: any = {
      event: eventName,
      event_category: category,
      event_label: label
    }

    if (value) {
      eventData.value = value
    }

    (window as any).dataLayer.push(eventData)
  }
}

/**
 * Rastreia uma conversão completa (GTM + Google Ads)
 * @param eventName - Nome do evento
 * @param category - Categoria do evento
 * @param label - Rótulo do evento
 * @param value - Valor do evento (opcional)
 */
export const trackCompleteConversion = (
  eventName: string,
  category: string,
  label: string,
  value?: number
) => {
  // Rastrear no GTM
  trackGTMEvent(eventName, category, label, value)
  
  // Rastrear no Google Ads
  trackConversion(value)
}

/**
 * Tipos de conversão disponíveis
 */
export const CONVERSION_TYPES = {
  WHATSAPP_CLICK: 'whatsapp_click',
  FORM_SUBMIT: 'form_submit',
  PHONE_CLICK: 'phone_click',
  EMAIL_CLICK: 'email_click',
  INSTAGRAM_CLICK: 'instagram_click',
  BUTTON_CLICK: 'button_click'
} as const

/**
 * Categorias de eventos
 */
export const EVENT_CATEGORIES = {
  CONTACT: 'contact',
  CONVERSION: 'conversion',
  ENGAGEMENT: 'engagement',
  NAVIGATION: 'navigation'
} as const

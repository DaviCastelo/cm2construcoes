// Configurações baseadas no ambiente
export const config = {
  // Verificar se estamos em produção
  isProduction: process.env.NODE_ENV === 'production',
  
  // Verificar se estamos na Vercel
  isVercel: process.env.VERCEL === '1',
  
  // Configurações de animação
  animations: {
    enabled: process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_DISABLE_ANIMATIONS !== 'true',
    useIntersectionObserver: process.env.NODE_ENV !== 'production' && process.env.NEXT_PUBLIC_DISABLE_INTERSECTION_OBSERVER !== 'true',
  },
  
  // Configurações de performance
  performance: {
    enableLazyLoading: process.env.NODE_ENV === 'production',
    enableImageOptimization: true,
  }
}

// Hook para verificar se estamos no cliente
export const useIsClient = () => {
  if (typeof window !== 'undefined') {
    return true
  }
  return false
}

// Hook para verificar se estamos em produção
export const useIsProduction = () => {
  return config.isProduction
}

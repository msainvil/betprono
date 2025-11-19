/**
 * BetProno - Design Tokens
 *
 * Tokens de design pour React Native (Expo)
 * À importer dans tous les composants pour garantir la cohérence visuelle
 *
 * Usage:
 * import { colors, typography, spacing } from '@/design-tokens';
 */

// ============================================================================
// COLORS
// ============================================================================

export const colors = {
  // Backgrounds
  background: {
    primary: '#050814',
    surface: '#0B1020',
    elevated: '#111728',
  },

  // Overlays
  overlay: {
    modal: 'rgba(5, 8, 20, 0.92)',
    shimmer: 'rgba(255, 255, 255, 0.03)',
    backdrop: 'rgba(0, 0, 0, 0.6)',
  },

  // Accents
  accent: {
    primary: '#18E08F',
    secondary: '#2F7BFF',
  },

  // Text
  text: {
    primary: '#FFFFFF',
    secondary: '#9BA3BC',
    tertiary: '#646B82',
    inverse: '#050814',
  },

  // Feedback
  feedback: {
    success: '#3DD68C',
    error: '#FF4E6A',
    warning: '#FFC857',
    info: '#2F7BFF',
  },

  // Functional
  functional: {
    confidenceLow: '#646B82',
    confidenceMedium: '#2F7BFF',
    confidenceHigh: '#18E08F',

    issueHome: '#2F7BFF',
    issueDraw: '#9BA3BC',
    issueAway: '#18E08F',
  },

  // Borders
  border: {
    subtle: 'rgba(155, 163, 188, 0.12)',
    medium: 'rgba(155, 163, 188, 0.24)',
    strong: 'rgba(155, 163, 188, 0.48)',
  },
} as const;

// ============================================================================
// GRADIENTS
// ============================================================================

export const gradients = {
  primary: {
    colors: ['#18E08F', '#2F7BFF'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
  secondary: {
    colors: ['#2F7BFF', '#18E08F'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
  overlay: {
    colors: ['rgba(5, 8, 20, 0)', 'rgba(5, 8, 20, 0.9)'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },
  confidence: {
    colors: ['rgba(24, 224, 143, 0.2)', 'rgba(47, 123, 255, 0.2)'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const fonts = {
  display: 'Poppins',
  body: 'Inter',
  mono: 'RobotoMono',
} as const;

export const typography = {
  display: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: fonts.display,
    fontWeight: '700' as const,
    letterSpacing: -0.5,
  },
  h1: {
    fontSize: 28,
    lineHeight: 36,
    fontFamily: fonts.display,
    fontWeight: '600' as const,
    letterSpacing: -0.3,
  },
  h2: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: fonts.display,
    fontWeight: '600' as const,
    letterSpacing: 0,
  },
  h3: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: fonts.display,
    fontWeight: '500' as const,
    letterSpacing: 0,
  },
  bodyLarge: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fonts.body,
    fontWeight: '400' as const,
    letterSpacing: 0,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fonts.body,
    fontWeight: '400' as const,
    letterSpacing: 0,
  },
  bodySmall: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: fonts.body,
    fontWeight: '400' as const,
    letterSpacing: 0.2,
  },
  caption: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: fonts.body,
    fontWeight: '500' as const,
    letterSpacing: 0.4,
    textTransform: 'uppercase' as const,
  },
  button: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: fonts.display,
    fontWeight: '600' as const,
    letterSpacing: 0.5,
    textTransform: 'uppercase' as const,
  },
  numbersLarge: {
    fontSize: 36,
    lineHeight: 44,
    fontFamily: fonts.display,
    fontWeight: '700' as const,
    letterSpacing: -0.5,
  },
  numbersMedium: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: fonts.display,
    fontWeight: '600' as const,
    letterSpacing: 0,
  },
} as const;

// ============================================================================
// SPACING
// ============================================================================

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const cardPadding = {
  horizontal: 16,
  vertical: 16,
} as const;

export const screenPadding = {
  horizontal: 20,
  vertical: 24,
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 999,
} as const;

// ============================================================================
// ELEVATION / SHADOWS
// ============================================================================

export const elevation = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  low: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  high: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  glow: {
    shadowColor: '#18E08F',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 0,
  },
} as const;

export const glowBorders = {
  subtle: {
    borderWidth: 1,
    borderColor: 'rgba(24, 224, 143, 0.2)',
  },
  medium: {
    borderWidth: 1,
    borderColor: 'rgba(24, 224, 143, 0.4)',
  },
  strong: {
    borderWidth: 2,
    borderColor: 'rgba(24, 224, 143, 0.8)',
  },
} as const;

// ============================================================================
// GLASSMORPHISM
// ============================================================================

export const glassmorphism = {
  backgroundColor: 'rgba(17, 23, 40, 0.7)',
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.1)',
  // Note: Nécessite BlurView de expo-blur en background
  // blurType: 'dark',
  // blurAmount: 10,
} as const;

// ============================================================================
// ICON SIZES
// ============================================================================

export const iconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

// ============================================================================
// NAVIGATION
// ============================================================================

export const navigation = {
  tabBar: {
    height: 64,
    backgroundColor: colors.background.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border.subtle,
    paddingBottom: 8,
  },
  header: {
    height: 56,
    backgroundColor: colors.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.subtle,
  },
} as const;

// ============================================================================
// ANIMATIONS
// ============================================================================

export const animations = {
  duration: {
    fast: 150,
    normal: 250,
    slow: 400,
  },
  easing: {
    easeOut: [0.25, 0.1, 0.25, 1],
    easeInOut: [0.42, 0, 0.58, 1],
  },
  spring: {
    tension: 300,
    friction: 20,
  },
} as const;

// ============================================================================
// HAPTIC FEEDBACK TYPES
// ============================================================================

export const hapticFeedback = {
  light: 'impactLight',
  medium: 'impactMedium',
  heavy: 'impactHeavy',
  success: 'notificationSuccess',
  error: 'notificationError',
} as const;

// ============================================================================
// BREAKPOINTS (optionnel pour responsive)
// ============================================================================

export const breakpoints = {
  small: 375,
  medium: 390,
  large: 428,
  tablet: 768,
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Retourne le style de confiance basé sur le pourcentage
 */
export const getConfidenceStyle = (confidence: number) => {
  if (confidence >= 70) {
    return {
      backgroundColor: colors.functional.confidenceHigh,
      color: colors.text.inverse,
      glow: true,
      label: 'Forte',
    };
  } else if (confidence >= 50) {
    return {
      backgroundColor: colors.functional.confidenceMedium,
      color: colors.text.primary,
      glow: false,
      label: 'Moyenne',
    };
  } else {
    return {
      backgroundColor: colors.functional.confidenceLow,
      color: colors.text.primary,
      glow: false,
      label: 'Faible',
    };
  }
};

/**
 * Retourne la couleur de la variation de solde
 */
export const getVariationColor = (variation: number) => {
  if (variation > 0) return colors.feedback.success;
  if (variation < 0) return colors.feedback.error;
  return colors.text.secondary;
};

/**
 * Retourne le style du badge de statut d'un pari
 */
export const getBetStatusStyle = (status: 'pending' | 'won' | 'lost' | 'live' | 'finished') => {
  const styles = {
    pending: {
      backgroundColor: colors.functional.issueHome,
      color: colors.text.primary,
      label: 'EN COURS',
      icon: '🕐',
    },
    won: {
      backgroundColor: colors.feedback.success,
      color: colors.text.inverse,
      label: 'GAGNÉ',
      icon: '✓',
    },
    lost: {
      backgroundColor: colors.feedback.error,
      color: colors.text.primary,
      label: 'PERDU',
      icon: '✗',
    },
    live: {
      backgroundColor: colors.feedback.warning,
      color: colors.text.inverse,
      label: 'EN DIRECT',
      icon: '⚡',
      pulse: true,
    },
    finished: {
      backgroundColor: colors.text.tertiary,
      color: colors.text.primary,
      label: 'TERMINÉ',
      icon: '—',
    },
  };

  return styles[status];
};

/**
 * Retourne la couleur pour la forme d'une équipe
 */
export const getFormColor = (result: 'W' | 'D' | 'L') => {
  const colors_map = {
    W: colors.feedback.success,
    D: colors.text.tertiary,
    L: colors.feedback.error,
  };
  return colors_map[result];
};

/**
 * Formatte un montant en euros
 */
export const formatCurrency = (amount: number, showSign: boolean = false): string => {
  const formatted = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.abs(amount));

  if (showSign && amount > 0) {
    return `+${formatted}`;
  } else if (amount < 0) {
    return `-${formatted}`;
  }

  return formatted;
};

/**
 * Formatte un pourcentage
 */
export const formatPercentage = (value: number, showSign: boolean = false): string => {
  const formatted = `${Math.round(value)}%`;

  if (showSign && value > 0) {
    return `+${formatted}`;
  }

  return formatted;
};

// ============================================================================
// COMMON STYLES (snippets réutilisables)
// ============================================================================

export const commonStyles = {
  // Card de base
  card: {
    backgroundColor: colors.background.surface,
    borderRadius: borderRadius.lg,
    padding: cardPadding.horizontal,
    ...elevation.low,
  },

  // Card glassmorphism
  cardGlass: {
    ...glassmorphism,
    borderRadius: borderRadius.lg,
    padding: cardPadding.horizontal,
  },

  // Container d'écran
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background.primary,
    paddingHorizontal: screenPadding.horizontal,
  },

  // Section header
  sectionHeader: {
    ...typography.caption,
    color: colors.text.secondary,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: colors.border.subtle,
    marginVertical: spacing.lg,
  },

  // Centered content (pour EmptyState)
  centeredContent: {
    flex: 1,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    paddingHorizontal: spacing.xl,
  },

  // Row avec espacement entre éléments
  row: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },

  // Row avec justify space-between
  rowBetween: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
  },
};

// ============================================================================
// EXPORT DEFAULT (pour import groupé)
// ============================================================================

export default {
  colors,
  gradients,
  fonts,
  typography,
  spacing,
  cardPadding,
  screenPadding,
  borderRadius,
  elevation,
  glowBorders,
  glassmorphism,
  iconSizes,
  navigation,
  animations,
  hapticFeedback,
  breakpoints,
  commonStyles,
  // Helper functions
  getConfidenceStyle,
  getVariationColor,
  getBetStatusStyle,
  getFormColor,
  formatCurrency,
  formatPercentage,
};

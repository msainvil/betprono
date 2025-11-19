# 🎨 BetProno - Design System

> **Application mobile de pronostics football** - React Native (Expo)

---

## 📖 Table des matières

1. [Vision Globale](#-vision-globale)
2. [Palette de Couleurs](#-palette-de-couleurs)
3. [Typographie](#-typographie)
4. [Spacing & Layout](#-spacing--layout)
5. [Élévations & Ombres](#-élévations--ombres)
6. [Effets Visuels](#-effets-visuels)
7. [Icônes](#-icônes)
8. [Navigation](#-navigation)

---

## 🎯 Vision Globale

### Concept & Mood

**BetProno** n'est pas une simple app de paris sportifs. C'est une **plateforme d'analyse algorithmique** qui transforme la data football en insights visuels et exploitables.

#### Mots-clés de l'identité
- **Nuit de Ligue des Champions** : ambiance stade nocturne, projecteurs, tension dramatique
- **Trading floor moderne** : data-driven, précision, professionnalisme
- **Néon & Énergie** : accents lumineux, dynamisme, modernité
- **Minimalisme intelligent** : chaque pixel a un rôle, pas de superflu

### Principes de Design

#### 1. **Data First**
Chaque information doit être :
- **Instantanément lisible** : hiérarchie claire, contraste optimal
- **Contextuelle** : données enrichies de leur signification
- **Actionnables** : un tap/swipe = une action précise

#### 2. **Dark by Design**
Le dark mode n'est pas une option, c'est l'identité :
- Réduit la fatigue oculaire pour les sessions longues
- Met en valeur les accents néon (vert, bleu)
- Crée une ambiance immersive "match de nuit"

#### 3. **Micro-feedback omniprésent**
Chaque interaction génère un retour visuel :
- Haptic feedback sur les actions importantes
- Animations subtiles mais perceptibles
- States clairs (loading, success, error)

#### 4. **Performance perçue**
L'app doit *sentir* rapide :
- Skeleton loaders au lieu d'écrans vides
- Optimistic updates (UI se met à jour avant la réponse serveur)
- Transitions fluides 60fps minimum

---

## 🎨 Palette de Couleurs

### Couleurs de Base

```javascript
// Backgrounds
background: {
  primary: '#050814',    // Noir bleuté très profond - fond principal app
  surface: '#0B1020',    // Cards, conteneurs principaux
  elevated: '#111728',   // Cards surélevées, modals
}

// Overlays
overlay: {
  modal: 'rgba(5, 8, 20, 0.92)',      // Fond de modal/bottom sheet
  shimmer: 'rgba(255, 255, 255, 0.03)', // Effet de loading
}
```

### Couleurs d'Accent

```javascript
accent: {
  primary: '#18E08F',      // Vert néon - pronos, boutons primaires, succès
  secondary: '#2F7BFF',    // Bleu électrique - liens, tags, éléments secondaires

  // Dégradés
  gradientPrimary: ['#18E08F', '#2F7BFF'],  // Vert → Bleu (boutons, highlights)
  gradientSecondary: ['#2F7BFF', '#18E08F'], // Bleu → Vert (variante)
}
```

### Couleurs de Texte

```javascript
text: {
  primary: '#FFFFFF',     // Titres, labels importants
  secondary: '#9BA3BC',   // Descriptions, infos secondaires
  tertiary: '#646B82',    // Textes désactivés, placeholders
  inverse: '#050814',     // Texte sur fond clair (rare)
}
```

### Couleurs de Feedback

```javascript
feedback: {
  success: '#3DD68C',     // Paris gagnés, validations
  error: '#FF4E6A',       // Paris perdus, erreurs
  warning: '#FFC857',     // Alertes, attention
  info: '#2F7BFF',        // Informations neutres
}
```

### Couleurs Fonctionnelles

```javascript
functional: {
  // Badges de confiance
  confidenceLow: '#646B82',       // < 50%
  confidenceMedium: '#2F7BFF',    // 50-70%
  confidenceHigh: '#18E08F',      // > 70%

  // Issues de match (1N2)
  home: '#2F7BFF',     // Victoire domicile
  draw: '#9BA3BC',     // Match nul
  away: '#18E08F',     // Victoire extérieur

  // Bordures
  border: {
    subtle: 'rgba(155, 163, 188, 0.12)',    // Bordures discrètes
    medium: 'rgba(155, 163, 188, 0.24)',    // Bordures visibles
    strong: 'rgba(155, 163, 188, 0.48)',    // Bordures accentuées
  },
}
```

### Utilisation des Couleurs

#### Hiérarchie visuelle
```
Fond principal (#050814)
  └─ Cards (#0B1020)
      └─ Cards surélevées (#111728)
          └─ Éléments interactifs (accents)
```

#### Règles d'accessibilité
- Contraste minimum texte/fond : **4.5:1** (WCAG AA)
- Texte principal sur fond sombre : toujours `#FFFFFF`
- Texte secondaire : `#9BA3BC` (ratio 7:1)
- Ne JAMAIS utiliser la couleur seule pour transmettre une info (ajouter icônes/labels)

---

## 🔤 Typographie

### Familles de Polices

```javascript
fonts: {
  display: 'Poppins',  // Titres, chiffres importants, labels
  body: 'Inter',       // Texte courant, paragraphes
  mono: 'Roboto Mono', // Cotes, stats numériques (optionnel)
}
```

### Échelle Typographique

```javascript
typography: {
  // Display - Pour les écrans de bienvenue, splash
  display: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: 'Poppins',
    fontWeight: '700', // Bold
    letterSpacing: -0.5,
  },

  // H1 - Titres d'écran
  h1: {
    fontSize: 28,
    lineHeight: 36,
    fontFamily: 'Poppins',
    fontWeight: '600', // Semi-bold
    letterSpacing: -0.3,
  },

  // H2 - Titres de section
  h2: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: 'Poppins',
    fontWeight: '600',
    letterSpacing: 0,
  },

  // H3 - Sous-titres
  h3: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'Poppins',
    fontWeight: '500', // Medium
    letterSpacing: 0,
  },

  // Body Large - Texte important
  bodyLarge: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Inter',
    fontWeight: '400', // Regular
    letterSpacing: 0,
  },

  // Body - Texte standard
  body: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Inter',
    fontWeight: '400',
    letterSpacing: 0,
  },

  // Body Small - Texte secondaire
  bodySmall: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Inter',
    fontWeight: '400',
    letterSpacing: 0.2,
  },

  // Caption - Labels, tags, légendes
  caption: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: 'Inter',
    fontWeight: '500',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },

  // Button - Texte de boutons
  button: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'Poppins',
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  // Numbers Large - Gros chiffres (solde, cotes)
  numbersLarge: {
    fontSize: 36,
    lineHeight: 44,
    fontFamily: 'Poppins',
    fontWeight: '700',
    letterSpacing: -0.5,
  },

  // Numbers Medium - Chiffres moyens (stats)
  numbersMedium: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'Poppins',
    fontWeight: '600',
    letterSpacing: 0,
  },
}
```

### Hiérarchie & Usage

| Style | Usage | Exemple |
|-------|-------|---------|
| **Display** | Onboarding, splash | "Bienvenue sur BetProno" |
| **H1** | Titre d'écran | "Matchs du jour" |
| **H2** | Titre de section | "Pronostic de l'algorithme" |
| **H3** | Sous-titre | "Statistiques avancées" |
| **Body Large** | Contenu prioritaire | Nom d'équipe sur carte match |
| **Body** | Texte standard | Descriptions, paragraphes |
| **Body Small** | Métadonnées | Heure de match, compétition |
| **Caption** | Labels système | "EN COURS", "TERMINÉ" |
| **Button** | Tous les boutons | "VALIDER LE PARI" |
| **Numbers Large** | Solde, jackpot | "2,450 €" |
| **Numbers Medium** | Cotes, stats | "73%" |

---

## 📐 Spacing & Layout

### Échelle de Spacing

Basée sur un système **8pt grid** pour cohérence et alignement.

```javascript
spacing: {
  xs: 4,    // Padding interne minimal (badges)
  sm: 8,    // Espacement serré (entre icône et texte)
  md: 12,   // Espacement standard interne
  lg: 16,   // Espacement standard externe (padding de card)
  xl: 24,   // Espacement entre sections
  xxl: 32,  // Espacement majeur
  xxxl: 48, // Espacement écrans (top/bottom)
}
```

### Padding Standards

```javascript
cardPadding: {
  horizontal: 16,  // Padding gauche/droite des cards
  vertical: 16,    // Padding haut/bas des cards
}

screenPadding: {
  horizontal: 20,  // Padding global écran
  vertical: 24,    // Padding top/bottom (hors safe area)
}
```

### Border Radius

```javascript
borderRadius: {
  sm: 8,    // Badges, chips
  md: 12,   // Boutons, inputs
  lg: 16,   // Cards standard
  xl: 20,   // Cards importantes, modals
  full: 999, // Pills, avatars ronds
}
```

### Layout Grid

- **Colonnes** : système flexible, pas de grid fixe
- **Gutters** : 16px entre éléments horizontaux
- **Margins** : 20px sur les côtés écran

---

## ✨ Élévations & Ombres

### Système d'Élévation

Les ombres sont **très subtiles** dans un dark mode, on privilégie les bordures et le blur.

```javascript
elevation: {
  // Niveau 0 - Plat
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },

  // Niveau 1 - Légèrement surélevé (cards standards)
  low: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },

  // Niveau 2 - Surélevé (cards interactives)
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },

  // Niveau 3 - Très surélevé (modals, popovers)
  high: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },

  // Effet spécial - Glow (accents)
  glow: {
    shadowColor: '#18E08F',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 0,
  },
}
```

### Bordures Lumineuses

Alternative aux ombres dans le dark mode :

```javascript
glowBorders: {
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
}
```

---

## 🌟 Effets Visuels

### Glassmorphism

Pour certaines cards premium (solde, pronostic algo) :

```javascript
glassmorphism: {
  backgroundColor: 'rgba(17, 23, 40, 0.7)',
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.1)',
  // Note: BlurView de expo-blur en background
  // blurType: 'dark',
  // blurAmount: 10,
}
```

### Dégradés

```javascript
gradients: {
  // Primaire - Boutons CTA
  primary: {
    colors: ['#18E08F', '#2F7BFF'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },

  // Overlay - Fading sur images
  overlay: {
    colors: ['rgba(5, 8, 20, 0)', 'rgba(5, 8, 20, 0.9)'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },

  // Confiance - Arrière-plan badge confiance forte
  confidence: {
    colors: ['rgba(24, 224, 143, 0.2)', 'rgba(47, 123, 255, 0.2)'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
}
```

### Shimmer Effect (Loading)

Pour les skeleton screens :

```javascript
shimmer: {
  backgroundColor: '#0B1020',
  shimmerColors: [
    'rgba(255, 255, 255, 0)',
    'rgba(255, 255, 255, 0.03)',
    'rgba(255, 255, 255, 0)',
  ],
}
```

---

## 🎯 Icônes

### Bibliothèque

**@expo/vector-icons** (Ionicons, MaterialCommunityIcons, Feather)

### Tailles Standards

```javascript
iconSizes: {
  xs: 12,   // Icônes dans badges
  sm: 16,   // Icônes inline texte
  md: 20,   // Icônes boutons
  lg: 24,   // Icônes navigation
  xl: 32,   // Icônes headers
  xxl: 48,  // Icônes states vides
}
```

### Icônes Principales

| Fonction | Icône | Library | Name |
|----------|-------|---------|------|
| **Navigation** ||||
| Accueil | 🏠 | Ionicons | `home` / `home-outline` |
| Paris | 🎫 | MaterialCommunityIcons | `ticket` / `ticket-outline` |
| Classement | 🏆 | Ionicons | `trophy` / `trophy-outline` |
| Profil | 👤 | Ionicons | `person` / `person-outline` |
| **Actions** ||||
| Ajouter | ➕ | Ionicons | `add-circle` |
| Supprimer | ❌ | Ionicons | `close-circle` |
| Valider | ✅ | Ionicons | `checkmark-circle` |
| Filtrer | 🔽 | Ionicons | `filter` |
| Calendrier | 📅 | Ionicons | `calendar` |
| **Contexte** ||||
| Ballon | ⚽ | MaterialCommunityIcons | `soccer` |
| Statistiques | 📊 | Ionicons | `stats-chart` |
| Confiance | 🎯 | MaterialCommunityIcons | `target` |
| Banque | 💰 | Ionicons | `wallet` |
| Paramètres | ⚙️ | Ionicons | `settings` |

---

## 🧭 Navigation

### Bottom Tab Bar

#### Structure

```
┌─────────────────────────────────────────┐
│  [🏠]    [🎫]    [🏆]    [👤]           │
│ Accueil  Paris Classement Profil        │
└─────────────────────────────────────────┘
```

#### Spécifications

```javascript
tabBar: {
  height: 64,
  backgroundColor: '#0B1020',
  borderTopWidth: 1,
  borderTopColor: 'rgba(155, 163, 188, 0.12)',
  paddingBottom: 8, // Safe area inset

  // Tab individuel
  tab: {
    // État inactif
    inactive: {
      iconColor: '#646B82',
      labelColor: '#646B82',
      fontSize: 11,
    },
    // État actif
    active: {
      iconColor: '#18E08F',
      labelColor: '#FFFFFF',
      fontSize: 11,
      fontWeight: '600',
    },
  },

  // Indicateur (optionnel - ligne au-dessus du tab actif)
  indicator: {
    height: 2,
    backgroundColor: '#18E08F',
    position: 'top',
  },
}
```

### Stack Headers

#### Header Standard

```javascript
header: {
  height: 56,
  backgroundColor: '#050814',
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(155, 163, 188, 0.12)',

  // Titre
  title: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // Boutons
  headerButtons: {
    tintColor: '#FFFFFF',
    size: 24,
  },
}
```

#### Header Transparent (sur certains écrans)

```javascript
headerTransparent: {
  backgroundColor: 'transparent',
  borderBottomWidth: 0,
  position: 'absolute',
  elevation: 0,
}
```

### Transitions

```javascript
screenOptions: {
  // Stack navigation
  cardStyleInterpolator: 'forHorizontalIOS', // Slide gauche-droite

  // Modal
  presentation: 'modal',
  cardStyleInterpolator: 'forVerticalIOS', // Slide bas-haut

  // Timing
  transitionSpec: {
    open: {
      animation: 'spring',
      config: {
        stiffness: 300,
        damping: 30,
      },
    },
    close: {
      animation: 'spring',
      config: {
        stiffness: 300,
        damping: 30,
      },
    },
  },
}
```

---

## 🎭 States & Interactions

### States des Composants

Chaque composant interactif a 4 states minimum :

1. **Default** - État repos
2. **Hover** - Survol (web) / Highlight (mobile)
3. **Active** - Pendant le tap
4. **Disabled** - Non interactif

### Feedback Tactile

```javascript
hapticFeedback: {
  // Tap léger (sélection, toggle)
  light: 'impactLight',

  // Tap moyen (bouton standard)
  medium: 'impactMedium',

  // Tap fort (validation, action critique)
  heavy: 'impactHeavy',

  // Succès
  success: 'notificationSuccess',

  // Erreur
  error: 'notificationError',
}
```

### Animations Standards

```javascript
animations: {
  // Durée
  duration: {
    fast: 150,      // Micro-interactions
    normal: 250,    // Transitions standard
    slow: 400,      // Animations complexes
  },

  // Easing
  easing: {
    easeOut: [0.25, 0.1, 0.25, 1],
    easeInOut: [0.42, 0, 0.58, 1],
    spring: { tension: 300, friction: 20 },
  },
}
```

---

## 📱 Responsive & Safe Areas

### Breakpoints

L'app est mobile-first, mais on prévoit des ajustements :

```javascript
breakpoints: {
  small: 375,   // iPhone SE
  medium: 390,  // iPhone 14
  large: 428,   // iPhone 14 Pro Max
  tablet: 768,  // iPad Mini
}
```

### Safe Areas

Toujours respecter les safe areas iOS (notch, home indicator) :

```javascript
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Dans les composants
const insets = useSafeAreaInsets();
paddingTop: insets.top,
paddingBottom: insets.bottom,
```

---

## 🎨 Design Tokens - Résumé

Tous les tokens ci-dessus seront exportés dans `/design/tokens.ts` pour usage dans l'app React Native.

**Principes d'utilisation** :
1. ✅ **Toujours** utiliser les tokens, jamais de valeurs en dur
2. ✅ Privilégier les composants réutilisables
3. ✅ Tester en light/dark mode (même si dark par défaut)
4. ✅ Vérifier l'accessibilité (contraste, taille de tap)

---

**Prochains fichiers** :
- `COMPONENTS.md` : Détail de tous les composants UI
- `SCREENS.md` : Wireframes textuels de chaque écran
- `tokens.ts` : Tokens de design exportables en TypeScript

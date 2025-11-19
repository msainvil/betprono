# 🧩 BetProno - Composants UI

> Bibliothèque complète des composants réutilisables

---

## 📖 Table des matières

1. [Cards](#cards)
   - [CardMatch](#cardmatch)
   - [CardStat](#cardstat)
   - [CardPronostic](#cardpronostic)
   - [CardBet](#cardbet)
2. [Badges & Pills](#badges--pills)
   - [BadgeConfiance](#badgeconfiance)
   - [BadgeStatus](#badgestatus)
   - [Chip](#chip)
3. [Boutons](#boutons)
   - [Button](#button)
   - [ButtonGroup](#buttongroup)
   - [IssueSelector](#issueselector)
4. [Inputs](#inputs)
   - [Input](#input)
   - [AmountInput](#amountinput)
5. [Listes](#listes)
   - [LeaderboardRow](#leaderboardrow)
   - [BetListItem](#betlistitem)
6. [Navigation](#navigation)
   - [DateSelector](#dateselector)
   - [TabFilter](#tabfilter)
7. [Feedback](#feedback)
   - [SkeletonCard](#skeletoncard)
   - [EmptyState](#emptystate)
   - [Toast](#toast)
8. [Stats & Data](#stats--data)
   - [ProgressBar](#progressbar)
   - [Sparkline](#sparkline)
   - [FormIndicator](#formindicator)

---

## Cards

### CardMatch

**Description** : Card horizontale affichant un match avec pronostic algo.

#### Wireframe Textuel

```
┌─────────────────────────────────────────────────────────┐
│ [🔵 LOGO] PSG              [Ligue 1 • 21:00]  [💚 73%] │
│           vs                                             │
│ [🔴 LOGO] Lyon             Pronostic: 1                  │
│                                                          │
│ ━━━━━━━━━━━━━━━━━━━━━━━ (barre confiance)              │
└─────────────────────────────────────────────────────────┘
```

#### Props

```typescript
interface CardMatchProps {
  match: {
    id: string;
    homeTeam: {
      name: string;
      shortName: string;  // ex: "PSG"
      logo: string;       // URL
    };
    awayTeam: {
      name: string;
      shortName: string;
      logo: string;
    };
    competition: string;  // "Ligue 1", "Premier League"
    date: Date;
    prediction?: {
      issue: '1' | 'N' | '2';  // 1=home, N=nul, 2=away
      confidence: number;       // 0-100
    };
  };
  onPress?: () => void;
  variant?: 'default' | 'compact';
}
```

#### Variantes

1. **Default** (hauteur ~96px)
   - Logos 48x48px
   - Noms complets si place
   - Barre de confiance visible

2. **Compact** (hauteur ~72px)
   - Logos 36x36px
   - Noms abrégés uniquement
   - Badge confiance seulement

#### Structure Interne

```
Card Container (bg: #0B1020, padding: 16, borderRadius: 16)
├─ Row principale
│  ├─ Teams Section (flex: 1)
│  │  ├─ Home Team Row
│  │  │  ├─ Logo (48x48)
│  │  │  └─ Name (Body Large, bold)
│  │  ├─ VS Divider (text secondary, caption)
│  │  └─ Away Team Row
│  │     ├─ Logo (48x48)
│  │     └─ Name (Body Large, bold)
│  │
│  ├─ Meta Section (alignSelf: flex-start)
│  │  ├─ Competition + Time (Body Small, secondary)
│  │  └─ Prediction Label (Caption, accent)
│  │
│  └─ Confidence Badge
│     └─ BadgeConfiance (percentage)
│
└─ Confidence Bar (si > 60%)
   └─ ProgressBar (gradient, height: 3)
```

#### States

- **Default** : border subtle, pas de shadow
- **Pressed** : scale 0.98, border medium, shadow low
- **High confidence** (>80%) : bordure gauche 3px vert néon + léger glow

#### Exemple de Rendu

```
┌────────────────────────────────────────────────┐
│ 🔵 Paris SG          Ligue 1 • 21:00    ┌────┐│
│    vs                Prono: 1           │73% ││
│ 🔴 Lyon                                 └────┘│
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░                        │
└────────────────────────────────────────────────┘
        (barre = 73% de la largeur)
```

---

### CardStat

**Description** : Card pour afficher une statistique (forme, H2H, stats).

#### Wireframe

```
┌──────────────────────────┐
│ [📊 Icône]               │
│ Titre de la stat         │
│ ━━━━━━━━━━━━━━━━━━━━    │
│                          │
│ [Contenu dynamique]      │
│ (ex: liste matchs,       │
│  barres, graphiques)     │
│                          │
└──────────────────────────┘
```

#### Props

```typescript
interface CardStatProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;  // Contenu flexible
  variant?: 'default' | 'glass';
}
```

#### Variantes

1. **Default** : fond #0B1020, border subtle
2. **Glass** : glassmorphism effect (blur, semi-transparent)

---

### CardPronostic

**Description** : Card principale affichant le pronostic de l'algorithme (dans MatchDetail).

#### Wireframe

```
┌────────────────────────────────────────────────┐
│              PRONOSTIC DE L'ALGORITHME         │
│                                                │
│            ┌─────────────────────┐             │
│            │   🎯 VICTOIRE PSG   │             │
│            │                     │             │
│            │    Confiance: 73%   │             │
│            └─────────────────────┘             │
│                                                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ 1: PSG   │  │ N: NUL   │  │ 2: LYON  │    │
│  │   73%    │  │   18%    │  │    9%    │    │
│  │ ▓▓▓▓▓▓▓▓ │  │ ▓▓       │  │ ▓        │    │
│  └──────────┘  └──────────┘  └──────────┘    │
│                                                │
└────────────────────────────────────────────────┘
```

#### Props

```typescript
interface CardPronosticProps {
  prediction: {
    issue: '1' | 'N' | '2';
    confidence: number;
    probabilities: {
      home: number;   // 0-100
      draw: number;
      away: number;
    };
  };
  teams: {
    home: string;
    away: string;
  };
}
```

#### Structure

- Glassmorphism effect
- Issue principale en gros (H2)
- Badge confiance animé (pulse si > 80%)
- Trois colonnes pour les probabilités
- Barres de progression verticales

---

### CardBet

**Description** : Card affichant un pari dans l'historique.

#### Wireframe

```
┌────────────────────────────────────────────────┐
│ Multi-pari (3 sélections)        [🟢 GAGNÉ]   │
│ 15 nov 2024 • 14:32                           │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│                                                │
│ • PSG vs Lyon (1) ✓                           │
│ • Real vs Barça (2) ✓                         │
│ • Bayern vs Dortmund (1) ✓                    │
│                                                │
│ Mise: 50 €          Gain: +125 € (+150%)     │
└────────────────────────────────────────────────┘
```

#### Props

```typescript
interface CardBetProps {
  bet: {
    id: string;
    date: Date;
    selections: Array<{
      match: string;      // "PSG vs Lyon"
      issue: '1' | 'N' | '2';
      result?: 'win' | 'loss';  // undefined si en cours
    }>;
    stake: number;
    status: 'pending' | 'won' | 'lost';
    payout?: number;
  };
  onPress?: () => void;
}
```

#### States

- **Won** : bordure gauche verte, badge succès
- **Lost** : bordure gauche rouge, badge erreur
- **Pending** : bordure gauche bleue, badge info

---

## Badges & Pills

### BadgeConfiance

**Description** : Badge affichant le % de confiance de l'algo avec couleur dynamique.

#### Wireframe

```
┌──────┐
│ 73%  │  ← fond vert, glow
└──────┘

┌──────┐
│ 54%  │  ← fond bleu
└──────┘

┌──────┐
│ 32%  │  ← fond gris
└──────┘
```

#### Props

```typescript
interface BadgeConfianceProps {
  confidence: number;  // 0-100
  size?: 'small' | 'medium' | 'large';
  showGlow?: boolean;  // Effet glow si confiance forte
}
```

#### Logic

```javascript
const getConfidenceStyle = (confidence: number) => {
  if (confidence >= 70) {
    return {
      bg: '#18E08F',
      color: '#050814',
      glow: true,
      label: 'Forte',
    };
  } else if (confidence >= 50) {
    return {
      bg: '#2F7BFF',
      color: '#FFFFFF',
      glow: false,
      label: 'Moyenne',
    };
  } else {
    return {
      bg: '#646B82',
      color: '#FFFFFF',
      glow: false,
      label: 'Faible',
    };
  }
};
```

#### Sizes

- **Small** : 32x20, fontSize 11
- **Medium** : 48x24, fontSize 13
- **Large** : 64x32, fontSize 16

#### Variante avec Label

```
┌─────────────────┐
│ 73% • Confiance │
│      forte      │
└─────────────────┘
```

---

### BadgeStatus

**Description** : Badge pour le statut d'un pari ou événement.

#### Props

```typescript
interface BadgeStatusProps {
  status: 'pending' | 'won' | 'lost' | 'live' | 'finished';
  size?: 'small' | 'medium';
}
```

#### Mapping

| Status | Couleur | Label | Icône |
|--------|---------|-------|-------|
| `pending` | `#2F7BFF` | EN COURS | 🕐 |
| `won` | `#3DD68C` | GAGNÉ | ✓ |
| `lost` | `#FF4E6A` | PERDU | ✗ |
| `live` | `#FFC857` | EN DIRECT | ⚡ (pulse) |
| `finished` | `#646B82` | TERMINÉ | — |

---

### Chip

**Description** : Petite pill pour filtres, tags (compétition, type de pari).

#### Wireframe

```
┌──────────┐  ┌────────────┐  ┌─────────┐
│ Ligue 1  │  │Premier Lg  │  │  Liga   │
└──────────┘  └────────────┘  └─────────┘
   (actif)      (inactif)       (inactif)
```

#### Props

```typescript
interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  icon?: React.ReactNode;
  variant?: 'filter' | 'tag';
}
```

#### States

- **Unselected** : bg #111728, border subtle, texte secondary
- **Selected** : bg gradient vert-bleu, texte blanc, bold

---

## Boutons

### Button

**Description** : Bouton principal de l'app.

#### Variantes

```typescript
interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}
```

#### Styles par Variante

**1. Primary** (bouton principal)
```
┌────────────────────────────┐
│   VALIDER LE PARI   →      │  ← gradient vert-bleu
└────────────────────────────┘
```
- Background : dégradé `#18E08F` → `#2F7BFF`
- Texte : `#FFFFFF`, bold, uppercase
- Shadow medium
- Pressed : scale 0.96

**2. Secondary** (bouton alternatif)
```
┌────────────────────────────┐
│      ANNULER               │  ← bordure bleue
└────────────────────────────┘
```
- Background : `#111728`
- Border : 1px `#2F7BFF`
- Texte : `#FFFFFF`

**3. Ghost** (bouton texte)
```
  Voir les détails →
```
- Background : transparent
- Texte : `#2F7BFF`
- Underline au pressed

**4. Danger** (bouton d'action risquée)
```
┌────────────────────────────┐
│   SUPPRIMER LE PARI        │  ← rouge
└────────────────────────────┘
```
- Background : `#FF4E6A`
- Texte : `#FFFFFF`

#### Sizes

- **Small** : height 36, padding 12-16, fontSize 13
- **Medium** : height 48, padding 16-24, fontSize 15
- **Large** : height 56, padding 20-32, fontSize 16

---

### ButtonGroup

**Description** : Groupe de boutons segmentés (ex: filtres de date).

#### Wireframe

```
┌────────┬────────────┬────────┐
│  Hier  │ Aujourd'hui│ Demain │
└────────┴────────────┴────────┘
           (selected)
```

#### Props

```typescript
interface ButtonGroupProps {
  options: Array<{
    value: string;
    label: string;
  }>;
  value: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
}
```

---

### IssueSelector

**Description** : Sélecteur 1 / N / 2 pour choisir l'issue d'un match.

#### Wireframe

```
┌──────────┬──────────┬──────────┐
│    1     │    N     │    2     │
│  2.50    │  3.20    │  4.10    │  ← cotes optionnelles
└──────────┴──────────┴──────────┘
  (selected)
```

#### Props

```typescript
interface IssueSelectorProps {
  value?: '1' | 'N' | '2';
  onChange: (value: '1' | 'N' | '2') => void;
  odds?: {
    home: number;
    draw: number;
    away: number;
  };
  teams?: {
    home: string;
    away: string;
  };
  disabled?: boolean;
}
```

#### States

- **Unselected** : bg #111728, border subtle, texte secondary
- **Selected** : bg gradient vert, texte blanc, glow, scale 1.05
- **Disabled** : opacity 0.4

---

## Inputs

### Input

**Description** : Champ de texte standard.

#### Props

```typescript
interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
}
```

#### Structure

```
Label (si présent)
┌─────────────────────────────┐
│ 📧  email@example.com       │
└─────────────────────────────┘
Error message (si présent)
```

#### States

- **Default** : bg #111728, border subtle
- **Focused** : border accent primaire (vert)
- **Error** : border rouge, texte d'erreur en dessous
- **Disabled** : opacity 0.5

---

### AmountInput

**Description** : Input spécialisé pour saisir un montant avec boutons +/-.

#### Wireframe

```
┌───┬─────────────────┬───┐
│ - │      50 €       │ + │
└───┴─────────────────┴───┘

Solde actuel: 1,250 €
```

#### Props

```typescript
interface AmountInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;  // défaut: 10
  balance?: number;  // Pour afficher le solde
  currency?: string;  // défaut: '€'
}
```

#### Features

- Boutons +/- pour incrémenter par step
- Long press pour incrément rapide
- Validation min/max
- Affichage solde restant après mise

---

## Listes

### LeaderboardRow

**Description** : Ligne du classement.

#### Wireframe

```
┌──────────────────────────────────────────┐
│ [🥇 1]  MisterProno    +2,450€   (78%)  │
│ [🥈 2]  BetKing        +1,980€   (71%)  │
│ [🥉 3]  FootStats      +1,740€   (69%)  │
│ [  4]   PronoMaster    +1,520€   (66%)  │
└──────────────────────────────────────────┘
```

#### Props

```typescript
interface LeaderboardRowProps {
  rank: number;
  user: {
    id: string;
    pseudo: string;
    avatar?: string;
  };
  profit: number;
  winRate: number;  // 0-100
  isCurrentUser?: boolean;
}
```

#### Spécificités

- Top 3 ont des médailles 🥇🥈🥉
- Rang 1-3 : fond légèrement teinté (gradient très subtil)
- `isCurrentUser` : bordure accentuée + background highlight

---

### BetListItem

**Description** : Item de la liste des paris (historique).

Voir **CardBet** ci-dessus (c'est le même composant).

---

## Navigation

### DateSelector

**Description** : Sélecteur de date horizontal (pills).

#### Wireframe

```
┌─────────┬──────────────┬─────────┐
│  Hier   │  Aujourd'hui │  Demain │
└─────────┴──────────────┴─────────┘
            (selected)
```

#### Props

```typescript
interface DateSelectorProps {
  value: Date;
  onChange: (date: Date) => void;
  mode?: 'relative' | 'calendar';  // relative = hier/auj/demain
}
```

#### Mode Calendar

Ouvre un calendrier modal au tap.

---

### TabFilter

**Description** : Tabs horizontaux pour filtrer (compétitions, statuts).

#### Wireframe

```
┌──────┬──────┬───────┬─────────┬──────────┐
│ Tous │  L1  │  PL   │  Liga   │ Serie A  │
└──────┴──────┴───────┴─────────┴──────────┘
  (actif)
```

#### Props

```typescript
interface TabFilterProps {
  tabs: Array<{
    value: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  value: string;
  onChange: (value: string) => void;
  scrollable?: boolean;  // Si trop de tabs
}
```

#### Style

- Tabs inline, scrollable horizontalement si besoin
- Tab actif : underline 2px vert, texte blanc
- Tab inactif : texte secondary

---

## Feedback

### SkeletonCard

**Description** : Placeholder animé pendant le chargement.

#### Wireframe

```
┌──────────────────────────────┐
│ ▓▓▓▓▓░░░░░  ░░░░  ░░░░░░    │
│ ░░░░                         │
│ ▓▓▓▓▓░░░░░  ░░░░  ░░░░░░    │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░    │
└──────────────────────────────┘
```

#### Props

```typescript
interface SkeletonCardProps {
  type: 'match' | 'bet' | 'stat';
  count?: number;  // Nombre de cards à afficher
}
```

#### Animation

- Shimmer effect (vague de lumière)
- LinearGradient qui translate de gauche à droite
- Loop infini

---

### EmptyState

**Description** : Écran vide avec icône et message.

#### Wireframe

```
        [📊 Icône géante]

    Aucun match trouvé

  Essayez de modifier vos filtres
   ou revenez plus tard.

   [ Réinitialiser filtres ]
```

#### Props

```typescript
interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onPress: () => void;
  };
}
```

---

### Toast

**Description** : Notification en bas d'écran.

#### Wireframe

```
┌──────────────────────────────┐
│ ✓ Pari ajouté au ticket !    │
└──────────────────────────────┘
```

#### Props

```typescript
interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;  // ms, défaut 3000
  position?: 'top' | 'bottom';
}
```

#### Utilisation

```javascript
import { toast } from '@/utils/toast';

toast.success('Pari validé !');
toast.error('Solde insuffisant');
```

---

## Stats & Data

### ProgressBar

**Description** : Barre de progression (horizontale ou verticale).

#### Props

```typescript
interface ProgressBarProps {
  value: number;  // 0-100
  max?: number;   // défaut 100
  color?: string;
  backgroundColor?: string;
  height?: number;
  width?: number;
  orientation?: 'horizontal' | 'vertical';
  showLabel?: boolean;
  gradient?: boolean;  // Utilise le gradient vert-bleu
}
```

#### Exemples

**Horizontal (confiance)**
```
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░  73%
```

**Vertical (probabilités)**
```
┌──┐
│▓▓│
│▓▓│
│▓▓│ 73%
│▓▓│
│░░│
│░░│
└──┘
```

---

### Sparkline

**Description** : Mini graphique d'évolution (solde, forme).

#### Props

```typescript
interface SparklineProps {
  data: number[];  // Tableau de valeurs
  width: number;
  height: number;
  color?: string;
  strokeWidth?: number;
  showDots?: boolean;
  gradient?: boolean;
}
```

#### Usage

Afficher l'évolution du solde sur les 30 derniers jours :

```
     ╱╲    ╱╲
   ╱    ╲╱    ╲╱
 ╱
```

---

### FormIndicator

**Description** : Indicateur de forme d'une équipe (10 derniers matchs).

#### Wireframe

```
Forme (10 derniers)
[ V ][ V ][ N ][ V ][ D ][ V ][ V ][ V ][ D ][ V ]
```

#### Props

```typescript
interface FormIndicatorProps {
  results: Array<'W' | 'D' | 'L'>;  // Win, Draw, Loss
  size?: 'small' | 'medium';
}
```

#### Mapping Couleur

- **W** (Win) : fond vert `#3DD68C`, texte blanc "V"
- **D** (Draw) : fond gris `#646B82`, texte blanc "N"
- **L** (Loss) : fond rouge `#FF4E6A`, texte blanc "D"

---

## 🎨 Récapitulatif des Composants

| Composant | Usage Principal | Fichier Suggéré |
|-----------|----------------|-----------------|
| **CardMatch** | Liste matchs HomeScreen | `/components/cards/CardMatch.tsx` |
| **CardStat** | Stats dans MatchDetail | `/components/cards/CardStat.tsx` |
| **CardPronostic** | Prono algo MatchDetail | `/components/cards/CardPronostic.tsx` |
| **CardBet** | Historique paris | `/components/cards/CardBet.tsx` |
| **BadgeConfiance** | Partout | `/components/badges/BadgeConfiance.tsx` |
| **BadgeStatus** | Statuts paris/matchs | `/components/badges/BadgeStatus.tsx` |
| **Chip** | Filtres, tags | `/components/badges/Chip.tsx` |
| **Button** | Actions primaires | `/components/buttons/Button.tsx` |
| **ButtonGroup** | Filtres date | `/components/buttons/ButtonGroup.tsx` |
| **IssueSelector** | Choix 1N2 | `/components/buttons/IssueSelector.tsx` |
| **Input** | Formulaires | `/components/inputs/Input.tsx` |
| **AmountInput** | Mise pari | `/components/inputs/AmountInput.tsx` |
| **LeaderboardRow** | Classement | `/components/lists/LeaderboardRow.tsx` |
| **DateSelector** | Navigation dates | `/components/navigation/DateSelector.tsx` |
| **TabFilter** | Filtres compét | `/components/navigation/TabFilter.tsx` |
| **SkeletonCard** | Loading states | `/components/feedback/SkeletonCard.tsx` |
| **EmptyState** | États vides | `/components/feedback/EmptyState.tsx` |
| **Toast** | Notifications | `/components/feedback/Toast.tsx` |
| **ProgressBar** | Confiance, stats | `/components/data/ProgressBar.tsx` |
| **Sparkline** | Graphiques | `/components/data/Sparkline.tsx` |
| **FormIndicator** | Forme équipe | `/components/data/FormIndicator.tsx` |

---

## 🔧 Props Communes (Extends)

Certains composants partagent des props communes :

```typescript
// Tous les composants interactifs
interface InteractiveProps {
  onPress?: () => void;
  disabled?: boolean;
  testID?: string;
}

// Tous les composants stylables
interface StylableProps {
  style?: ViewStyle | TextStyle;
  className?: string;  // Si vous utilisez NativeWind
}

// Tous les composants avec loading
interface LoadableProps {
  loading?: boolean;
}
```

---

**Prochaine étape** : `SCREENS.md` avec les wireframes détaillés de chaque écran.

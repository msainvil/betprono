# ⚽ BetProno - Design Documentation

> **Application mobile de pronostics football avec algorithme d'IA**
>
> React Native (Expo) • Full Dark Mode • Design System Complet

---

## 📚 Documentation

Ce repository contient la **documentation complète du design** de l'application BetProno.

### 📁 Fichiers de Design

| Fichier | Description | Lien |
|---------|-------------|------|
| **DESIGN_SYSTEM.md** | Vision globale, palette, typographie, principes | [Voir →](./DESIGN_SYSTEM.md) |
| **COMPONENTS.md** | Tous les composants UI réutilisables avec props et variantes | [Voir →](./COMPONENTS.md) |
| **SCREENS.md** | Wireframes détaillés de tous les écrans de l'app | [Voir →](./SCREENS.md) |
| **design-tokens.ts** | Tokens de design en TypeScript (prêts à l'emploi) | [Voir →](./design-tokens.ts) |

---

## 🎯 Quick Start

### 1. Comprendre la Vision

Commencez par lire **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** pour comprendre :
- L'identité visuelle (mood, principes)
- La palette de couleurs complète
- La typographie et hiérarchie
- Les règles de spacing, élévations, effets

### 2. Explorer les Composants

Consultez **[COMPONENTS.md](./COMPONENTS.md)** pour voir :
- 20+ composants réutilisables
- Props détaillées avec TypeScript
- Variantes et states
- Exemples d'utilisation

### 3. Visualiser les Écrans

Parcourez **[SCREENS.md](./SCREENS.md)** pour découvrir :
- Wireframes ASCII détaillés
- Structure de chaque écran
- Zones fonctionnelles
- Interactions et animations

### 4. Utiliser les Tokens

Importez **[design-tokens.ts](./design-tokens.ts)** dans votre code :

```typescript
import { colors, typography, spacing, getConfidenceStyle } from './design-tokens';

// Dans un composant
const MyComponent = () => (
  <View style={{
    backgroundColor: colors.background.surface,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
  }}>
    <Text style={{
      ...typography.h2,
      color: colors.text.primary,
    }}>
      Titre
    </Text>
  </View>
);
```

---

## 🎨 Identité Visuelle - Résumé

### Concept
**"Nuit de Ligue des Champions meets Trading Floor"**

Une app qui combine :
- L'énergie d'un match de foot nocturne (stade, projecteurs, tension)
- La précision d'une plateforme de trading (data, algo, insights)
- La modernité d'une app crypto (néon, dark mode, minimalisme)

### Palette Principale

```
Fonds
  #050814  Noir bleuté profond (fond principal)
  #0B1020  Cards
  #111728  Cards surélevées

Accents
  #18E08F  Vert néon (pronos, CTA, succès)
  #2F7BFF  Bleu électrique (liens, tags)

Texte
  #FFFFFF  Primaire
  #9BA3BC  Secondaire
  #646B82  Tertiaire

Feedback
  #3DD68C  Succès
  #FF4E6A  Erreur
  #FFC857  Avertissement
```

### Typographie

- **Display** : Poppins (titres, chiffres, labels)
- **Body** : Inter (texte courant)

### Mood Board Conceptuel

```
🌃 Nuit        🏟️  Stade       💚 Néon         📊 Data
🎯 Précision   ⚡ Énergie      🔷 Tech         🏆 Compétition
```

---

## 🧩 Composants Clés

### Cards

- **CardMatch** : Affiche un match avec pronostic algo + badge confiance
- **CardPronostic** : Grande card glassmorphism avec prédiction algo détaillée
- **CardBet** : Historique d'un pari (statut, sélections, mise/gain)
- **CardStat** : Conteneur pour statistiques (forme, H2H, etc.)

### Badges & Pills

- **BadgeConfiance** : `73%` avec couleur dynamique (faible/moyen/fort)
- **BadgeStatus** : Statut d'un pari (EN COURS, GAGNÉ, PERDU)
- **Chip** : Filtres et tags (compétitions, types)

### Boutons

- **Button** : 4 variantes (primary, secondary, ghost, danger)
- **IssueSelector** : Choix 1 / N / 2 avec effet gradient
- **ButtonGroup** : Groupe segmenté (ex: date selector)

### Data & Stats

- **ProgressBar** : Barres horizontales/verticales avec gradient
- **FormIndicator** : Forme équipe (V V N D V...)
- **Sparkline** : Mini graphique d'évolution

---

## 📱 Structure de Navigation

```
Auth Stack
├─ LoginScreen
└─ RegisterScreen

App Tabs (Bottom Tab Bar)
├─ 🏠 Accueil
│  ├─ HomeScreen (liste matchs)
│  └─ MatchDetailScreen
│
├─ 🎫 Paris
│  ├─ MyBetsScreen (historique)
│  └─ NewBetScreen (ticket)
│
├─ 🏆 Classement
│  └─ LeaderboardScreen
│
└─ 👤 Profil
   ├─ ProfileScreen
   └─ SettingsScreen
```

---

## 🎭 Micro-interactions

L'app est **vivante** grâce à des animations subtiles :

- **CardMatch** : Scale + shadow au tap
- **BadgeConfiance >80%** : Pulse + glow en boucle
- **Boutons** : Scale au press + haptic feedback
- **Solde** : Count-up animation
- **Sparkline** : Draw progressif
- **Toast** : Slide up avec spring

---

## ✅ Checklist Qualité

Avant de coder un composant, vérifier :

- [ ] Utilise les tokens (jamais de valeurs en dur)
- [ ] Respecte la palette de couleurs
- [ ] Contraste WCAG AA (4.5:1 minimum)
- [ ] Taille de tap ≥ 44x44 pt
- [ ] Safe areas iOS/Android
- [ ] States définis (default, pressed, disabled, loading, error, empty)
- [ ] Animations < 400ms (UX fluide)
- [ ] Textes en français
- [ ] Haptic feedback sur actions importantes

---

## 🚀 Prochaines Étapes (Implémentation)

### Phase 1 : Setup
1. Init projet Expo
2. Installer fonts (Poppins, Inter)
3. Setup navigation (React Navigation)
4. Intégrer design-tokens.ts

### Phase 2 : Composants de Base
1. Créer les boutons (Button, ButtonGroup, IssueSelector)
2. Créer les badges (BadgeConfiance, BadgeStatus, Chip)
3. Créer les inputs (Input, AmountInput)

### Phase 3 : Cards & Listes
1. CardMatch
2. CardPronostic (avec glassmorphism)
3. CardBet
4. LeaderboardRow

### Phase 4 : Écrans
1. Auth (Login, Register)
2. HomeScreen + MatchDetail
3. MyBetsScreen + NewBetScreen
4. LeaderboardScreen
5. ProfileScreen + Settings

### Phase 5 : Polish
1. Animations (Reanimated)
2. Haptic feedback
3. Skeleton loaders
4. Empty states
5. Error states

---

## 🎨 Design Principles

### 1. Data First
Chaque information est **instantanément lisible** avec une hiérarchie claire.

### 2. Dark by Design
Le dark mode n'est pas une option, c'est l'identité. Il réduit la fatigue oculaire et met en valeur les accents néon.

### 3. Micro-feedback Omniprésent
Chaque interaction génère un retour visuel (haptic, animation, toast).

### 4. Performance Perçue
L'app doit *sentir* rapide : skeleton loaders, optimistic updates, transitions 60fps.

### 5. Accessibilité
Contraste minimum, tailles de tap, labels clairs, feedback multi-sensoriel.

---

## 📞 Questions & Support

Pour toute question sur le design :
- Consultez d'abord la documentation (DESIGN_SYSTEM.md, COMPONENTS.md, SCREENS.md)
- Vérifiez les tokens dans design-tokens.ts
- Utilisez les helper functions (getConfidenceStyle, formatCurrency, etc.)

---

## 📄 Licence

Design propriétaire © 2024 BetProno

---

**Ready to build something amazing? Let's go! 🚀⚽💚**

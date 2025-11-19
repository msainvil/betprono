# 📱 BetProno - Wireframes des Écrans

> Design détaillé de toutes les interfaces

---

## 📖 Table des matières

1. [Auth Flow](#auth-flow)
   - [LoginScreen](#loginscreen)
   - [RegisterScreen](#registerscreen)
2. [Home Stack](#home-stack)
   - [HomeScreen](#homescreen)
   - [MatchDetailScreen](#matchdetailscreen)
3. [Bets Stack](#bets-stack)
   - [MyBetsScreen](#mybetsscreen)
   - [NewBetScreen](#newbetscreen)
4. [Leaderboard](#leaderboard)
   - [LeaderboardScreen](#leaderboardscreen)
5. [Profile Stack](#profile-stack)
   - [ProfileScreen](#profilescreen)
   - [SettingsScreen](#settingsscreen)

---

## Auth Flow

### LoginScreen

**Route** : `/auth/login`

#### Wireframe Complet

```
┌─────────────────────────────────────────────────┐
│                                                 │
│                   [Top Safe Area]               │
│                                                 │
│              ╔═══════════════════╗              │ ← Logo + texte
│              ║    ⚽ BetProno    ║              │   (Gradient vert-bleu)
│              ║   Algorithme AI   ║              │
│              ╚═══════════════════╝              │
│                                                 │
│                                                 │
│         Connectez-vous pour commencer          │ ← H3, secondary
│                                                 │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ 📧  Email                                 │ │ ← Input
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ 🔒  Mot de passe                    [👁] │ │ ← Input password
│  └───────────────────────────────────────────┘ │
│                                                 │
│                      Mot de passe oublié ? →   │ ← Link ghost
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │         SE CONNECTER                      │ │ ← Button primary
│  └───────────────────────────────────────────┘ │
│                                                 │
│                                                 │
│               ──────── OU ────────              │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │  🍎  Continuer avec Apple                 │ │ ← Button secondary
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │  🔵  Continuer avec Google                │ │ ← Button secondary
│  └───────────────────────────────────────────┘ │
│                                                 │
│                                                 │
│        Pas encore de compte ?                  │ ← Body small
│        Créer un compte →                       │ ← Link (vers Register)
│                                                 │
│                  [Bottom Safe Area]             │
└─────────────────────────────────────────────────┘
```

#### Spécifications

**Header**
- Pas de navigation header (full screen)
- Logo centré avec animation d'entrée (fade + scale)
- Gradient subtil sur le logo

**Inputs**
- Auto-focus sur email au mount
- Validation inline (border rouge si email invalide)
- Toggle visibility password au tap sur 👁

**Bouton principal**
- Disabled si email/password vides
- Loading state : spinner + "Connexion..."
- Haptic feedback medium au tap

**OAuth Buttons**
- Icônes natives Apple/Google
- Même style que secondary button

**Navigation**
- "Créer un compte" → `RegisterScreen`
- "Mot de passe oublié" → Modal de reset (ou screen dédié)

#### States

1. **Initial** : Inputs vides, bouton disabled
2. **Typing** : Validation inline
3. **Submitting** : Loading spinner, inputs disabled
4. **Error** : Toast erreur + shake animation sur le formulaire

---

### RegisterScreen

**Route** : `/auth/register`

#### Wireframe Complet

```
┌─────────────────────────────────────────────────┐
│  ← [Retour]           Inscription               │ ← Header
├─────────────────────────────────────────────────┤
│                                                 │
│  Créez votre compte gratuitement               │ ← H2
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ 👤  Pseudo                                │ │
│  └───────────────────────────────────────────┘ │
│  3-20 caractères, lettres et chiffres          │ ← Caption, hint
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ 📧  Email                                 │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ 🔒  Mot de passe                    [👁] │ │
│  └───────────────────────────────────────────┘ │
│  Minimum 8 caractères                          │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ 🔒  Confirmer mot de passe          [👁] │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ┌─┐  J'accepte les Conditions Générales      │ ← Checkbox
│  └─┘  et la Politique de confidentialité      │   + links
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │         CRÉER MON COMPTE                  │ │ ← Primary button
│  └───────────────────────────────────────────┘ │
│                                                 │
│               ──────── OU ────────              │
│                                                 │
│  [ 🍎 S'inscrire avec Apple ]                 │
│  [ 🔵 S'inscrire avec Google ]                │
│                                                 │
│        Déjà inscrit ? Se connecter →           │
│                                                 │
└─────────────────────────────────────────────────┘
```

#### Validations

- **Pseudo** : 3-20 caractères, alphanumériques + tirets/underscores
- **Email** : format email valide
- **Password** : min 8 caractères, au moins 1 chiffre et 1 lettre
- **Confirm** : match avec password
- **Checkbox** : doit être coché

Validation temps réel avec bordure verte si OK, rouge si erreur.

---

## Home Stack

### HomeScreen

**Route** : `/home`
**Tab** : Accueil 🏠

#### Wireframe Complet

```
┌─────────────────────────────────────────────────┐
│  Aujourd'hui • Mer 15 nov                [🔔]  │ ← Header sticky
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌─────────┬──────────────┬─────────┐          │ ← DateSelector
│  │  Hier   │  Aujourd'hui │  Demain │          │
│  └─────────┴──────────────┴─────────┘          │
│            (selected)                           │
│                                                 │
│  ┌──────────────────────────────────────────┐  │ ← TabFilter (horizontal scroll)
│  │ Tous │ L1 │ PL │ Liga │ Serie A │ Bund. │  │
│  └──────────────────────────────────────────┘  │
│    (actif)                                      │
│                                                 │
│  🎯 Filtre confiance : Moyenne et forte  [v]   │ ← Dropdown/toggle
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │ ← ScrollView
│  21:00 • Ligue 1                               │   (liste matches)
│  ┌───────────────────────────────────────────┐ │
│  │ 🔵 Paris SG        L1 • 21:00   ┌──────┐ │ │ ← CardMatch
│  │    vs              Prono: 1     │ 73%  │ │ │
│  │ 🔴 Lyon                         └──────┘ │ │
│  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░                   │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ ⚪ Real Madrid     Liga • 21:00  ┌──────┐ │ │
│  │    vs              Prono: 2     │ 68%  │ │ │
│  │ 🔵 Barcelona                    └──────┘ │ │
│  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░                    │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  22:00 • Premier League                        │
│  ┌───────────────────────────────────────────┐ │
│  │ 🔴 Liverpool       PL • 22:00    ┌──────┐ │ │
│  │    vs              Prono: 1     │ 81%  │ │ │ ← Confiance forte
│  │ ⚪ Man City                      └──────┘ │ │   → bordure verte
│  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░                    │ │   + glow subtil
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ 🔵 Chelsea         PL • 22:00    ┌──────┐ │ │
│  │    vs              Prono: N     │ 52%  │ │ │
│  │ 🟡 Arsenal                      └──────┘ │ │
│  │ ▓▓▓▓▓▓░░░░░░░░░░░░                      │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  [Loading more...] ← Skeleton si scroll infini │
│                                                 │
└─────────────────────────────────────────────────┘
│  [🏠] [🎫] [🏆] [👤]  ← Bottom Tab Bar        │
└─────────────────────────────────────────────────┘
```

#### Zones Fonctionnelles

**1. Header (sticky)**
- Ligne 1 : Date actuelle + icône notifications
- Pas de titre "Accueil", direct dans le contenu

**2. DateSelector**
- 3 boutons : Hier / Aujourd'hui / Demain
- Au tap : recharge les matchs + scroll to top
- Possibilité d'ajouter un calendrier picker au long press

**3. Filtres compétitions**
- Horizontal scroll si > 5 compétitions
- "Tous" par défaut
- Update liste matchs au tap

**4. Filtre confiance** (optionnel)
- Dropdown ou segment control
- Options : "Toutes", "Moyenne et forte (>50%)", "Forte uniquement (>70%)"

**5. Liste matchs**
- Groupés par heure (headers "21:00 • Ligue 1")
- Tri : heure croissante
- Tap sur une card → `MatchDetailScreen`
- Pull-to-refresh
- Infinite scroll si beaucoup de matchs

#### States

1. **Loading initial** : SkeletonCard x 5
2. **Empty** : EmptyState "Aucun match aujourd'hui"
3. **Error** : EmptyState avec bouton "Réessayer"

#### Interactions

- **Tap card** : Navigation vers MatchDetail
- **Long press card** : Quick action "Ajouter au ticket" (bottom sheet)
- **Swipe card left** : Quick action "Pronostiquer" (optionnel)

---

### MatchDetailScreen

**Route** : `/home/match/:id`

#### Wireframe Complet (scroll vertical)

```
┌─────────────────────────────────────────────────┐
│  ← [Retour]                             [★]    │ ← Header
│                                                 │   ★ = favoris
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌──────────────────────────────────────────┐  │ ← Hero section
│  │                                          │  │   (bg légèrement
│  │        🔵                     🔴         │  │    plus clair)
│  │       PARIS SG          vs        LYON   │  │
│  │                                          │  │
│  │              Ligue 1 • Mercredi          │  │
│  │              15 nov • 21:00              │  │
│  │              Parc des Princes            │  │
│  │                                          │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ╔════════════════════════════════════════════╗│ ← Card Pronostic
│  ║     PRONOSTIC DE L'ALGORITHME             ║│   (glassmorphism)
│  ║                                            ║│
│  ║         ┌─────────────────────┐            ║│
│  ║         │  🎯 VICTOIRE PSG    │            ║│
│  ║         │                     │            ║│
│  ║         │  Confiance: 73%     │            ║│
│  ║         └─────────────────────┘            ║│
│  ║                                            ║│
│  ║  ┌───────────┐ ┌───────────┐ ┌─────────┐ ║│
│  ║  │  1: PSG   │ │  N: NUL   │ │ 2: LYON │ ║│
│  ║  │    73%    │ │    18%    │ │   9%    │ ║│
│  ║  │ ▓▓▓▓▓▓▓▓  │ │ ▓▓        │ │ ▓       │ ║│
│  ║  └───────────┘ └───────────┘ └─────────┘ ║│
│  ║                                            ║│
│  ║  Basé sur 47 facteurs analysés            ║│ ← Caption
│  ╚════════════════════════════════════════════╝│
│                                                 │
│  ┌──────────────────────────────────────────┐  │ ← Segment control
│  │  Forme  │  Confrontations  │  Stats buts │  │
│  └──────────────────────────────────────────┘  │
│    (actif)                                      │
│                                                 │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │ ← Tab content
│  ┃ FORME - 10 DERNIERS MATCHS               ┃  │
│  ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫  │
│  ┃                                           ┃  │
│  ┃ Paris SG                                  ┃  │
│  ┃ [V][V][N][V][D][V][V][V][D][V]          ┃  │ ← FormIndicator
│  ┃ 70% victoires                            ┃  │
│  ┃                                           ┃  │
│  ┃ Lyon                                      ┃  │
│  ┃ [D][V][D][N][V][D][D][V][N][D]          ┃  │
│  ┃ 30% victoires                            ┃  │
│  ┃                                           ┃  │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│                                                 │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │
│  ┃ STATISTIQUES AVANCÉES                    ┃  │
│  ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫  │
│  ┃                                           ┃  │
│  ┃ Buts marqués (moyenne/match)             ┃  │
│  ┃ PSG  2.3  ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░              ┃  │
│  ┃ Lyon 1.5  ▓▓▓▓▓▓▓▓░░░░░░░░              ┃  │
│  ┃                                           ┃  │
│  ┃ Buts encaissés (moyenne/match)           ┃  │
│  ┃ PSG  0.8  ▓▓▓▓░░░░░░░░░░░░              ┃  │
│  ┃ Lyon 1.2  ▓▓▓▓▓▓░░░░░░░░░░              ┃  │
│  ┃                                           ┃  │
│  ┃ Possession moyenne                       ┃  │
│  ┃ PSG  64%  ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░              ┃  │
│  ┃ Lyon 52%  ▓▓▓▓▓▓▓▓▓▓░░░░░              ┃  │
│  ┃                                           ┃  │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│                                                 │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │
│  ┃ CONFRONTATIONS DIRECTES (H2H)            ┃  │
│  ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫  │
│  ┃                                           ┃  │
│  ┃ 5 derniers matchs                        ┃  │
│  ┃                                           ┃  │
│  ┃ 12/03/24  PSG 3-1 Lyon  [L1]            ┃  │
│  ┃ 18/11/23  Lyon 1-2 PSG  [L1]            ┃  │
│  ┃ 02/09/23  PSG 2-0 Lyon  [L1]            ┃  │
│  ┃ 21/04/23  Lyon 0-1 PSG  [L1]            ┃  │
│  ┃ 18/12/22  PSG 2-1 Lyon  [L1]            ┃  │
│  ┃                                           ┃  │
│  ┃ Bilan : PSG 5 victoires, Lyon 0          ┃  │
│  ┃                                           ┃  │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│                                                 │
│                                                 │
│  [Bottom Safe Area for Button]                 │ ← Zone réservée
│                                                 │   pour le bouton
└─────────────────────────────────────────────────┘   sticky

┌─────────────────────────────────────────────────┐ ← Bouton sticky
│  ┌───────────────────────────────────────────┐ │   (flotte au-dessus)
│  │     PRONOSTIQUER CE MATCH           →     │ │
│  └───────────────────────────────────────────┘ │
│  [Bottom Safe Area]                             │
└─────────────────────────────────────────────────┘
```

#### Zones Fonctionnelles

**1. Hero Section**
- Logos grandes tailles (64x64)
- Noms complets des équipes
- Métadonnées : compétition, date, heure, stade
- Background avec gradient très subtil aux couleurs des équipes (optionnel)

**2. Card Pronostic Algo** (glassmorphism)
- Issue favorite centrée avec gros texte
- Badge confiance animé (pulse si > 80%)
- 3 colonnes de probabilités avec barres verticales
- Mention "47 facteurs analysés" (renforce la crédibilité)

**3. Tabs Stats**
- 3 onglets : Forme / Confrontations / Stats buts
- Transition smooth entre onglets
- Chaque tab a son propre scroll si contenu long

**4. Bouton CTA Sticky**
- Reste visible même en scrollant
- Gradient vert-bleu
- Au tap : ouvre bottom sheet de sélection 1N2

#### Bottom Sheet "Pronostiquer"

Au tap sur "Pronostiquer ce match" :

```
┌─────────────────────────────────────────────────┐
│              ━━━━━━━━━━━                       │ ← Handle
│                                                 │
│  Votre pronostic                               │ ← H2
│  Paris SG vs Lyon                              │ ← Body, secondary
│                                                 │
│  ┌──────────┬──────────┬──────────┐           │ ← IssueSelector
│  │    1     │    N     │    2     │           │
│  │  PSG     │   NUL    │   LYON   │           │
│  └──────────┴──────────┴──────────┘           │
│    (selected)                                   │
│                                                 │
│  L'algorithme recommande : 1 (PSG) - 73%      │ ← Info algo
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │      AJOUTER AU TICKET            →       │ │ ← Primary button
│  └───────────────────────────────────────────┘ │
│                                                 │
│  [Annuler]                                     │ ← Ghost button
│                                                 │
└─────────────────────────────────────────────────┘
```

Au tap "Ajouter au ticket" :
- Toast success "Ajouté au ticket !"
- Badge numéro apparaît sur l'icône tab "Paris" (🎫 avec badge "1")
- Bottom sheet se ferme

---

## Bets Stack

### MyBetsScreen

**Route** : `/bets/history`
**Tab** : Paris 🎫

#### Wireframe Complet

```
┌─────────────────────────────────────────────────┐
│             Mes Paris                  [📊]    │ ← Header
│                                         Stats   │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌───────────────────────────────────────────┐ │ ← TabFilter
│  │ Tous │ Gagnés │ Perdus │ En cours          │ │
│  └───────────────────────────────────────────┘ │
│    (actif)                                      │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  Aujourd'hui                                   │ ← Section header
│  ┌───────────────────────────────────────────┐ │
│  │ Multi (3 sélections)       [🟡 EN COURS]  │ │ ← CardBet
│  │ 15 nov • 14:32                            │ │
│  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │ │
│  │ • PSG vs Lyon (1)              ⏳         │ │
│  │ • Real vs Barça (2)            ✓          │ │
│  │ • Bayern vs Dortmund (1)       ⏳         │ │
│  │                                            │ │
│  │ Mise: 50 €      Gain pot.: +137 € (174%) │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ Simple                         [🟢 GAGNÉ] │ │
│  │ 15 nov • 12:05                            │ │
│  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │ │
│  │ • Liverpool vs Man City (1)    ✓          │ │
│  │                                            │ │
│  │ Mise: 100 €         Gain: +80 € (+80%)   │ │ ← Texte vert
│  └───────────────────────────────────────────┘ │
│                                                 │
│  Hier                                          │
│  ┌───────────────────────────────────────────┐ │
│  │ Multi (2 sélections)       [🔴 PERDU]     │ │
│  │ 14 nov • 21:45                            │ │
│  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │ │
│  │ • Chelsea vs Arsenal (1)       ✗          │ │
│  │ • Inter vs Juventus (N)        ✓          │ │
│  │                                            │ │
│  │ Mise: 50 €          Perte: -50 € (-100%) │ │ ← Texte rouge
│  └───────────────────────────────────────────┘ │
│                                                 │
│  Cette semaine                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ Simple                         [🟢 GAGNÉ] │ │
│  │ 13 nov • 15:20                            │ │
│  │ • Marseille vs Nice (1)        ✓          │ │
│  │ Mise: 75 €          Gain: +52 € (+69%)   │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  [Charger plus...]                             │
│                                                 │
└─────────────────────────────────────────────────┘
│  [🏠] [🎫] [🏆] [👤]                           │
└─────────────────────────────────────────────────┘
```

#### Zones Fonctionnelles

**1. Header**
- Titre "Mes Paris"
- Bouton [📊] → Modal ou screen de statistiques détaillées (optionnel)

**2. Filtres**
- 4 tabs : Tous / Gagnés / Perdus / En cours
- Mise à jour liste en temps réel

**3. Liste groupée**
- Groupement par : Aujourd'hui / Hier / Cette semaine / Ce mois / Plus ancien
- Cards triées par date décroissante

**4. CardBet**
- Badge statut coloré (vert/rouge/jaune)
- Liste sélections avec icônes résultat (✓ ✗ ⏳)
- Mise et gain/perte avec % et couleur

#### Interactions

- **Tap card** : Ouvre détail du pari (modal ou screen)
- **Swipe right** : Partager (screenshot du pari)
- **Long press** : Menu contextuel (supprimer si brouillon)

#### Empty State

Si aucun pari :

```
       [🎫 Icône géante]

    Aucun pari pour le moment

  Consultez les matchs et faites
   votre première prédiction !

   [ Voir les matchs du jour ]
```

---

### NewBetScreen

**Route** : `/bets/new`

Accessible via :
- Badge numéro sur tab "Paris" quand des sélections dans le ticket
- Bouton "Voir mon ticket" (floating button sur HomeScreen si ticket non vide)

#### Wireframe Complet

```
┌─────────────────────────────────────────────────┐
│  [✕ Annuler]      Mon Ticket          [🗑️ Vider]│ ← Header
├─────────────────────────────────────────────────┤
│                                                 │
│  3 sélections                                  │ ← Caption
│                                                 │
│  ┌───────────────────────────────────────────┐ │ ← Sélection 1
│  │ PSG vs Lyon                          [✕]  │ │
│  │ Ligue 1 • 15 nov • 21:00                  │ │
│  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │ │
│  │ Votre choix : 1 (Victoire PSG)            │ │
│  │ Confiance algo : 73% 🎯                   │ │ ← Indicateur
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ Real Madrid vs Barcelona            [✕]  │ │
│  │ Liga • 15 nov • 21:00                     │ │
│  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │ │
│  │ Votre choix : 2 (Victoire Barça)          │ │
│  │ Confiance algo : 31% ⚠️                   │ │ ← Warning
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ Bayern vs Dortmund                  [✕]  │ │
│  │ Bundesliga • 15 nov • 20:30               │ │
│  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │ │
│  │ Votre choix : 1 (Victoire Bayern)         │ │
│  │ Confiance algo : 68% 📊                   │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
├─────────────────────────────────────────────────┤
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │ ← Card mise
│  ┃ VOTRE MISE                                ┃ │   (glassmorphism)
│  ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ │
│  ┃                                           ┃ │
│  ┃  ┌───┬─────────────────┬───┐             ┃ │ ← AmountInput
│  ┃  │ - │      50 €       │ + │             ┃ │
│  ┃  └───┴─────────────────┴───┘             ┃ │
│  ┃                                           ┃ │
│  ┃  Solde actuel : 1,250 €                  ┃ │
│  ┃  Solde après pari : 1,200 €              ┃ │
│  ┃                                           ┃ │
│  ┃  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ┃ │
│  ┃                                           ┃ │
│  ┃  Gain potentiel : +137 €                 ┃ │ ← H3, vert
│  ┃  Si toutes vos sélections gagnent        ┃ │
│  ┃                                           ┃ │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │      VALIDER MON PARI            →        │ │ ← Primary button
│  └───────────────────────────────────────────┘ │
│                                                 │
│  [Bottom Safe Area]                             │
└─────────────────────────────────────────────────┘
```

#### Zones Fonctionnelles

**1. Header**
- [✕] Annuler : ferme le screen sans valider
- [🗑️] Vider : vide tout le ticket (avec confirmation)

**2. Liste sélections**
- Cards avec nom match, date, choix utilisateur
- Indicateur confiance algo avec emoji :
  - 🎯 si > 70% (aligné avec user)
  - 📊 si 50-70%
  - ⚠️ si < 50% (warning : choix contre algo)
- [✕] pour supprimer une sélection

**3. Card Mise**
- AmountInput avec +/- (step 10€)
- Affichage solde actuel et après pari
- **Gain potentiel** mis en avant (gros chiffre vert)
- Calcul temps réel à chaque changement de mise

**4. Validation**
- Bouton disabled si :
  - Ticket vide
  - Mise = 0
  - Mise > solde
  - Un des matchs a déjà commencé

#### Validation du Pari

Au tap "Valider mon pari" :

1. Confirmation modal :
```
┌─────────────────────────────────────┐
│  Confirmer le pari                  │
│                                     │
│  Vous pariez 50 € sur 3 matchs     │
│  Gain potentiel : +137 €           │
│                                     │
│  [ Annuler ]    [ Confirmer ]      │
└─────────────────────────────────────┘
```

2. Si confirmé :
   - Loading spinner
   - Requête API
   - Success :
     - Toast "Pari validé !"
     - Haptic feedback success
     - Navigation vers MyBetsScreen
     - Vide le ticket
   - Error :
     - Toast erreur
     - Reste sur le screen

---

## Leaderboard

### LeaderboardScreen

**Route** : `/leaderboard`
**Tab** : Classement 🏆

#### Wireframe Complet

```
┌─────────────────────────────────────────────────┐
│             Classement                 [ℹ️]     │ ← Header
│                                      Comment ça  │   Info : règles
│                                       marche ?   │   classement
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌─────────┬────────────┬─────────────┐        │ ← Tabs période
│  │ Semaine │    Mois    │ Tout le temps│        │
│  └─────────┴────────────┴─────────────┘        │
│             (selected)                          │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │ ← Podium visuel
│  ┌──────────────────────────────────────────┐  │
│  │           🥈 2               🥇 1         │  │
│  │         BetKing          MisterProno     │  │
│  │        +1,980 €           +2,450 €       │  │
│  │         (71%)              (78%)         │  │
│  │                                          │  │
│  │                        🥉 3              │  │
│  │                     FootStats            │  │
│  │                     +1,740 €             │  │
│  │                      (69%)               │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │ ← Liste classement
│  ┌───────────────────────────────────────────┐ │
│  │ [🏅 4]  PronoMaster    +1,520€    (66%)  │ │ ← LeaderboardRow
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ [  5]   AlgoKing       +1,340€    (64%)  │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ [  6]   BetMaster      +1,180€    (62%)  │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ [  7]   PronoExpert    +1,020€    (59%)  │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ...                                           │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ [ 47]   MoiMême          +250€    (52%)  │ │ ← User (highlight)
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ...                                           │
│                                                 │
└─────────────────────────────────────────────────┘
│  [🏠] [🎫] [🏆] [👤]                           │
└─────────────────────────────────────────────────┘
```

#### Zones Fonctionnelles

**1. Header**
- Bouton [ℹ️] : modal expliquant les règles du classement
  - "Classé par profit total (gains - mises)"
  - "Le % indique votre taux de réussite"
  - etc.

**2. Tabs Période**
- Semaine / Mois / Tout le temps
- Recharge le classement au changement

**3. Podium (Top 3)**
- Design spécial pour les 3 premiers
- Médailles 🥇🥈🥉
- Tailles différentes (1er plus gros)
- Background avec gradient très subtil doré/argenté/bronze

**4. Liste classement**
- Rows du 4e au 100e (ou scroll infini)
- Row de l'utilisateur actuel **toujours visible** :
  - Soit dans la liste si dans le top 100
  - Soit sticky en bas si hors top 100
  - Background highlight, bordure verte

#### Interactions

- **Tap row** : Modal/screen profil public du joueur (optionnel)
  - Stats détaillées
  - Historique public
  - Suivre (feature sociale future)

#### Empty State

Si pas encore de paris :

```
       [🏆 Icône]

    Classement indisponible

  Faites vos premiers paris pour
    apparaître dans le classement !

   [ Voir les matchs ]
```

---

## Profile Stack

### ProfileScreen

**Route** : `/profile`
**Tab** : Profil 👤

#### Wireframe Complet

```
┌─────────────────────────────────────────────────┐
│                                         [⚙️]     │ ← Paramètres
├─────────────────────────────────────────────────┤
│                                                 │
│              ┌────────────┐                     │ ← Avatar
│              │     MR     │                     │   (initiales)
│              └────────────┘                     │
│                                                 │
│              MisterProno                        │ ← Pseudo (H1)
│              @misterprono                       │ ← Handle (caption)
│                                                 │
│          ⚽ Club favori : Paris SG              │ ← Optionnel
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  ╔════════════════════════════════════════════╗ │ ← Card Banque
│  ║ 💰 BANQUE VIRTUELLE                        ║ │   (glassmorphism)
│  ╠════════════════════════════════════════════╣ │
│  ║                                            ║ │
│  ║         2,450 €                            ║ │ ← Solde (H1)
│  ║                                            ║ │
│  ║         +1,200 € (+96%) ↗️                 ║ │ ← Variation
│  ║         depuis le début                    ║ │   (vert si +)
│  ║                                            ║ │
│  ║  ╱╲    ╱╲                                  ║ │ ← Sparkline
│  ║    ╲╱    ╲╱╲                               ║ │   optionnel
│  ║                                            ║ │
│  ╚════════════════════════════════════════════╝ │
│                                                 │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │ ← Card Stats
│  ┃ 📊 MES STATISTIQUES                       ┃  │
│  ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫  │
│  ┃                                           ┃  │
│  ┃  Paris effectués          127            ┃  │
│  ┃  Paris gagnés              89            ┃  │
│  ┃  Paris perdus              38            ┃  │
│  ┃  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ┃  │
│  ┃  Taux de réussite          70%           ┃  │ ← Gros chiffre
│  ┃  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░                   ┃  │   vert + barre
│  ┃  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ┃  │
│  ┃  ROI (Return on Investment)  96%         ┃  │
│  ┃  Gain moyen par pari         +9.4 €      ┃  │
│  ┃  Plus grosse victoire        +540 €      ┃  │
│  ┃  Série en cours              🔥 5 paris   ┃  │
│  ┃                                           ┃  │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│                                                 │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │ ← Card Algo stats
│  ┃ 🎯 SUIVI DE L'ALGORITHME                 ┃  │   (optionnel)
│  ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫  │
│  ┃                                           ┃  │
│  ┃  Vous avez suivi l'algo : 72 fois        ┃  │
│  ┃  Taux de réussite :       89%            ┃  │ ← Très bon !
│  ┃  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ┃  │
│  ┃  Vous avez contredit l'algo : 55 fois    ┃  │
│  ┃  Taux de réussite :       45%            ┃  │ ← Moins bon
│  ┃                                           ┃  │
│  ┃  💡 L'algorithme vous aurait fait        ┃  │
│  ┃     gagner 340 € de plus !               ┃  │
│  ┃                                           ┃  │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│                                                 │
│  [ Partager mon profil ]                       │ ← Secondary button
│                                                 │
│  [ Se déconnecter ]                            │ ← Ghost button
│                                                 │
└─────────────────────────────────────────────────┘
│  [🏠] [🎫] [🏆] [👤]                           │
└─────────────────────────────────────────────────┘
```

#### Zones Fonctionnelles

**1. Header**
- Avatar avec initiales (ou image custom)
- Pseudo + handle
- Club favori (sélectionnable dans settings)

**2. Card Banque**
- Solde actuel en très gros
- Variation depuis inscription (montant + % + flèche)
- Optionnel : mini sparkline de l'évolution sur 30j

**3. Card Stats**
- Métriques clés :
  - Nombre de paris
  - Taux de réussite (avec barre de progression)
  - ROI
  - Gain moyen
  - Plus grosse victoire
  - Série actuelle (ex: 🔥 5 victoires d'affilée)

**4. Card Suivi Algo** (insight unique !)
- Compare les perfs quand user suit l'algo vs quand il le contredit
- Message pédagogique : incite à suivre l'algo
- Valeur ajoutée : "vous auriez gagné X€ de plus"

**5. Actions**
- Partager profil (screenshot de stats ou lien)
- Se déconnecter

#### Interactions

- **Tap avatar** : Modifier (upload photo ou changer couleur/initiales)
- **Tap [⚙️]** : SettingsScreen

---

### SettingsScreen

**Route** : `/profile/settings`

#### Wireframe Complet

```
┌─────────────────────────────────────────────────┐
│  ← [Retour]        Paramètres                   │
├─────────────────────────────────────────────────┤
│                                                 │
│  COMPTE                                         │ ← Section header
│  ┌───────────────────────────────────────────┐ │
│  │ Modifier le profil                    →   │ │
│  └───────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────┐ │
│  │ Changer le mot de passe               →   │ │
│  └───────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────┐ │
│  │ Club favori : Paris SG                →   │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  NOTIFICATIONS                                  │
│  ┌───────────────────────────────────────────┐ │
│  │ Notifications push               [Toggle]│ │ ← Switch ON/OFF
│  └───────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────┐ │
│  │ Nouveaux matchs                  [Toggle]│ │
│  └───────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────┐ │
│  │ Résultats de mes paris           [Toggle]│ │
│  └───────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────┐ │
│  │ Pronos haute confiance (>80%)    [Toggle]│ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  PRÉFÉRENCES                                    │
│  ┌───────────────────────────────────────────┐ │
│  │ Compétitions favorites            →       │ │
│  │ Ligue 1, Premier League, Liga             │ │ ← Sous-texte
│  └───────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────┐ │
│  │ Langue                            →       │ │
│  │ Français                                  │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  À PROPOS                                       │
│  ┌───────────────────────────────────────────┐ │
│  │ Conditions générales              →       │ │
│  └───────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────┐ │
│  │ Politique de confidentialité      →       │ │
│  └───────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────┐ │
│  │ Version de l'app                          │ │
│  │ v1.0.2 (build 42)                         │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  DANGER ZONE                                    │
│  ┌───────────────────────────────────────────┐ │
│  │ Réinitialiser le solde            →       │ │ ← Rouge
│  └───────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────┐ │
│  │ Supprimer mon compte              →       │ │ ← Rouge
│  └───────────────────────────────────────────┘ │
│                                                 │
└─────────────────────────────────────────────────┘
```

#### Spécifications

- **Sections groupées** : Compte / Notifications / Préférences / À propos / Danger Zone
- **Toggles** : Switch natif iOS/Android
- **Navigation** : Flèches → pour les sous-menus
- **Danger Zone** : Texte rouge, confirmation obligatoire avant action

---

## 🎨 Récapitulatif Navigation

```
Auth Stack (non authentifié)
├─ LoginScreen
└─ RegisterScreen

App Tabs (authentifié)
├─ 🏠 Home Stack
│  ├─ HomeScreen (liste matchs)
│  └─ MatchDetailScreen
│
├─ 🎫 Bets Stack
│  ├─ MyBetsScreen (historique)
│  └─ NewBetScreen (ticket en cours)
│
├─ 🏆 LeaderboardScreen
│
└─ 👤 Profile Stack
   ├─ ProfileScreen
   └─ SettingsScreen
```

---

## 🎭 Micro-interactions & Animations

### Animations Globales

| Élément | Animation | Trigger | Durée |
|---------|-----------|---------|-------|
| **CardMatch** | Scale 0.98 + shadow | onPressIn | 150ms |
| **CardMatch (high confidence)** | Pulse bordure | Auto (loop) | 2s |
| **BadgeConfiance >80%** | Pulse + glow | Auto (loop) | 3s |
| **Button Primary** | Scale 0.96 | onPressIn | 150ms |
| **Ticket badge (tab bar)** | Bounce | onAdd selection | 400ms |
| **Solde (ProfileScreen)** | Count-up animation | onMount / onChange | 800ms |
| **Sparkline** | Draw from left | onMount | 600ms |
| **Toast** | Slide up + fade | onShow | 300ms |
| **Bottom Sheet** | Slide up + spring | onOpen | 400ms |
| **Tab change** | Fade + translate | onTabPress | 250ms |
| **Empty State** | Fade in + scale | onMount | 400ms |

### Transitions de Navigation

- **Stack push/pop** : Slide horizontal (iOS style)
- **Tab change** : Fade rapide
- **Modal** : Slide vertical depuis le bas
- **Bottom Sheet** : Spring animation

### Haptic Feedback

| Action | Type |
|--------|------|
| Tap bouton standard | Light |
| Tap bouton primaire | Medium |
| Validation pari | Heavy + Success |
| Erreur | Error |
| Sélection 1N2 | Light |
| Toggle | Light |

---

## ✅ Checklist Qualité UI

Avant implémentation, vérifier :

- [ ] Tous les textes sont en français
- [ ] Contraste WCAG AA minimum (4.5:1)
- [ ] Taille de tap minimum 44x44 pt
- [ ] Safe areas iOS respectées
- [ ] Loading states définis
- [ ] Empty states définis
- [ ] Error states définis
- [ ] Animations < 400ms (sauf loops)
- [ ] Pas de scroll horizontal sauf si justifié
- [ ] Inputs avec labels clairs
- [ ] Boutons disabled visuellement distincts

---

**Prochaine étape** : `tokens.ts` avec les tokens de design en TypeScript pour React Native.

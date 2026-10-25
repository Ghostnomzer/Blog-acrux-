# Graph Report - Blog-acrux  (2026-10-25)

## Corpus Check
- 165 files · ~72,792 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .example 1, (none) 1, .css 1)

## Summary
- 999 nodes · 2416 edges · 58 communities (47 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `206fec23`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- gallery-index.tsx
- react
- package.json
- client.ts
- deploy-pages.yml
- robots-manager.tsx
- publicPageMetadata
- projects-manager.tsx
- admin-users/index.ts
- compilerOptions
- admin-gate.tsx
- content-notification-mail/handler.ts
- ACRUX ROBOCEP — site oficial
- postcss.config.mjs
- AGENTS.md
- sponsors-manager.tsx
- quality
- blog-index.tsx
- about-manager.tsx
- admin-gate.tsx
- 20260904000000_initial_acrux_schema.sql
- competitions-index.tsx
- hero.tsx
- notifications-manager.tsx
- 20261004031230_owner_content_notifications.sql
- deno.json
- functions/README.md
- public-metadata.ts
- site-logo.tsx
- next
- TeamManager
- ArrowLink
- layout.tsx
- createSupabaseBrowserClient
- getSupabasePublicConfig
- blog-manager.tsx
- password-recovery-form.tsx
- team-manager.tsx
- admin-section.tsx
- sponsors-preview.tsx
- dependencies
- activate-account-form.tsx
- contact-page.tsx
- seasons-index.tsx
- eslint.config.mjs
- scripts
- gallery-manager.tsx
- projetos/page.tsx
- save-post.test.sql
- Notificações privadas de conteúdo
- content-notification-mail/deno.json

## God Nodes (most connected - your core abstractions)
1. `createSupabaseBrowserClient()` - 122 edges
2. `react` - 58 edges
3. `next` - 48 edges
4. `getPublicImageUrl()` - 34 edges
5. `ArrowLink()` - 31 edges
6. `AdminWorkspace()` - 29 edges
7. `Database` - 28 edges
8. `slugify()` - 26 edges
9. `focusAdminEditor()` - 25 edges
10. `ProjectsManager()` - 24 edges

## Surprising Connections (you probably didn't know these)
- `Comportamento corrigido` --references--> `ScrollReveal()`  [INFERRED]
  docs/audit-remediation.md → src/components/animations/scroll-reveal.tsx
- `Supabase` --references--> `robots()`  [INFERRED]
  README.md → src/app/robots.ts
- `draft()` --calls--> `emptyCompetitionDraft()`  [EXTRACTED]
  tests/competition-form.test.mjs → src/features/admin/competition-form-model.ts
- `notificationSummary()` --calls--> `notificationOverview()`  [EXTRACTED]
  src/features/admin/notification-model.ts → supabase/functions/_shared/notification-descriptions.ts
- `notificationChangeDescription()` --calls--> `describeNotificationChange()`  [EXTRACTED]
  src/features/admin/notification-model.ts → supabase/functions/_shared/notification-descriptions.ts

## Import Cycles
- None detected.

## Communities (58 total, 11 thin omitted)

### Community 0 - "gallery-index.tsx"
Cohesion: 0.12
Nodes (15): GalleryPage(), metadata, PlaceholderMedia(), PlaceholderMediaProps, GalleryImageRow, GalleryIndex(), loadGallery(), GalleryRow (+7 more)

### Community 1 - "react"
Cohesion: 0.16
Nodes (11): motion, react, metadata, TeamPage(), PlaceholderPageProps, ArrowLinkProps, TeamAreaRow, TeamIndex() (+3 more)

### Community 2 - "package.json"
Cohesion: 0.13
Nodes (20): devDependencies, eslint@^9.34.0, eslint-config-next@^15.5.4, tailwindcss@^4.1.12, @tailwindcss/postcss@^4.1.12, @types/node@^22.18.0, @types/react@^19.1.11, @types/react-dom@^19.1.7 (+12 more)

### Community 3 - "client.ts"
Cohesion: 0.14
Nodes (13): Album, CompetitionRelationsProps, Member, Album, Member, ProjectRelationsProps, Member, TeamArea (+5 more)

### Community 4 - "deploy-pages.yml"
Cohesion: 0.06
Nodes (35): env, runs-on, steps, concurrency, cancel-in-progress, group, environment, needs (+27 more)

### Community 5 - "robots-manager.tsx"
Cohesion: 0.08
Nodes (46): metadata, RobotsPage(), CompetitionForm(), CompetitionFormProps, CompetitionDraft, competitionError(), CompetitionRow, competitionToDraft() (+38 more)

### Community 6 - "publicPageMetadata"
Cohesion: 0.09
Nodes (22): BlogPostPage(), BlogPostPageProps, dynamicParams, generateMetadata(), CompetitionDetailPage(), CompetitionDetailPageProps, dynamicParams, generateMetadata() (+14 more)

### Community 7 - "projects-manager.tsx"
Cohesion: 0.26
Nodes (14): emptyProject(), projectCategories, ProjectDraft, projectPayload(), ProjectRow, projectToDraft(), ProjectForm(), Props (+6 more)

### Community 8 - "admin-users/index.ts"
Cohesion: 0.09
Nodes (9): Account, createHandler(), Profile, Role, roles, UserService, options, row (+1 more)

### Community 9 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowImportingTsExtensions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx (+12 more)

### Community 10 - "admin-gate.tsx"
Cohesion: 0.11
Nodes (23): roleLabels, UserAccessForm(), userField, ManagedUser, usersRequest(), UsersResponse, UsersManager(), askMutation() (+15 more)

### Community 11 - "content-notification-mail/handler.ts"
Cohesion: 0.06
Nodes (44): actionText(), bounded(), createHandler(), sendMail(), dateText(), Dependencies, errorMessages, escapeHtml() (+36 more)

### Community 12 - "ACRUX ROBOCEP — site oficial"
Cohesion: 0.17
Nodes (11): ACRUX ROBOCEP — site oficial, Configuração local, Contato e apoio, Conteúdo pendente, Cruzeiro do Sul na página inicial, Estrutura principal, Logo, Publicação no GitHub Pages e página 404 (+3 more)

### Community 16 - "sponsors-manager.tsx"
Cohesion: 0.19
Nodes (14): selectDraft(), selectGallery(), blank, Draft, fromRow(), Season, SeasonsManager(), changeLabel() (+6 more)

### Community 17 - "quality"
Cohesion: 0.10
Nodes (20): jobs, quality, name, permissions, contents, branches, branches, name (+12 more)

### Community 18 - "blog-index.tsx"
Cohesion: 0.15
Nodes (17): BlogPage(), metadata, BlogIndex(), closePost(), copyPostLink(), openPost(), updatePostUrl(), CategoryRow (+9 more)

### Community 19 - "about-manager.tsx"
Cohesion: 0.17
Nodes (15): AboutPage(), metadata, AboutContentView(), AboutContent, aboutFromRow(), AboutMilestone, aboutPlaceholder, AboutRow (+7 more)

### Community 20 - "admin-gate.tsx"
Cohesion: 0.16
Nodes (16): AdminPage(), metadata, AdminDashboard(), AdminDashboardContent(), signOut(), dashboardCards, AdminGate(), verifyAccess() (+8 more)

### Community 21 - "20260904000000_initial_acrux_schema.sql"
Cohesion: 0.06
Nodes (55): achievements_set_updated_at, competitions_public_index, competitions_set_updated_at, galleries_public_index, galleries_set_updated_at, on_auth_user_created, posts_public_index, posts_set_updated_at (+47 more)

### Community 22 - "competitions-index.tsx"
Cohesion: 0.29
Nodes (8): CompetitionsPage(), metadata, Competition, CompetitionDate(), CompetitionsIndex(), loadCompetitions(), dateFormatter, normalizeSearch()

### Community 23 - "hero.tsx"
Cohesion: 0.21
Nodes (12): gsap, metadata, NotFound(), animateAcruxConstellation(), NotFoundLogo(), branches, HeroConstellation(), stars (+4 more)

### Community 24 - "notifications-manager.tsx"
Cohesion: 0.12
Nodes (38): MailReply, mailRequest(), MailSettings, NotificationEmailSettings(), save(), saveOpening(), sendTest(), refreshContentNotificationStatus() (+30 more)

### Community 25 - "20261004031230_owner_content_notifications.sql"
Cohesion: 0.07
Nodes (24): content_notification_outbox_ready_idx, content_notifications_recipient_cursor_idx, private.claim_content_notification_emails(), private.content_change_batches, private.content_notification_config, private.content_notification_email_outbox, private.content_notification_receipts, private.content_notification_status() (+16 more)

### Community 26 - "deno.json"
Cohesion: 0.50
Nodes (3): compilerOptions, strict, imports

### Community 30 - "public-metadata.ts"
Cohesion: 0.19
Nodes (8): Home(), metadata, dynamic, dynamic, sitemap(), publicNavigation, siteConfig, PublicPageMetadataOptions

### Community 31 - "site-logo.tsx"
Cohesion: 0.19
Nodes (8): Banco e publicação, Comportamento corrigido, Correções da auditoria de 2 de outubro de 2026, Verificação, ScrollReveal(), ScrollRevealProps, SiteLogoProps, cn()

### Community 32 - "next"
Cohesion: 0.29
Nodes (7): nextConfig, next, AdminLoginPage(), metadata, LoginErrorNotice(), LoginForm(), handleSubmit()

### Community 33 - "TeamManager"
Cohesion: 0.24
Nodes (9): getNumber(), TeamManager(), addArea(), askDeleteArea(), deleteMember(), saveAreaOrders(), saveMember(), updateName() (+1 more)

### Community 34 - "ArrowLink"
Cohesion: 0.34
Nodes (14): ArrowLink(), AboutPreview(), GalleryPreviewCards(), HomePage(), AchievementsAndCompetitionPreview(), ClosingCta(), GalleryAndSponsorsPreview(), NewsPreview() (+6 more)

### Community 35 - "layout.tsx"
Cohesion: 0.25
Nodes (6): metadata, RootLayout(), RootLayoutProps, siteUrl, viewport, Header()

### Community 36 - "createSupabaseBrowserClient"
Cohesion: 0.14
Nodes (26): GalleryImageEditor(), deleteImage(), saveImage(), GalleryManager(), deleteGallery(), imageDeleted(), saveGallery(), updateTitle() (+18 more)

### Community 37 - "getSupabasePublicConfig"
Cohesion: 0.24
Nodes (9): @supabase/ssr, AdminAccess, getAdminAccess(), requireAdminAccess(), createSupabaseAdminClient(), getSupabasePublicConfig(), SupabasePublicConfig, updateSupabaseSession() (+1 more)

### Community 38 - "blog-manager.tsx"
Cohesion: 0.11
Nodes (22): BlogManager(), createCategory(), deletePost(), savePost(), updateTitle(), uploadImages(), CategoryRow, emptyDraft (+14 more)

### Community 39 - "password-recovery-form.tsx"
Cohesion: 0.39
Nodes (6): metadata, PasswordRecoveryPage(), getActivationUrl(), PasswordRecoveryForm(), handleSubmit(), SiteLogo()

### Community 40 - "team-manager.tsx"
Cohesion: 0.16
Nodes (16): AdminConfirmationProvider(), AskConfirmation, ConfirmationContext, ConfirmationOptions, useAdminConfirm(), AdminDraftProtectionProvider(), AskConfirmation, DraftProtection (+8 more)

### Community 41 - "admin-section.tsx"
Cohesion: 0.15
Nodes (11): AdminSectionPage(), AdminSectionPageProps, dynamicParams, metadata, sections, useAdminDraftProtection(), AdminSection(), AdminSectionContent() (+3 more)

### Community 42 - "sponsors-preview.tsx"
Cohesion: 0.27
Nodes (10): compareSponsors(), normalizedSponsorTier(), SponsorTier, sponsorTiers, blank, Draft, Sponsor, Sponsor (+2 more)

### Community 43 - "dependencies"
Cohesion: 0.20
Nodes (10): dependencies, gsap@^3.13.0, motion@^12.23.24, next@^15.5.4, react@^19.1.1, react-dom@^19.1.1, @supabase/ssr@^0.7.0, @supabase/supabase-js@^2.57.0 (+2 more)

### Community 44 - "activate-account-form.tsx"
Cohesion: 0.29
Nodes (5): ActivateAccountPage(), metadata, ActivateAccountForm(), ActivationState, createActivationClient()

### Community 45 - "contact-page.tsx"
Cohesion: 0.18
Nodes (17): metadata, Page(), Footer(), ExternalLinkIcon(), ContactAction, ContactTopic, emailContactHref(), primaryContactAction() (+9 more)

### Community 46 - "seasons-index.tsx"
Cohesion: 0.31
Nodes (7): metadata, SeasonsPage(), addCounts(), Count, Counts, Season, SeasonsIndex()

### Community 47 - "eslint.config.mjs"
Cohesion: 0.29
Nodes (4): compat, eslintConfig, @eslint/eslintrc@^3.3.1, @eslint/eslintrc

### Community 48 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, start, typecheck

### Community 50 - "gallery-manager.tsx"
Cohesion: 0.18
Nodes (13): useAdminNavigationProtection(), AdminSession, AdminWorkspace(), signOut(), AdminWorkspaceProps, BlogManagerProps, emptyDraft, GalleryDraft (+5 more)

### Community 52 - "projetos/page.tsx"
Cohesion: 0.50
Nodes (4): metadata, ProjectsPage(), ProjectsIndex(), load()

### Community 62 - "Notificações privadas de conteúdo"
Cohesion: 0.50
Nodes (3): Implantação, Notificações privadas de conteúdo, Validação

### Community 63 - "content-notification-mail/deno.json"
Cohesion: 0.50
Nodes (3): compilerOptions, strict, imports

## Knowledge Gaps
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `createSupabaseBrowserClient()` connect `createSupabaseBrowserClient` to `gallery-index.tsx`, `react`, `client.ts`, `robots-manager.tsx`, `projects-manager.tsx`, `admin-gate.tsx`, `sponsors-manager.tsx`, `blog-index.tsx`, `about-manager.tsx`, `admin-gate.tsx`, `competitions-index.tsx`, `notifications-manager.tsx`, `next`, `TeamManager`, `ArrowLink`, `getSupabasePublicConfig`, `blog-manager.tsx`, `password-recovery-form.tsx`, `team-manager.tsx`, `admin-section.tsx`, `sponsors-preview.tsx`, `seasons-index.tsx`, `gallery-manager.tsx`, `projetos/page.tsx`?**
  _High betweenness centrality (0.141) - this node is a cross-community bridge._
- **Should `gallery-index.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11692307692307692 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `gallery-index.tsx`, `react`, `package.json`, `client.ts`, `robots-manager.tsx`, `publicPageMetadata`, `projects-manager.tsx`, `blog-index.tsx`, `about-manager.tsx`, `admin-gate.tsx`, `hero.tsx`, `public-metadata.ts`, `site-logo.tsx`, `layout.tsx`, `getSupabasePublicConfig`, `blog-manager.tsx`, `password-recovery-form.tsx`, `admin-section.tsx`, `sponsors-preview.tsx`, `dependencies`, `activate-account-form.tsx`, `contact-page.tsx`, `gallery-manager.tsx`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `gallery-index.tsx`, `package.json`, `client.ts`, `robots-manager.tsx`, `projects-manager.tsx`, `admin-gate.tsx`, `sponsors-manager.tsx`, `blog-index.tsx`, `about-manager.tsx`, `admin-gate.tsx`, `competitions-index.tsx`, `hero.tsx`, `notifications-manager.tsx`, `public-metadata.ts`, `site-logo.tsx`, `next`, `ArrowLink`, `layout.tsx`, `blog-manager.tsx`, `password-recovery-form.tsx`, `team-manager.tsx`, `admin-section.tsx`, `sponsors-preview.tsx`, `dependencies`, `activate-account-form.tsx`, `seasons-index.tsx`, `gallery-manager.tsx`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Should `client.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14035087719298245 - nodes in this community are weakly interconnected._
- **Should `deploy-pages.yml` be split into smaller, more focused modules?**
  _Cohesion score 0.05873015873015873 - nodes in this community are weakly interconnected._
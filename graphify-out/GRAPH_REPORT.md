# Graph Report - Blog-acrux  (2026-10-25)

## Corpus Check
- 161 files · ~71,447 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .example 1, (none) 1, .css 1)

## Summary
- 978 nodes · 2372 edges · 56 communities (45 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d9aa8daa`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- gallery-index.tsx
- team-index.tsx
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
- react
- next
- createSupabaseBrowserClient
- ArrowLink
- SiteLogo
- gallery-manager.tsx
- getSupabasePublicConfig
- blog-manager.tsx
- password-recovery-form.tsx
- team-manager.tsx
- admin-section.tsx
- sponsors-preview.tsx
- dependencies
- activate-account-form.tsx
- GalleryIndex
- seasons-index.tsx
- eslint.config.mjs
- scripts
- save-post.test.sql
- Notificações privadas de conteúdo
- content-notification-mail/deno.json

## God Nodes (most connected - your core abstractions)
1. `createSupabaseBrowserClient()` - 122 edges
2. `react` - 58 edges
3. `next` - 47 edges
4. `getPublicImageUrl()` - 34 edges
5. `ArrowLink()` - 31 edges
6. `AdminWorkspace()` - 29 edges
7. `Database` - 28 edges
8. `slugify()` - 26 edges
9. `focusAdminEditor()` - 25 edges
10. `ProjectsManager()` - 24 edges

## Surprising Connections (you probably didn't know these)
- `Supabase` --references--> `robots()`  [INFERRED]
  README.md → src/app/robots.ts
- `Comportamento corrigido` --references--> `ScrollReveal()`  [INFERRED]
  docs/audit-remediation.md → src/components/animations/scroll-reveal.tsx
- `draft()` --calls--> `emptyCompetitionDraft()`  [EXTRACTED]
  tests/competition-form.test.mjs → src/features/admin/competition-form-model.ts
- `notificationSummary()` --calls--> `notificationOverview()`  [EXTRACTED]
  src/features/admin/notification-model.ts → supabase/functions/_shared/notification-descriptions.ts
- `notificationChangeDescription()` --calls--> `describeNotificationChange()`  [EXTRACTED]
  src/features/admin/notification-model.ts → supabase/functions/_shared/notification-descriptions.ts

## Import Cycles
- None detected.

## Communities (56 total, 11 thin omitted)

### Community 0 - "gallery-index.tsx"
Cohesion: 0.20
Nodes (12): PlaceholderMedia(), PlaceholderMediaProps, GalleryImageRow, GalleryRow, Gallery, GalleryPreviewCards(), shapes, Member (+4 more)

### Community 1 - "team-index.tsx"
Cohesion: 0.36
Nodes (6): metadata, TeamPage(), TeamAreaRow, TeamIndex(), TeamMemberRow, groupTeamMembers()

### Community 2 - "package.json"
Cohesion: 0.13
Nodes (20): devDependencies, eslint@^9.34.0, eslint-config-next@^15.5.4, tailwindcss@^4.1.12, @tailwindcss/postcss@^4.1.12, @types/node@^22.18.0, @types/react@^19.1.11, @types/react-dom@^19.1.7 (+12 more)

### Community 3 - "client.ts"
Cohesion: 0.13
Nodes (14): Album, CompetitionRelationsProps, Member, Album, Member, ProjectRelationsProps, Member, Post (+6 more)

### Community 4 - "deploy-pages.yml"
Cohesion: 0.06
Nodes (35): env, runs-on, steps, concurrency, cancel-in-progress, group, environment, needs (+27 more)

### Community 5 - "robots-manager.tsx"
Cohesion: 0.11
Nodes (38): metadata, RobotsPage(), CompetitionForm(), CompetitionFormProps, CompetitionDraft, competitionError(), CompetitionRow, competitionToDraft() (+30 more)

### Community 6 - "publicPageMetadata"
Cohesion: 0.09
Nodes (23): BlogPostPage(), BlogPostPageProps, dynamicParams, generateMetadata(), CompetitionDetailPage(), CompetitionDetailPageProps, dynamicParams, generateMetadata() (+15 more)

### Community 7 - "projects-manager.tsx"
Cohesion: 0.16
Nodes (23): uploadImages(), emptyProject(), projectCategories, ProjectDraft, projectPayload(), ProjectRow, projectToDraft(), ProjectForm() (+15 more)

### Community 8 - "admin-users/index.ts"
Cohesion: 0.08
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
Cohesion: 0.20
Nodes (9): ACRUX ROBOCEP — site oficial, Configuração local, Conteúdo pendente, Cruzeiro do Sul na página inicial, Estrutura principal, Logo, Publicação no GitHub Pages e página 404, Stack (+1 more)

### Community 16 - "sponsors-manager.tsx"
Cohesion: 0.13
Nodes (21): useAdminDraftProtection(), selectDraft(), blank, Draft, fromRow(), Season, SeasonsManager(), changeLabel() (+13 more)

### Community 17 - "quality"
Cohesion: 0.10
Nodes (20): jobs, quality, name, permissions, contents, branches, branches, name (+12 more)

### Community 18 - "blog-index.tsx"
Cohesion: 0.18
Nodes (15): BlogPage(), metadata, BlogIndex(), closePost(), copyPostLink(), loadPosts(), openPost(), updatePostUrl() (+7 more)

### Community 19 - "about-manager.tsx"
Cohesion: 0.14
Nodes (16): AboutPage(), metadata, AboutContentView(), AboutContent, aboutFromRow(), AboutMilestone, aboutPlaceholder, AboutRow (+8 more)

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
Nodes (37): MailReply, mailRequest(), MailSettings, NotificationEmailSettings(), save(), saveOpening(), sendTest(), refreshContentNotificationStatus() (+29 more)

### Community 25 - "20261004031230_owner_content_notifications.sql"
Cohesion: 0.07
Nodes (24): content_notification_outbox_ready_idx, content_notifications_recipient_cursor_idx, private.claim_content_notification_emails(), private.content_change_batches, private.content_notification_config, private.content_notification_email_outbox, private.content_notification_receipts, private.content_notification_status() (+16 more)

### Community 26 - "deno.json"
Cohesion: 0.50
Nodes (3): compilerOptions, strict, imports

### Community 30 - "public-metadata.ts"
Cohesion: 0.26
Nodes (8): dynamic, robots(), dynamic, sitemap(), publicNavigation, siteConfig, PublicPageMetadataOptions, publicUrl()

### Community 31 - "react"
Cohesion: 0.17
Nodes (9): Banco e publicação, Comportamento corrigido, Correções da auditoria de 2 de outubro de 2026, Verificação, motion, react, ScrollReveal(), ScrollRevealProps (+1 more)

### Community 32 - "next"
Cohesion: 0.29
Nodes (7): nextConfig, next, AdminLoginPage(), metadata, LoginErrorNotice(), LoginForm(), handleSubmit()

### Community 33 - "createSupabaseBrowserClient"
Cohesion: 0.11
Nodes (27): metadata, ProjectsPage(), deletePost(), CompetitionRelations(), changeRelation(), loadRelations(), ProjectRelations(), changeRelation() (+19 more)

### Community 34 - "ArrowLink"
Cohesion: 0.32
Nodes (14): Home(), metadata, ArrowLink(), AboutPreview(), HomePage(), AchievementsAndCompetitionPreview(), ClosingCta(), GalleryAndSponsorsPreview() (+6 more)

### Community 35 - "SiteLogo"
Cohesion: 0.18
Nodes (11): metadata, RootLayout(), RootLayoutProps, siteUrl, viewport, Footer(), Header(), SiteLogo() (+3 more)

### Community 36 - "gallery-manager.tsx"
Cohesion: 0.14
Nodes (19): useAdminConfirm(), emptyDraft, GalleryDraft, GalleryImageEditor(), deleteImage(), saveImage(), GalleryImageRow, GalleryManager() (+11 more)

### Community 37 - "getSupabasePublicConfig"
Cohesion: 0.24
Nodes (9): @supabase/ssr, AdminAccess, getAdminAccess(), requireAdminAccess(), createSupabaseAdminClient(), getSupabasePublicConfig(), SupabasePublicConfig, updateSupabaseSession() (+1 more)

### Community 38 - "blog-manager.tsx"
Cohesion: 0.15
Nodes (18): BlogManager(), createCategory(), savePost(), updateTitle(), CategoryRow, emptyDraft, ManagedPost, messageFromError() (+10 more)

### Community 39 - "password-recovery-form.tsx"
Cohesion: 0.43
Nodes (5): metadata, PasswordRecoveryPage(), getActivationUrl(), PasswordRecoveryForm(), handleSubmit()

### Community 40 - "team-manager.tsx"
Cohesion: 0.13
Nodes (22): AdminConfirmationProvider(), AskConfirmation, ConfirmationContext, ConfirmationOptions, AdminDraftProtectionProvider(), AskConfirmation, DraftProtection, DraftProtectionContext (+14 more)

### Community 41 - "admin-section.tsx"
Cohesion: 0.21
Nodes (10): AdminSectionPage(), AdminSectionPageProps, dynamicParams, metadata, sections, AdminSection(), AdminSectionContent(), AdminSectionProps (+2 more)

### Community 42 - "sponsors-preview.tsx"
Cohesion: 0.35
Nodes (8): compareSponsors(), normalizedSponsorTier(), SponsorTier, sponsorTiers, Sponsor, SponsorsPreview(), sponsorCards(), tierStyles

### Community 43 - "dependencies"
Cohesion: 0.20
Nodes (10): dependencies, gsap@^3.13.0, motion@^12.23.24, next@^15.5.4, react@^19.1.1, react-dom@^19.1.1, @supabase/ssr@^0.7.0, @supabase/supabase-js@^2.57.0 (+2 more)

### Community 44 - "activate-account-form.tsx"
Cohesion: 0.29
Nodes (5): ActivateAccountPage(), metadata, ActivateAccountForm(), ActivationState, createActivationClient()

### Community 45 - "GalleryIndex"
Cohesion: 0.25
Nodes (4): GalleryPage(), metadata, GalleryIndex(), loadGallery()

### Community 46 - "seasons-index.tsx"
Cohesion: 0.31
Nodes (7): metadata, SeasonsPage(), addCounts(), Count, Counts, Season, SeasonsIndex()

### Community 47 - "eslint.config.mjs"
Cohesion: 0.29
Nodes (4): compat, eslintConfig, @eslint/eslintrc@^3.3.1, @eslint/eslintrc

### Community 48 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, start, typecheck

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

- **Why does `createSupabaseBrowserClient()` connect `createSupabaseBrowserClient` to `gallery-index.tsx`, `team-index.tsx`, `client.ts`, `robots-manager.tsx`, `projects-manager.tsx`, `admin-gate.tsx`, `sponsors-manager.tsx`, `blog-index.tsx`, `about-manager.tsx`, `admin-gate.tsx`, `competitions-index.tsx`, `notifications-manager.tsx`, `react`, `next`, `ArrowLink`, `gallery-manager.tsx`, `getSupabasePublicConfig`, `blog-manager.tsx`, `password-recovery-form.tsx`, `team-manager.tsx`, `sponsors-preview.tsx`, `GalleryIndex`, `seasons-index.tsx`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `gallery-index.tsx`, `team-index.tsx`, `package.json`, `client.ts`, `robots-manager.tsx`, `publicPageMetadata`, `projects-manager.tsx`, `admin-gate.tsx`, `sponsors-manager.tsx`, `blog-index.tsx`, `about-manager.tsx`, `admin-gate.tsx`, `competitions-index.tsx`, `hero.tsx`, `notifications-manager.tsx`, `next`, `SiteLogo`, `gallery-manager.tsx`, `blog-manager.tsx`, `password-recovery-form.tsx`, `team-manager.tsx`, `admin-section.tsx`, `sponsors-preview.tsx`, `dependencies`, `activate-account-form.tsx`, `seasons-index.tsx`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Should `client.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `gallery-index.tsx`, `package.json`, `client.ts`, `robots-manager.tsx`, `publicPageMetadata`, `projects-manager.tsx`, `sponsors-manager.tsx`, `blog-index.tsx`, `about-manager.tsx`, `admin-gate.tsx`, `hero.tsx`, `public-metadata.ts`, `react`, `SiteLogo`, `getSupabasePublicConfig`, `blog-manager.tsx`, `password-recovery-form.tsx`, `team-manager.tsx`, `admin-section.tsx`, `sponsors-preview.tsx`, `dependencies`, `activate-account-form.tsx`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Should `deploy-pages.yml` be split into smaller, more focused modules?**
  _Cohesion score 0.05873015873015873 - nodes in this community are weakly interconnected._
- **Should `robots-manager.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10745098039215686 - nodes in this community are weakly interconnected._
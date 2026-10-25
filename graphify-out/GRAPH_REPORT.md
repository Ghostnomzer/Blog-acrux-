# Graph Report - Blog-acrux  (2026-10-25)

## Corpus Check
- 160 files · ~70,970 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .example 1, (none) 1, .css 1)

## Summary
- 973 nodes · 2364 edges · 48 communities (37 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9ce98d8f`
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
- competitions-manager.tsx
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
- Correções da auditoria de 2 de outubro de 2026
- next
- createSupabaseBrowserClient
- ArrowLink
- SiteLogo
- gallery-manager.tsx
- about-preview.tsx
- blog-manager.tsx
- password-recovery-form.tsx
- team-manager.tsx
- save-post.test.sql
- Notificações privadas de conteúdo
- content-notification-mail/deno.json

## God Nodes (most connected - your core abstractions)
1. `createSupabaseBrowserClient()` - 122 edges
2. `react` - 57 edges
3. `next` - 47 edges
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

## Communities (48 total, 11 thin omitted)

### Community 0 - "gallery-index.tsx"
Cohesion: 0.14
Nodes (11): GalleryPage(), metadata, PlaceholderMedia(), PlaceholderMediaProps, GalleryImageRow, GalleryIndex(), loadGallery(), GalleryRow (+3 more)

### Community 1 - "team-index.tsx"
Cohesion: 0.23
Nodes (9): metadata, TeamPage(), TeamAreaRow, TeamIndex(), loadMembers(), TeamMemberRow, groupTeamMembers(), TeamArea (+1 more)

### Community 2 - "package.json"
Cohesion: 0.06
Nodes (39): compat, eslintConfig, dependencies, gsap@^3.13.0, motion@^12.23.24, next@^15.5.4, react@^19.1.1, react-dom@^19.1.1 (+31 more)

### Community 3 - "client.ts"
Cohesion: 0.05
Nodes (48): @supabase/supabase-js@^2.57.0, @supabase/supabase-js, ActivateAccountPage(), metadata, metadata, SeasonsPage(), ActivateAccountForm(), ActivationState (+40 more)

### Community 4 - "deploy-pages.yml"
Cohesion: 0.06
Nodes (35): env, runs-on, steps, concurrency, cancel-in-progress, group, environment, needs (+27 more)

### Community 5 - "robots-manager.tsx"
Cohesion: 0.08
Nodes (36): react, AdminSectionPage(), AdminSectionPageProps, dynamicParams, metadata, sections, metadata, ProjectsPage() (+28 more)

### Community 6 - "publicPageMetadata"
Cohesion: 0.09
Nodes (23): BlogPostPage(), BlogPostPageProps, dynamicParams, generateMetadata(), CompetitionDetailPage(), CompetitionDetailPageProps, dynamicParams, generateMetadata() (+15 more)

### Community 7 - "projects-manager.tsx"
Cohesion: 0.17
Nodes (22): uploadImages(), emptyProject(), projectCategories, ProjectDraft, projectPayload(), ProjectRow, projectToDraft(), ProjectForm() (+14 more)

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
Cohesion: 0.25
Nodes (7): ACRUX ROBOCEP — site oficial, Configuração local, Conteúdo pendente, Estrutura principal, Logo, Publicação no GitHub Pages e página 404, Stack

### Community 16 - "competitions-manager.tsx"
Cohesion: 0.22
Nodes (19): CompetitionForm(), CompetitionFormProps, CompetitionDraft, competitionError(), CompetitionRow, competitionToDraft(), editableAwards(), emptyCompetitionDraft() (+11 more)

### Community 17 - "quality"
Cohesion: 0.10
Nodes (20): jobs, quality, name, permissions, contents, branches, branches, name (+12 more)

### Community 18 - "blog-index.tsx"
Cohesion: 0.17
Nodes (15): BlogPage(), metadata, BlogIndex(), closePost(), loadPosts(), openPost(), updatePostUrl(), CategoryRow (+7 more)

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
Cohesion: 0.27
Nodes (9): gsap, metadata, NotFound(), animateAcruxConstellation(), NotFoundLogo(), branches, HeroConstellation(), stars (+1 more)

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
Cohesion: 0.24
Nodes (9): Supabase, dynamic, robots(), dynamic, sitemap(), siteConfig, copyPostLink(), PublicPageMetadataOptions (+1 more)

### Community 31 - "Correções da auditoria de 2 de outubro de 2026"
Cohesion: 0.40
Nodes (4): Banco e publicação, Comportamento corrigido, Correções da auditoria de 2 de outubro de 2026, Verificação

### Community 32 - "next"
Cohesion: 0.29
Nodes (7): nextConfig, next, AdminLoginPage(), metadata, LoginErrorNotice(), LoginForm(), handleSubmit()

### Community 33 - "createSupabaseBrowserClient"
Cohesion: 0.13
Nodes (23): CompetitionRelations(), changeRelation(), loadRelations(), ProjectRelations(), changeRelation(), loadRelations(), load(), RobotMembers() (+15 more)

### Community 34 - "ArrowLink"
Cohesion: 0.22
Nodes (17): Home(), metadata, ArrowLink(), ArrowLinkProps, HomePage(), AchievementsAndCompetitionPreview(), ClosingCta(), GalleryAndSponsorsPreview() (+9 more)

### Community 35 - "SiteLogo"
Cohesion: 0.20
Nodes (10): metadata, RootLayout(), RootLayoutProps, siteUrl, viewport, Footer(), Header(), SiteLogo() (+2 more)

### Community 36 - "gallery-manager.tsx"
Cohesion: 0.15
Nodes (18): useAdminConfirm(), emptyDraft, GalleryDraft, GalleryImageEditor(), deleteImage(), saveImage(), GalleryImageRow, GalleryManager() (+10 more)

### Community 37 - "about-preview.tsx"
Cohesion: 0.29
Nodes (7): motion, ScrollReveal(), ScrollRevealProps, PostImage(), PostImageProps, AboutPreview(), cn()

### Community 38 - "blog-manager.tsx"
Cohesion: 0.10
Nodes (30): useAdminDraftProtection(), BlogManager(), createCategory(), deletePost(), savePost(), selectDraft(), updateTitle(), CategoryRow (+22 more)

### Community 39 - "password-recovery-form.tsx"
Cohesion: 0.43
Nodes (5): metadata, PasswordRecoveryPage(), getActivationUrl(), PasswordRecoveryForm(), handleSubmit()

### Community 40 - "team-manager.tsx"
Cohesion: 0.12
Nodes (23): AdminConfirmationProvider(), AskConfirmation, ConfirmationContext, ConfirmationOptions, AdminDraftProtectionProvider(), AskConfirmation, DraftProtection, DraftProtectionContext (+15 more)

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

- **Why does `createSupabaseBrowserClient()` connect `createSupabaseBrowserClient` to `gallery-index.tsx`, `team-index.tsx`, `client.ts`, `robots-manager.tsx`, `projects-manager.tsx`, `admin-gate.tsx`, `competitions-manager.tsx`, `blog-index.tsx`, `about-manager.tsx`, `admin-gate.tsx`, `competitions-index.tsx`, `notifications-manager.tsx`, `next`, `ArrowLink`, `gallery-manager.tsx`, `about-preview.tsx`, `blog-manager.tsx`, `password-recovery-form.tsx`, `team-manager.tsx`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **Should `gallery-index.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14035087719298245 - nodes in this community are weakly interconnected._
- **Why does `react` connect `robots-manager.tsx` to `gallery-index.tsx`, `team-index.tsx`, `package.json`, `client.ts`, `publicPageMetadata`, `projects-manager.tsx`, `admin-gate.tsx`, `competitions-manager.tsx`, `blog-index.tsx`, `about-manager.tsx`, `admin-gate.tsx`, `competitions-index.tsx`, `hero.tsx`, `notifications-manager.tsx`, `next`, `ArrowLink`, `SiteLogo`, `gallery-manager.tsx`, `about-preview.tsx`, `blog-manager.tsx`, `password-recovery-form.tsx`, `team-manager.tsx`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.058693244739756366 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `gallery-index.tsx`, `package.json`, `SiteLogo`, `client.ts`, `robots-manager.tsx`, `publicPageMetadata`, `password-recovery-form.tsx`, `team-manager.tsx`, `ArrowLink`, `blog-manager.tsx`, `projects-manager.tsx`, `about-preview.tsx`, `competitions-manager.tsx`, `blog-index.tsx`, `about-manager.tsx`, `admin-gate.tsx`, `hero.tsx`, `public-metadata.ts`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Should `client.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05370843989769821 - nodes in this community are weakly interconnected._
- **Should `deploy-pages.yml` be split into smaller, more focused modules?**
  _Cohesion score 0.05873015873015873 - nodes in this community are weakly interconnected._
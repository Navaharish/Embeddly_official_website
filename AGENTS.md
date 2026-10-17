<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Define website colours through semantic tokens in `src/styles.css`, and use shared Button variants for calls to action; this keeps the visual system consistent across all pages.
- Keep the reusable trainer profile in a shared component used by Home and Training Program; this keeps credentials and profile navigation identical in both places.
- Derive sitemap URLs from the router using required staticData.sitemap decisions; exclude private subtrees and omit lastmod without authoritative page-specific timestamps so discovery stays accurate as routes change.

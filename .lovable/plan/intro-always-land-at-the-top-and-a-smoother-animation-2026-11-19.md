# Intro: always land at the top, and a smoother animation

## Why it opens mid-page
Two things push the page down while the intro is playing:
1. **Remembered scroll position.** The site is set to bring back your last scroll position when you reload. If you were halfway down the page, the intro plays on top of that spot, and when it ends you are still there.
2. **Section links in the address.** Your preview address is `/#engage`. A link like that jumps straight to the Engage section, behind the intro.

The page underneath can also be scrolled with the mouse wheel while the intro is playing, because nothing locks it.

## Fix
- When the intro starts, jump the page to the very top and take the `#section` part out of the address.
- Lock scrolling while the intro plays, and unlock it the moment it ends or is skipped.
- When the intro ends, check the page is still at the top before showing it.
- Return visits (no intro) keep working as they do now, so section links like `/#engage` still open the right section.

## Making the animation better (same steps, same text, same ~17s)
- **Smooth hand-over between chapters:** the old chapter slides up and fades out while the new one comes in, so the screen never goes blank or jumps.
- **Progress bar fills over time:** the active stage bar at the bottom fills from left to right over the chapter's length, so visitors can see how long is left.
- **Key phrase stands out:** the coral phrase gets a soft underline that draws in after the sentence appears.
- **Cleaner ending:** the header fades in just before the name docks into it, so the name lands on the real header and doesn't pop.
- **Respect reduced-motion settings:** visitors who have turned motion down on their device skip straight to the homepage.

## Technical details
- `IntroAnimation.tsx`, on start: `history.replaceState` without the hash, `window.scrollTo(0, 0)`, and `document.documentElement.style.overflow = "hidden"`. In `finish()` and on unmount, restore the overflow and call `scrollTo(0, 0)` again before removing the overlay.
- Router `scrollRestoration` stays as it is, so other pages are not affected.
- Chapter exit: keep the previous chapter mounted for about 250ms with a fade-up exit class.
- Tracker: the active bar gets a `scaleX` fill animation lasting `chapterMs(step)`.
- Header reveal: on step 7, remove `data-intro-playing` early with a new `onReveal` callback.
- Reduced motion: check `matchMedia("(prefers-reduced-motion: reduce)")` alongside the existing phone check.
- Update `src/test/intro-controls.test.tsx` with a test that the page is at the top and scrolling is unlocked after the intro finishes.

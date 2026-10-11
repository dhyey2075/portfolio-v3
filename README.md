# dhyeyparekh.in

**Live:** [dhyeyparekh.in](https://dhyeyparekh.in)

<!-- demo clip: add docs/demo.gif (5–10 s of the drop-in and a rail ride) and uncomment
![The skater drops onto the rail and rides to the projects](docs/demo.gif)
-->

This is my portfolio, and you don't scroll through it so much as ride it. A skater rolls in, writes my name on the way past, drifts to a stop and drops onto the scrollbar. From there you can grab the skater and grind through my work, one checkpoint at a time, to a course-clear finish.

## Why a skate run

The whole site is a 90s skate zine. Paper, thick ink outlines, pink, acid yellow and blue, and type that looks
cut out and taped down. Projects are skate decks, each with its own cover art, that flip over to show what I built.
Skills are wheels, rated in durometer, the hardness scale skaters use: 99A is what I use every day, 92A is what I've
shipped, 84A is what I've built with. Experience is a run log, achievements are trading cards in a ring binder, and
the contact section is the finish line.

## Drawn in code

Every graphic is code. The skater, the deck covers, the wheels, the binder, even the clouds and the favicon are
SVG and CSS, so everything shares one hand. The skater is layered SVG parts posed by a small rig: joints, springs,
feet that stay planted, eyes that follow your pointer. No animation library, just one loop that runs the
choreography.

## About me

I'm Dhyey Parekh, a software engineer and Mathematics and Computing student at DAIICT. I build reliable backends,
AI-powered products, and full-stack systems — from Adaptive RAG platforms to real-time ride booking and logistics ERPs.

I'm open to software engineering, backend, full-stack and AI roles.

- Site: [dhyeyparekh.in](https://dhyeyparekh.in)
- LinkedIn: [dhyey2075](https://www.linkedin.com/in/dhyey2075/)
- X: [@dhyey2075](https://x.com/dhyey2075)
- Email: dhyeyhparekh@gmail.com

## Under the hood

Next.js (static export), TypeScript, Lenis for smooth scrolling and plain CSS modules. Everything the page says lives
in `src/config`, the ride engine lives in `src/features/ride`, and the whole site ships as static files.

To run it: `npm install`, then `npm run dev` (Node 22+). How it's put together, and where to change things, is in
[docs/development.md](docs/development.md).

## License and credits

The source code is [MIT](LICENSE). Site content and personal branding are © Dhyey Parekh.

Original skate-run design, rider character art and visual system by [Raghav Goel](https://raghavgoel.in) — used with permission. Thank you, Raghav.

- Issuer logos (e.g. Microsoft): [Simple Icons](https://simpleicons.org) (CC0). Company names and logos are trademarks of their owners.
- Bowlby One by Vernon Adams, [SIL Open Font License](src/assets/fonts/OFL-BowlbyOne.txt).

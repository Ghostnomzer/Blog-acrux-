import gsap from "gsap";

/** The shared entrance sequence used by the home page and the 404 logo. */
export function animateAcruxConstellation(scope: HTMLElement) {
  const lines = scope.querySelectorAll<SVGPathElement>(".acrux-constellation-line");
  const nodes = scope.querySelectorAll<SVGCircleElement>(".acrux-constellation-node");
  const stars = scope.querySelectorAll<SVGPathElement>(".acrux-constellation-star");

  lines.forEach((path) => {
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
  });

  return gsap.timeline({ defaults: { ease: "power3.out" } })
    .fromTo(nodes, { opacity: 0, scale: 0.3, transformOrigin: "50% 50%" }, { opacity: 1, scale: 1, duration: 0.35, stagger: 0.06 }, 0)
    .to(lines, { strokeDashoffset: 0, duration: 1.05, stagger: 0.18, ease: "power2.inOut" }, 0.2)
    .fromTo(stars, { opacity: 0, scale: 0.4, transformOrigin: "50% 50%" }, { opacity: 1, scale: 1, duration: 0.45, stagger: 0.09 }, 1.05);
}

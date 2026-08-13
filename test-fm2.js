import { transform, cubicBezier } from 'framer-motion';

const ease = cubicBezier(0.61, 1, 0.88, 1);
try {
  const result = transform(0.8, [0, 0.55, 1], [0, 0, 1], { ease: [ease, ease] });
  console.log("Result:", result);
} catch (e) {
  console.error("Error:", e);
}

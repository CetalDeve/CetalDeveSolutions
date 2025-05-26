// Custom image loader for static export
export default function imageLoader({ src }) {
  // For static export, just return the original src without any optimization
  return src;
}

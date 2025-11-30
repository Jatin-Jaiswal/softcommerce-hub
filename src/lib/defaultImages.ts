export function getCategoryImage(slug?: string | null) {
  if (!slug) return null;

  const key = slug.toString().toLowerCase();

  // Using Unsplash random photo URLs with specific search terms
  // Format: https://images.unsplash.com/photo-{id}?w=1200&h=900&fit=crop
  // Or use: https://unsplash.com/photos/{width}x{height}/?{query}
  const map: Record<string, string> = {
    electronics: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=900&fit=crop',
    fashion: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=900&fit=crop',
    'home-and-living': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=900&fit=crop',
    'home_living': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=900&fit=crop',
    'home & living': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=900&fit=crop',
    'home': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=900&fit=crop',
    beauty: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=900&fit=crop',
    sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=900&fit=crop',
    'home-living': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=900&fit=crop',
  };

  // Try direct match
  if (map[key]) return map[key];

  // Fallback: return a generic image
  return 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=900&fit=crop';
}

export default getCategoryImage;

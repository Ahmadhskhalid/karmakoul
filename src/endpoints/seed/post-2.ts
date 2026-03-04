import { RequiredDataFromCollectionSlug } from 'payload'
import type { PostArgs } from './post-1'

export const post2: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'premium-olive-oil',
    _status: 'published',
    authors: [author],
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Extra virgin olive oil of Mediterranean heritage — pure, aromatic, and full of character. The gold standard for kitchens and retailers worldwide.', version: 1 }],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'heading',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'The Karmakoul Olive Oil Difference', version: 1 }],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'paragraph',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Sourced from carefully selected Mediterranean groves with centuries of olive cultivation heritage, Karmakoul\'s premium olive oil is cold-pressed within hours of harvest to preserve maximum polyphenols, antioxidants, and that distinctive fresh flavour. We partner exclusively with producers who hold international organic certification, ensuring every bottle meets the strictest standards of purity and quality.', version: 1 }],
            direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
          },
          {
            type: 'block',
            fields: { blockName: '', blockType: 'mediaBlock', media: blockImage.id },
            format: '', version: 2,
          },
          {
            type: 'heading',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Health Benefits & Culinary Excellence', version: 1 }],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'paragraph',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Extra virgin olive oil is widely recognised as one of the world\'s healthiest fats. Rich in oleic acid and powerful antioxidants, it supports cardiovascular health, reduces inflammation, and has been a cornerstone of Mediterranean diets for thousands of years. For chefs and home cooks alike, its complex flavour profile — from grassy and peppery to fruity and smooth — elevates every dish it touches.', version: 1 }],
            direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
          },
          {
            type: 'heading',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Supply Chain & Packaging', version: 1 }],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'paragraph',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'We supply olive oil in bulk (IBC tanks, drums) and retail-ready formats (glass and PET bottles with custom labelling options). Whether you are a supermarket, specialty food retailer, or food service operator, Karmakoul can tailor supply volumes and packaging to your exact commercial requirements. Competitive pricing is available year-round through our strategic producer partnerships.', version: 1 }],
            direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
          },
        ],
        direction: 'ltr', format: '', indent: 0, version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description: 'Karmakoul premium extra virgin olive oil — cold-pressed, organically certified, and sourced from the finest Mediterranean groves for global supply.',
      image: heroImage.id,
      title: 'Premium Olive Oil | Karmakoul',
    },
    relatedPosts: [],
    title: 'Premium Olive Oil: Mediterranean Heritage, Global Standard',
  }
}

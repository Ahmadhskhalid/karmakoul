import type { Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  heroImage: Media
  blockImage: Media
  author: User
}

export const post1: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'sudanese-sesame-seeds',
    _status: 'published',
    authors: [author],
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Grown under the African sun, our Sudanese sesame seeds are nature\'s powerhouse — rich in minerals, vitamins, and that unmistakable nutty flavour.', version: 1 }],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'heading',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Why Sudanese Sesame?', version: 1 }],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'paragraph',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Sudan is among the world\'s largest producers of high-grade sesame seeds, and for good reason. The unique combination of fertile Nile Valley soil, abundant sunshine, and traditional farming practices produces sesame seeds of exceptional purity and flavour. At Karmakoul, we work directly with certified organic farmers to source only the finest white and brown sesame varieties, ensuring full traceability from field to delivery.', version: 1 }],
            direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
          },
          {
            type: 'block',
            fields: { blockName: '', blockType: 'mediaBlock', media: blockImage.id },
            format: '', version: 2,
          },
          {
            type: 'heading',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Nutritional Powerhouse', version: 1 }],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'paragraph',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Sesame seeds are one of the oldest oilseed crops known to humanity. Packed with calcium, iron, magnesium, zinc, and essential fatty acids, they are a true superfood for both culinary and health applications. Our seeds are ideal for bakeries, food manufacturers, tahini producers, and retailers seeking a premium, consistently graded product.', version: 1 }],
            direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
          },
          {
            type: 'heading',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Our Quality Standards', version: 1 }],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'paragraph',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Every batch of Karmakoul sesame seeds is lab-tested for moisture content, purity levels, and absence of contaminants, meeting EU, UK, and international food safety standards. We supply in flexible quantities — from sample orders to full container loads — making us the ideal partner for businesses of all sizes.', version: 1 }],
            direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
          },
        ],
        direction: 'ltr', format: '', indent: 0, version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description: 'Discover Karmakoul\'s premium Sudanese sesame seeds — organically grown, lab-tested, and sustainably sourced for global food manufacturers and retailers.',
      image: heroImage.id,
      title: 'Sudanese Sesame Seeds | Karmakoul',
    },
    relatedPosts: [],
    title: 'Sudanese Sesame Seeds: From African Fields to Global Tables',
  }
}

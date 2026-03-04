import { RequiredDataFromCollectionSlug } from 'payload'
import type { PostArgs } from './post-1'

export const post3: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: 'the-sesame-project',
    _status: 'published',
    authors: [author],
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'The Sesame Project: Building a sustainable supply chain from Sudanese farms to global markets — one harvest at a time.', version: 1 }],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'heading',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'What is The Sesame Project?', version: 1 }],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'paragraph',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'The Sesame Project is Karmakoul\'s flagship sustainability and traceability initiative, designed to create direct, long-term relationships between Sudanese sesame farmers and global buyers. Launched to address the opacity that plagues commodity supply chains, the project provides full farm-to-port visibility, ensuring every kilogram of sesame we export can be traced back to a named, certified producer.', version: 1 }],
            direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
          },
          {
            type: 'block',
            fields: { blockName: '', blockType: 'mediaBlock', media: blockImage.id },
            format: '', version: 2,
          },
          {
            type: 'heading',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Impact on Farming Communities', version: 1 }],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'paragraph',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'By cutting out intermediaries and paying fair prices directly to farmers, The Sesame Project is improving livelihoods across rural Sudan. Participating farmers receive training in organic cultivation techniques, access to better seeds, and guaranteed purchase agreements — providing the income stability needed to invest in their land and communities. Since its inception, the project has engaged over 200 smallholder farming families.', version: 1 }],
            direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
          },
          {
            type: 'heading',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Sustainability at Every Step', version: 1 }],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'paragraph',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'The Sesame Project operates on three core principles: environmental sustainability through organic farming, social sustainability through fair trade pricing, and economic sustainability through stable long-term contracts. We are working towards full Fairtrade and Rainforest Alliance certifications for all project participants. For buyers, this means not just a premium product, but a verifiable ESG story they can share with their own customers.', version: 1 }],
            direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
          },
          {
            type: 'heading',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Get Involved', version: 1 }],
            direction: 'ltr', format: '', indent: 0, tag: 'h2', version: 1,
          },
          {
            type: 'paragraph',
            children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Whether you are a buyer seeking ethically sourced sesame, an investor interested in sustainable agriculture, or an NGO aligned with our mission — we welcome partnerships that share our vision. Contact us to learn how you can be part of The Sesame Project and help build a better, more transparent food supply chain.', version: 1 }],
            direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
          },
        ],
        direction: 'ltr', format: '', indent: 0, version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description: 'The Sesame Project by Karmakoul — a sustainability initiative connecting Sudanese sesame farmers directly with global buyers through fair trade and full traceability.',
      image: heroImage.id,
      title: 'The Sesame Project | Karmakoul',
    },
    relatedPosts: [],
    title: 'The Sesame Project: Sustainable Sourcing from Sudan',
  }
}

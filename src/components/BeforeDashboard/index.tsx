import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'
import { SeedButton } from './SeedButton'
import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>? Welcome to the Karmakoul CMS</h4>
      </Banner>
      <strong>From fields to tables, Sustainably yours.</strong>
      <ul className={`${baseClass}__instructions`}>
        <li>
          <SeedButton />
          {' to populate the site with demo content, then '}
          <a href="/" target="_blank">visit your website</a>
          {' to preview it.'}
        </li>
        <li>
          {'Manage your '}
          <strong>Pages, Posts, Products, Media</strong>
          {' collections from the sidebar. Add new content at any time.'}
        </li>
        <li>
          {'Update the '}
          <strong>Header</strong>
          {' and '}
          <strong>Footer</strong>
          {' globals to manage navigation links across the site.'}
        </li>
        <li>
          Push changes to GitHub to trigger an automatic Vercel redeployment.
        </li>
      </ul>
    </div>
  )
}

export default BeforeDashboard
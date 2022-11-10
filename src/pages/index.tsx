import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import CmsComponent from '@/cms/components/CmsComponent/CmsComponent'
import { getPage } from '@/cms/operations/get-page'
import { FullWidthLayout } from '@/components/layout'
import getCategoryTree from '@/lib/api/operations/get-category-tree'
import type { CategoryTreeResponse, NextPageWithLayout } from '@/lib/types'

import type { GetServerSidePropsContext } from 'next'

interface HomePageProps {
  cmsPage: any
  preview?: boolean
}
const getCmsHomePageData = async ({ preview }: { preview?: boolean }) => {
  const cmsPage = await getPage({
    entryUrl: '',
    preview,
  })
  return cmsPage
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { locale, preview = false } = context
  const categoriesTree: CategoryTreeResponse = await getCategoryTree()

  const cmsPage = await getCmsHomePageData({ preview })
  return {
    props: {
      categoriesTree,
      cmsPage,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}

const Home: NextPageWithLayout<HomePageProps> = (props) => {
  const { cmsPage } = props

  return (
    <>
      {cmsPage?.components?.map((data: any) => (
        <CmsComponent key={Object.keys(data)[0]} content={data} />
      ))}
    </>
  )
}

Home.getLayout = FullWidthLayout

export default Home

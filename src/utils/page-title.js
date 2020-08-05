import defaultSetting from '@/setting'

const title = defaultSetting.title || 'Vue Template'

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

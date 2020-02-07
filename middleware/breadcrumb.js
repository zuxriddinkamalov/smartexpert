import { SET_BREAD_CRUMB } from '~/store/modules/general/mutations'

const filterBreadCrumbs = (route) => {
  if (route.breadcrumb) {
    return true
  }
}
const getBreadCrumbs = (route) => ({ title: route.breadcrumb })

export default ({ route, store }) => {
  const breadcrumb = route.meta.filter(filterBreadCrumbs).map(getBreadCrumbs)
  store.commit(SET_BREAD_CRUMB, breadcrumb)
}

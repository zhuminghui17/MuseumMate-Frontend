// import icons from './config/icons.config'
// import User from './model/admin/User'

export enum ScreenPath {
    HOME = '/',
    EXPLORE = '/explore', 
    MUSEUMS = '/museums',
    SAVED = '/saved',
    ACCOUNT = '/account',
    VISITS = '/visits',
}

export function getHomeScreenPath(): ScreenPath {
//   if (user.roleIDs.some((roleID) => roleID.includes('filene'))) {
//     return ScreenPath.exploreMemberVoice
//   }
  return ScreenPath.EXPLORE
}

// export const authPages = [
//   ScreenPath.login,
//   ScreenPath.forgotPassword,
//   ScreenPath.resetPassword,
//   ScreenPath.verifyAccount,
// ]

export interface NavigationPage {
  label: string
  path: ScreenPath
//   icon?: React.ReactNode
  action?: () => void
//   requiredPermissions?: string[]
//   activationPermissions?: string[]
}

export const navigationPages: NavigationPage[] = [
  {
    label: 'Explore',
    path: ScreenPath.EXPLORE,
    // icon: <Icon icon={icons.explore} width={16} />,
    // requiredPermissions: ['view-explore-screen'],
  },
  {
    label: 'Museums',
    path: ScreenPath.MUSEUMS,
    // icon: <Icon icon={icons.opportunity} width={16} />,
    // requiredPermissions: ['view-opportunities-screen'],
  },
  {
    label: 'Visits',
    path: ScreenPath.VISITS,
  },
  {
    label: 'Saved',
    path: ScreenPath.SAVED,
  },
  {
    label: 'Account',
    path: ScreenPath.ACCOUNT,
  },
]

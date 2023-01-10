export interface IProfileMenu {
    uri: string
    name: string
  }


export function profileOptions() {
    const profileMenu: IProfileMenu[] = [
        {
            uri: '/profile',
            name: 'Profil'
        },
        {
            uri: '/profile/discounts',
            name: 'Rabaty'
        },
        {
            uri: '/profile/addresses',
            name: 'Adresy'
        },
        {
            uri: '/profile/orders',
            name: 'Zamówienia'
        },
        {
            uri: '/profile/returns',
            name: 'Zwroty'
        }
    ]

    return profileMenu;
}

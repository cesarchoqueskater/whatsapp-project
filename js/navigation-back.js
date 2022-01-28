import { showLayout, hideLayout } from './showHideLayout.js'

const navigationBack = document.querySelector('.navigation-back')

navigationBack.addEventListener('click', navigationBackLayout)

export function navigationBackLayout() {
    console.log('Click en Navegar Atras')
    hideLayout()
}
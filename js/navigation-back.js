import { showLayout, hideLayout } from './showHideLayout.js'

const navigationBack = document.querySelector('.navigation-back')

navigationBack.addEventListener('click', navigationBackLayout)

// Navigation to back - mobile
export function navigationBackLayout() {
    console.log('Click en Navegar Atras')
    hideLayout()
}